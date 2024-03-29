
//自带的
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
/**
* 时间戳转化为年 月 日 时 分 秒
* number: 传入时间戳
* format：返回格式，支持自定义，但参数必须与formateArr里保持一致
*/
function formatTime2(number, format){
  let formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  let returnArr = [];
  let date = new Date(number * 1000);
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));
  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));
  for (let i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}

//数据转化
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//将时间戳转换为几分钟前、几小时前
function timeago(dateTimeStamp, format) {	//这里融合了上面的自定义时间格式，“format”就是干这个用的
  // dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
  let minute = 1000 * 60;      //把分，时，天，周，半个月，一个月用毫秒表示
  let hour = minute * 60;
  let day = hour * 24;
  let week = day * 7;
  let halfamonth = day * 15;
  let month = day * 30;
  let now = new Date().getTime();   //获取当前时间毫秒
  let diffValue = now - dateTimeStamp;//时间差
  if (diffValue < 0) { return; }
  let minC = diffValue / minute;  //计算时间差的分，时，天，周，月
  let hourC = diffValue / hour;
  let dayC = diffValue / day;
  let weekC = diffValue / week;
  let monthC = diffValue / month;
  let result = '';
  if (dayC >= 1 && dayC <=1000) {
    result = "" + parseInt(dayC) + "天前";
  } else if (hourC >= 1 && hourC <= 24) {
    result = "" + parseInt(hourC) + "小时前";
  } else if (minC >= 1 && minC <= 60) {
    result = "" + parseInt(minC) + "分钟前";
  } else if (minC < 1) {
    result = "刚刚";
  } else
     result = formatTime2(new Date(dateTimeStamp) / 1000, format)		//否则输出“format”(自定义格式)的时间
  return result;
}
module.exports = {
  formatTime,
  formatTime2,
  timeago
}
