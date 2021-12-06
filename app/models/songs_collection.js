//用户喜欢的歌曲列表

const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    const songsCollection = sequelize.define('songs_collection', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: "主键id",
        },
        name: {
            type: Sequelize.STRING(100),
            allowNull: false,
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
        is_net: {
            type: Sequelize.BOOLEAN(10),
            comment: "是否在线收藏的歌单",  
        }
        // avatar_url: {
        //     type: Sequelize.STRING(100),
        //     allowNull: true,
        //     comment: "专辑图片",
        // },
    },{
        timestamps: false
    })

    songsCollection.associate = models => {
        songsCollection.belongsTo(models.user, {
            foreignKey: 'user_id'
        })
        songsCollection.belongsTo(models.songs, {
            foreignKey: 'songs_id'
        })
    }
    return songsCollection
}