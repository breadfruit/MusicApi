
const SongDetailModel = require("@models/song_detail");
const axios = require('axios');
const host = 'http://localhost:4000'




//添加当前歌曲到我的喜欢
async function addToLike(ctx) {
    ctx.success("添加当前歌曲到我的喜欢")
}


module.exports = {
    addToLike

}


