// pages/advise/index.js
const basePath=require("../../utils/config.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist:[],
    cursor: 0,
    value:"",
    loading:false,
    placeholderText:"若您对莘庄垃圾分类工作有相关建议，欢迎留下宝贵意见。您的留言将以匿名形式提交给我们。"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){},
  // 添加图片
  addimg(e){
    console.log(e)
    let $this = this
    wx.chooseImage({
      count: 4,
      success(res) {
        let imglist = $this.data.imglist;
        console.log(imglist);
        imglist.push(res.tempFilePaths[0])
        $this.setData({ imglist });
        console.log($this.data.imglist);
      }
    })
  },
  sub(e){
  const _this=this;
    var text=e.detail.value.textarea;
    var img=_this.data.imglist;
    console.log(text,img);
    if(text==""||img.length==0){
    wx.showModal({
      title: '提示',
      content: '反馈内容不能未空！',
      success(res){
        if(res.confirm){
          console.log("用户点击确定");
        }else if(res.cancel){
          console.log("用户点击取消");
        }
      }
    })
    }else{
      _this.setData({loading:true});
      wx.request({
        url: '' + basePath + '/garbage/Index/advice',
        method: "post",
        data: {
          //用户输入的文本传给后台
          content: "" + text + "",
          //用户输入的图片
          pic:""+img+""
        },
        success(res) {
          if(res.data.code==200){
            setTimeout(function () {
              _this.setData({loading: false })
              wx.showToast({ title: "感谢您对莘庄垃圾分类工作的支持和理解", icon: "none", duration: 2000 })
              _this.setData({value:"",imglist:[]});
            }, 1000)
          }else{
            wx.showToast({
              title: '提交失败',
              icon:"error"
            })
          }
        },
        fail(res) {
          console.log(res)
        }
      })
       wx.uploadFile({
         url:'' + basePath + '/garbage/Index/advice',
         filePath:''+img+'',
         name:'pic[]',
         formData:{
         'content':text  
         },
         success(res){
          if(res.statusCode==200){
            setTimeout(function () {
              _this.setData({ loading: false })
              wx.showToast({ title: "感谢您对莘庄垃圾分类工作的支持和理解", icon: "none", duration: 2000 })
              _this.setData({ value: "", imglist: [] });
            }, 1000)
          }else{
            wx.showToast({
              title: '提交失败',
              icon: "error"
            })

          }
         },
         fail(err){
           console.log(err);
         }
       })
    
    }
  },
  input(e){
    //得到用户输入数据的个数
    var number=e.detail.cursor;
    this.setData({
      cursor:number
    })
  },
   removeimg(e){
     console.log(e);
     let imglist=this.data.imglist;
     let index=e.currentTarget.dataset.index;
     imglist.splice(index,1);
     this.setData({imglist:imglist})
   },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.imglist);

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
  onShareAppMessage: function () {},

})