
const SongsModel = require("@models/songs");
const axios = require('axios');
const host = 'http://localhost:4000'


//查看用户在线收藏歌单
async function getNetSongs(ctx) {
   const {uid} = ctx.params;


//    const songs = await SongsModel.findAndCountAll({
//         where: {
//             user_id: uid
//         },
//         paranoid: false,
//         attributes:["cover_img_url", 'user_id', 'gender', 'avatar_url', 'background_url', 'account_type', 'birthday','signature']
//    })

    //先从网易云获得数据，再同步数据库，再进行查询操作
   axios.get(`${host}/user/playlist?uid=${uid}`).then(data => {
        const res = data.playlist;
        if(res.length > 0) {
            res.map((item) => {
                const {
                    coverImgUrl,
                    name,
                    id,
                    playCount,
                    creator
                } = item
                const newsongs =  SongsModel.create({
                    cover_img_url:coverImgUrl,
                    name,
                    songs_id:id,
                    creator_id: creator.userId,
                    play_count: playCount
                }, {
                    attributes:["cover_img_url", 'name', 'songs_id', 'creator_id', 'play_count']
                })
                return newsongs
            })
        }
   })

}


//查看用户离线收藏歌单
async function getSongs(ctx) {
    ctx.success("查看用户离线收藏歌单")
}



//get 添加当前为用户收藏歌单
async function createSongs(ctx) {
    ctx.success("添加当前为用户收藏歌单")
}


//删除用户收藏的歌单
async  function deleteSongs(ctx) {
    ctx.success("删除用户收藏的歌单")
}

// //更新歌单

// // id:歌单id

// // name:歌单名字

// // desc:歌单描述

// // tags:歌单tag ,多个用 `;` 隔开,只能用官方规定标签

// async function updateSongs(ctx) {

// }

//查看用户喜欢的歌单
async function OwnerLike(ctx) {
    ctx.success("查看用户喜欢的歌单")
}


//删除用户喜欢中的歌曲
async function OwnerUnlike(ctx) {
    ctx.success("删除用户喜欢中的歌曲")
}

module.exports = {
    getNetSongs,
    getSongs,
    createSongs,
    deleteSongs,
    OwnerLike,
    OwnerUnlike  
}


