const { Model, DataTypes } = require ('sequelize');
const sequelize = require ('../config/connections');

class Product extends Model {}

Product.init(
    {
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        product_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        manufacturer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        product_rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        seller_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'seller',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        modelName: 'product',
    }
);

module.exports = Product;