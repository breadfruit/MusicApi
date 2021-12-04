const router = require("koa-router")();
const SongsController = require("@controller/songs");

router.prefix("/api/songs");

//获得用户歌单
router.get("/getsongs", SongsController.getsongs);


module.exports = router;
