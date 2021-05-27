# BE-Stephen_Mutebi_0719770198
## **Getting Started**
- Clone the project and navigate into the project's root folder inside a terminal

    ```shell
    $ git clone https://github.com/StphnLwnga/BE-Stephen_Mutebi_0719770198.git
    ```
    ```shell
    $ cd BE-Stephen_Mutebi_0719770198
    ```

-  Install the necessary node modules

    ```shell
    $ npm install
    ```


## **Setting up**
- Import the database **`node_app.sql`** from the project root.

- Create a **`.env`** file in the project root and define the following variables

    ```s
    PORT=3000
    DB_HOST=
    DB_USER=
    DB_PASSWORD=
    DB_PORT=
    DB_DATABASE=
    DB_DIALECT=mysql
    DB_POOL_MAX=5
    DB_POOL_MIN=0
    DB_POOL_IDLE=30000
    DB_POOL_ACQ=10000
    ```

- Start the app with the following command

    ```shell
    $ npm start
    ```
- Open the app at **[localhost:3000](http://127.0.0.1:3000)**


