// pages/wenda/index.js
const basePath = require("../../utils/config.js");
import {http} from '../../utils/http.js';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bgImg: "",
    prevImg: "",
    nextImg: "",
    listItem: [],
    page: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const _this = this;
    http("post", "/garbage/Index/TheAnswer", {}, function(res) {
      console.log(res.data);
      let data = res.data;
      let {
        model,
        background,
        Spage,
        Xpage,
        logo
      } = data;
      _this.setData({
        listItem: model,
        bgImg: background,
        prevImg: Spage,
        nextImg: Xpage,
        logo
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},
  next(e) {
    const {page} = this.data;
    if (page < 9) {
      this.setData({
        page: page + 1,
      })
    }
  },
  prev() {
    const {page} = this.data;
    if (page >= 1) {
      this.setData({
        page: page - 1
      })
    }
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