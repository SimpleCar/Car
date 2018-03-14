/* Taoche对象扩展对日期时间数据的处理
 * 依赖脚本：无
 * by：yuhf */
; (function () {
    var tc=window.Taoche||{};
    window.Taoche=tc;
    //封装对时间的增减操作
    tc.DateTime={
        //向一个时间上增加指定的天数，支持负数，小数；参数time可选，默认为当前时间
        addDays: function (days,time) {
            time=time||new Date();
            return new Date(time.getTime()+days*24*60*60*1000);
        },
        //向一个时间上增加指定的小时数，支持负数，小数；参数time可选，默认为当前时间
        addHours: function (hours,time) {
            time=time||new Date();
            return new Date(time.getTime()+hours*60*60*1000);
        },
        //向一个时间上增加指定的分钟数，支持负数，小数；参数time可选，默认为当前时间
        addMinutes: function (mins,time) {
            time=time||new Date();
            return new Date(time.getTime()+mins*60*1000);
        },
        //向一个时间上增加指定的秒数，支持负数，小数；参数time可选，默认为当前时间
        addSeconds: function (seconds,time) {
            time=time||new Date();
            return new Date(time.getTime()+seconds*1000);
        },
        //获取标准格式化的时间字符串，默认为yyyyMMddHHmmss，可指定格式如 yyyy-MM-dd HH:mm:ss；参数time可选，默认为当前时间
        getString: function (format,time) {
            format=format||'yyyyMMddHHmmss';
            time=time||new Date();
            var year=time.getFullYear(),month=time.getMonth()+1,day=time.getDate(),hour=time.getHours(),minutes=time.getMinutes(),seconds=time.getSeconds();
            if(month<10) { month="0"+month; }
            if(day<10) { day="0"+day; }
            if(hour<10) { hour="0"+hour; }
            if(minutes<10) { minutes="0"+minutes; }
            if(seconds<10) { seconds="0"+seconds; }
            return format.replace('yyyy',year).replace('MM',month).replace('dd',day).replace('HH',hour).replace('mm',minutes).replace('ss',seconds);
        },
    };
})();
