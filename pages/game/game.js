// pages/game/game.js
const basePath=require("../../utils/config.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    game1Img: "" + basePath +"/image/garbage/duixing01.png",
    game2Img: "" + basePath + "/image/garbage/duixing02.png",
    game4Img: "" + basePath +"/image/garbage/duixing03.png",
    backImg:  "/static/images/back.png",
    gameUpImg: "/static/images/game-up.png",
    listItem:[],
    encryptedData:"",
    iv:"",
    count:""//总步数
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function (options){
    const openid=wx.getStorageSync("openid");
    wx.showLoading({title:'正在加载'})
    const _this=this;
    wx.request({
      url: '' + basePath +'/garbage/Index/ranking',
      method:"post",
      data:{openid},
      success(res){
       _this.setData({
         listItem:res.data.data,
         count:res.data.data.count
         });
         console.log(res.data.data);
        setTimeout(function(){wx.hideLoading()},500);
      },
      fail(err){
       console.log(err)
      }
    })

    //获取用户微信运动步数
    wx.getSetting({
      success:res=>{
        //用户已经授权微信运动
        if (res.authSetting['scope.werun']){
           wx.getWeRunData({
             success(res){
               let encryptedData=res.encryptedData;
               let iv=res.iv;
               console.log(res);
             },
             fail(err){
               console.log(err)
             }
           })
        }else{
          //用户还没有授权
         wx.authorize({
           scope: 'scope.werun',
           success(res){
             wx.getWeRunData({})
           }
         })
        }
      }
    })


  },
  upload(e) {
  const openid = this.data.openids;
   wx.request({
     url: ''+basePath+'/garbage/Index/upranking',
     method:"post",
     data:{openid,distance:122},
     success(res){
     }
   })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
  //自定义返回按钮
  back(e) {
  wx.navigateBack({})
  },
  //点击海报
  getPoster(){
    const counts=this.data.count
    wx.navigateTo({url:"/pages/game/poster/poster?count="+counts+""})
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

  }
})