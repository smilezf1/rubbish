//index.js
//获取应用实例
const app = getApp()
const basePath = require('../../utils/config.js');
Page({
  data: {
    list: [{
        id: 1,
        navTitle: "查询",
        navContent: "垃圾怎么分",
        img: "/static/images/item1.png",
        // src: "/pages/separate/separate"
      src: "/pages/aa/aa"
      },
      {
        id: 2,
        navTitle: "查询",
        navContent: "小区投放点",
        img: "/static/images/item2.png",
        src: "/pages/throwPoint/throwPoint"
      },
      {
        id: 3,
        navTitle: "创全小百科",
        navContent: "",
        img: "/static/images/item3.png",
        src: "/pages/Encyclopedias/Encyclopedias"
      },
      {
        id: 4,
        navTitle: "闯关游戏",
        navContent: "",
        img: "/static/images/item4.png",
        src: "/pages/game/miniGame/miniGame"
      },
      {
        id: 5,
        navTitle: "排行榜",
        navContent: "小区",
        img: "/static/images/item5.png",
        src: "/pages/ranklist/ranklist"
      },
      {
        id: 6,
        navTitle: "每周一星",
        navContent: "",
        img: "/static/images/item6.png",
        src: "/pages/star/star"
      },
      {
        id: 7,
        navTitle: "小问答",
        navContent: "垃圾分类",
        img: "/static/images/item7.png",
        src: "/pages/wenda/wenda"
      },
      {
        id: 8,
        navTitle: "他山之石",
        navContent: "",
        img: "/static/images/item8.png",
        src: "/pages/stone/stone"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {},
  jump(e) {
    let url = e.currentTarget.dataset.url
    if (url) {
      wx.navigateTo({
        url,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    } else {
      wx.showToast({
        title: '正在努力开发中',

      })
      wx.showToast({
        title: '正在努力开发中',
        icon: 'none',
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})