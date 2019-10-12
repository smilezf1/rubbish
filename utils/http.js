const basePath = require('./config.js')
function http(method, url, data, callback) {
  if (!method) {
    method = "post";
  }
  wx.request({
    url: basePath + url,
    method,
    data,
    header: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    success: function(res) {
      return callback(res.data)
    },
    fail: err => {
    }
  })
}
export {
  http
};