(function () {
    var h = {}, mt = {}, c = {
        id: "b43ce35f868b496d8c3af5108a539019",
        dm: ["taoche.com"],
        js: "tongji.baidu.com/hm-web/js/",
        etrk: [],
        icon: '',
        ctrk: false,
        align: -1,
        nv: -1,
        vdur: 1800000,
        age: 31536000000,
        rec: 0,
        rp: [],
        trust: 0,
        vcard: 0,
        qiao: 0,
        lxb: 0,
        conv: 0,
        med: 0,
        cvcc: {id: /wpa|swt|qq_kefu|launchBtn/i, q: /swt|zoos|openqq|tencent:\/\/|qq\.(com|htm)|\/chatpre\.aspx/i},
        cvcf: ['btnSendMsg', 'btnViewCarList', 'lnkSubmit'],
        apps: ''
    };
    var r = void 0, s = !0, t = null, u = !1;
    mt.cookie = {};
    mt.cookie.set = function (a, b, d) {
        var e;
        d.H && (e = new Date, e.setTime(e.getTime() + d.H));
        document.cookie = a + "=" + b + (d.domain ? "; domain=" + d.domain : "") + (d.path ? "; path=" + d.path : "") + (e ? "; expires=" + e.toGMTString() : "") + (d.ib ? "; secure" : "")
    };
    mt.cookie.get = function (a) {
        return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : t
    };
    mt.h = {};
    mt.h.pa = function (a) {
        return document.getElementById(a)
    };
    mt.h.J = function (a, b) {
        var d = [], e = [];
        if (!a) return e;
        for (; a.parentNode != t;) {
            for (var g = 0, n = 0, l = a.parentNode.childNodes.length, p = 0; p < l; p++) {
                var f = a.parentNode.childNodes[p];
                if (f.nodeName === a.nodeName && (g++, f === a && (n = g), 0 < n && 1 < g)) break
            }
            if ((l = "" !== a.id) && b) {
                d.unshift("#" + encodeURIComponent(a.id));
                break
            } else l && (l = "#" + encodeURIComponent(a.id), l = 0 < d.length ? l + ">" + d.join(">") : l, e.push(l)), d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < g ? "[" + n + "]" : ""));
            a = a.parentNode
        }
        e.push(d.join(">"));
        return e
    };
    mt.h.ab = function (a) {
        return (a = mt.h.J(a, s)) && a.length ? String(a[0]) : ""
    };
    mt.h.$a = function (a) {
        return mt.h.J(a, u)
    };
    mt.h.Ya = function (a, b) {
        for (b = b.toUpperCase(); (a = a.parentNode) && 1 == a.nodeType;) if (a.tagName == b) return a;
        return t
    };
    mt.h.qa = function (a) {
        return 9 === a.nodeType ? a : a.ownerDocument || a.document
    };
    mt.h.Za = function (a) {
        var b = {top: 0, left: 0};
        if (!a) return b;
        var d = mt.h.qa(a).documentElement;
        "undefined" !== typeof a.getBoundingClientRect && (b = a.getBoundingClientRect());
        return {
            top: b.top + (window.pageYOffset || d.scrollTop) - (d.clientTop || 0),
            left: b.left + (window.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
        }
    };
    (mt.h.Fa = function () {
        function a() {
            if (!a.A) {
                a.A = s;
                for (var b = 0, d = e.length; b < d; b++) e[b]()
            }
        }

        function b() {
            try {
                document.documentElement.doScroll("left")
            } catch (d) {
                setTimeout(b, 1);
                return
            }
            a()
        }

        var d = u, e = [], g;
        document.addEventListener ? g = function () {
            document.removeEventListener("DOMContentLoaded", g, u);
            a()
        } : document.attachEvent && (g = function () {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", g), a())
        });
        (function () {
            if (!d) if (d = s, "complete" === document.readyState) a.A = s; else if (document.addEventListener) document.addEventListener("DOMContentLoaded",
                g, u), window.addEventListener("load", a, u); else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", g);
                window.attachEvent("onload", a);
                var e = u;
                try {
                    e = window.frameElement == t
                } catch (l) {
                }
                document.documentElement.doScroll && e && b()
            }
        })();
        return function (b) {
            a.A ? b() : e.push(b)
        }
    }()).A = u;
    mt.event = {};
    mt.event.c = function (a, b, d) {
        a.attachEvent ? a.attachEvent("on" + b, function (b) {
            d.call(a, b)
        }) : a.addEventListener && a.addEventListener(b, d, u)
    };
    mt.event.preventDefault = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = u
    };
    (function () {
        var a = mt.event;
        mt.f = {};
        mt.f.Ea = /msie (\d+\.\d+)/i.test(navigator.userAgent);
        mt.f.Ca = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : r;
        mt.f.cookieEnabled = navigator.cookieEnabled;
        mt.f.javaEnabled = navigator.javaEnabled();
        mt.f.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
        mt.f.Ha = (window.screen.width || 0) + "x" + (window.screen.height || 0);
        mt.f.colorDepth = window.screen.colorDepth || 0;
        mt.f.K = function () {
            var a;
            a = a || document;
            return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
        };
        mt.f.L = function () {
            var a = document;
            return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10)
        };
        mt.f.orientation = 0;
        (function () {
            function b() {
                var a = 0;
                window.orientation !== r && (a = window.orientation);
                screen && (screen.orientation && screen.orientation.angle !== r) && (a = screen.orientation.angle);
                mt.f.orientation = a
            }

            b();
            a.c(window, "orientationchange", b)
        })();
        return mt.f
    })();
    mt.l = {};
    mt.l.parse = function () {
        return (new Function('return (" + source + ")'))()
    };
    mt.l.stringify = function () {
        function a(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
                var b = d[a];
                if (b) return b;
                b = a.charCodeAt();
                return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
            }));
            return '"' + a + '"'
        }

        function b(a) {
            return 10 > a ? "0" + a : a
        }

        var d = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return function (d) {
            switch (typeof d) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(d) ? String(d) : "null";
                case "string":
                    return a(d);
                case "boolean":
                    return String(d);
                default:
                    if (d === t) return "null";
                    if (d instanceof Array) {
                        var g = ["["], n = d.length, l, p, f;
                        for (p = 0; p < n; p++) switch (f = d[p], typeof f) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                l && g.push(","), g.push(mt.l.stringify(f)), l = 1
                        }
                        g.push("]");
                        return g.join("")
                    }
                    if (d instanceof Date) return '"' + d.getFullYear() + "-" + b(d.getMonth() + 1) + "-" + b(d.getDate()) + "T" + b(d.getHours()) + ":" + b(d.getMinutes()) + ":" + b(d.getSeconds()) + '"';
                    l = ["{"];
                    p = mt.l.stringify;
                    for (n in d) if (Object.prototype.hasOwnProperty.call(d, n)) switch (f =
                        d[n], typeof f) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            g && l.push(","), g = 1, l.push(p(n) + ":" + p(f))
                    }
                    l.push("}");
                    return l.join("")
            }
        }
    }();
    mt.lang = {};
    mt.lang.d = function (a, b) {
        return "[object " + b + "]" === {}.toString.call(a)
    };
    mt.lang.eb = function (a) {
        return mt.lang.d(a, "Number") && isFinite(a)
    };
    mt.lang.gb = function (a) {
        return mt.lang.d(a, "String")
    };
    mt.lang.j = function (a) {
        return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
    };
    mt.localStorage = {};
    mt.localStorage.C = function () {
        if (!mt.localStorage.g) try {
            mt.localStorage.g = document.createElement("input"), mt.localStorage.g.type = "hidden", mt.localStorage.g.style.display = "none", mt.localStorage.g.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.g)
        } catch (a) {
            return u
        }
        return s
    };
    mt.localStorage.set = function (a, b, d) {
        var e = new Date;
        e.setTime(e.getTime() + d || 31536E6);
        try {
            window.localStorage ? (b = e.getTime() + "|" + b, window.localStorage.setItem(a, b)) : mt.localStorage.C() && (mt.localStorage.g.expires = e.toUTCString(), mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.setAttribute(a, b), mt.localStorage.g.save(document.location.hostname))
        } catch (g) {
        }
    };
    mt.localStorage.get = function (a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var b = a.indexOf("|"), d = a.substring(0, b) - 0;
                if (d && d > (new Date).getTime()) return a.substring(b + 1)
            }
        } else if (mt.localStorage.C()) try {
            return mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.getAttribute(a)
        } catch (e) {
        }
        return t
    };
    mt.localStorage.remove = function (a) {
        if (window.localStorage) window.localStorage.removeItem(a); else if (mt.localStorage.C()) try {
            mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.removeAttribute(a), mt.localStorage.g.save(document.location.hostname)
        } catch (b) {
        }
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function (a, b) {
        if (window.sessionStorage) try {
            window.sessionStorage.setItem(a, b)
        } catch (d) {
        }
    };
    mt.sessionStorage.get = function (a) {
        return window.sessionStorage ? window.sessionStorage.getItem(a) : t
    };
    mt.sessionStorage.remove = function (a) {
        window.sessionStorage && window.sessionStorage.removeItem(a)
    };
    mt.aa = {};
    mt.aa.log = function (a, b) {
        var d = new Image, e = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[e] = d;
        d.onload = d.onerror = d.onabort = function () {
            d.onload = d.onerror = d.onabort = t;
            d = window[e] = t;
            b && b(a)
        };
        d.src = a
    };
    mt.S = {};
    mt.S.va = function () {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var b = navigator.plugins["Shockwave Flash"];
            b && b.description && (a = b.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject) try {
            if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) (a = b.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (d) {
        }
        return a
    };
    mt.S.Xa = function (a, b, d, e, g) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + d + '" height="' + e + '"><param name="movie" value="' + b + '" /><param name="flashvars" value="' + (g || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + d + '" height="' + e + '" src="' + b + '" flashvars="' + (g || "") + '" allowscriptaccess="always" /></object>'
    };
    mt.url = {};
    mt.url.i = function (a, b) {
        var d = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
        return d ? d[3] : t
    };
    mt.url.bb = function (a) {
        return (a = a.match(/^(https?:)\/\//)) ? a[1] : t
    };
    mt.url.sa = function (a) {
        return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : t
    };
    mt.url.W = function (a) {
        return (a = mt.url.sa(a)) ? a.replace(/:\d+$/, "") : a
    };
    mt.url.J = function (a) {
        return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : t
    };
    (function () {
        function a() {
            for (var a = u, d = document.getElementsByTagName("script"), e = d.length, e = 100 < e ? 100 : e, g = 0; g < e; g++) {
                var n = d[g].src;
                if (n && 0 === n.indexOf("https://hm.baidu.com/h")) {
                    a = s;
                    break
                }
            }
            return a
        }

        return h.oa = a
    })();
    var A = h.oa;
    h.D = {
        cb: "http://tongji.baidu.com/hm-web/welcome/ico",
        $: "hm.baidu.com/hm.gif",
        ea: "baidu.com",
        za: "hmmd",
        Aa: "hmpl",
        Qa: "utm_medium",
        ya: "hmkw",
        Sa: "utm_term",
        wa: "hmci",
        Pa: "utm_content",
        Ba: "hmsr",
        Ra: "utm_source",
        xa: "hmcu",
        Oa: "utm_campaign",
        r: 0,
        m: Math.round(+new Date / 1E3),
        U: Math.round(+new Date / 1E3) % 65535,
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        O: A() || "https:" === document.location.protocol ? "https:" : "http:",
        fb: 0,
        Ua: 6E5,
        hb: 5E3,
        Va: 5,
        Wa: 1024,
        Ta: 1,
        P: 2147483647,
        ba: "bs cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt".split(" ")
    };
    (function () {
        var a = {
            p: {}, c: function (a, d) {
                this.p[a] = this.p[a] || [];
                this.p[a].push(d)
            }, w: function (a, d) {
                this.p[a] = this.p[a] || [];
                for (var e = this.p[a].length, g = 0; g < e; g++) this.p[a][g](d)
            }
        };
        return h.G = a
    })();
    (function () {
        function a(a, e) {
            var g = document.createElement("script");
            g.charset = "utf-8";
            b.d(e, "Function") && (g.readyState ? g.onreadystatechange = function () {
                if ("loaded" === g.readyState || "complete" === g.readyState) g.onreadystatechange = t, e()
            } : g.onload = function () {
                e()
            });
            g.src = a;
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(g, n)
        }

        var b = mt.lang;
        return h.load = a
    })();
    (function () {
        function a() {
            function a(d) {
                function b() {
                }

                for (var k = s, e = 0, n = 0, m = t, q = t, x = d.length, y = 0, z = t, e = 0; e < x; e++) if (m = d[e], m.chromeVer === l) {
                    k = s;
                    q = m.tests;
                    y = q.length;
                    for (n = 0; n < y; n++) if (b = g[q[n].name], b() !== q[n].expect) {
                        k = u;
                        break
                    }
                    if (y && k) {
                        z = {name: "360browser", type: m.type, version: m.ver};
                        break
                    }
                }
                return z
            }

            var b = [];
            b.push({ver: "8.3", type: "fast", tests: [{name: "seamlessiframe", expect: 1}], chromeVer: "42"});
            var g = {
                pointerevents: function () {
                    return "maxTouchPoints" in window.navigator ? 1 : "msMaxTouchPoints" in window.navigator ||
                    "mozMaxTouchPoints" in window.navigator || "webkitMaxTouchPoints" in window.navigator ? 9 : 0
                }, webgl3D: function () {
                    for (var a = "webgl ms-webgl experimental-webgl moz-webgl opera-3d webkit-3d ms-3d 3d".split(" "), d = a.length, k = "", b = document.createElement("canvas"), e = u, m = 0; m < d; m++) try {
                        if (b.getContext(a[m])) {
                            e = s;
                            k = a[m];
                            break
                        }
                    } catch (q) {
                    }
                    return e ? "webgl" === k ? 1 : 9 : 0
                }, seamlessiframe: function () {
                    return "seamless" in document.createElement("iframe") ? 1 : 0
                }, speechsynthesis: function () {
                    return "speechSynthesis" in window ? 1 : "webkitSpeechSynthesis" in
                    window || "mozSpeechSynthesis" in window || "oSpeechSynthesis" in window || "msSpeechSynthesis" in window ? 9 : 0
                }
            }, n = t, l = function () {
                var a = navigator.userAgent.toLowerCase().match(/chrome\/(\d+)/i);
                return a ? a[1] : "-1"
            }();
            "-1" !== l && (n = a(b));
            return n
        }

        var b = function () {
            var d = navigator.userAgent.toLowerCase();
            if (0 <= d.indexOf("chrome")) {
                var d = (d = d.match(/chrome\/(\d+)/)) ? d[1] : -1, b = window.document,
                    g = "track" in b.createElement("track"), b = "scoped" in b.createElement("style"),
                    n = "v8Locale" in window, l = document.createElement("canvas"),
                    p = "seamless" in document.createElement("iframe"), f = u;
                try {
                    l.getContext("webgl") && (f = s)
                } catch (k) {
                }
                if (l = a()) return "fast" === l.type ? 7 : 1;
                if (!f && "31" === d) return 1;
                if (!(p = (p || !f) && "38" === d)) if (p = g) if (p = !b) if (p = !n) {
                    var v;
                    a:{
                        p = window.navigator.mimeTypes;
                        for (v in p) if ("application/vnd.chromium.remoting-viewer" === p[v].type) {
                            v = s;
                            break a
                        }
                        v = u
                    }
                    p = !v && 46 > +d
                }
                if (p) return 7;
                if (g && b && n) return 1
            }
            return -1
        }();
        return h.ga = b
    })();
    (function () {
        function a() {
            return function () {
                h.b.a.nv = 0;
                h.b.a.st = 4;
                h.b.a.et = 3;
                h.b.a.ep = h.F.ta() + "," + h.F.ra();
                h.b.k()
            }
        }

        function b() {
            clearTimeout(z);
            var a;
            x && (a = "visible" == document[x]);
            y && (a = !document[y]);
            p = "undefined" == typeof a ? s : a;
            if ((!l || !f) && p && k) q = s, w = +new Date; else if (l && f && (!p || !k)) q = u, m += +new Date - w;
            l = p;
            f = k;
            z = setTimeout(b, 100)
        }

        function d(a) {
            var k = document, m = "";
            if (a in k) m = a; else for (var d = ["webkit", "ms", "moz", "o"], b = 0; b < d.length; b++) {
                var q = d[b] + a.charAt(0).toUpperCase() + a.slice(1);
                if (q in k) {
                    m =
                        q;
                    break
                }
            }
            return m
        }

        function e(a) {
            if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) k = "focus" == a.type || "focusin" == a.type ? s : u, b()
        }

        var g = mt.event, n = h.G, l = s, p = s, f = s, k = s, v = +new Date, w = v, m = 0, q = s,
            x = d("visibilityState"), y = d("hidden"), z;
        b();
        (function () {
            var a = x.replace(/[vV]isibilityState/, "visibilitychange");
            g.c(document, a, b);
            g.c(window, "pageshow", b);
            g.c(window, "pagehide", b);
            "object" == typeof document.onfocusin ? (g.c(document, "focusin", e), g.c(document, "focusout", e)) : (g.c(window, "focus", e),
                g.c(window, "blur", e))
        })();
        h.F = {
            ta: function () {
                return +new Date - v
            }, ra: function () {
                return q ? +new Date - w + m : m
            }
        };
        n.c("pv-b", function () {
            g.c(window, "unload", a())
        });
        return h.F
    })();
    (function () {
        var a = mt.lang, b = h.D, d = h.load, e = {
            Da: function (g) {
                if ((window._dxt === r || a.d(window._dxt, "Array")) && "undefined" !== typeof h.b) {
                    var e = h.b.I();
                    d([b.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(e)].join(""), g)
                }
            }, Na: function (d) {
                if (a.d(d, "String") || a.d(d, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", d])
            }
        };
        return h.ia = e
    })();
    (function () {
        function a(a, d, b, m) {
            if (!(a === r || d === r || m === r)) {
                if ("" === a) return [d, b, m].join("*");
                a = String(a).split("!");
                for (var q, f = u, y = 0; y < a.length; y++) if (q = a[y].split("*"), String(d) === q[0]) {
                    q[1] = b;
                    q[2] = m;
                    a[y] = q.join("*");
                    f = s;
                    break
                }
                f || a.push([d, b, m].join("*"));
                return a.join("!")
            }
        }

        function b(a) {
            for (var f in a) if ({}.hasOwnProperty.call(a, f)) {
                var e = a[f];
                d.d(e, "Object") || d.d(e, "Array") ? b(e) : a[f] = String(e)
            }
        }

        var d = mt.lang, e = mt.l, g = mt.f, n = h.D, l = h.G, p = h.ia, f = {
            s: [], B: 0, Y: u, o: {T: "", page: ""}, init: function () {
                f.e =
                    0;
                l.c("pv-b", function () {
                    f.ka();
                    f.ma()
                });
                l.c("pv-d", function () {
                    f.na();
                    f.o.page = ""
                });
                l.c("stag-b", function () {
                    h.b.a.api = f.e || f.B ? f.e + "_" + f.B : "";
                    h.b.a.ct = [decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), f.o.T, f.o.page].join("!")
                });
                l.c("stag-d", function () {
                    h.b.a.api = 0;
                    f.e = 0;
                    f.B = 0
                })
            }, ka: function () {
                var a = window._hmt || [];
                if (!a || d.d(a, "Array")) window._hmt = {
                    id: c.id, cmd: {}, push: function () {
                        for (var a = window._hmt, k = 0; k < arguments.length; k++) {
                            var m = arguments[k];
                            d.d(m, "Array") && (a.cmd[a.id].push(m), "_setAccount" ===
                            m[0] && (1 < m.length && /^[0-9a-f]{32}$/.test(m[1])) && (m = m[1], a.id = m, a.cmd[m] = a.cmd[m] || []))
                        }
                    }
                }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
            }, ma: function () {
                var a = window._hmt;
                if (a && a.cmd && a.cmd[c.id]) for (var d = a.cmd[c.id], b = /^_track(Event|MobConv|Order|RTEvent)$/, m = 0, q = d.length; m < q; m++) {
                    var e = d[m];
                    b.test(e[0]) ? f.s.push(e) : f.Q(e)
                }
                a.cmd[c.id] = {push: f.Q}
            }, na: function () {
                if (0 < f.s.length) for (var a = 0, d = f.s.length; a < d; a++) f.Q(f.s[a]);
                f.s = t
            }, Q: function (a) {
                var b = a[0];
                if (f.hasOwnProperty(b) && d.d(f[b],
                        "Function")) f[b](a)
            }, _setAccount: function (a) {
                1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (f.e |= 1)
            }, _setAutoPageview: function (a) {
                if (1 < a.length && (a = a[1], u === a || s === a)) f.e |= 2, h.b.X = a
            }, _trackPageview: function (a) {
                if (1 < a.length && a[1].charAt && "/" === a[1].charAt(0)) {
                    f.e |= 4;
                    h.b.a.et = 0;
                    h.b.a.ep = "";
                    h.b.a.vl = g.K() + g.L();
                    h.b.M ? (h.b.a.nv = 0, h.b.a.st = 4) : h.b.M = s;
                    var d = h.b.a.u, b = h.b.a.su;
                    h.b.a.u = n.protocol + "//" + document.location.host + a[1];
                    f.Y || (h.b.a.su = document.location.href);
                    h.b.k();
                    h.b.a.u = d;
                    h.b.a.su = b
                }
            }, _trackEvent: function (a) {
                2 <
                a.length && (f.e |= 8, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 4, h.b.a.ep = d.j(a[1]) + "*" + d.j(a[2]) + (a[3] ? "*" + d.j(a[3]) : "") + (a[4] ? "*" + d.j(a[4]) : ""), h.b.k())
            }, _setCustomVar: function (a) {
                if (!(4 > a.length)) {
                    var b = a[1], e = a[4] || 3;
                    if (0 < b && 6 > b && 0 < e && 4 > e) {
                        f.B++;
                        for (var m = (h.b.a.cv || "*").split("!"), q = m.length; q < b - 1; q++) m.push("*");
                        m[b - 1] = e + "*" + d.j(a[2]) + "*" + d.j(a[3]);
                        h.b.a.cv = m.join("!");
                        a = h.b.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                        "" !== a ? h.b.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : h.b.Ga("Hm_cv_" +
                            c.id)
                    }
                }
            }, _setUserTag: function (b) {
                if (!(3 > b.length)) {
                    var f = d.j(b[1]);
                    b = d.j(b[2]);
                    if (f !== r && b !== r) {
                        var e = decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), e = a(e, f, 1, b);
                        h.b.setData("Hm_ct_" + c.id, encodeURIComponent(e), c.age)
                    }
                }
            }, _setVisitTag: function (b) {
                if (!(3 > b.length)) {
                    var e = d.j(b[1]);
                    b = d.j(b[2]);
                    if (e !== r && b !== r) {
                        var g = f.o.T, g = a(g, e, 2, b);
                        f.o.T = g
                    }
                }
            }, _setPageTag: function (b) {
                if (!(3 > b.length)) {
                    var e = d.j(b[1]);
                    b = d.j(b[2]);
                    if (e !== r && b !== r) {
                        var g = f.o.page, g = a(g, e, 3, b);
                        f.o.page = g
                    }
                }
            }, _setReferrerOverride: function (a) {
                1 <
                a.length && (h.b.a.su = a[1].charAt && "/" === a[1].charAt(0) ? n.protocol + "//" + window.location.host + a[1] : a[1], f.Y = s)
            }, _trackOrder: function (a) {
                a = a[1];
                d.d(a, "Object") && (b(a), f.e |= 16, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 94, h.b.a.ep = e.stringify(a), h.b.k())
            }, _trackMobConv: function (a) {
                if (a = {
                        webim: 1,
                        tel: 2,
                        map: 3,
                        sms: 4,
                        callback: 5,
                        share: 6
                    }[a[1]]) f.e |= 32, h.b.a.et = 93, h.b.a.ep = a, h.b.k()
            }, _trackRTPageview: function (a) {
                a = a[1];
                d.d(a, "Object") && (b(a), a = e.stringify(a), 512 >= encodeURIComponent(a).length && (f.e |= 64, h.b.a.rt = a))
            }, _trackRTEvent: function (a) {
                a =
                    a[1];
                if (d.d(a, "Object")) {
                    b(a);
                    a = encodeURIComponent(e.stringify(a));
                    var g = function (a) {
                        var b = h.b.a.rt;
                        f.e |= 128;
                        h.b.a.et = 90;
                        h.b.a.rt = a;
                        h.b.k();
                        h.b.a.rt = b
                    }, l = a.length;
                    if (900 >= l) g.call(this, a); else for (var l = Math.ceil(l / 900), m = "block|" + Math.round(Math.random() * n.P).toString(16) + "|" + l + "|", q = [], x = 0; x < l; x++) q.push(x), q.push(a.substring(900 * x, 900 * x + 900)), g.call(this, m + q.join("|")), q = []
                }
            }, _setUserId: function (a) {
                a = a[1];
                p.Da();
                p.Na(a)
            }
        };
        f.init();
        h.fa = f;
        return h.fa
    })();
    (function () {
        function a() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = s, this.a = {}, this.X = s, this.M = u, this.init())
        }

        var b = mt.url, d = mt.aa, e = mt.S, g = mt.lang, n = mt.cookie, l = mt.f, p = mt.localStorage,
            f = mt.sessionStorage, k = h.D, v = h.ga, w = h.G;
        a.prototype = {
            N: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length === a.length
            }, Z: function (a, b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            }, z: function (a) {
                for (var d = 0; d < c.dm.length; d++) if (-1 <
                    c.dm[d].indexOf("/")) {
                    if (this.Z(a, c.dm[d])) return s
                } else {
                    var e = b.W(a);
                    if (e && this.N(e, c.dm[d])) return s
                }
                return u
            }, I: function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++) if (this.N(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
                return a
            }, V: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.Z(document.location.href, d)) return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
                }
                return "/"
            }, ua: function () {
                if (!document.referrer) return k.m - k.r > c.vdur ? 1 : 4;
                var a =
                    u;
                this.z(document.referrer) && this.z(document.location.href) ? a = s : (a = b.W(document.referrer), a = this.N(a || "", document.location.hostname));
                return a ? k.m - k.r > c.vdur ? 1 : 4 : 3
            }, getData: function (a) {
                try {
                    return n.get(a) || f.get(a) || p.get(a)
                } catch (b) {
                }
            }, setData: function (a, b, d) {
                try {
                    n.set(a, b, {domain: this.I(), path: this.V(), H: d}), d ? p.set(a, b, d) : f.set(a, b)
                } catch (e) {
                }
            }, Ga: function (a) {
                try {
                    n.set(a, "", {domain: this.I(), path: this.V(), H: -1}), f.remove(a), p.remove(a)
                } catch (b) {
                }
            }, La: function () {
                var a, b, d, e, f;
                k.r = this.getData("Hm_lpvt_" +
                    c.id) || 0;
                13 === k.r.length && (k.r = Math.round(k.r / 1E3));
                b = this.ua();
                a = 4 !== b ? 1 : 0;
                if (d = this.getData("Hm_lvt_" + c.id)) {
                    e = d.split(",");
                    for (f = e.length - 1; 0 <= f; f--) 13 === e[f].length && (e[f] = "" + Math.round(e[f] / 1E3));
                    for (; 2592E3 < k.m - e[0];) e.shift();
                    f = 4 > e.length ? 2 : 3;
                    for (1 === a && e.push(k.m); 4 < e.length;) e.shift();
                    d = e.join(",");
                    e = e[e.length - 1]
                } else d = k.m, e = "", f = 1;
                this.setData("Hm_lvt_" + c.id, d, c.age);
                this.setData("Hm_lpvt_" + c.id, k.m);
                d = k.m === this.getData("Hm_lpvt_" + c.id) ? "1" : "0";
                if (0 === c.nv && this.z(document.location.href) &&
                    ("" === document.referrer || this.z(document.referrer))) a = 0, b = 4;
                this.a.nv = a;
                this.a.st = b;
                this.a.cc = d;
                this.a.lt = e;
                this.a.lv = f
            }, Ka: function () {
                for (var a = [], b = this.a.et, d = 0, e = k.ba.length; d < e; d++) {
                    var f = k.ba[d], g = this.a[f];
                    "undefined" !== typeof g && "" !== g && ("tt" !== f || "tt" === f && 0 === b) && ("ct" !== f || "ct" === f && 0 === b) && a.push(f + "=" + encodeURIComponent(g))
                }
                switch (b) {
                    case 0:
                        a.push("sn=" + k.U);
                        this.a.rt && a.push("rt=" + encodeURIComponent(this.a.rt));
                        break;
                    case 3:
                        a.push("sn=" + k.U);
                        break;
                    case 90:
                        this.a.rt && a.push("rt=" + this.a.rt)
                }
                return a.join("&")
            },
            Ma: function () {
                this.La();
                this.a.si = c.id;
                this.a.su = document.referrer;
                this.a.ds = l.Ha;
                this.a.cl = l.colorDepth + "-bit";
                this.a.ln = String(l.language).toLowerCase();
                this.a.ja = l.javaEnabled ? 1 : 0;
                this.a.ck = l.cookieEnabled ? 1 : 0;
                this.a.bs = v;
                this.a.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.a.fl = e.va();
                this.a.v = "1.2.30";
                this.a.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
                this.a.tt = document.title || "";
                this.a.vl = l.K() + l.L();
                var a = document.location.href;
                this.a.cm = b.i(a, k.za) || "";
                this.a.cp = b.i(a, k.Aa) || b.i(a, k.Qa) ||
                    "";
                this.a.cw = b.i(a, k.ya) || b.i(a, k.Sa) || "";
                this.a.ci = b.i(a, k.wa) || b.i(a, k.Pa) || "";
                this.a.cf = b.i(a, k.Ba) || b.i(a, k.Ra) || "";
                this.a.cu = b.i(a, k.xa) || b.i(a, k.Oa) || ""
            }, init: function () {
                try {
                    this.Ma(), 0 === this.a.nv ? this.Ja() : this.R(".*"), h.b = this, this.ha(), w.w("pv-b"), this.Ia()
                } catch (a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    d.log(k.O + "//" + k.$ + "?" + b.join("&"))
                }
            }, Ia: function () {
                function a() {
                    w.w("pv-d")
                }

                this.X ? (this.M = s, this.a.et = 0, this.a.ep = "", this.a.vl = l.K() + l.L(), this.k(a)) : a()
            }, k: function (a) {
                var b = this;
                b.a.rnd = Math.round(Math.random() * k.P);
                w.w("stag-b");
                var e = k.O + "//" + k.$ + "?" + b.Ka();
                w.w("stag-d");
                b.da(e);
                d.log(e, function (d) {
                    b.R(d);
                    g.d(a, "Function") && a.call(b)
                })
            }, ha: function () {
                var a = document.location.hash.substring(1), d = RegExp(c.id), e = -1 < document.referrer.indexOf(k.ea),
                    f = b.i(a, "jn"), g = /^heatlink$|^select$|^pageclick$/.test(f);
                a && (d.test(a) && e && g) && (this.a.rnd = Math.round(Math.random() * k.P), a = document.createElement("script"),
                    a.setAttribute("type", "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", k.protocol + "//" + c.js + f + ".js?" + this.a.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(a, f))
            }, da: function (a) {
                var b = f.get("Hm_unsent_" + c.id) || "",
                    d = this.a.u ? "" : "&u=" + encodeURIComponent(document.location.href),
                    b = encodeURIComponent(a.replace(/^https?:\/\//, "") + d) + (b ? "," + b : "");
                f.set("Hm_unsent_" + c.id, b)
            }, R: function (a) {
                var b = f.get("Hm_unsent_" + c.id) || "";
                b && (a = encodeURIComponent(a.replace(/^https?:\/\//,
                    "")), a = RegExp(a.replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), (b = b.replace(a, "").replace(/,$/, "")) ? f.set("Hm_unsent_" + c.id, b) : f.remove("Hm_unsent_" + c.id))
            }, Ja: function () {
                var a = this, b = f.get("Hm_unsent_" + c.id);
                if (b) for (var b = b.split(","), e = function (b) {
                    d.log(k.O + "//" + decodeURIComponent(b), function (b) {
                        a.R(b)
                    })
                }, g = 0, l = b.length; g < l; g++) e(b[g])
            }
        };
        return new a
    })();
    (function () {
        var a = mt.event, b = mt.l;
        try {
            if (window.performance && performance.timing && "undefined" !== typeof h.b) {
                var d = function (a) {
                    var b = performance.timing, d = b[a + "Start"] ? b[a + "Start"] : 0;
                    a = b[a + "End"] ? b[a + "End"] : 0;
                    return {start: d, end: a, value: 0 < a - d ? a - d : 0}
                }, e = function () {
                    var a;
                    a = d("navigation");
                    var e = d("request");
                    a = {
                        netAll: e.start - a.start,
                        netDns: d("domainLookup").value,
                        netTcp: d("connect").value,
                        srv: d("response").start - e.start,
                        dom: performance.timing.domInteractive - performance.timing.fetchStart,
                        loadEvent: d("loadEvent").end -
                        a.start
                    };
                    h.b.a.et = 87;
                    h.b.a.ep = b.stringify(a);
                    h.b.k()
                };
                a.c(window, "load", function () {
                    setTimeout(e, 500)
                })
            }
        } catch (g) {
        }
    })();
    (function () {
        var a = mt.f, b = mt.lang, d = mt.event, e = mt.l;
        if ("undefined" !== typeof h.b && (c.med || (!a.Ea || 7 < a.Ca) && c.cvcc)) {
            var g, n, l, p, f = function (a) {
                if (a.item) {
                    for (var b = a.length, d = Array(b); b--;) d[b] = a[b];
                    return d
                }
                return [].slice.call(a)
            }, k = function (a, b) {
                for (var d in a) if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === u) return u
            }, v = function (a, d) {
                var f = {};
                f.n = g;
                f.t = "clk";
                f.v = a;
                if (d) {
                    var k = d.getAttribute("href"), m = d.getAttribute("onclick") ? "" + d.getAttribute("onclick") : t,
                        n = d.getAttribute("id") || "";
                    l.test(k) ? (f.sn = "mediate",
                        f.snv = k) : b.d(m, "String") && l.test(m) && (f.sn = "wrap", f.snv = m);
                    f.id = n
                }
                h.b.a.et = 86;
                h.b.a.ep = e.stringify(f);
                h.b.k();
                for (f = +new Date; 400 >= +new Date - f;) ;
            };
            if (c.med) n = "/zoosnet", g = "swt", l = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, p = {
                click: function () {
                    for (var a = [], b = f(document.getElementsByTagName("a")), b = [].concat.apply(b, f(document.getElementsByTagName("area"))), b = [].concat.apply(b, f(document.getElementsByTagName("img"))), d, e, g = 0, k = b.length; g < k; g++) d = b[g], e = d.getAttribute("onclick"),
                        d = d.getAttribute("href"), (l.test(e) || l.test(d)) && a.push(b[g]);
                    return a
                }
            }; else if (c.cvcc) {
                n = "/other-comm";
                g = "other";
                l = c.cvcc.q || r;
                var w = c.cvcc.id || r;
                p = {
                    click: function () {
                        for (var a = [], b = f(document.getElementsByTagName("a")), b = [].concat.apply(b, f(document.getElementsByTagName("area"))), b = [].concat.apply(b, f(document.getElementsByTagName("img"))), d, e, g, k = 0, m = b.length; k < m; k++) d = b[k], l !== r ? (e = d.getAttribute("onclick"), g = d.getAttribute("href"), w ? (d = d.getAttribute("id"), (l.test(e) || l.test(g) || w.test(d)) &&
                        a.push(b[k])) : (l.test(e) || l.test(g)) && a.push(b[k])) : w !== r && (d = d.getAttribute("id"), w.test(d) && a.push(b[k]));
                        return a
                    }
                }
            }
            if ("undefined" !== typeof p && "undefined" !== typeof l) {
                var m;
                n += /\/$/.test(n) ? "" : "/";
                var q = function (a, d) {
                    if (m === d) return v(n + a, d), u;
                    if (b.d(d, "Array") || b.d(d, "NodeList")) for (var e = 0, f = d.length; e < f; e++) if (m === d[e]) return v(n + a + "/" + (e + 1), d[e]), u
                };
                d.c(document, "mousedown", function (a) {
                    a = a || window.event;
                    m = a.target || a.srcElement;
                    var d = {};
                    for (k(p, function (a, e) {
                        d[a] = b.d(e, "Function") ? e() : document.getElementById(e)
                    }); m &&
                         m !== document && k(d, q) !== u;) m = m.parentNode
                })
            }
        }
    })();
    (function () {
        var a = mt.h, b = mt.lang, d = mt.event, e = mt.l;
        if ("undefined" !== typeof h.b && b.d(c.cvcf, "Array") && 0 < c.cvcf.length) {
            var g = {
                ca: function () {
                    for (var b = c.cvcf.length, e, p = 0; p < b; p++) (e = a.pa(decodeURIComponent(c.cvcf[p]))) && d.c(e, "click", g.la())
                }, la: function () {
                    return function () {
                        h.b.a.et = 86;
                        var a = {n: "form", t: "clk"};
                        a.id = this.id;
                        h.b.a.ep = e.stringify(a);
                        h.b.k()
                    }
                }
            };
            a.Fa(function () {
                g.ca()
            })
        }
    })();
    (function () {
        var a = mt.event, b = mt.l;
        if (c.med && "undefined" !== typeof h.b) {
            var d = +new Date, e = {n: "anti", sb: 0, kb: 0, clk: 0}, g = function () {
                h.b.a.et = 86;
                h.b.a.ep = b.stringify(e);
                h.b.k()
            };
            a.c(document, "click", function () {
                e.clk++
            });
            a.c(document, "keyup", function () {
                e.kb = 1
            });
            a.c(window, "scroll", function () {
                e.sb++
            });
            a.c(window, "unload", function () {
                e.t = +new Date - d;
                g()
            });
            a.c(window, "load", function () {
                setTimeout(g, 5E3)
            })
        }
    })();
})();
