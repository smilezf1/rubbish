// pages/separate/separate.js
const basePath = require('../../utils/config.js');
import {
  http
} from "../../utils/http";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    input: "",
    img: "",
    show:1,
    message: {},
    searchValue:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const $this = this;
    wx.showLoading({
      title: '正在加载',
    })
    http('post', '/garbage/Index/Classify', {}, function(res) {
      $this.setData({
        list: res.data
      });
      wx.hideLoading()
    })
  },
  query(e) {
    // const _this=this;
    // const searchValue=this.data.searchValue;
    // let list=this.data.list
    // http('post',"/garbage/Index/search",{
    //   keyword:searchValue
    // },function(res){
    //   console.log(res.data);
    //   if(res.data){
    //     list.forEach(e => {
    //       console.log(e.id, res.data.g_id);
    //       if (e.id == res.data.g_id) {
    //         _this.setData({
    //           message: e,
    //           show:2
    //         })
    //       }
    //     })
    //   }else{
    //    _this.setData({
    //      show:3
    //    })
    //   }
    // })
    // wx.request({
    //   url: ''+basePath+'/garbage/Index/search',
    //   method:"post",
    //   data:{keword:searchValue},
    //   success(res){
    //   console.log(res)
    //   },
    //   fail(res){
    //     console.log(res)
    //   }
    // })
    wx.navigateTo({
      url: '/pages/bb/bb?value='+this.data.searchValue,
    })
  },
  input: function(e) {
    var value = e.detail.value;
    this.setData({
      searchValue: value
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

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