// pages/stone/stone.js
const basePath = require("../../utils/config.js");
const util = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
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
    wx.request({
      url: '' + basePath + '/garbage/Index/learning',
      method: "post",
      data: {
        page: 1,
        psize: 100
      },
      success(data) {
        var data = data.data.data.model;
        console.log(data);
        data.forEach(function(v, i) {
          //new Date(date).getTime()在苹果手机不兼容
          v.createtime = util.timeago(new Date(v.createtime.replace(/-/g, '/')).getTime(), 'Y年M月D日 h:m:s');
        })
        _this.setData({
          listItem: [...data]
        })
        wx.hideLoading()
      },
      fail(error) {
        console.log(error)
      }
    });


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