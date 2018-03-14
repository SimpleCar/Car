!function () {
    function Beacon() {
        this.initOption = util.extend({
            clk: !0,
            pv: !0
        }, window.BEACON_INIT || {}), this.cookie(cookieName) || this.cookie(cookieName, this.uuid()), this.cookie(vvidCookieName) || this.cookie(vvidCookieName, this.uuid(), new Date(+new Date + 18e5)), this.init()
    }

    var util = {
            getUrlParam: function (name) {
                var lowerName = name.toLowerCase(), lowerSearch = window.location.search.substr(1).toLowerCase(),
                    reg = new RegExp("(^|&)" + lowerName + "=([^&]*)(&|$)"), r = lowerSearch.match(reg);
                return null != r ? unescape(r[2]) : null
            }, extend: function () {
                var target = arguments[0], arr = Array.prototype.slice.call(arguments, 1);
                return this.each(arr, function (item) {
                    for (var key in item) target[key] = item[key]
                }), target
            }, each: function (arr, fn) {
                for (var key = 0; key < arr.length; key++) fn(arr[key], key)
            }, text: function (elem, count) {
                var nodeType = elem.nodeType, ret = "";
                if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
                    if ("string" == typeof elem.textContent) return elem.textContent;
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += this.text(elem)
                } else if (3 === nodeType || 4 === nodeType) return elem.nodeValue;
                return ret
            }, param: function (obj) {
                var ret = "";
                for (var i in obj) ret += "&" + i + "=" + window.encodeURIComponent(obj[i]);
                return ret.replace(/^&/, "")
            }, bindEvent: function (elem, type, fn) {
                elem.addEventListener ? elem.addEventListener(type, fn, !0) : elem.attachEvent && elem.attachEvent("on" + type, fn)
            }, closest: function (el, tagName) {
                do {
                    if (el.nodeName.toLowerCase() === tagName) return el
                } while (el = el && el.parentNode);
                return !1
            }, indexOf: function (el, arr) {
                for (var i = 0; i < arr.length; i++) if (el === arr[i]) return i;
                return -1
            }, getSiblings: function (el, context) {
                if (!context) return [];
                var $ = window.Zepto || window.jQuery || window.$;
                return $ ? $(el, context) : context.querySelectorAll ? context.querySelectorAll(el) : []
            }, getPosition: function (el) {
                if (el && el.getBoundingClientRect) {
                    var pos = el.getBoundingClientRect(), scrollLeft = 0, scrollTop = 0;
                    if ("undefined" != typeof window.pageXOffset) scrollLeft = window.pageXOffset, scrollTop = window.pageYOffset; else {
                        var target = document.documentElement || document.body.parentNode;
                        "number" != typeof target.scrollLeft && (target = document.body), scrollLeft = target.scrollLeft, scrollTop = target.scrollTop
                    }
                    return parseInt(pos.left + scrollLeft) + "," + parseInt(pos.top + scrollTop)
                }
                return "0,0"
            }
        }, domain = /taoche|jd.com/.test(document.domain) ? "dt.taoche.com" : "dt.daikuan.com", cookieName = "_utrace",
        vvidCookieName = "vvid", supportLocalStorage = !!window.localStorage;
    if (supportLocalStorage) try {
        window.localStorage._localStorageSupport = !0
    } catch (e) {
        supportLocalStorage = !1
    }
    var config = {
        url: document.location.protocol + "//" + domain + "/dt.gif",
        errUrl: document.location.protocol + "//" + domain + "/rd.gif",
        evtUrl: document.location.protocol + "//" + domain + "/dtevt.gif",
        cmUrl: document.location.protocol + "//" + domain + "/api/v1/cm.gif"
    };
    Beacon.prototype.version = "5.4.1", Beacon.prototype.url = config.url, Beacon.prototype.errUrl = config.errUrl, Beacon.prototype.init = function () {
        this.requestCM(), this.resetSession(), this.initData(), this.initOption.clk && this.bindClk(), this.initOption.pv && (this.send("pv"), this.bindPv()), this.initOption.trigger && this[this.initOption.trigger.type] && this[this.initOption.trigger.type](this.initOption.trigger.msg), this.cache = []
    }, Beacon.prototype.requestCM = function () {
        (new Image).src = config.cmUrl
    }, Beacon.prototype.resetSession = function () {
        this.session = +new Date
    }, Beacon.prototype.getSessionStatus = function () {
        return !(+new Date - this.session >= 18e5) || (this.resetSession(), !1)
    }, Beacon.prototype.initData = function () {
        this.data = util.extend({
            dtver: this.version,
            uid: this.cookie(cookieName),
            cookieon: window.navigator.cookieEnabled,
            brow_char: (document.charset || "").toLowerCase(),
            latandlong: "",
            scr: this.GetScreenSize(),
            title: document.title,
            lang: (navigator.language || navigator.browserLanguage || "").toLowerCase(),
            requrl: window.location.href,
            refurl: document.referrer || ""
        }, this.initOption.data || {})
    }, Beacon.prototype.GetScreenSize = function () {
        return screen.availWidth + "*" + screen.availHeight
    }, Beacon.prototype.formatParams = function (params) {
        var s = [];
        for (var k in params) s.push(k + "=" + encodeURIComponent(params[k]));
        return s.join("&")
    }, Beacon.prototype.bindClk = function () {
        var that = this;
        util.bindEvent(document.body, "click", function () {
            var e = window.event || arguments[0], target = e.target || e.srcElement;
            if (target && that.detectElement(target)) {
                var element = util.closest(target, "a") || target, data = {
                    etype: "clk",
                    etag: element.tagName.toLowerCase(),
                    eid: that.getXpath(element),
                    etxt: util.text(element).replace(/\s/g, "").substring(0, 100),
                    coordinate: util.getPosition(element)
                };
                util.indexOf(element, that.cache) < 0 && (that.send(data), that.setCache(element))
            }
        })
    }, Beacon.prototype.bindPv = function () {
        var that = this;
        "visibilityState" in document && "hidden" in document && document.addEventListener("visibilitychange", function () {
            document.hidden || that.getSessionStatus() || setTimeout(function () {
                document.hidden || that.send("pv")
            }, 3e3)
        })
    }, Beacon.prototype.cookie = function (key, value, expires) {
        if (arguments.length > 1) {
            expires || (expires = new Date).setDate(expires.getDate() + 999), supportLocalStorage && (window.localStorage[key] = value);
            var domain = document.domain.match(/\.[^\.]+\.[^\.]+$/);
            return domain = domain && domain.length ? domain[0] : "." + document.domain, document.cookie = [key, "=", value, ";expires=" + expires.toUTCString(), ";path=/", ";domain=" + domain].join("")
        }
        var result,
            cookieValue = (result = new RegExp("(?:^|; )" + key + "=([^;]*)").exec(document.cookie)) ? result[1] : null;
        if (supportLocalStorage && key === cookieName) {
            var storageValue = window.localStorage[key];
            return !cookieValue && storageValue && this.cookie(key, storageValue), cookieValue && !storageValue && (window.localStorage[key] = cookieValue), cookieValue || storageValue
        }
        return cookieValue
    }, Beacon.prototype.send = function (params, msg) {
        params = "string" == typeof params ? {etype: params} : params || {}, "object" == typeof msg ? util.extend(params, msg) : msg && (params.msg = msg), (new Image).src = (params.type ? this.errUrl : this.url) + "?" + this.formatParams(util.extend({t: +new Date + Math.random()}, this.data, params))
    }, Beacon.prototype.getXpath = function (element) {
        var similar, parent = element && element.parentElement, hasId = element.id,
            path = hasId ? "#" + element.id : element.tagName.toLowerCase();
        return hasId || (path += element.className ? "." + element.className.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ").split(" ").join(".") : "", path += (similar = util.getSiblings(path, parent)).length > 1 ? "[" + util.indexOf(element, similar) + "]" : ""), parent ? element === document.body ? "" : hasId ? "/" + path : this.getXpath(parent) + "/" + path : path
    }, Beacon.prototype.detectElement = function (element) {
        return "BODY" !== element.tagName
    }, Beacon.prototype.uuid = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = 16 * Math.random() | 0;
            return ("x" === c ? r : 3 & r | 8).toString(16)
        })
    }, Beacon.prototype.setCache = function (element) {
        var that = this;
        this.cache.push(element), setTimeout(function () {
            that.cache.splice(util.indexOf(element, that.cache), 1)
        }, 3e3)
    }, Beacon.prototype.info = function (msg) {
        this.send({type: 1}, msg || "")
    }, Beacon.prototype.error = function (msg) {
        this.send({type: 2}, msg || "")
    }, Beacon.prototype.debug = function (msg) {
        this.send({type: 3}, msg || "")
    }, Beacon.prototype.evt = {
        api: config.evtUrl, send: function (btype, evtname, ex1, ex2, ex3) {
            var sourceData = window.bc.data, data = {
                evtname: evtname,
                btype: btype,
                ctype: /^m\.|\.m\./.test(document.domain) ? "m" : "pc",
                ex1: ex1 || "",
                ex2: ex2 || "",
                ex3: ex3 || "",
                uid: sourceData.uid,
                t: +new Date
            };
            sourceData.pid && (data.pid = sourceData.pid), (new Image).src = this.api + "?" + util.param(data)
        }
    }, util.each(["clk", "pv", "exp"], function (etype) {
        Beacon.prototype[etype] = function (data) {
            var params = data || {};
            params.etype = etype, this.send(params)
        }
    }), window.beacon = window.bc = new Beacon
}();