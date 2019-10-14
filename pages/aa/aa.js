// pages/separate/separate.js
const basePath = require('../../utils/config.js');
import {http}from "../../utils/http";
const appInstance=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    input: "",
    img: "",
    show: 1,
    message: {},
    searchValue: "",
    searchBoxShow:true,
    miniProgram:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const $this = this;
    wx.showLoading({
      title: '正在加载',
    })
    http('post', '/garbage/Index/Classify', {}, function (res) {
      $this.setData({
        list: res.data
      });
      wx.hideLoading()
    })
  },
  query(e){
    if (this.data.searchValue==""||/^[0-9]*$/.test(this.data.searchValue)){
      this.setData({searchBoxShow:false})
    }else{
      this.setData({miniProgram:"miniProgram"});
    }
  },
  confirm(){
    this.setData({searchBoxShow:true})
  },
  input: function (e) {
    var value = e.detail.value;
    this.setData({
      searchValue: value
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
  onShow: function () { },

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