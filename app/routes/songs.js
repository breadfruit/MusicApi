const router = require("koa-router")();
const SongsController = require("@controller/songs");

router.prefix("/api/songs");

//查看用户在线收藏歌单
router.get("/getnetsongs", SongsController.getNetSongs);

//查看用户离线收藏歌单
router.get("/getsongs", SongsController.getSongs);

//添加当前为用户收藏歌单
router.get("/createsongs", SongsController.createSongs)

//删除用户收藏的歌单
router.get("/deletesongs", SongsController.deleteSongs)


//查看用户喜欢的歌单
router.get("/ownerlike", SongsController.OwnerLike)


//删除用户喜欢中的歌曲
router.get("/ownerunlike", SongsController.OwnerUnlike)




module.exports = router;
