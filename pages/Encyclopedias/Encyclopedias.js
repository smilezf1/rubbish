// pages/Encyclopedias/index.js
const basePath = require("../../utils/config.js");
import {http} from "../../utils/http";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    bgImg: "" + basePath + "/image/garbage/chuangquan01.png",
    searchImg: "/static/images/search.png",
    value:"",
    show:false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var $this = this
    wx.showLoading({
      title: '正在加载',
    })
    wx.request({
      url: ''+basePath+'/garbage/Index/encyclopedia',
      method:"post",
      success(res){
        $this.setData({list:res.data.data});
        console.log(res.data.data);
        wx.hideLoading()
      }
    })
  },
  aa(e) {
    var data = e.detail.value
    this.setData({
      value: data
    });
  },
  search(e){
   const _this=this;
   var datas=_this.data.value
   wx.request({
     url: ''+basePath+'/garbage/Index/encyclopedia',
     method:"post",
     data:{keyword:datas},
     success(res){
       console.log(res.data.data)
       var data=res.data.data;
       //没有查询到结果返回的是一个空数组,判断数组是否为空
      if(!data.length==0){
        _this.setData({list:data,show:false})
      }else{
        _this.setData({show:true})
      }
     },
     fail(err){
       console.log(err)
     }
   })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
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