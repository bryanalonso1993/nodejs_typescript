import { Sequelize } from 'sequelize';

const connection = new Sequelize('node', 'node', 'node', {
    host: 'localhost',
    dialect: 'mariadb'
});

export default connection;
