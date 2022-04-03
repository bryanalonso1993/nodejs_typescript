import bodyParser from 'body-parser';
import express, { Express } from 'express';
import root from '../routes/main';
import cors from 'cors';
/**
 * Conexion Sequelize
 */
import connection from '../db/connection';
import dotenv from 'dotenv';
import '../db/models';

class Server {
    private app: Express;
    private port: string | undefined;
    constructor(){
        /**
         * Cargar primero las variables de entorno
         */
        this.enviroment();
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.db();
        this.router();
    }
    enviroment(){
        const valueEnv = dotenv.config( { path: './.env' } );
        if ( valueEnv.error ) { throw valueEnv.error }
    }
    db(){
        connection.sync()
            .then( () => console.log(`Running Sequelize ORM`))
            .catch( err => console.log(`Error Sequelize ORM ${err}`) )
    }
    middlewares(){
        this.app.use( cors() );
        this.app.use( bodyParser.json() );
        this.app.use( bodyParser.urlencoded({extended: true}) );
    }
    router(){
        this.app.use('/', root());
    }
    listen(){
        this.app.listen(this.port, () => console.log(`App running on port ${this.port}`));
    }
}

export default Server;
