let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../app');
const mysql = require('mysql2');

describe('/GET', () => {
    it('it should load the index page', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                (res).should.have.status(200);
                (res.body).should.be.a('object');
                done();
            })
    })
})

describe('Test database connection', () => {
    describe('#fail', function () {
        it('should return -1 because of wrong credentials', function (done) {
            var connection = mysql.createConnection({
                host: 'right host',
                user: 'wrong user',
                password: 'wrong password',
                database: 'right database'
            });
            connection.connect(done());
        });
    });

    it('should successfully connect to the database', async () => {
        var sql;

        var Sequelize = require('sequelize');

        sql = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect: "mysql"
        })

        try {
            var test = await sql.authenticate()
            console.log("successfully connected to the database!");
        }
        catch (e) {
            console.log("connection to the database failed: " + e.message);
            throw e;
        }
    });
})