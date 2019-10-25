// pages/fullBackUp/fullBackUp.js
const basePath = require('../../utils/config.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
  list:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const ids=options.id;
    wx.showLoading({
      title: '正在加载',
    })
    const _this=this;
    wx.request({
      url: '' + basePath +'/garbage/Index/baike',
      method:"post",
      data:{id:ids},
      success(res){
      setTimeout(function(){
        wx.hideLoading()
      },500)
       _this.setData({list:res.data.data});
        wx.setNavigationBarTitle({
          title:_this.data.list.title
        })
      },
      fail(res){
        console.log(res)
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