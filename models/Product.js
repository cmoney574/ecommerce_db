const {Model,DataTypes} = require('sequelize')

const sequelize = require('../config/connection')

class Product extends Model{}

Product.init({
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT(10,2)
    },
    instock: {
        type: DataTypes.BOOLEAN,
    }
},
{
    sequelize,
    timestamps: true,
    underscored: true,
    freezeTableName: true,
	modelName: 'user',
});

module.exports = Product;