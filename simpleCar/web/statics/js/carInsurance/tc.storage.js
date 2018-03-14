/* Taoche对象扩展客户端存储功能，实现localStorage和Cookie。
 * 依赖脚本：tc.datetime.js
 * by：yuhf */
/*
Author:刘建伟
Time:2017年2月27日14:23:39
Des：添加getCookieDecode 方法
         移动端使用，PC端不要用，有兼容性问题
*/
; (function () {
    var tc = window.Taoche || {};//所有代码封装到 Taoche 对象下，页面内可直接使用如 Taoche.Cookie.getCookie()
    window.Taoche = tc;

    //客户端存储，包括cookie实现和本地存储实现
    tc.Storage = {
        //判断当前浏览器是否支持本地存储并且本地存储可用
        canLocal: function () {
            if (!(window.localStorage)) return false;
            try {
                var key = '_testkey_A0';
                localStorage.setItem(key, '1');
                localStorage.removeItem(key);
                return true;
            } catch (e) {
                return false;
            }
        },
        //bug 浏览器阻止cookie情况下 js报错页面失效
        //canLocal: function () {
        //    if (!(window.localStorage)) return false;
        //    try {
        //        var key = '_testkey_A0';
        //        localStorage.setItem(key, '1');
        //        localStorage.removeItem(key);
        //        return true;
        //    } catch (e) {
        //        return false;
        //    }
        //}(),
        //使用本地存储存储信息，本地存储不支持过期时间，目前将过期时间戳放在存储信息的前面，读取时做处理实现过期
        setLocal: function (key, value, expHours) {
            var ts = tc.DateTime.addHours(expHours).getTime();
            try { localStorage.setItem(key, '' + ts + ',' + value); } catch (E) { }
        },
        //从本地存储中获取信息
        getLocal: function (key) {
            try {
                var s = localStorage.getItem(key), idx, ts;
                if (s == null) return null;
                idx = s.indexOf(',');
                if (idx < 0) return s;
                ts = s.substr(0, idx);
                if (isNaN(ts)) return s;
                if (new Date(parseInt(ts)) <= new Date()) {//存储时设置的时间戳小于当前时间，表示已过期，此时将值删除，并返回null
                    localStorage.removeItem(key);
                    return null;
                }
                return s.substr(idx + 1, s.length - idx - 1);
            } catch (e) { return null; }
        },
        //从本地存储中移除指定名称的项
        removeLocal: function (key) {
            try { localStorage.removeItem(key); } catch (E) { }
        },
        //使用cookie存储信息
        setCookie: function (key, value, expHours, path, domain, secure) {
            document.cookie = key + "=" + escape(value) + ((expHours) ? "; expires=" + tc.DateTime.addHours(expHours).toGMTString() : "") + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + ((secure) ? "; secure" : "")
        },
        //从cookie中获取信息
        getCookie: function (key) {
            var cks = document.cookie;
            if (cks.length > 0) {
                var c_start = cks.indexOf(key + "="), c_end;
                if (c_start != -1) {
                    c_start = c_start + key.length + 1;
                    c_end = cks.indexOf(";", c_start)
                    if (c_end == -1) c_end = cks.length;
                    return unescape(cks.substring(c_start, c_end))
                }
            }
            return "";
        },
        getCookieDecode: function (name) {
            var arg = name + "=",
                 alen = arg.length,
                clen = document.cookie.length,
                 i = 0,
                 that = this;
            while (i < clen) {
                var j = i + alen;
                if (document.cookie.substring(i, j) == arg) {
                    return that.getCookieValDecode(j);
                }
                i = document.cookie.indexOf(" ", i) + 1;
                if (i == 0) break;
            }
            return "";
        },
        //从cookie中移除指定名称的项
        removeCookie: function (key, path, domain) {
            document.cookie = key + "=" + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
        },
        //自动选择如何存储信息，优先使用本地存储，不可用时使用cookie
        setValue: function (key, value, expHours, path, domain, secure) {
            if (expHours && !isNaN(expHours) && parseInt(expHours) > 0) {//对于给定过期时间的项，优先本地，然后cookie
                if (this.canLocal) { this.setLocal(key, value, expHours); }
                else { this.setCookie(key, value, expHours, path, domain, secure); }
            } else {//对于未给定过期时间的项，实际目的是随浏览器关闭而失效，所以直接已cookie存储
                this.setCookie(key, value, expHours, path, domain, secure);
            }
        },
        //自动选择如何获取信息，优先尝试从本地存储获取，不存在尝试从cookie获取
        getValue: function (key) {
            var v = null;
            if (this.canLocal) { v = this.getLocal(key); }
            if (v == null) { v = this.getCookie(key); }
            return v;
        },
        //从本地存储及Cookie中移除指定名称的项
        removeValue: function (key, path, domain) {
            if (this.canLocal) { this.removeLocal(key); }
            this.removeCookie(key, path, domain);
        },
    };
    //兼容原来旧脚本，提供直接操作 Cookie 的方法
    window.Cookie = {
        getExpDate: function (days, hours, minutes) {
            var expDate = new Date();
            if (typeof days == "number" && typeof hours == "number" &&
                typeof hours == "number") {
                expDate.setDate(expDate.getDate() + parseInt(days));
                expDate.setHours(expDate.getHours() + parseInt(hours));
                expDate.setMinutes(expDate.getMinutes() + parseInt(minutes));
                return expDate.toGMTString();
            }
        },
        getCookie: function (name) {
            return tc.Storage.getCookie(name);
        },
        setCookie: function (name, value, expires, path, domain, secure) {
            document.cookie = name + "=" + escape(value) +
                ((expires) ? "; expires=" + expires : "") +
                ((path) ? "; path=" + path : "") +
                ((domain) ? "; domain=" + domain : "") +
                ((secure) ? "; secure" : "");
        },
        deleteCookie: function (name, path, domain) {
            if (this.getCookie(name)) {
                document.cookie = name + "=" +
                    ((path) ? "; path=" + path : "") +
                    ((domain) ? "; domain=" + domain : "") +
                    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
            }
        }
    };
})();
