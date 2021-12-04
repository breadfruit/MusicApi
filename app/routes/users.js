const router = require("koa-router")();
const UserController = require("@controller/user");

router.prefix("/api/user");

router.get("/getuserinfo/:uid", UserController.getuserinfo);


module.exports = router;
