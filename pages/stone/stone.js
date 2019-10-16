// pages/stone/stone.js
const basePath = require("../../utils/config.js");
const util=require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
   listItem:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const _this=this;
    wx.showLoading({
      title: '正在加载',
    })
    wx.request({
      url: ''+basePath+'/garbage/Index/learning',
      method:"post",
      data:{page:1,psize:2},
      success(data){
        var data = data.data.data.model;
        _this.setData({listItem:data});
        wx.hideLoading()
      },
      fail(error){
        console.log(error)
      }
    });
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