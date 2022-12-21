const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define("posts", {

        title: {
            type: DataTypes.STRING,
            // allowNull: false
            allowNull: true
        },
        hot: {
            type: DataTypes.BOOLEAN,
            // allowNull: false
            allowNull: true
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 1

        },
        desc: {
            type: DataTypes.TEXT,
            // allowNull: false
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            // allowNull: false
            allowNull: true
        },

        totalParticipant: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 5
        }
        ,
        date: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 30
        }
        ,
        totalMoney: {
            type: DataTypes.DOUBLE,
            allowNull: true,
            defaultValue: 30
        }
        ,
        // myColData: {
        //     type: DataTypes.TEXT,
        //     get: function () {
        //         return JSON.parse(this.getDataValue("myColData") || "[]");
        //     },
        //     set: function (value) {
        //         return this.setDataValue("myColData", JSON.stringify(value));
        //     },
        //     // defaultValue: [1],
        //     allowNull: true,

        // }

    }, {
        timestamps: true //ko render createdAt and updatedAt
    }
    )

    return Post

}