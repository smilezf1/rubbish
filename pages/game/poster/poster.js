// pages/poster/poster.js
const basePath = require("../../../utils/config.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    backImg:"/static/images/back.png",
    game1Img:""+basePath+"/images/game1.png",
    game2Img: "" + basePath + "/image/garbage/duixing02.png",
    poster1Img: "" + basePath + "/image/garbage/haibao01.png",
    poster2Img: "" + basePath + "/image/garbage/haibao02.png",
    poster3Img: "" + basePath + "/image/garbage/haibao03.png",
    poster4Img: "" + basePath + "/image/garbage/haibao04.png",
    poster5Img: "" + basePath + "/image/garbage/haibao05.png",
    poster6Img: "" + basePath + "/image/garbage/haibao06.png",
    poster7Img: "" + basePath + "/image/garbage/haibao07.png",
    num:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      num:options.count
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  //自定义返回按钮
  back(e) {
    wx.navigateBack({})
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