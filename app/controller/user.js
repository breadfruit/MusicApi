const bcrypt = require("bcryptjs");
const { getToken } = require("@core/jwt");
const { TestPhone } = require("@core/validator");
const UserModel = require("@models/user");
const axios = require('axios');
const host = 'http://localhost:4000'


//用户登录
async function getuserinfo(ctx) {
    console.log(ctx)
    const { uid } = ctx.params;

    //先查找没有就
    const user = await UserModel.findOne({
        where: {
            user_id: uid
        },
        paranoid: false,
        attributes:["nickname", 'user_id', 'gender', 'avatar_url', 'background_url', 'account_type', 'birthday','signature']
    });
    console.log('用户查询结果',user)
    if(!user) {
        //增加操作
        //利用网易云接口向后端发起请求，请求用户信息
        axios.get(`${host}/user/detail?uid=${uid}`).then((res) =>{
            const userobj = res.data.profile;
            const { 
                nickname,
                userId,
                gender,
                avatarUrl,
                backgroundUrl,
                accountType,
                birthday,
                signature,
                city,
                follows
            } = userobj
            const newuser = UserModel.create(
                { 
                    nickname,
                    user_id: userId,
                    gender,
                    avatar_url: avatarUrl,
                    background_url: backgroundUrl,
                    account_type: accountType,
                    birthday,
                    signature,
                    city,
                    follows
                },
                {
                    attributes:["nickname", 'user_id', 'gender', 'avatar_url', 'background_url', 'account_type', 'birthday','signature', 'city','follows']
                }
            );
        
            return newuser.id
        })
    }else {
        ctx.success("获取成功", user)
    }

}



//修改用户信息
async function UpdateUser() {
    
}


module.exports = {
    getuserinfo
}
