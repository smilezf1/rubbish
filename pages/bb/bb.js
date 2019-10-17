// pages/bb/bb.js
const basePath=require("../../utils/config.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rangeAddress:[],
    streetAddress:[]
   

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this=this;
    wx.request({
      url:''+basePath+'/garbage/Index/region',
      success(res){
        let datas=res.data.data;
        _this.setData({rangeAddress:datas});
        console.log(datas);
      },
      fail(res){
        console.log(res);
      }
    })
  },
  chooseRegion(e){
    console.log(e);

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