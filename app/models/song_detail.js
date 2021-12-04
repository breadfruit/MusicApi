//歌曲详情
const { Sequelize, Model } = require('sequelize');


class SongDetailModel extends Model { }

SongDetailModel.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: "主键id",
        },
        name: {
            type: Sequelize.STRING(100),
            comment: "歌名",
        },
        song_id: {
            type: Sequelize.STRING(50),
            allowNull: false,
            comment: "歌曲id",
        },
        singer_name: {
            type: Sequelize.INTEGER(100),
            allowNull: true,
            unique: true,
            comment: "歌手",
        },
        avatar_url: {
            type: Sequelize.STRING(100),
            allowNull: false,
            comment: "专辑图片",
        },
    },
    {
        timestamps: false,
        sequelize: require("@core/db"),
        modelName: "song_detail",
        tableName: "song_detail",
    }
)

module.exports = SongDetailModel;