import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";

class Cliente extends Model{ }
Cliente.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    fecha_nacimiento: DataTypes.DATEONLY
}, {
    sequelize,
    tableName: 'clientes',
    timestamps: false
});
export default Cliente;