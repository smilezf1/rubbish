// pages/stone/content/content.js
const basePath = require("../../../utils/config.js");
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
    //链接跳转时传过来的id
    const ids=options.id
    const _this = this;
    wx.request({
      url: '' + basePath + '/garbage/Index/borrow',
      method: "post",
      data: {id:ids},
      success(res) {
        let data = res.data.data;
        _this.setData({ listItem: data });
        console.log(data,"他山之石内容");
      },
      fail(err) {
        console.log(err)

      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
   

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