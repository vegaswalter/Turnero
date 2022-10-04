module.exports = (sequelize, DataTypes) => {

    //Definicion del modelo usuario

    const turnos = sequelize.define("orderly_turns", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        code: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
       
        box: {
            allowNull: false,
            unique: true,
            type: DataTypes.INTEGER
        },
       
       
    },
        {
            tableName: "orderly_turns",
            paranoid: true,
            createdAt: 'createAt',
            updatedAt: 'modifiedAt',
            deletedAt: 'softDelete'
        });

   
}