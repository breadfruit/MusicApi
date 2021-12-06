const router = require("koa-router")();
const SongDetailController = require("@controller/song_detail");

router.prefix("/api/song_detail");

//添加当前歌曲到我的喜欢
router.get("/addtolike", SongDetailController.addToLike);




module.exports = router;
