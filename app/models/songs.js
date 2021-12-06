//歌单

const { Sequelize, Model } = require('sequelize');


module.exports = (sequelize, dataTypes) => {
    const Songs = sequelize.define('songs', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: "主键id",
        },
        is_net: {
            type: Sequelize.BOOLEAN(10),
            allowNull: true,
            comment: "是否在线歌单",
        },
        net_songs_id: {
            type: Sequelize.STRING(50),
            allowNull: true,
            comment: "在线歌单id",
        },
        cover_img_url: {
            type: Sequelize.STRING(100),
            allowNull: false,
            comment: "专辑图片地址",
        },
        name:{
            type: Sequelize.STRING(50),
            allowNull: false,
            comment: "歌单名",
        },
       
        creator_id: {
            type: Sequelize.STRING(50),
            allowNull: false,
            comment: '创建者id'
        },
        play_count: {
            type: Sequelize.STRING(100),
            allowNull: false,
            comment: '播放数量'
        },
        tags: {
            type: Sequelize.STRING(200),
            allowNull: false,
            comment: '歌单标签'
        }
    }, {
        timestamps: false,
    })
    Songs.associate = models => {
        Songs.belongsTo(models.songs_detail, {
            foreignKey: 'song_id',
        })
        Songs.hasOne(models.songs_collection, {
            foreignKey: 'songs_id',
        })
        Songs.hasOne(models.songs_to_song, {
            foreignKey: 'songs_id',
        })
    }
    return Songs 
}