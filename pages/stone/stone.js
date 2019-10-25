// pages/stone/stone.js
const basePath = require("../../utils/config.js");
const util = require("../../utils/util.js");
import {http} from '../../utils/http.js';
Page({
  data: {
    listItem: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const _this = this;
    wx.showLoading({
      title: '正在加载',
    })
    http("post","/garbage/Index/learning",{page:1,psize:100},function(res){
      console.log(res.data.model);
      let data=res.data.model;
      data.forEach((v,i)=>{
        v.createtime=util.timeago(new Date(v.createtime.replace(/-/g,'/')).getTime(),'Y年M月D日 h:m:s')
      })
      _this.setData({listItem:[...data]})
      wx.hideLoading()
    })


  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

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