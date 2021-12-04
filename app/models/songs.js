//歌单

const { Sequelize, Model } = require('sequelize');


class songsModel extends Model { }

songsModel.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: "主键id",
        },
        cover_img_url: {
            type: Sequelize.STRING(100),
            allowNull: false,
            comment: "专辑图片地址",
        },
        name:{
            type: Sequelize.STRING(50),
            comment: "歌单名",
        },
        song_id: {
            type: Sequelize.STRING(50),
            comment: '歌单id'
        },
        creator_id: {
            type: Sequelize.STRING(50),
            comment: '创建者id'
        }
       
    },
    {
        sequelize: require("@core/db"),
        modelName: "songs",
        tableName: "songs",
    }
)

module.exports = songsModel;