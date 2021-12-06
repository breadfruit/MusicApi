
const { Sequelize, Model } = require('sequelize');


  module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: "主键id",
        },
        nickname: {
            type: Sequelize.STRING(50),
            comment: "用户昵称",
        },
        user_id: {
            type: Sequelize.STRING(50),
            allowNull: false,
            comment: "用户ID",
        },
        gender: {
            type: Sequelize.INTEGER(10),
            allowNull: true,
            unique: true,
            comment: "用户性别",
        },
        avatar_url: {
            type: Sequelize.STRING(100),
            allowNull: false,
            comment: "用户头像地址",
        },
        background_url: {
            type: Sequelize.STRING(100),
            allowNull: true,
            comment: "用户背景图片地址",
        },
        account_type: {
            type: Sequelize.STRING(50),
            comment: "用户类型",
        },
        birthday: {
            type: Sequelize.STRING(100),
            allowNull: true,
            comment: "用户生日",
        },
        signature: {
            type: Sequelize.STRING(200),
            allowNull: true,
            comment: '个性签名'
        },
        city: {
            type: Sequelize.STRING(100),
            allowNull: true,
            comment: '城市'
        },
        follows:{
            type: Sequelize.STRING(100),
            allowNull: true,
            comment: '用户关注',
        }, 
        followeds: {
            type: Sequelize.STRING(100),
            allowNull: true,
            comment: '用户粉丝',
        },
    },{
        timestamps: false,
    })
  
    User.associate = models => {
        User.belongsTo(models.songs_detail, {
            foreignKey: 'songsCollection_id',
            
        })
        
    }
  
    return User
  }
  