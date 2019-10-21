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
    streetAddress:[]

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
    console.log(e.detail.value);
    let index=e.detail.value;
    console.log(this.data.listItem[index].title)
    let data=this.data.listItem[index].child
    this.setData({ streetAddress: data,regionIndex:index})
  },
  //所在小区
  chooseStreet(e){
    console.log(e.detail.value);
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
    if(!this.data.regionIndex||!this.data.streetIndex){
      wx.showToast({title:'请选择居委',icon:"none"});
    }
    console.log(e.currentTarget.dataset.regionaddress,e.currentTarget.dataset.streetaddress);
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