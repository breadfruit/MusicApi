//歌单歌词表


const { Sequelize, Model } = require('sequelize');



module.exports = (sequelize, dataTypes) => {
    const SongsToSong = sequelize.define('songs_to_song', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: "主键id",
        },
    }, {
        timestamps: false,
    })
    SongsToSong.associate = models => {
        SongsToSong.belongsTo(models.songs_detail, {
            foreignKey: 'song_detail_id',
        })
        SongsToSong.belongsTo(models.songs, {
            foreignKey: 'songs_id',
        })
    }
    return SongsToSong;
}