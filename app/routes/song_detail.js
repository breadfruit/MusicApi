const router = require("koa-router")();
const SongDetailController = require("@controller/song_detail");

router.prefix("/api/song_detail");

//获得用户歌单
router.get("/getsongdetail", SongDetailController.getSongDetail);


module.exports = router;
