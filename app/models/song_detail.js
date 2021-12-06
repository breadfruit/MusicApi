//歌曲详情
const { Sequelize } = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    const songsDetail = sequelize.define('songs_detail', {
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
        avatar_url: {
            type: Sequelize.STRING(100),
            allowNull: true,
            comment: "专辑图片",
        },
        
    },
    {
        timestamps: false,
    })


    songsDetail.associate = models => {
        songsDetail.hasOne(models.user, {
            foreignKey: 'songsCollection_id',
        })
        songsDetail.hasOne(models.songs_to_song, {
            foreignKey: 'song_detail_id',
        })
        songsDetail.hasOne(models.songs, {
            foreignKey: 'song_id',
        })
    }
   
    return songsDetail
}

