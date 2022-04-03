import connection from '../connection';
import { DataTypes, Model, Optional } from 'sequelize';

interface UserAttributes {
    id: number,
    name: string
}

interface UserCreationAttributes extends Optional<UserAttributes, "id">{}

interface UserInstance extends Model<UserAttributes, UserCreationAttributes> , UserAttributes{}

const Username = connection.define<UserInstance>("username", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
        type: DataTypes.STRING,
    }
},{
    freezeTableName: true,
});

export default Username;
