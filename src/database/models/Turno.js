module.exports = (sequelize, DataTypes) => {

    //Definicion del modelo usuario

    const Turno = sequelize.define("orderly_turns", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        code: {
            allowNull: false,
            type: DataTypes.STRING
        },
       
        box: {
            allowNull: false,
            type: DataTypes.STRING
        },
       
       
    })
        // {
        //     tableName: "orderly_turns",
        //     paranoid: true,
        //     createdAt: 'createAt',
        //     updatedAt: 'modifiedAt',
        //     deletedAt: 'softDelete'
        // });

   return Turno
}