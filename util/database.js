const Sequelize = require("sequelize")

const sequelize = new Sequelize("mysra", "root", "Kumar@123", {
    dialect : "mysql",
    host : "localhost"
});

module.exports = sequelize;