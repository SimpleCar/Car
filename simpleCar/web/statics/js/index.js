!function (e) {
    function n(t) {
        if (r[t]) return r[t].exports;
        var o = r[t] = {exports: {}, id: t, loaded: !1};
        return e[t].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
    }

    var r = {};
    return n.m = e, n.c = r, n.p = "/taoche/", n(0)
}([function (e, n) {
    "use strict";

    function r(e) {
        var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), r = window.location.search.substr(1).match(n);
        return null != r ? unescape(r[2]) : null
    }

    for (var t = !1, o = navigator.userAgent, a = ["Windows CE", "iPod", "Symbian", "iPhone", "BlackBerry", "Android", "Windows Phone"], i = 0, l = a.length; i < l; i++) if (o.indexOf(a[i]) !== -1) {
        if (t = !0, "newmweb" != r("from")) {
            for (var c = "", s = document.getElementsByTagName("link"), f = 0; f < s.length; f++) "alternate" == s[f].rel && (c = s[f].href);
            var u = c, d = u.split("/").length;
            d > 5 ? location.href = c : location.href = c + "?from=newpcweb"
        }
        break
    }
}]);