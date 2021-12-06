const router = require("koa-router")();
const SongsCollectionController = require("@controller/songs_collection");

router.prefix("/api/songs_collection");

//删除收藏的歌单
router.get("/deleteonwersongs", SongsCollectionController.DeleteOwnerSongs);

//查看在线收藏的歌单
router.get("/ownernetlikesongs", SongsCollectionController.OwnerNetLikeSongs);

//查看离线收藏的歌单
router.get("/ownerlikesongs", SongsCollectionController.OwnerLikeSongs);

//添加收藏的歌单
router.get("/addownerlikesongs", SongsCollectionController.AddOwnerLikeSongs);
//查看用户喜欢的歌单

router.get("/getownerlikesongs", SongsCollectionController.GetOwnerLikeSongs);
//删除用户喜欢中的歌曲

router.get("/deleteownerlikesong", SongsCollectionController.DeleteOwnerLikeSong);



module.exports = router;
