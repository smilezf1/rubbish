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
    placeholderColor:"",
    show:false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this
    wx.showLoading({ title: '正在加载',})
    _this.getData();
  },
  aa(e) {
    var data = e.detail.value
    this.setData({ value: data});
  },
  getData(){
    const _this=this;
    http("post", '/garbage/Index/encyclopedia', {}, function (res) {
      _this.setData({list:res.data});
      setTimeout(function () {
        wx.hideLoading()
      }, 200)
    })
  },
  //得到焦点
  getFocus(){
    this.setData({placeholderColor:""})
  },
  search(e){
    const placeholderText = e.currentTarget.dataset.placeholder;
    const _this=this;
   var datas=_this.data.value||placeholderText;
   if(_this.data.value==""){
     _this.setData({placeholderColor:"#000"});
   }
  let obj1={keyword:datas};
  http("post",'/garbage/Index/encyclopedia',obj1,function(res){
    let data=res.data;
    if(!data.length==0){
      _this.setData({list:data,show:false})
    }else{
      _this.setData({show:true})
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