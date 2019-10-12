// pages/miniGame/miniGame.js
const basePath = require("../../../utils/config.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    miniGame1Img: "" + basePath + "/image/garbage/background.png",
    miniGame2Img: "/static/images/miniGame2.png",
    listItem: [
      {
      choose: 'A',
      options: "干垃圾"
    }, {
      choose: 'B',
      options: "湿垃圾"
    }, {
      choose: 'C',
      options: "可回收垃圾"
    }, {
      choose: 'D',
      options: "有害垃圾"
    }
    ],
    list: [],//请求得到的所有数据
    current: 0,
    minute:3,
    second:59,
    userChoose:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(){
    const _this = this;
    let answerlist = [];
    let choselist = [];
    wx.request({
      url: '' + basePath + '/garbage/Index/Answer',
      method: "post",
      success(data){
        var data=data.data.data.model;
        console.log(data);
        _this.setData({list:data});
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function(){},
  changeBg(e){ 
    const {list,current,userChoose}=this.data;
    const dataset = e.currentTarget.dataset;
    const userAnswer = dataset.answer;
    this.setData({userChoose:userAnswer});
    //当前的题目
    const curQuestion = this.data.list[this.data.current];
   //当前题目的答案
    const answer = curQuestion.answer;
    if(userAnswer == answer){
      wx.showToast({title:'回答正确',image:"/static/images/success.png" });
      if( current<(list.length-1) ){
        this.setData({current:current+1});
      }
    }else{
      wx.showToast({title:'回答错误',image:"/static/images/fail.png" });
    }
    list[current] = {...curQuestion,userAnswer:userAnswer};
    this.setData({list});
    if(current==4){
      wx.showToast({title:'感谢参与',image:"/static/images/thankyou.png",duration:2000 })
    }
  },
  next(){ 
    if(this.data.list[this.data.current].userAnswer==undefined){
      wx.showToast({title: '请选择选项',icon:"none"});
    }else{
      if (this.data.current < 4) {
        this.setData({ current: this.data.current + 1, pageNumber: this.data.pageNumber + 1 })
      }
    }
  },
  previous(){
    if (this.data.current > 0) {
      this.setData({
        current: this.data.current - 1,
        pageNumber: this.data.pageNumber - 1
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function(){
    const _this = this;
    var timer = this.data.timer
    _this.setData({
      timer: setInterval(function() {
        setTimeout(function() {
          _this.showTime();
        }, 1000)
      }, 1000)
    })
  },
  showTime: function() {
    let m = this.data.minute;
    let s = this.data.second;
    var timer = this.data.timer;
    let _this = this;
    s--
    _this.setData({second:s});
    if (s<10) {
      _this.setData({ second: "0" + s })
    }
    if (s< 0) {
      m--
      _this.setData({minute:m,second: 59});   
    }
    if (m <= 0 && s == 1) {
      _this.complete()
      clearInterval(timer);
    }
    if(m==0&&s==0){
      wx.showToast({
        title:'时间到',
        image:"/static/images/time.png"
      })
    }
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
  onShareAppMessage: function(){},
  // 提交答案
  complete(){
    let _this = this;
    if (_this.data.list[_this.data.current].userAnswer == undefined) {
      wx.showToast({ title: '请选择选项', icon: "none" });
    }else{
      wx.request({
        url: '' + basePath + '/garbage/Index/Answer',
        method: "post",
        success(data) {
          var data = data.data.data.model;
          _this.setData({ list: data, current: 0 });
        }
      })
    }
   
  }
})