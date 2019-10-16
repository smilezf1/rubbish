// pages/star/star.js
const basePath = require("../../utils/config.js");
const util=require("../../utils/util.js");
var app=getApp();
 let token = wx.getStorageSync("token");
let openid = wx.getStorageSync("openid");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    listItem: [],
    hasChange: false,
    praise1: "/static/images/praise1.png",
    authWindowHidden:true,
    nickName:"",
    avatar:"",
    openid:"",
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    app.getOpenid().then(res=>{
      if (res.status == 200) {
       _this.setData({
         openid:wx.getStorageSync('openid')
        });
      } else {
        console.log(res.data);
      }
    });
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // call getUserInfo, upload 
          wx.getUserInfo({
            success: res => {
              var rawData = JSON.parse(res.rawData);
              _this.updateUserInfo(openid, rawData.nickName, rawData.avatarUrl);  
            }
          });
        } else {
          console.log("用户已经获取了权限")
          // show auth window
          this.setData({
            authWindowHidden:false, 
          });
        }
      }});  
  },
  cancel(e){
    this.setData({
      authWindowHidden:true,
       shadeShow: true
      });
    console.log("用户取消授权");
  },
  sure(e){
    const _this=this;
    this.setData({
      authWindowHidden:true,
      shadeShow: true
       });
  },
  onGetUserInfo: function(res){
    const _this = this;
    var rawData = JSON.parse(res.detail.rawData);
    _this.updateUserInfo(openid, rawData.nickName, rawData.avatarUrl);
  },
  praise(e){
    const _this = this;
    let id = e.currentTarget.dataset.id;
    let index=e.currentTarget.dataset.index;
     let type = e.currentTarget.dataset.type;
    if(this.data.listItem[index]){
      let num = this.data.listItem[index].num;
       if(type==0){
         wx.request({
           url: '' + basePath + '/garbage/Index/giveAlike',
           method: "post",
           data:{
          token:wx.getStorageSync('token'),
           id},
           success(res) {
             const code = res.data.code;
             if(code==200){
               wx.showToast({title:'点赞成功',icon:"none" });
               _this.data.listItem[index].num = _this.data.listItem[index].num + 1;
               _this.setData({listItem:[..._this.data.listItem]});
             }
             if(code==301){
               console.log(_this.data.listItem);
               wx.showToast({title:'不能点赞', icon:"none" });
             }
           }, fail(err) {
             console.log(err)
           }
         });
       }
       if(type==1){
         wx.showToast({ title: '不可点赞', icon: "none" });
       };
    }
  },
  bb() {
    wx.chooseImage({
      success: function (res) {
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function(){
    const _this = this;
    wx.showLoading({title:'正在加载'})
    wx.request({
      url:''+basePath+'/garbage/Index/Week',
      method: "post",
      data: {page:1,psize:60, openid:wx.getStorageSync("openid")
      },
      success(res) {
        var data = res.data.data.model;
       data.forEach(function(v,i){
         v.createtime = util.timeago(new Date(v.createtime).getTime(),'Y年M月D日 h:m:s');
       })
        _this.setData({listItem:data});
        wx.hideLoading();
      }
    }) 
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  updateUserInfo: function(openid,nickname,avatar){
    wx.request({
      url: '' + basePath + '/garbage/Index/users',
      method: "post",
      data: {
        openid,
        nickname,
        avatar
      },
      success(res) {
        console.log(res)
      }, fail(err) {
        console.log(err)
      }
    })
  }
})