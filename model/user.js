const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("createStudent", {
    STUDENT_ID : {
        type : Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        unique : true,
        primaryKey : true
    },
    STUDENT_NAME: {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true

    },
    CONTACT_NUMBER : {
        type : Sequelize.BIGINT,
        allowNull : false,
    
        unique : true
    },
    CLASS : {
        type : Sequelize.STRING,
        allowNull : false,
        
    },
    CREATE_DATE_TIME : {
        type  : Sequelize.DATE,
        allowNull : false,

    }
}, {
    timestamps : false
});

module.exports = User;