// pages/advise/index.js
const basePath = require("../../utils/config.js");
const http = require("../../utils/http.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist: [],
    cursor: 0,
    value: "",
    loading: false,
    placeholderText: "若您对莘庄垃圾分类工作有相关建议，欢迎留下宝贵意见。您的留言将以匿名形式提交给我们。"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
  // 添加图片
  addimg(e) {
    let _this = this
    wx.chooseImage({
      success(res) {
        let imglist = $this.data.imglist;
        imglist.push(...res.tempFilePaths)
        _this.setData({
          imglist
        });
      }
    })
  },
  sub(e) {
    const _this = this;
    var text = e.detail.value.textarea;
    var img = _this.data.imglist;
    if (text == "" || img.length == 0) {
      wx.showModal({
        title: '提示',
        content: '文字和图片不能未空！',
        success(res) {
          if (res.confirm) {} else if (res.cancel) {}
        }
      })
    } else {
      _this.setData({
        loading: true
      });

      wx.request({
        url: '' + basePath + '/garbage/Index/advice',
        method: "post",
        data: {
          content: "" + text + "",
          pic: "" + img + ""
        },
        success(res) {
          if (res.data.code == 200) {
            setTimeout(function() {
              _this.setData({
                loading: false
              })
              wx.showToast({
                title: "感谢您对莘庄垃圾分类工作的支持和理解",
                icon: "none",
                duration: 2000
              })
              _this.setData({
                value: "",
                imglist: []
              });
            }, 1000)
          } else {
            wx.showToast({
              title: '提交失败',
              icon: "error"
            })
          }
        },
        fail(res) {
          console.log(res)
        }
      })
      wx.uploadFile({
        url: '' + basePath + '/garbage/Index/advice',
        filePath: '' + img + '',
        name: 'pic[]',
        formData: {
          'content': text
        },
        success(res) {
          if (res.statusCode == 200) {
            setTimeout(function() {
              _this.setData({
                loading: false
              })
              wx.showToast({
                title: "感谢您对莘庄垃圾分类工作的支持和理解",
                icon: "none",
                duration: 2000
              })
              _this.setData({
                value: "",
                imglist: []
              });
            }, 1000)
          } else {
            wx.showToast({
              title: '提交失败',
              icon: "error"
            })

          }
        },
        fail(err) {
          console.log(err);
        }
      })
    }
  },
  //预览图片
  zoomImg(e) {
    let currentImg = e.currentTarget.dataset.currentimg;
    let currentImgArray = e.currentTarget.dataset.currentimgarray
    wx.previewImage({
      current: currentImg,
      urls: currentImgArray
    })
  },
  input(e) {
    //得到用户输入数据的个数
    var number = e.detail.cursor;
    this.setData({
      cursor: number
    })
  },
  removeimg(e) {
    let imglist = this.data.imglist;
    let index = e.currentTarget.dataset.index;
    imglist.splice(index,1);
    this.setData({
      imglist: imglist
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
  onShareAppMessage: function() {},

})