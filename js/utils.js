// 防止污染全局  封装方法到对象中
var URLHandle={
  /**
   * 
   * @param {*处理地址栏后的参数，即?后面的参数} str 
   */
  parameter:function (str) {
    // 1.1截取字符串 去除?
    str = str.substr(1);
    // 1.2切割字符串 用&把字符切割成数组
    var arr = str.split("&");
    // 1.4定一个对象
    var obj = {};
    // 1.3遍历数组 继续切割字符串
    for(var i=0;i<arr.length;i++){
      var temp        = arr[i];
      var arrTemp     = temp.split("=");
      obj[arrTemp[0]] = arrTemp[1];
    }
    // 1.5返回对象
    return obj;
  }
};
/* 返回上一业 */
if (document.querySelector(".hd-back")){
  var back = document.querySelector(".hd-back");
  back.onclick = function () {
    history.back();
  }
}
