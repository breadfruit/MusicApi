
const SongsModel = require("@models/songs_collection");
const axios = require('axios');
const host = 'http://localhost:4000'


//删除收藏的歌单
async function DeleteOwnerSongs(ctx) {
    ctx.success("删除收藏的歌单")
}

//查看在线收藏的歌单
async function OwnerNetLikeSongs(ctx) {
    ctx.success("查看在线收藏的歌单")
}


//查看离线收藏的歌单
async function OwnerLikeSongs(ctx) {
    ctx.success("查看离线收藏的歌单")
}

//添加收藏的歌单
async function AddOwnerLikeSongs(ctx) {
    ctx.success("添加收藏的歌单")
}


//查看用户喜欢的歌单
async function GetOwnerLikeSongs(ctx) {
    ctx.success("查看用户喜欢的歌单")
}

//删除用户喜欢中的歌曲

async function DeleteOwnerLikeSong(ctx) {
    ctx.success("删除用户喜欢中的歌曲")
}



module.exports = {
    DeleteOwnerSongs,
    OwnerNetLikeSongs,
    OwnerLikeSongs,
    AddOwnerLikeSongs,
    GetOwnerLikeSongs,
    DeleteOwnerLikeSong
}


