const basePath = require('./config.js')
function http(method,url,datas,callback){
  console.log(datas);
  if(!method){
    method="post";
  }
  wx.request({
    url:basePath+url,
    method,
    data:datas,
    header:{'Content-type':"application/x-www-form-urlencoded"},
    success:res=>{
      return callback(res.data);
    },
    fail:err=>{
    }
  })
}
module.exports={http};
// export {http};

