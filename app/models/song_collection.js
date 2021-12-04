//用户喜欢的歌曲

const { Sequelize, Model } = require('sequelize');


class songsCollectionModel extends Model { }

songsCollectionModel.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: "主键id",
        },
        user_id: {
            type: Sequelize.STRING(100),
            allowNull: false,
            comment: "用户的id",
        },
        song_id: {
            type: Sequelize.STRING(100),
            allowNull: false,
            comment: "喜欢的歌曲地址",
        }
    },
    {
        sequelize: require("@core/db"),
        modelName: "song_collection",
        tableName: "song_collection",
    }
)
    

module.exports = songsCollectionModel;