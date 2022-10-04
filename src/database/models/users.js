module.exports = (sequelize, DataTypes) => {

    //Definicion del modelo usuario

    const user = sequelize.define("users", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            allowNull: false,
            type: DataTypes.STRING
        },
       
        email: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING
        },
       
        password: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING
        },
       
    },
        {
            tableName: "users",
            paranoid: true,
            createdAt: 'createAt',
            updatedAt: 'modifiedAt'
        });

   
}