// pages/wenda/index.js
const basePath=require("../../utils/config.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
      bgImg:"",
      prevImg:"",
      nextImg:"",
      listItem:[],
     page:0 //设置页码数,点击下一页的时候让页码增加,通过页码去获取数组对象内容
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this=this;
    wx.request({
      url: '' + basePath + '/garbage/Index/TheAnswer',
      method:"post",
      success(data){
        var data=data.data.data;
        _this.setData({
          listItem:data.model,
          bgImg: data.background,
          prevImg:data.Spage,
          nextImg:data.Xpage,
          logoImg:data.logo
          });
   
      },
      fail(res){
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  next(e){
    if (this.data.page <9) {
      this.setData({
        page: this.data.page + 1,
      })
    }
  },
 prev(){
   if(this.data.page>=1){
     this.setData({
       page:this.data.page-1
     })
   }
   
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