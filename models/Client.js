module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define("Client", {
        cliente:{
            type:DataTypes.STRING,
            allowNull: false,            
        },
        cnpj:{
            type:DataTypes.STRING,
            allowNull: false,            
        },
        telefone:{
            type:DataTypes.STRING,
            allowNull: false,            
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false,            
        },
        contato:{
            type:DataTypes.STRING,
            allowNull: false,            
        }
    });

    return Client;
};