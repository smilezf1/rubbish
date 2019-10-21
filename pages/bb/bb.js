// pages/star/star.js
const basePath = require("../../utils/config.js");
const util = require("../../utils/util.js");
var app = getApp();
let token = wx.getStorageSync("token");
let openid = wx.getStorageSync("openid");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // listItem: [],
    listItem:[
      { id: 7, createtime: "2天前", nickName: "长寿新村", num: 5, title: "环保志愿者", image: ["https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg","https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg"]},
      { id: 89, createtime: "2天前", nickName: "虹莘新村", num: 5, title: "闪闪虹莘~感谢有你们~", image: ["https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg"]},
      { id: 2, createtime: "2天前", nickName: "虹莘新村", num: 5, title: "闪闪虹莘~感谢有你们~", image: ["https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg", "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg", "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg"]},
      { id:3, createtime: "2天前", nickName: "虹莘新村", num: 5, title: "闪闪虹莘~感谢有你们~", image: ["https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg", "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg", "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
        "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg"    
 ] },
      {
        id: 4, createtime: "2天前", nickName: "虹莘新村", num: 5, title: "闪闪虹莘~感谢有你们~", image: ["https://www.appi2b2b.com/image/feedback/20190929/74d66a788aec4df14e5819da46d9101e.jpg", "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg", "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
 "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
  "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg"
        ]
      },
      {
        id:6, createtime: "2天前", nickName: "虹莘新村", num: 5, title: "闪闪虹莘~感谢有你们~", image: ["https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg", "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg", "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
 "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
 "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
  "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg"
]
},
{
 id:7, createtime: "2天前", nickName: "虹莘新村", num: 5, title: "闪闪虹莘~感谢有你们~", image: ["https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg", "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg", "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
 "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
 "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
 "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
 "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg"
 ]
},
{
id:8, createtime: "2天前", nickName: "虹莘新村", num: 5, title: "闪闪虹莘~感谢有你们~", image: ["https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg", "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg", "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
"https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
"https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
"https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
"https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
 "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg"
]
},
{
id:9, createtime: "2天前", nickName: "虹莘新村", num: 5, title: "闪闪虹莘~感谢有你们~", image: ["https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg", "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg", "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
 "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
  "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
  "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
  "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
  "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg",
  "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg"
  ]
}
],



    hasChange: false,
    praise1: "/static/images/praise1.png",
    authWindowHidden: true,
    nickName: "",
    avatar: "",
    openid: "",
    array1: ["https://www.appi2b2b.com/image/feedback/20190929/74d66a788aec4df14e5819da46d9101e.jpg", "https://www.appi2b2b.com/image/feedback/20191017/176d35fb9df2eaaa590bb7ca6cb15e20.jpg"]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.listItem[0].image);
    wx.showLoading({ title: '正在加载' });
    var _this = this;
    app.getOpenid().then(res => {
      if (res.status == 200) {
        _this.setData({ openid: wx.getStorageSync('openid') });
      } else {
        console.log(res.data);
      }
    });
    _this.updateMessage(openid)
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // call getUserInfo, upload 
          wx.getUserInfo({
            success: res => {
              var rawData = JSON.parse(res.rawData);
              _this.updateUserInfo(openid, rawData.nickName, rawData.avatarUrl);
            }
          });
        } else {
          // show auth window
          this.setData({ authWindowHidden: false });
        }
      }
    });
  },
// 点击图片进行方法
  zoom(e){
    let currentImg=e.currentTarget.dataset.currentimg;
    let currenImgArray=e.currentTarget.dataset.currentimgarray;
    console.log(currentImg,currenImgArray);
   
  wx.previewImage({
    current:currentImg,
    urls:currenImgArray
  })

  },
  cancel(e) {
    this.setData({
      authWindowHidden: true,
      shadeShow: true
    });
  },
  sure(e) {
    const _this = this;
    this.setData({ authWindowHidden: true, shadeShow: true });
  },
  onGetUserInfo: function (res) {
    const _this = this;
    var rawData = JSON.parse(res.detail.rawData);
    _this.updateUserInfo(openid, rawData.nickName, rawData.avatarUrl);
  },
  praise(e) {
    const _this = this;
    let id = e.currentTarget.dataset.id;
    let index = e.currentTarget.dataset.index;
    let type = e.currentTarget.dataset.type;
    if (this.data.listItem[index]) {
      let num = this.data.listItem[index].num;
      if (type == 0) {
        wx.request({
          url: '' + basePath + '/garbage/Index/giveAlike',
          method: "post",
          data: { token: wx.getStorageSync('token'), id },
          success(res) {
            const code = res.data.code;
            console.log(code);
            if (code == 200) {
              wx.showToast({ title: '谢谢你的点赞', icon: "none" });
              _this.data.listItem[index].num = _this.data.listItem[index].num + 1;
              _this.updateMessage(openid);
              _this.setData({ listItem: [..._this.data.listItem] });
            }
            if (code == 301) {
              wx.showToast({ title: '你还没有授权,不可点赞哦', icon: "none" });
            }
          },
          fail(err) {
            console.log(err)
          }
        });
      }
      if (type == 1) {
        wx.showToast({ title: '你已经点过赞了哦', icon: "none" });
      };
    }
  },
  bb() {
    wx.chooseImage({
      success: function (res) {
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // const _this = this;
    // this.updateMessage(openid);
  },
  updateMessage: function (openid) {
    const _this = this;
    wx.request({
      url: '' + basePath + '/garbage/Index/Week',
      method: "post",
      data: {
        page: 1, psize: 60, openid
      },
      success(res) {
        var data = res.data.data.model;
        // data.forEach(function (v, i) {
        //   v.createtime = util.timeago(new Date(v.createtime.replace(/-/g, '/')).getTime(), 'Y年M月D日 h:m:s');
        // });
        // _this.setData({ listItem: [...data].reverse() });
        wx.hideLoading();
      }
    })

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
  },
  updateUserInfo: function (openid, nickname, avatar) {
    wx.request({
      url: '' + basePath + '/garbage/Index/users',
      method: "post",
      data: {
        openid,
        nickname,
        avatar
      },
      success(res) {
        console.log(res)
      }, fail(err) {
        console.log(err)
      }
    })
  }
})