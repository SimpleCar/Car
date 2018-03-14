/* Taoche对象扩展二手车登录功能模块，此模块不涉及DOM操作，PC和M可以通用
 * 依赖脚本：jquery.js, tc.istype.js, tc.dynamicfunc.js, tc.domain.js
 * by：yuhf */
; (function () {
    var tc = window.Taoche || {};
    window.Taoche = tc;

    //指示当前是否已登录
    tc.isLogined = false;
    //指示当前登录用户ID
    tc.loginUserId = 0;
    //指示当前登录用户名
    tc.loginUserName = null;
    //指示当前登录用户昵称
    tc.loginUserShowName = null;
    //指示当前登录用户脱敏后的手机号
    tc.loginUserPhone = null;
    //指示当前登录用户的头像地址(160*160)
    tc.loginUserImg = null;
    //指示当前登录用户的原始手机号
    tc.loginUserRawPhone = null;
    //用户登录模块
    tc.User = {
        //是否已初始化过登录状态
        isInit: false,
        //用于存放登录状态确认后执行的函数列表，按序执行
        callBacks: [],
        //是否已获取原始手机号
        isGetPh: false,
        //用于存放使用原始手机号的执行函数列表，按序执行
        rawPhCbs: [],
        //触发用户登录状态确认后的回调函数，按序执行
        trigCbs: function () {
            for (var i = 0; i < this.callBacks.length; i++) {
                this.callBacks[i]();
            }
            this.callBacks = [];//全部执行后清空回调函数列表
        },
        //用户登录状态初始化
        init: function () {
            var fn = tc.DynamicFunc.getFuncName(function (res) {
                tc.User.isInit = true;
                tc.isLogined = res.Islogin;
                tc.loginUserId = res.LoanUserID;
                tc.loginUserName = res.UserName;
                tc.loginUserShowName = res.UserName;
                tc.loginUserPhone = res.Telphone;
                tc.loginUserImg = res.HeadPortrait;
                tc.User.trigCbs();
            }), url = 'https://' + tc.domain.taochePCHome + '/User/GetCurrentUserIdentity?callback=' + fn;
            $.getScript(url).fail(function () {
                tc.User.isInit = true;
                tc.User.trigCbs();
            });
            //5秒后如果尚未初始化完成视为未登录
            setTimeout(function () {
                if (tc.User.isInit) return;
                tc.User.isInit = true;
                tc.User.trigCbs();
            }, 5000);
        },
        //用户登录后置操作，对于某些必须依赖于用户登录状态的操作，可以通过此方法注册，以保证在用户登录状态确认后才会触发这些操作
        afterCheckLogin: function (func) {
            if (!tc.isFunc(func)) return;
            if (this.isInit && this.callBacks.length == 0) {//已经初始化过登录状态并且不存在未执行的函数则直接执行此函数
                func();
                return;
            }
            //否则将函数追加到待执行列表中
            this.callBacks.push(func);
        },
        //执行一个需要使用用户原始手机号的函数，此函数调用时会传入用户原始手机号(未登录则传入'')作为参数
        runFuncNeedRawPhone: function (func) {//参数func格式为:function(rawphone){alert(rawphone)}
            if (!tc.isFunc(func)) return;
            if (tc.loginUserRawPhone !== null) {//已存在原始手机号
                if (this.rawPhCbs.length == 0) {//不存在未执行的函数则直接执行
                    func(tc.loginUserRawPhone);
                    return;
                }
            } else {
                if (this.isInit && tc.loginUserId == 0) {//已经初始化完毕且尚未登录，直接执行
                    tc.loginUserRawPhone = '';
                    func('');
                    return;
                }
            }
            //将函数追加到待执行列表中
            this.rawPhCbs.push(func);
            if (!this.isGetPh) {//尚未获取原始手机号，触发请求
                this.isGetPh = true;
                var that = this;
                tc.jsonp('//' + tc.domain.taochePC + '/ajax/jsonp/getloginuser.ashx', function (res) {
                    var userSame = true;//当前登录用户与页面加载时登录用户是否一致
                    if (!!res && res.Status == 100) {
                        tc.loginUserRawPhone = res.Data.Phone;
                        if (tc.loginUserId > 0 && tc.loginUserId != res.Data.UserId) {
                            userSame = false;
                        }
                    } else {
                        tc.loginUserRawPhone = '';
                    }
                    for (var i = 0; i < that.rawPhCbs.length; i++) {
                        that.rawPhCbs[i](tc.loginUserRawPhone);
                    }
                    that.rawPhCbs = [];//全部执行后清空回调函数列表

                    //对于获取原始手机号时已发现与已登录账号不一致的情况，刷新登录状态，但对应页面dom的刷新暂时无法触发
                    if (!userSame) {
                        that.refreshLoginStatus();
                    }
                });
            }
        },
        //刷新登录状态，不刷新原始手机号信息
        _refresh: function (afterRefreshFunc) {
            this.isInit = false;
            tc.isLogined = false;
            tc.loginUserId = 0;
            tc.loginUserName = null;
            tc.loginUserShowName = null;
            tc.loginUserPhone = null;
            tc.loginUserImg = null;
            this.afterCheckLogin(afterRefreshFunc);
            this.init();
        },
        //刷新登录状态，包括原始手机号信息
        refreshLoginStatus: function (afterRefreshFunc) {
            this.isGetPh = false;
            tc.loginUserRawPhone = null;
            this._refresh(afterRefreshFunc);
        },
        //即时获取当前登录的原始手机号，函数 func 调用时传入原始手机号或空字符串
        getLoginRawPhone: function (func) {
            tc.jsonp('//' + tc.domain.taochePC + '/ajax/jsonp/getloginuser.ashx', function (res) {
                if (!!res && res.Status == 100) {
                    func(res.Data.Phone);
                } else {
                    func('');
                }
            });
        }
    };
    //用户登录后置操作，对于某些必须依赖于用户登录状态的操作，可以通过此方法注册，以保证在用户登录状态确认后才会触发这些操作；此方法实际映射到 Taoche.User.afterCheckLogin 方法，此处只是对外提供一个方便的调用入口。
    tc.afterCheckLogin = function (func) { tc.User.afterCheckLogin(func); };
    //同上，对外提供方便入口
    tc.runFuncNeedRawPhone = function (func) { tc.User.runFuncNeedRawPhone(func); }
    //初始化登录信息
    tc.User.init();
})();
