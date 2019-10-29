// pages/star/star.js
const basePath = require("../../utils/config.js");
const util = require("../../utils/util.js");
import {
  http
} from '../../utils/http.js';
var app = getApp();
let token = wx.getStorageSync("token");
let openid = wx.getStorageSync("openid");
Page({
  data: {
    listItem: [],
    hasChange: false,
    praise1: "/static/images/praise1.png",
    authWindowHidden: true,
    page: 1, //当前请求数据是第几页
    psize: 5, //每页数据条数
    hasMoreData: true,//上拉时是否继续请求数据
    more:"点击加载更多数据"
  },
  //监听页面加载
  onLoad: function(options) {
    wx.showLoading({
      title: '正在加载'
    });
    var _this = this;
    app.getOpenid().then(res => {
      if (res.status == 200) {
        _this.setData({
          openid: wx.getStorageSync('openid')
        });
      } else {
        console.log(res.data);
      }
    });
    _this.updateMessage(wx.getStorageSync('openid'))
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              var rawData = JSON.parse(res.rawData);
              _this.updateUserInfo(openid, rawData.nickName, rawData.avatarUrl);
            }
          });
        } else {
          this.setData({
            authWindowHidden: false
          });
        }
      }
    });
  },
  //点击图片进行预览
  zoomImg(e) {
    let {
      currentimg,
      currentimgarray
    } = e.currentTarget.dataset
    wx.previewImage({
      current: currentimg,
      urls: currentimgarray
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
    this.setData({
      authWindowHidden: true,
      shadeShow: true
    });
  },
  onGetUserInfo: function(res) {
    const _this = this;
    var rawData = JSON.parse(res.detail.rawData);
    _this.updateUserInfo(wx.getStorageSync("openid"), rawData.nickName, rawData.avatarUrl);
  },
  praise(e) {
    const _this = this;
    let {
      id,
      index,
      type
    } = e.currentTarget.dataset;
    let {
      listItem
    } = _this.data;
    if (listItem[index]) {
      let num = listItem[index].num;
      if (type == 0) {
        http("post", "/garbage/Index/giveAlike", {
          token: wx.getStorageSync("token"),
          id
        }, function(res) {
          console.log(res.code);
          const code = res.code;
          if (code == 200) {
            _this.updateMessage(wx.getStorageSync("openid"));
            wx.showToast({
              title: '谢谢你的点赞',
              icon: "none"
            })
            listItem[index].num = listItem[index].num + 1;
            _this.setData({
              listItem: [...listItem]
            })
          }
          if (code == 301) {
            wx.showToast({
              title: "不可点赞",
              icon: "none"
            })
          }
        })
      }
      if (type == 1) {
        wx.showToast({
          title: '你已经点过赞了哦',
          icon: "none"
        });
      };
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},
  //得到列表数据
  getList(message) {
    wx.showLoading({
      title: message
    })
    const _this = this;
    let {
      page,
      psize,
      listItem
    } = _this.data;
    http("post", "/garbage/Index/Week", {
      page: page,
      psize: psize,
      openid
    }, function(res) {
      let data = res.data.model;
      data.forEach((v, i) => {
        v.createtime = util.timeago(new Date(v.createtime.replace(/-/g, "/")).getTime(), 'Y年M月D日 h:m:s');
        v.isExpand = true
      });
      if (data.length > 0) {
        wx.hideLoading();
        if (page == 1) {
          listItem = [];
        }
        if (data.length < psize) {
          listItem.push(...data)
          _this.setData({
            listItem,
            hasMoreData: false
          })
        } else {
          listItem.push(...data)
          _this.setData({
            listItem,
            hasMoreData: true,
            page: page + 1
          })
        }
      }
    });
  },
  //阅读全文
  changeState(e) {
    let index = e.currentTarget.dataset.index;
    let isExpand = this.data.listItem[index].isExpand;
    this.data.listItem[index].isExpand = !isExpand;
    this.setData({
      listItem: this.data.listItem
    })
  },
  updateMessage: function(openid) {
    const _this = this;
    _this.getList("正在加载数据...");
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.updateMessage(wx.getStorageSync("openid"));
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
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function(e) {},
  more() {
    const _this = this;
    if (_this.data.hasMoreData) {
      _this.getList("加载更多数据")
    }else{
      wx.showToast({
        title: '没有更多数据了',
        icon: "none"
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},
  updateUserInfo: function(openid, nickname, avatar) {
    http("post", "/garbage/Index/users", {
      openid,
      nickname,
      avatar
    }, function(res) {})
  }
})