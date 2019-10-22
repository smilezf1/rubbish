// pages/cc/cc.js
const basePath=require("../../utils/config.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listItem:[],
    regionIndex:"",
    streetIndex:"",
    streetAddress:[],
    searchResult:{}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options){
    const _this=this;
    wx.request({
      url:''+basePath+'/garbage/Index/region',
      success(res){
        console.log(res.data.data)
        let data=res.data.data;
        _this.setData({
          listItem:data
        })

      }
    })

  },
  //所在居委
  chooseRegion(e){
    let index=e.detail.value;
    let data=this.data.listItem[index].child
    this.setData({ streetAddress: data,regionIndex:index})
  },
  //所在小区
  chooseStreet(e){
    let index=e.detail.value;
    this.setData({streetIndex:index})
  },
  warn(e){
    if (this.data.regionIndex == "") {
      wx.showToast({
        title: '请选择居委',
        icon: "none"
      })
    }
  },
  //查询垃圾
  search(e){
    const {regionIndex,listItem,streetIndex}=this.data; 
    if(!this.data.regionIndex||!this.data.streetIndex){
      wx.showToast({title:'请选择居委',icon:"none"});
    }
    this.setData({searchResult:listItem[regionIndex].child[streetIndex]})
    console.log(listItem[regionIndex].child[streetIndex])
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