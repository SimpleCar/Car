/* Taoche对象扩展类型判断处理
 * 依赖脚本：无
 * by：yuhf */
; (function () {
    var tc=window.Taoche||{};
    window.Taoche=tc;
    //判断一个对象是否是函数
    tc.isFunc=function (n) {
        return Object.prototype.toString.call(n)==='[object Function]';
    };
    //判断一个对象是否是数字
    tc.isNum=function (n) {
        return Object.prototype.toString.call(n)==='[object Number]';
    };
    //判断一个对象是否是字符串
    tc.isString=function (n) {
        return Object.prototype.toString.call(n)==='[object String]';
    };
    //判断一个对象是否是数组
    tc.isArray=function (n) {
        return Object.prototype.toString.call(n)==='[object Array]';
    };
    //判断一个对象是否是对象
    tc.isObject=function (n) {
        return Object.prototype.toString.call(n)==='[object Object]';
    };
})();
