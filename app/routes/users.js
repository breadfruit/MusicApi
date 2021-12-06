const router = require("koa-router")();
const UserController = require("@controller/user");

router.prefix("/api/user");

//用户注册
router.post("/resigternew", UserController.resigterNew);

//用户登录获取信息
router.post("/getuserinfo/:uid", UserController.getuserinfo);

//更改头像
router.post("/updateavatar",  UserController.updateAavatar)

//获取用户信息 , 歌单，收藏，mv, dj 数量

//更新用户信息

// gender: 性别 0:保密 1:男性 2:女性

// birthday: 出生日期,时间戳 unix timestamp

// nickname: 用户昵称

// province: 省份id

// city: 城市id

// signature：用户签名

router.post('/updateuser', UserController.updateUser)

//退出登录
router.get('/logout', UserController.logout)

module.exports = router;
