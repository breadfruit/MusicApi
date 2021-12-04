const router = require("koa-router")();
const SongCollectionController = require("@controller/song_collection");

router.prefix("/api/song_collection");

//获得用户歌单
router.get("/getsongcollection", SongCollectionController.getSongCollection);




module.exports = router;
