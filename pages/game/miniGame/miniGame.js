// pages/miniGame/miniGame.js
const basePath = require("../../../utils/config.js");
import {
  http
} from "../../../utils/http.js";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    miniGame1Img: "" + basePath + "/image/garbage/background.png",
    miniGame2Img: "/static/images/miniGame2.png",
    listItem: [{
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
    }],
    list: [], //请求得到的所有数据
    current: 0,
    minute: 3,
    second: 59,
    userChoose: "",
    againShow: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    const _this = this;
    let answerlist = [];
    let choselist = [];
    http("post", "/garbage/Index/Answer", {}, function(res) {
      console.log(res.data.model);
      let data = res.data.model;
      _this.setData({
        list: data
      });
    })
  },
  changeBg(e) {
    const {list,current,userChoose,m,s} = this.data;
    const dataset = e.currentTarget.dataset;
    const userAnswer = dataset.answer;
    this.setData({
      userChoose: userAnswer
    });
    //选错随机语句
    let errorMess = ["亲,选错啦,再想想吧!", "很抱歉不是这个答案哦！", "相信你下次会选正确的！"];
    let errorMessContent = errorMess[Math.round(Math.random() * (errorMess.length - 1))];
    //当前的题目
    const curQuestion =list[current];
    //当前题目的答案
    const answer = curQuestion.answer;
    if (userAnswer == answer) {
      wx.showToast({
        title: '回答正确',
        image: "/static/images/success.png"
      });
      if (current < (list.length - 1)) {
        this.setData({
          current: current + 1
        });
      }
    } else {
      wx.showToast({
        title: '' + errorMessContent + '',
        icon: "none"
      })
    }
    if (current == 4) {
      this.setData({
        againShow: true
      })
    }
    list[current] = { ...curQuestion,userAnswer};
    this.setData({list});
    if (current == 4 && userAnswer == answer) {
      wx.showToast({
        title: '恭喜全部答对，感谢您参与垃圾分类^_^',
        icon: "none",
        duration: 2000
      });
    } else if (current == 4 && userAnswer !== answer) {
      wx.showToast({
        title: '' + errorMessContent + '',
        icon: "none"
      });
    }
  },
  // next(){ 
  //   const userAnswer = this.data.list[this.data.current].userAnswer;
  //   const answer = this.data.list[this.data.current].answer;
  //   if (this.data.list[this.data.current].userAnswer == undefined) {
  //     wx.showToast({title:'请选择选项', icon: "none",duration:2000})
  //   } else {
  //     if (userAnswer == answer) {
  //       if (this.data.current < 4) {
  //         this.setData({ current: this.data.current + 1, pageNumber: this.data.pageNumber + 1 })
  //       }
  //     } else {
  //       wx.showToast({
  //         title: '答对才可以进入下一题哦', icon: "none"
  //       })
  //     }
  //   }
  // },
  previous() {
    const {current,pageNumber}=this.data;
    if (current > 0) {
      this.setData({
        current:current-1,
        pageNumber:pageNumber-1
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    const _this = this;
    const {timer}=this.data;
    _this.setData({
      timer: setInterval(function() {
        setTimeout(function() {
          _this.showTime();
        }, 1000)
      }, 1000)
    })
  },
  showTime: function() {
    let {minute,second,timer}=this.data
    let _this = this;
    second--
    _this.setData({
      second
    });
    if (second < 10) {
      _this.setData({
        second: "0" +second
      })
    }
    if (second < 0) {
      minute--
      _this.setData({
        minute,
        second:59
      });
    }
    if (minute <= 0 && second == 1) {
      clearInterval(timer);
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
  onReachBottom: function() {},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},
  // 提交答案
  complete() {
    let _this = this;
    const {list,current}=_this.data;
    if (list[current].userAnswer == undefined) {
      wx.showToast({
        title: '请选择选项',
        icon: "none"
      });
    } else {
      http("post","/garbage/Index/Answer",{},function(res){
        console.log(res.data.model,"提交")
        let data=res.data.model;
        _this.setData({
          list:data,
          current:0
        })
      })
      

    }

  }
})