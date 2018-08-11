function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function computeTime(time) {
  // var datePart = time.substring(0, 10).replace(/\-/g, "/");
  // ;var timePart = time.substring(11, 19);
  // console.log(datePart + ' ' + timePart);

  // var oldTime = (new Date(datePart + ' ' + timePart)).getTime();
  var oldTime = time;
  var currTime = new Date().getTime();
  var diffValue = currTime - oldTime;

  var days = Math.floor(diffValue / (24 * 3600 * 1000));
  if (days === 0) {
    //计算相差小时数
    var leave1 = diffValue % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    if (hours === 0) {
      //计算相差分钟数
      var leave2 = leave1 % (3600 * 1000);  //计算小时数后剩余的毫秒数
      var minutes = Math.floor(leave2 / (60 * 1000));
      if (minutes === 0) {
        //计算相差秒数
        var leave3 = leave2 % (60 * 1000);   //计算分钟数后剩余的毫秒数
        var seconds = Math.round(leave3 / 1000);
        return seconds + '秒前';
      }
      return minutes + '分钟前';
    }
    return hours + '小时前';
  } else if (days < 8) {
    return days + '天前';
  } else {
    return time.substring(0, 10);
  }
}

exports = {
  formatTime: formatTime, computeTime: computeTime
}
