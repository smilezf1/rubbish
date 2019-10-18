//app.js
const basePath=require("/utils/config.js");
const yy="";
App({
  onLaunch: function () {
    const _this = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
    _this.getOpenid();
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }else{
        }
      }
    })
    const openid = wx.getStorageSync("openid"); 
  },
  //测试
  getOpenid(){
    var _this = this;
    return new Promise(function (resolve, reject) {
      wx.login({
        success: function (res) {
          const code = res.code;
          // //code 获取用户信息的凭证
          if (res.code) {
            //请求获取用户openid
            wx.request({
              url: '' + basePath + '/garbage/Index/getOpenid',
              method:"post",
              data: {code:code},
              success: res => {
                const sessionKey = JSON.parse(res.data.data.model).session_key;
                const openids = JSON.parse(res.data.data.model).openid;
                wx.setStorageSync('openid',openids);
                wx.setStorageSync('sessionKey', sessionKey);
                _this.updateUserInfo(openids);
                var res = {status:200,data:openids}
                 resolve(res);
                 const yy=res.data;
                //获取密钥
                wx.request({
                  url: '' + basePath + '/garbage/Index/getToken',
                  method:"post",
                  data:{openid:yy},
                  success(res){
                    wx.setStorageSync("token", res.data.data.token);
                  }
                })
              },
              fail: res => { console.log(res) }
            });
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
            reject('error');
          }
        }
      })
    });
  },
  globalData: {
    userInfo:null,
    openid:"1"
  },
  updateUserInfo: function(openid){
    wx.request({
      url: '' + basePath + '/garbage/Index/users',
      method: "post",
      data: {
        openid
      },
      success(res) {
       
      }, fail(err) {
        console.log(err)
      }
    })
  }


  
})