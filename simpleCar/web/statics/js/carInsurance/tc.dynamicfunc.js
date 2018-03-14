/* Taoche对象扩展动态函数创建类
 * 依赖脚本：tc.istype.js
 * by：yuhf */
; (function () {
    var tc = window.Taoche || {};
    window.Taoche = tc;

    //动态函数创建类，由于此函数自动分配函数名索引从0开始，此对象不能覆盖
    tc.DynamicFunc = tc.DynamicFunc || {
        //作为创建动态函数的标识值，每次创建一个动态函数此值+1
        index: 0,
        //包装一个匿名函数(匿名函数最多支持一个参数)并返回此函数的全局调用名称(返回的新函数最多支持一个参数)，通常用于一些特殊的动态回调，比如JSONP回调；参数 isDel 指定此函数执行后是否销毁，默认销毁；参数 changeParam 是一个函数，可以对动态回调函数中的原始参数做进一步操作后将结果传入匿名函数 callback
        getFuncName: function (callback, isDel, changeParam) {
            var name = 'CB__A' + this.index;
            this.index++;
            var that = this;
            this[name] = function (data) {
                //触发回调
                if (callback && tc.isFunc(callback)) {
                    if (changeParam && tc.isFunc(changeParam)) {//对原始参数做处理后再传给业务函数
                        data = changeParam(data);
                    }
                    callback(data);
                }
                if (isDel !== false) {//销毁此函数
                    that[name] = null;
                }
            };
            return 'Taoche.DynamicFunc.' + name;//全局调用函数名称
        }
    };
})();
