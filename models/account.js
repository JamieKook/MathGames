module.exports = function(sequelize, DataTypes){
    const Account = sequelize.define("Account", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [8, 64]
            }   
        },
        favoriteAnimal: {
            type: DataTypes.STRING,
            defaultValue: "Celebration",
        },
        favoriteColor: {
            type: DataTypes.STRING,
            defaultValue: "Green",
        },
        counters: {
            type: DataTypes.STRING,
            defaultValue: "Stars",
        }

    }); 
    return Account;
}; 