// pages/ranklist/index.js
const basePath = require("../../utils/config.js");
import {http}from "../../utils/http";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    userImg: ["" + basePath + "/images/user.jpg"],
    rank: ["/static/images/one.png", "/static/images/two.png", "/static/images/three.png"]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this
    wx.showLoading({title:'正在加载'})
    http('post','/garbage/Index/lists',{},function(res){
      _this.setData({list:res.data})
      setTimeout(function(){
        wx.hideLoading()
      },200)
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function(){
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})