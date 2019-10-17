// pages/throwPoint/throwPoint.js
const basePath = require("../../utils/config.js")
import {http} from "../../utils/http";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    regionAddress: [],
    streetAddress:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const $this = this
    http('post', '/garbage/Index/region', {}, function(res){
      $this.setData({
        regionAddress:res.data
      });
      wx.hideLoading()
    })
  },
  //选择居委
  chooseRegion(e) {
    console.log(e)
    let value = e.detail.value
    let regionAddress = this.data.regionAddress
    this.setData({
      regionindex: value,
      child: regionAddress[value].child
    })
  },
  //警告
  warn() {
    wx.showToast({
      title: "请选择居委",
      icon: "none",
    })
  },
  //选择小区
  chooseDistrict(e) {
    const $this = this
    console.log(e)
    let value = e.detail.value
    this.setData({
      districtindex: value
    })
  },
  query(e) {
    let districtindex = this.data.districtindex
    let list = []
    if (!districtindex) {
      list = this.data.child
    } else {
      list.push(this.data.child[districtindex])
    }
    this.setData({
      list,
      show: true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log(this.data.regionAddress[0])
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