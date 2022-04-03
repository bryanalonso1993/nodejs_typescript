import connection from '../connection';
import { Model, DataTypes } from 'sequelize';

interface AttributesSalaries extends Model{
    id: number,
    salary: number,
    name: string
}

const Salaries = connection.define<AttributesSalaries>("Salaries", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true
    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
    }
},{
    freezeTableName: true,
});

export default Salaries;
