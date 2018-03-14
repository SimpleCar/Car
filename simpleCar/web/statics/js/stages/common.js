!function (e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {exports: {}, id: i, loaded: !1};
        return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "/taoche/", t(0)
}([function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var r = n(44), a = i(r), o = n(47), s = i(o);
    n(77), n(39), n(37), n(41), n(38), n(40), n(80);
    var l = n(43);
    n(42);
    window.$ = window.jQuery = $, window.Tools = window.tools = l, $.toJSON = "object" === ("undefined" == typeof JSON ? "undefined" : (0, s["default"])(JSON)) && a["default"] ? a["default"] : function () {
    };
    var u = l.wildcardUrl(), c = l.getUrlParam("from"), d = l.getUrlParam("semcode"), p = l.getUrlParam("fpath");
    c && l.setCookie("from", c, "", u), d && l.setCookie("semcode", d, "", u), p && l.setCookie("fpath", p, "", u);
    var f = document.referrer;
    c || d || !f || (/baidu\.com/.test(f) ? l.setCookie("from", "seo_baidu", "", u) : /sm\.cn/.test(f) ? l.setCookie("from", "seo_sm", "", u) : /so\.com/.test(f) && l.setCookie("from", "seo_so", "", u)), window.selCityHeader = function (e) {
        $(".sel-city .city-con").attr("data-id", e.cityId).text(e.cityName)
    }, window.selCityCallback = function (e) {
        location.reload()
    }, window.USERCENTERURL && $.ajax({
        url: USERCENTERURL + "/User/GetCurrentUserIdentity",
        dataType: "jsonp",
        beforeSend: function () {
        },
        success: function (e) {
            if ($(window).data("userStatusReady", !0).on("getUserStatus", function () {
                    return {
                        login: e.Islogin,
                        id: e.LoanUserID,
                        mobile: e.Telphone,
                        hashMobile: e.HashTelphone,
                        token: e.Token,
                        name: e.UserName
                    }
                }), e.Islogin) $(".Taoche_headerBar .option>li:first").prop("outerHTML", '<li onmouseover="this.className=\'hover\'" onmouseout="this.className=\'\'"><a class="sub_nav" href="' + USERCENTERURL + '" target="_blank">' + e.UserName + '</a><div class="menu"><a rel="nofollow" href="' + USERCENTERURL + 'myorder" target="_blank">分期订单</a><a rel="nofollow" href="' + USERCENTERURL + 'ershouche/order" target="_blank">二手车订单</a><a rel="nofollow" href="' + USERCENTERURL + 'ershouche/#mycarlist" target="_blank">发布的二手车</a><a rel="nofollow" href="' + USERCENTERURL + 'ershouche/#myattens" target="_blank">收藏的二手车</a><a rel="nofollow" href="' + USERCENTERURL + 'ershouche/#myqiugou" target="_blank">求购的二手车</a><a rel="nofollow" href="' + USERCENTERURL + "user/logout?returnurl=" + encodeURIComponent(location.href) + '">退出</a></div></li>'); else {
                var t = "/" === USERCENTERURL.substr(USERCENTERURL.length - 1, 1) ? USERCENTERURL + "login" : USERCENTERURL + "/login",
                    n = window.location.pathname.toLowerCase();
                n.indexOf("login") >= 0 && n.indexOf("login/bindaccount") < 0 ? t = window.location.href : t += "?returnurl=" + encodeURIComponent(window.location.href), $('.Taoche_headerBar a[logwt="navigation_header_Cadmin"]').attr("href", t)
            }
        },
        complete: function (e, t) {
        }
    }), $(function () {
        function e(e) {
            $("#consultGuide .cg_slide li.slide_1 i").animate({top: e.offset_top}, v.speed, v.fx)
        }

        function t(e) {
            $(e).css({height: 0, width: 0, opacity: 0}), $(e).animate({
                height: "240px",
                width: "240px",
                opacity: "1"
            }, 500)
        }

        function n(e) {
            function i() {
                a.canmove && (a.n++, a.n == $(".cg_bar li").length && (a.n = 0), r())
            }

            function r() {
                var e, n = $(a.obj + " .cg_bar li").eq(a.n), i = n.find("b"), r = n.siblings().find("b"), o = "9.0",
                    s = navigator.userAgent.toLowerCase(), l = s.indexOf("msie") > -1;
                l && (e = s.match(/msie ([\d.]+)/)[1]), e <= o && (0 == a.n ? v.fx() : 1 == a.n ? t(".cg_slide li.slide_2 i") : 2 == a.n && (t(".cg_slide li.slide_3 i"), $(".cg_slide li.slide_3 b").remove())), n.addClass("active").siblings().removeClass("active"), r.animate({
                    width: "0",
                    opacity: "0"
                }, 300), i.animate({
                    width: i.data("width") + "px",
                    opacity: "1"
                }, 300), $(a.obj + " .content_main li").eq(a.n).addClass("active").show().siblings().removeClass("active").hide()
            }

            var a = n;
            a.obj = e, a.n = 0, a.canmove = !0, a.time = 5e3, a.clock, $(a.obj + " .cg_bar li").mouseenter(function () {
                a.canmove = !1, clearInterval(i), a.n = $(this).index(), r()
            }), $(a.obj).mouseenter(function () {
                a.canmove = !1
            }).mouseleave(function () {
                clearInterval(i), setTimeout(function () {
                    a.canmove = !0
                }, a.time)
            }), setTimeout(function () {
                r(), a.clock = setInterval(i, a.time)
            }, 0), $("#consultGuideClose").on("click", function () {
                clearInterval(a.clock), $("#consultGuide").hide()
            })
        }

        function i() {
            var e = $("#Header .search"), t = e.find(".search-tab span"), n = e.find(".search-box"),
                i = window.location.host;
            i.indexOf("etaoche.cn") >= 0 && e.find(".search-tab").prepend('<div id="curSearchTab">分期</div>'), t.bind("click", function (e) {
                e.preventDefault(), t.removeClass("active"), n.hide(), $(this).addClass("active"), i.indexOf("etaoche.cn") >= 0 && (t.hide(), $("#curSearchTab").text($(this).text())), n.eq(t.index(this)).show()
            }), i.indexOf("etaoche.cn") >= 0 && $(".search-tab").bind({
                mouseenter: function () {
                    t.css({display: "block"})
                }, mouseleave: function (e) {
                    t.hide()
                }
            })
        }

        function r() {
            var e = ($("#tc_top_currentCityName"), $("#tc_top_divCityList")), t = e.find(".header-city-province-tit a");
            t.click(function (e) {
                e.preventDefault(), t.removeClass("current"), $(this).addClass("current");
                var n = $(this).attr("data-code"), i = $("#iCity_" + n).parent("li");
                $(".header-city-province-mian").scrollTop(i.position().top)
            }), t.eq(0).click(), e.find("a").click(function (e) {
                var t = $(this).attr("attr-cityid");
                t && l.setCookie("t_city", t, "", u)
            })
        }

        function a() {
            $(".header-menu .has-sub").bind({
                mouseenter: function () {
                    $(this).addClass("enter")
                }, mouseleave: function (e) {
                    $(this).removeClass("enter")
                }
            })
        }

        function o() {
            function e() {
                var e = new Date, n = e.getHours();
                e.getMinutes();
                n > 0 && n < 8 ? (t = 8 - n, $(".double-eleven-box .img-box").attr("class", "img-box"), $(".double-eleven-box .img-box").addClass("morning")) : n > 8 && n < 16 ? (t = 16 - n, $(".double-eleven-box .img-box").attr("class", "img-box"), $(".double-eleven-box .img-box").addClass("afternoon")) : (t = 24 - n, $(".double-eleven-box .img-box").attr("class", "img-box"), $(".double-eleven-box .img-box").addClass("evening"))
            }

            $(window).width();
            $("body").append('<div class="double-eleven-box"><div class="img-box" target="_blank"></div></div>'), $(".double-eleven-box div").on("click", function () {
                window.open("//1111.taoche.com")
            });
            var t = "";
            e(), setTimeout(function () {
                e()
            }, 60 * t * 60)
        }

        for (var s = !1, c = navigator.userAgent, d = ["Windows CE", "iPod", "Symbian", "iPhone", "BlackBerry", "Android", "Windows Phone"], p = 0, f = d.length; p < f; p++) c.indexOf(d[p]) !== -1 && (s = !0);
        parseInt(4 * Math.random());
        $(".sel-city-box").length > 0 && $(".sel-city-box").selCity({isRelationHeader: !0}), "undefined" != typeof isHeaderBottom && $("body, html").animate({scrollTop: $("#Header").height() + "px"}), $(".ui-sidebar .weixin").click(function () {
            $("#consultGuide").show(), n(".cg_cont")
        });
        var h = $("#backTop"), g = $(window).height();
        $(window).on("scroll", function () {
            $(this).scrollTop() > g ? h.fadeIn(400) : h.fadeOut(400)
        }), h.on("click", function () {
            $("html,body").animate({scrollTop: "0px"}, 500)
        });
        var m = $(".ui-sidebar a.app");
        m.hover(function () {
            $(this).addClass("hoverstatus")
        }, function () {
            $(this).removeClass("hoverstatus")
        }), $(".ui-sidebar a:not(.app)").hover(function () {
            m.removeClass("hoverstatus")
        }), l.getCookie("hasVisit") || (m.trigger("mouseenter"), l.setCookie("hasVisit", !0, "", u)), $(document).on("click", function (e) {
            var t = $(e.target);
            "localization" != t.parents("article").attr("id") && "localization" != t.attr("id") && "maskLayer" != t.attr("id") && !t.parents("section").hasClass("pop-up-layer") && m.hasClass("hoverstatus") && m.removeClass("hoverstatus")
        });
        var y = $("#FooterSEO .footer-middle dd>div");
        $("#FooterSEO").on("mouseover", " .footer-middle dt div", function (e) {
            e.preventDefault();
            var t = $(this).index();
            $(this).addClass("cur").siblings("div").removeClass("cur"), y.eq(t).removeClass("hide").siblings("div").addClass("hide")
        });
        var v = {};
        v.speed = 2e3, v.move = 0, v.fx = function () {
            var t = {};
            0 == v.move ? (v.move = 1, t = {offset_top: "264px"}) : (v.move = 0, t = {offset_top: "48px"}), e(t)
        }, i(), r(), a(), "undefined" != typeof doubleactivity11 && o()
    })
}, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t, n) {
    e.exports = !n(10)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    var i = n(5), r = n(12);
    e.exports = n(3) ? function (e, t, n) {
        return i.f(e, t, r(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t, n) {
    var i = n(8), r = n(30), a = n(24), o = Object.defineProperty;
    t.f = n(3) ? Object.defineProperty : function (e, t, n) {
        if (i(e), t = a(t, !0), i(n), r) try {
            return o(e, t, n)
        } catch (s) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    var i = n(57), r = n(14);
    e.exports = function (e) {
        return i(r(e))
    }
}, function (e, t, n) {
    var i = n(22)("wks"), r = n(13), a = n(1).Symbol, o = "function" == typeof a, s = e.exports = function (e) {
        return i[e] || (i[e] = o && a[e] || (o ? a : r)("Symbol." + e))
    };
    s.store = i
}, function (e, t, n) {
    var i = n(11);
    e.exports = function (e) {
        if (!i(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function (e, t) {
    var n = e.exports = {version: "2.5.1"};
    "number" == typeof __e && (__e = n)
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (t) {
            return !0
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
}, function (e, t) {
    var n = 0, i = Math.random();
    e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
    }
}, function (e, t) {
    e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t) {
    e.exports = {}
}, function (e, t) {
    e.exports = !0
}, function (e, t, n) {
    var i = n(35), r = n(15);
    e.exports = Object.keys || function (e) {
        return i(e, r)
    }
}, function (e, t) {
    t.f = {}.propertyIsEnumerable
}, function (e, t, n) {
    var i = n(5).f, r = n(2), a = n(7)("toStringTag");
    e.exports = function (e, t, n) {
        e && !r(e = n ? e : e.prototype, a) && i(e, a, {configurable: !0, value: t})
    }
}, function (e, t, n) {
    var i = n(22)("keys"), r = n(13);
    e.exports = function (e) {
        return i[e] || (i[e] = r(e))
    }
}, function (e, t, n) {
    var i = n(1), r = "__core-js_shared__", a = i[r] || (i[r] = {});
    e.exports = function (e) {
        return a[e] || (a[e] = {})
    }
}, function (e, t) {
    var n = Math.ceil, i = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
    }
}, function (e, t, n) {
    var i = n(11);
    e.exports = function (e, t) {
        if (!i(e)) return e;
        var n, r;
        if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
        if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
        if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t, n) {
    var i = n(1), r = n(9), a = n(17), o = n(26), s = n(5).f;
    e.exports = function (e) {
        var t = r.Symbol || (r.Symbol = a ? {} : i.Symbol || {});
        "_" == e.charAt(0) || e in t || s(t, e, {value: o.f(e)})
    }
}, function (e, t, n) {
    t.f = n(7)
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t, n) {
    var i = n(11), r = n(1).document, a = i(r) && i(r.createElement);
    e.exports = function (e) {
        return a ? r.createElement(e) : {}
    }
}, function (e, t, n) {
    var i = n(1), r = n(9), a = n(54), o = n(4), s = "prototype", l = function (e, t, n) {
        var u, c, d, p = e & l.F, f = e & l.G, h = e & l.S, g = e & l.P, m = e & l.B, y = e & l.W,
            v = f ? r : r[t] || (r[t] = {}), b = v[s], x = f ? i : h ? i[t] : (i[t] || {})[s];
        f && (n = t);
        for (u in n) c = !p && x && void 0 !== x[u], c && u in v || (d = c ? x[u] : n[u], v[u] = f && "function" != typeof x[u] ? n[u] : m && c ? a(d, i) : y && x[u] == d ? function (e) {
            var t = function (t, n, i) {
                if (this instanceof e) {
                    switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t);
                        case 2:
                            return new e(t, n)
                    }
                    return new e(t, n, i)
                }
                return e.apply(this, arguments)
            };
            return t[s] = e[s], t
        }(d) : g && "function" == typeof d ? a(Function.call, d) : d, g && ((v.virtual || (v.virtual = {}))[u] = d, e & l.R && b && !b[u] && o(b, u, d)))
    };
    l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
}, function (e, t, n) {
    e.exports = !n(3) && !n(10)(function () {
        return 7 != Object.defineProperty(n(28)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    "use strict";
    var i = n(17), r = n(29), a = n(36), o = n(4), s = n(2), l = n(16), u = n(59), c = n(20), d = n(65),
        p = n(7)("iterator"), f = !([].keys && "next" in [].keys()), h = "@@iterator", g = "keys", m = "values",
        y = function () {
            return this
        };
    e.exports = function (e, t, n, v, b, x, w) {
        u(n, t, v);
        var C, T, S, k = function (e) {
                if (!f && e in L) return L[e];
                switch (e) {
                    case g:
                        return function () {
                            return new n(this, e)
                        };
                    case m:
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this, e)
                }
            }, N = t + " Iterator", E = b == m, j = !1, L = e.prototype, I = L[p] || L[h] || b && L[b], D = I || k(b),
            A = b ? E ? k("entries") : D : void 0, $ = "Array" == t ? L.entries || I : I;
        if ($ && (S = d($.call(new e)), S !== Object.prototype && S.next && (c(S, N, !0), i || s(S, p) || o(S, p, y))), E && I && I.name !== m && (j = !0, D = function () {
                return I.call(this)
            }), i && !w || !f && !j && L[p] || o(L, p, D), l[t] = D, l[N] = y, b) if (C = {
                values: E ? D : k(m),
                keys: x ? D : k(g),
                entries: A
            }, w) for (T in C) T in L || a(L, T, C[T]); else r(r.P + r.F * (f || j), t, C);
        return C
    }
}, function (e, t, n) {
    var i = n(8), r = n(62), a = n(15), o = n(21)("IE_PROTO"), s = function () {
    }, l = "prototype", u = function () {
        var e, t = n(28)("iframe"), i = a.length, r = "<", o = ">";
        for (t.style.display = "none", n(56).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write(r + "script" + o + "document.F=Object" + r + "/script" + o), e.close(), u = e.F; i--;) delete u[l][a[i]];
        return u()
    };
    e.exports = Object.create || function (e, t) {
        var n;
        return null !== e ? (s[l] = i(e), n = new s, s[l] = null, n[o] = e) : n = u(), void 0 === t ? n : r(n, t)
    }
}, function (e, t, n) {
    var i = n(35), r = n(15).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function (e) {
        return i(e, r)
    }
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t, n) {
    var i = n(2), r = n(6), a = n(53)(!1), o = n(21)("IE_PROTO");
    e.exports = function (e, t) {
        var n, s = r(e), l = 0, u = [];
        for (n in s) n != o && i(s, n) && u.push(n);
        for (; t.length > l;) i(s, n = t[l++]) && (~a(u, n) || u.push(n));
        return u
    }
}, function (e, t, n) {
    e.exports = n(4)
}, function (e, t) {
    "use strict";
    !function () {
        var e = window.Taoche || {};
        window.Taoche = e, e.DateTime = {
            addDays: function (e, t) {
                return t = t || new Date, new Date(t.getTime() + 24 * e * 60 * 60 * 1e3)
            }, addHours: function (e, t) {
                return t = t || new Date, new Date(t.getTime() + 60 * e * 60 * 1e3)
            }, addMinutes: function (e, t) {
                return t = t || new Date, new Date(t.getTime() + 60 * e * 1e3)
            }, addSeconds: function (e, t) {
                return t = t || new Date, new Date(t.getTime() + 1e3 * e)
            }, getString: function (e, t) {
                e = e || "yyyyMMddHHmmss", t = t || new Date;
                var n = t.getFullYear(), i = t.getMonth() + 1, r = t.getDate(), a = t.getHours(), o = t.getMinutes(),
                    s = t.getSeconds();
                return i < 10 && (i = "0" + i), r < 10 && (r = "0" + r), a < 10 && (a = "0" + a), o < 10 && (o = "0" + o), s < 10 && (s = "0" + s), e.replace("yyyy", n).replace("MM", i).replace("dd", r).replace("HH", a).replace("mm", o).replace("ss", s)
            }
        }
    }()
}, function (e, t) {
    "use strict";
    !function () {
        var e = window.Taoche || {};
        window.Taoche = e, e.isCitySite = !1, e.allCitys = [{id: "0", big: "1", name: "全国", spell: "quanguo"}, {
            id: 901,
            big: 1,
            name: "石家庄",
            spell: "shijiazhuang"
        }, {id: 902, big: 1, name: "唐山", spell: "tangshan"}, {
            id: 905,
            big: 1,
            name: "秦皇岛",
            spell: "qinhuangdao"
        }, {id: 907, big: 1, name: "邯郸", spell: "handan"}, {id: 903, big: 1, name: "邢台", spell: "xingtai"}, {
            id: 910,
            big: 1,
            name: "保定",
            spell: "baoding"
        }, {id: 911, big: 1, name: "张家口", spell: "zhangjiakou"}, {
            id: 912,
            big: 1,
            name: "承德",
            spell: "chengde"
        }, {id: 909, big: 1, name: "沧州", spell: "cangzhou"}, {id: 906, big: 1, name: "廊坊", spell: "langfang"}, {
            id: 908,
            big: 1,
            name: "衡水",
            spell: "hengshui"
        }, {id: 2201, big: 1, name: "太原", spell: "taiyuan"}, {id: 2202, big: 1, name: "大同", spell: "datong"}, {
            id: 2218,
            big: 1,
            name: "阳泉",
            spell: "yangquan"
        }, {id: 2206, big: 1, name: "长治", spell: "changzhi"}, {
            id: 2203,
            big: 1,
            name: "晋城",
            spell: "jincheng"
        }, {id: 2219, big: 1, name: "朔州", spell: "shuozhou"}, {
            id: 2204,
            big: 1,
            name: "晋中",
            spell: "jinzhong"
        }, {id: 2207, big: 1, name: "运城", spell: "yuncheng"}, {
            id: 2210,
            big: 1,
            name: "忻州",
            spell: "xinzhou"
        }, {id: 2205, big: 1, name: "临汾", spell: "linfen"}, {id: 2227, big: 1, name: "吕梁", spell: "lvliang"}, {
            id: 1801,
            big: 1,
            name: "呼和浩特",
            spell: "huhehaote"
        }, {id: 1802, big: 1, name: "包头", spell: "baotou"}, {id: 1805, big: 1, name: "乌海", spell: "wuhai"}, {
            id: 1803,
            big: 1,
            name: "赤峰",
            spell: "chifeng"
        }, {id: 1804, big: 1, name: "通辽", spell: "tongliao"}, {
            id: 1808,
            big: 1,
            name: "鄂尔多斯",
            spell: "eerduosi"
        }, {id: 1812, big: 1, name: "呼伦贝尔", spell: "hulunbeier"}, {
            id: 1824,
            big: 1,
            name: "巴彦淖尔",
            spell: "bayannaoer"
        }, {id: 1825, big: 1, name: "乌兰察布", spell: "wulanchabu"}, {
            id: 1814,
            big: 1,
            name: "兴安盟",
            spell: "xinganmeng"
        }, {id: 1829, big: 1, name: "锡林郭勒", spell: "xilinguolemeng"}, {
            id: 1830,
            big: 1,
            name: "阿拉善盟",
            spell: "alashanmeng"
        }, {id: 1401, big: 3, name: "长春", spell: "changchun"}, {
            id: 1402,
            big: 3,
            name: "吉林",
            spell: "jilin"
        }, {id: 3001, big: 4, name: "杭州", spell: "hangzhou"}, {
            id: 3002,
            big: 4,
            name: "宁波",
            spell: "ningbo"
        }, {id: 3003, big: 4, name: "温州", spell: "wenzhou"}, {
            id: 3005,
            big: 4,
            name: "嘉兴",
            spell: "jiaxing"
        }, {id: 3011, big: 4, name: "湖州", spell: "huzhou"}, {
            id: 3016,
            big: 4,
            name: "绍兴",
            spell: "shaoxing"
        }, {id: 3006, big: 4, name: "金华", spell: "jinhua"}, {id: 3012, big: 4, name: "衢州", spell: "quzhou"}, {
            id: 3020,
            big: 4,
            name: "舟山",
            spell: "zhoushan"
        }, {id: 3015, big: 4, name: "台州", spell: "tz"}, {id: 3009, big: 4, name: "丽水", spell: "lishui"}, {
            id: 125,
            big: 4,
            name: "亳州",
            spell: "bozhou"
        }, {id: 105, big: 4, name: "池州", spell: "chizhou"}, {
            id: 115,
            big: 4,
            name: "宣城",
            spell: "xuancheng"
        }, {id: 1601, big: 5, name: "南昌", spell: "nanchang"}, {
            id: 1612,
            big: 5,
            name: "景德镇",
            spell: "jingdezhen"
        }, {id: 1603, big: 5, name: "萍乡", spell: "pingxiang"}, {
            id: 1606,
            big: 5,
            name: "九江",
            spell: "jiujiang"
        }, {id: 1604, big: 5, name: "新余", spell: "xinyu"}, {id: 1615, big: 5, name: "鹰潭", spell: "yingtan"}, {
            id: 1607,
            big: 5,
            name: "赣州",
            spell: "ganzhou"
        }, {id: 1609, big: 5, name: "吉安", spell: "jian"}, {id: 1605, big: 5, name: "宜春", spell: "yichun"}, {
            id: 1613,
            big: 5,
            name: "抚州",
            spell: "jxfz"
        }, {id: 1602, big: 5, name: "上饶", spell: "shangrao"}, {id: 2301, big: 2, name: "西安", spell: "xian"}, {
            id: 2310,
            big: 2,
            name: "铜川",
            spell: "tongchuan"
        }, {id: 2305, big: 2, name: "宝鸡", spell: "baoji"}, {id: 2302, big: 2, name: "咸阳", spell: "xianyang"}, {
            id: 2303,
            big: 2,
            name: "渭南",
            spell: "weinan"
        }, {id: 2308, big: 2, name: "延安", spell: "yanan"}, {id: 2307, big: 2, name: "汉中", spell: "hanzhong"}, {
            id: 2304,
            big: 2,
            name: "榆林",
            spell: "yl"
        }, {id: 2306, big: 2, name: "安康", spell: "ankang"}, {id: 2313, big: 2, name: "商洛", spell: "shangluo"}, {
            id: 401,
            big: 2,
            name: "兰州",
            spell: "lanzhou"
        }, {id: 416, big: 2, name: "嘉峪关", spell: "jiayuguan"}, {
            id: 417,
            big: 2,
            name: "金昌",
            spell: "jinchang"
        }, {id: 418, big: 2, name: "白银", spell: "baiyin"}, {id: 415, big: 2, name: "天水", spell: "tianshui"}, {
            id: 412,
            big: 2,
            name: "武威",
            spell: "wuwei"
        }, {id: 410, big: 2, name: "张掖", spell: "zhangye"}, {id: 405, big: 2, name: "平凉", spell: "pingliang"}, {
            id: 409,
            big: 2,
            name: "酒泉",
            spell: "jiuquan"
        }, {id: 411, big: 2, name: "庆阳", spell: "qingyang"}, {id: 402, big: 2, name: "定西", spell: "dingxi"}, {
            id: 421,
            big: 2,
            name: "陇南",
            spell: "longnan"
        }, {id: 622900, big: 2, name: "临夏", spell: "linxia"}, {id: 422, big: 2, name: "甘南", spell: "gannan"}, {
            id: 2001,
            big: 2,
            name: "西宁",
            spell: "xining"
        }, {id: 2029, big: 2, name: "海东", spell: "haidongdiqu"}, {
            id: 2023,
            big: 2,
            name: "海北",
            spell: "haibei"
        }, {id: 2024, big: 2, name: "黄南", spell: "huangnan"}, {
            id: 2030,
            big: 2,
            name: "海南",
            spell: "hainanzangzuzizhizho"
        }, {id: 2025, big: 2, name: "果洛", spell: "guoluo"}, {id: 2026, big: 2, name: "玉树", spell: "yushu"}, {
            id: 2027,
            big: 2,
            name: "海西",
            spell: "haixi"
        }, {id: 1901, big: 2, name: "银川", spell: "yinchuan"}, {
            id: 1905,
            big: 2,
            name: "石嘴山",
            spell: "shizuishan"
        }, {id: 1902, big: 2, name: "吴忠", spell: "wuzhong"}, {id: 1903, big: 2, name: "固原", spell: "guyuan"}, {
            id: 1907,
            big: 2,
            name: "中卫",
            spell: "zhongwei"
        }, {id: 2801, big: 2, name: "乌鲁木齐", spell: "wulumuqi"}, {
            id: 2803,
            big: 2,
            name: "克拉玛依",
            spell: "kelamayi"
        }, {id: 2832, big: 2, name: "吐鲁番", spell: "tulufandiqu"}, {
            id: 2833,
            big: 2,
            name: "哈密",
            spell: "hamidiqu"
        }, {id: 652300, big: 2, name: "昌吉", spell: "changji"}, {
            id: 2821,
            big: 2,
            name: "博尔塔拉",
            spell: "boertala"
        }, {id: 2822, big: 2, name: "巴音郭楞", spell: "bazhou"}, {
            id: 2829,
            big: 2,
            name: "阿克苏",
            spell: "akesudiqu"
        }, {id: 2835, big: 2, name: "新疆克州", spell: "xinjiangkezhou"}, {
            id: 2828,
            big: 2,
            name: "喀什",
            spell: "kashidiqu"
        }, {id: 2830, big: 2, name: "和田", spell: "hetiandiqu"}, {
            id: 2823,
            big: 2,
            name: "伊犁",
            spell: "yili"
        }, {id: 2831, big: 2, name: "塔城", spell: "tachengdiqu"}, {
            id: 2834,
            big: 2,
            name: "阿勒泰",
            spell: "aletaidiqu"
        }, {id: 659e3, big: 2, name: "新疆直辖", spell: "xinjiangzhixiaxian"}, {
            id: 1301,
            big: 5,
            name: "长沙",
            spell: "changsha"
        }, {id: 1307, big: 5, name: "株洲", spell: "zhuzhou"}, {
            id: 1309,
            big: 5,
            name: "湘潭",
            spell: "xiangtan"
        }, {id: 1304, big: 5, name: "衡阳", spell: "hengyang"}, {
            id: 1310,
            big: 5,
            name: "邵阳",
            spell: "shaoyang"
        }, {id: 1308, big: 5, name: "岳阳", spell: "yueyang"}, {
            id: 1303,
            big: 5,
            name: "常德",
            spell: "changde"
        }, {id: 1315, big: 5, name: "张家界", spell: "zhangjiajie"}, {
            id: 1313,
            big: 5,
            name: "益阳",
            spell: "yiyang"
        }, {id: 1302, big: 5, name: "郴州", spell: "chenzhou"}, {
            id: 1312,
            big: 5,
            name: "永州",
            spell: "yongzhou"
        }, {id: 1305, big: 5, name: "怀化", spell: "huaihua"}, {id: 1306, big: 5, name: "娄底", spell: "loudi"}, {
            id: 1333,
            big: 5,
            name: "湘西",
            spell: "xiangxi"
        }, {id: 501, big: 7, name: "广州", spell: "guangzhou"}, {
            id: 511,
            big: 7,
            name: "韶关",
            spell: "shaoguan"
        }, {id: 502, big: 7, name: "深圳", spell: "shenzhen"}, {id: 503, big: 7, name: "珠海", spell: "zhuhai"}, {
            id: 507,
            big: 7,
            name: "汕头",
            spell: "shantou"
        }, {id: 518, big: 7, name: "佛山", spell: "foshan"}, {id: 521, big: 7, name: "江门", spell: "jiangmen"}, {
            id: 513,
            big: 7,
            name: "湛江",
            spell: "zhanjiang"
        }, {id: 515, big: 7, name: "茂名", spell: "maoming"}, {id: 514, big: 7, name: "肇庆", spell: "zhaoqing"}, {
            id: 520,
            big: 7,
            name: "惠州",
            spell: "huizhou"
        }, {id: 516, big: 7, name: "梅州", spell: "meizhou"}, {id: 552, big: 7, name: "汕尾", spell: "shanwei"}, {
            id: 535,
            big: 7,
            name: "河源",
            spell: "heyuan"
        }, {id: 532, big: 7, name: "阳江", spell: "yangjiang"}, {
            id: 524,
            big: 7,
            name: "清远",
            spell: "qingyuan"
        }, {id: 504, big: 7, name: "东莞", spell: "dongguan"}, {
            id: 505,
            big: 7,
            name: "中山",
            spell: "zhongshan"
        }, {id: 510, big: 7, name: "潮州", spell: "chaozhou"}, {id: 522, big: 7, name: "揭阳", spell: "jieyang"}, {
            id: 528,
            big: 7,
            name: "云浮",
            spell: "yunfu"
        }, {id: 601, big: 7, name: "南宁", spell: "nanning"}, {id: 602, big: 7, name: "柳州", spell: "liuzhou"}, {
            id: 603,
            big: 7,
            name: "桂林",
            spell: "guilin"
        }, {id: 613, big: 7, name: "梧州", spell: "wuzhou"}, {id: 604, big: 7, name: "北海", spell: "beihai"}, {
            id: 615,
            big: 7,
            name: "防城港",
            spell: "fangchenggang"
        }, {id: 612, big: 7, name: "钦州", spell: "qinzhou"}, {id: 608, big: 7, name: "贵港", spell: "guigang"}, {
            id: 610,
            big: 7,
            name: "玉林",
            spell: "yulin"
        }, {id: 605, big: 7, name: "百色", spell: "baise"}, {id: 606, big: 7, name: "贺州", spell: "hezhou"}, {
            id: 607,
            big: 7,
            name: "河池",
            spell: "hechi"
        }, {id: 619, big: 7, name: "来宾", spell: "laibin"}, {id: 621, big: 7, name: "崇左", spell: "chongzuo"}, {
            id: 801,
            big: 7,
            name: "海口",
            spell: "haikou"
        }, {id: 803, big: 7, name: "三亚", spell: "sanya"}, {
            id: 810,
            big: 7,
            name: "琼北",
            spell: "qiongbeidiqu"
        }, {id: 811, big: 7, name: "琼南", spell: "qiongnandiqu"}, {
            id: 469e3,
            big: 7,
            name: "海南直辖",
            spell: "hainanzhixiaxian"
        }, {id: 2501, big: 6, name: "成都", spell: "chengdu"}, {id: 2508, big: 6, name: "自贡", spell: "zigong"}, {
            id: 2504,
            big: 6,
            name: "攀枝花",
            spell: "panzhihua"
        }, {id: 2517, big: 6, name: "泸州", spell: "luzhou"}, {id: 2511, big: 6, name: "德阳", spell: "deyang"}, {
            id: 2502,
            big: 6,
            name: "绵阳",
            spell: "mianyang"
        }, {id: 2510, big: 6, name: "广元", spell: "guangyuan"}, {
            id: 2503,
            big: 6,
            name: "遂宁",
            spell: "suining"
        }, {id: 2519, big: 6, name: "内江", spell: "neijiang"}, {
            id: 2512,
            big: 6,
            name: "乐山",
            spell: "leshan"
        }, {id: 2513, big: 6, name: "南充", spell: "nanchong"}, {
            id: 2514,
            big: 6,
            name: "眉山",
            spell: "meishan"
        }, {id: 2506, big: 6, name: "宜宾", spell: "yibin"}, {id: 2530, big: 6, name: "广安", spell: "guangan"}, {
            id: 2532,
            big: 6,
            name: "达州",
            spell: "dazhou"
        }, {id: 2507, big: 6, name: "雅安", spell: "yaan"}, {id: 2516, big: 6, name: "巴中", spell: "bazhong"}, {
            id: 2509,
            big: 6,
            name: "资阳",
            spell: "ziyang"
        }, {id: 2535, big: 6, name: "阿坝", spell: "aba"}, {id: 2536, big: 6, name: "甘孜", spell: "ganzi"}, {
            id: 2537,
            big: 6,
            name: "凉山",
            spell: "liangshan"
        }, {id: 701, big: 6, name: "贵阳", spell: "guiyang"}, {
            id: 708,
            big: 6,
            name: "六盘水",
            spell: "liupanshui"
        }, {id: 702, big: 6, name: "遵义", spell: "zunyi"}, {id: 705, big: 6, name: "安顺", spell: "anshun"}, {
            id: 719,
            big: 6,
            name: "铜仁",
            spell: "tongrendiqu"
        }, {id: 718, big: 6, name: "黔西南", spell: "qianxinan"}, {
            id: 717,
            big: 6,
            name: "毕节",
            spell: "bijiediqu"
        }, {id: 714, big: 6, name: "黔东南", spell: "qiandongnan"}, {
            id: 715,
            big: 6,
            name: "黔南",
            spell: "qiannan"
        }, {id: 2901, big: 6, name: "昆明", spell: "kunming"}, {id: 2903, big: 6, name: "曲靖", spell: "qujing"}, {
            id: 2902,
            big: 6,
            name: "玉溪",
            spell: "yuxi"
        }, {id: 2907, big: 6, name: "保山", spell: "baoshan"}, {
            id: 2918,
            big: 6,
            name: "昭通",
            spell: "zhaotong"
        }, {id: 2922, big: 6, name: "丽江", spell: "lijiang"}, {id: 2929, big: 6, name: "普洱", spell: "puer"}, {
            id: 2911,
            big: 6,
            name: "临沧",
            spell: "lincang"
        }, {id: 532300, big: 6, name: "楚雄", spell: "chuxiong"}, {
            id: 2923,
            big: 6,
            name: "红河",
            spell: "honghe"
        }, {id: 2914, big: 6, name: "文山", spell: "wenshan"}, {
            id: 2915,
            big: 6,
            name: "西双版纳",
            spell: "xishuangbanna"
        }, {id: 532900, big: 6, name: "大理", spell: "dali"}, {id: 2925, big: 6, name: "德宏", spell: "dehong"}, {
            id: 2927,
            big: 6,
            name: "怒江",
            spell: "nujiang"
        }, {id: 2928, big: 6, name: "迪庆", spell: "diqing"}, {id: 1616, big: 3, name: "四平", spell: "siping"}, {
            id: 1405,
            big: 3,
            name: "辽源",
            spell: "liaoyuan"
        }, {id: 1403, big: 3, name: "通化", spell: "tonghua"}, {
            id: 1406,
            big: 3,
            name: "白山",
            spell: "baishan"
        }, {id: 1425, big: 3, name: "松原", spell: "songyuan"}, {
            id: 1412,
            big: 3,
            name: "白城",
            spell: "baicheng"
        }, {id: 1428, big: 3, name: "延边", spell: "yanbian"}, {
            id: 1101,
            big: 3,
            name: "哈尔滨",
            spell: "haerbin"
        }, {id: 1103, big: 3, name: "齐齐哈尔", spell: "qiqihaer"}, {
            id: 1107,
            big: 3,
            name: "鸡西",
            spell: "jixi"
        }, {id: 1104, big: 3, name: "鹤岗", spell: "hegang"}, {
            id: 1123,
            big: 3,
            name: "双鸭山",
            spell: "shuangyashan"
        }, {id: 1102, big: 3, name: "大庆", spell: "daqing"}, {id: 1112, big: 3, name: "伊春", spell: "yc"}, {
            id: 1106,
            big: 3,
            name: "佳木斯",
            spell: "jiamusi"
        }, {id: 1109, big: 3, name: "七台河", spell: "qitaihe"}, {
            id: 1108,
            big: 3,
            name: "牡丹江",
            spell: "mudanjiang"
        }, {id: 1113, big: 3, name: "黑河", spell: "heihe"}, {id: 1131, big: 3, name: "绥化", spell: "suihua"}, {
            id: 1136,
            big: 3,
            name: "大兴安岭",
            spell: "daxinganlingdiqu"
        }, {id: 2401, big: 4, name: "上海", spell: "shanghai"}, {
            id: 2601,
            big: 1,
            name: "天津",
            spell: "tianjin"
        }, {id: 3101, big: 6, name: "重庆", spell: "chongqing"}, {
            id: 1501,
            big: 4,
            name: "南京",
            spell: "nanjing"
        }, {id: 1503, big: 4, name: "无锡", spell: "wuxi"}, {id: 1518, big: 4, name: "徐州", spell: "xuzhou"}, {
            id: 1505,
            big: 4,
            name: "常州",
            spell: "changzhou"
        }, {id: 1502, big: 4, name: "苏州", spell: "suzhou"}, {id: 1511, big: 4, name: "南通", spell: "nantong"}, {
            id: 1510,
            big: 4,
            name: "连云港",
            spell: "lianyungang"
        }, {id: 1507, big: 4, name: "淮安", spell: "huaian"}, {
            id: 1512,
            big: 4,
            name: "盐城",
            spell: "yancheng"
        }, {id: 1513, big: 4, name: "扬州", spell: "yangzhou"}, {
            id: 1515,
            big: 4,
            name: "镇江",
            spell: "zhenjiang"
        }, {id: 1517, big: 4, name: "泰州", spell: "taizhou"}, {id: 1520, big: 4, name: "宿迁", spell: "suqian"}, {
            id: 2701,
            big: 6,
            name: "拉萨",
            spell: "lasa"
        }, {id: 2709, big: 6, name: "昌都", spell: "changdudiqu"}, {
            id: 2704,
            big: 6,
            name: "山南",
            spell: "shannan"
        }, {id: 2703, big: 6, name: "日喀则", spell: "rikazediqu"}, {
            id: 2705,
            big: 6,
            name: "那曲",
            spell: "naqudiqu"
        }, {id: 2707, big: 6, name: "阿里", spell: "alidiqu"}, {
            id: 2710,
            big: 6,
            name: "林芝",
            spell: "linzhidiqu"
        }, {id: 101, big: 4, name: "合肥", spell: "hefei"}, {id: 114, big: 4, name: "芜湖", spell: "wuhu"}, {
            id: 103,
            big: 4,
            name: "蚌埠",
            spell: "bengbu"
        }, {id: 108, big: 4, name: "淮南", spell: "huainan"}, {id: 110, big: 4, name: "马鞍山", spell: "maanshan"}, {
            id: 107,
            big: 4,
            name: "淮北",
            spell: "huaibei"
        }, {id: 113, big: 4, name: "铜陵", spell: "tongling"}, {id: 102, big: 4, name: "安庆", spell: "anqing"}, {
            id: 118,
            big: 4,
            name: "黄山",
            spell: "huangshan"
        }, {id: 116, big: 4, name: "滁州", spell: "chuzhou"}, {id: 106, big: 4, name: "阜阳", spell: "fuyang"}, {
            id: 120,
            big: 4,
            name: "宿州",
            spell: "sz"
        }, {id: 104, big: 4, name: "巢湖", spell: "chaohu"}, {id: 109, big: 4, name: "六安", spell: "luan"}, {
            id: 301,
            big: 4,
            name: "福州",
            spell: "fuzhou"
        }, {id: 302, big: 4, name: "厦门", spell: "xiamen"}, {id: 306, big: 4, name: "莆田", spell: "putian"}, {
            id: 318,
            big: 4,
            name: "三明",
            spell: "sanming"
        }, {id: 307, big: 4, name: "泉州", spell: "quanzhou"}, {
            id: 305,
            big: 4,
            name: "漳州",
            spell: "zhangzhou"
        }, {id: 314, big: 4, name: "南平", spell: "nanping"}, {id: 303, big: 4, name: "龙岩", spell: "longyan"}, {
            id: 315,
            big: 4,
            name: "宁德",
            spell: "ningde"
        }, {id: 2101, big: 4, name: "济南", spell: "jinan"}, {id: 2102, big: 4, name: "青岛", spell: "qingdao"}, {
            id: 2109,
            big: 4,
            name: "淄博",
            spell: "zibo"
        }, {id: 2107, big: 4, name: "枣庄", spell: "zaozhuang"}, {
            id: 2110,
            big: 4,
            name: "东营",
            spell: "dongying"
        }, {id: 2103, big: 4, name: "烟台", spell: "yantai"}, {id: 2105, big: 4, name: "潍坊", spell: "weifang"}, {
            id: 2118,
            big: 4,
            name: "济宁",
            spell: "jining"
        }, {id: 2106, big: 4, name: "泰安", spell: "taian"}, {id: 2104, big: 4, name: "威海", spell: "weihai"}, {
            id: 2120,
            big: 4,
            name: "日照",
            spell: "rizhao"
        }, {id: 2132, big: 4, name: "莱芜", spell: "laiwu"}, {id: 2117, big: 4, name: "临沂", spell: "linyi"}, {
            id: 1015,
            big: 4,
            name: "德州",
            spell: "dezhou"
        }, {id: 2114, big: 4, name: "聊城", spell: "liaocheng"}, {
            id: 2113,
            big: 4,
            name: "滨州",
            spell: "binzhou"
        }, {id: 2112, big: 4, name: "菏泽", spell: "heze"}, {id: 1001, big: 5, name: "郑州", spell: "zhengzhou"}, {
            id: 1013,
            big: 5,
            name: "开封",
            spell: "kaifeng"
        }, {id: 1002, big: 5, name: "洛阳", spell: "luoyang"}, {
            id: 1018,
            big: 5,
            name: "平顶山",
            spell: "pingdingshan"
        }, {id: 1014, big: 5, name: "安阳", spell: "anyang"}, {id: 1016, big: 5, name: "鹤壁", spell: "hebi"}, {
            id: 1005,
            big: 5,
            name: "新乡",
            spell: "xinxiang"
        }, {id: 1011, big: 5, name: "焦作", spell: "jiaozuo"}, {id: 1008, big: 5, name: "濮阳", spell: "puyang"}, {
            id: 1023,
            big: 5,
            name: "许昌",
            spell: "xuchang"
        }, {id: 1010, big: 5, name: "漯河", spell: "luohe"}, {
            id: 1007,
            big: 5,
            name: "三门峡",
            spell: "sanmenxia"
        }, {id: 1009, big: 5, name: "南阳", spell: "nanyang"}, {
            id: 1006,
            big: 5,
            name: "商丘",
            spell: "shangqiu"
        }, {id: 1004, big: 5, name: "信阳", spell: "xinyang"}, {
            id: 1003,
            big: 5,
            name: "周口",
            spell: "zhoukou"
        }, {id: 1021, big: 5, name: "驻马店", spell: "zhumadian"}, {
            id: 419e3,
            big: 5,
            name: "河南直辖",
            spell: "henanzhixiaxian"
        }, {id: 1201, big: 5, name: "武汉", spell: "wuhan"}, {id: 1208, big: 5, name: "黄石", spell: "huangshi"}, {
            id: 1202,
            big: 5,
            name: "十堰",
            spell: "shiyan"
        }, {id: 1207, big: 5, name: "宜昌", spell: "yichang"}, {
            id: 1203,
            big: 5,
            name: "襄阳",
            spell: "xiangfan"
        }, {id: 1216, big: 5, name: "鄂州", spell: "ezhou"}, {id: 1209, big: 5, name: "荆门", spell: "jingmen"}, {
            id: 1229,
            big: 5,
            name: "孝感",
            spell: "xiaogan"
        }, {id: 1210, big: 5, name: "荆州", spell: "jingzhou"}, {
            id: 1236,
            big: 5,
            name: "黄冈",
            spell: "huanggang"
        }, {id: 1217, big: 5, name: "咸宁", spell: "xianning"}, {
            id: 1204,
            big: 5,
            name: "随州",
            spell: "suizhou"
        }, {id: 422800, big: 5, name: "恩施", spell: "enshi"}, {
            id: 429e3,
            big: 5,
            name: "湖北直辖",
            spell: "hubeizhixiaxian"
        }, {id: 201, big: 1, name: "北京", spell: "beijing"}, {
            id: 1701,
            big: 3,
            name: "沈阳",
            spell: "shenyang"
        }, {id: 1708, big: 3, name: "大连", spell: "dalian"}, {id: 1710, big: 3, name: "鞍山", spell: "anshan"}, {
            id: 1703,
            big: 3,
            name: "抚顺",
            spell: "fushun"
        }, {id: 1709, big: 3, name: "本溪", spell: "benxi"}, {id: 1702, big: 3, name: "丹东", spell: "dandong"}, {
            id: 1711,
            big: 3,
            name: "锦州",
            spell: "jinzhou"
        }, {id: 1714, big: 3, name: "营口", spell: "yingkou"}, {id: 1704, big: 3, name: "阜新", spell: "fuxin"}, {
            id: 1713,
            big: 3,
            name: "辽阳",
            spell: "liaoyang"
        }, {id: 1716, big: 3, name: "盘锦", spell: "panjin"}, {id: 1717, big: 3, name: "铁岭", spell: "tieling"}, {
            id: 1707,
            big: 3,
            name: "朝阳",
            spell: "chaoyang"
        }, {id: 1705, big: 3, name: "葫芦岛", spell: "huludao"}, {id: 1, big: 4, name: "安徽", spell: "anhui"}, {
            id: 3,
            big: 4,
            name: "福建",
            spell: "fujian"
        }, {id: 4, big: 2, name: "甘肃", spell: "gansu"}, {id: 5, big: 7, name: "广东", spell: "guangdong"}, {
            id: 6,
            big: 7,
            name: "广西",
            spell: "guangxi"
        }, {id: 7, big: 6, name: "贵州", spell: "guizhou"}, {id: 8, big: 7, name: "海南", spell: "hainan"}, {
            id: 9,
            big: 1,
            name: "河北",
            spell: "hebei"
        }, {id: 10, big: 5, name: "河南", spell: "henan"}, {id: 11, big: 3, name: "黑龙江", spell: "heilongjiang"}, {
            id: 12,
            big: 5,
            name: "湖北",
            spell: "hubei"
        }, {id: 13, big: 5, name: "湖南", spell: "hunan"}, {id: 14, big: 3, name: "吉林", spell: "jl"}, {
            id: 15,
            big: 4,
            name: "江苏",
            spell: "jiangsu"
        }, {id: 16, big: 5, name: "江西", spell: "jiangxi"}, {id: 17, big: 3, name: "辽宁", spell: "liaoning"}, {
            id: 18,
            big: 1,
            name: "内蒙古",
            spell: "neimenggu"
        }, {id: 19, big: 2, name: "宁夏", spell: "ningxia"}, {id: 20, big: 2, name: "青海", spell: "qinghai"}, {
            id: 21,
            big: 4,
            name: "山东",
            spell: "shandong"
        }, {id: 22, big: 1, name: "山西", spell: "shanxi"}, {id: 23, big: 2, name: "陕西", spell: "shaanxi"}, {
            id: 25,
            big: 6,
            name: "四川",
            spell: "sichuan"
        }, {id: 27, big: 6, name: "西藏", spell: "xizang"}, {id: 28, big: 2, name: "新疆", spell: "xinjiang"}, {
            id: 29,
            big: 6,
            name: "云南",
            spell: "yunnan"
        }, {id: 30, big: 4, name: "浙江", spell: "zhejiang"}, {id: 33, big: "1", name: "京津冀", spell: "jjj"}, {
            id: 34,
            big: "1",
            name: "江浙沪",
            spell: "jzh"
        }, {id: 35, big: "1", name: "珠三角", spell: "zsj"}, {id: 36, big: "1", name: "长三角", spell: "csj"}, {
            id: 37,
            big: "1",
            name: "云贵川",
            spell: "ygc"
        }], e.IpLocation = {
            cityId: 0,
            bigAreaId: 1,
            cityName: "全国",
            citySpell: "quanguo",
            ipCityCookieKey: "t_city",
            isLocation: !1,
            _callBacks: [],
            afterLocation: function (t) {
                if (e.isFunc(t)) return this.isLocation && 0 == this._callBacks.length ? void t() : void this._callBacks.push(t)
            },
            getCityInfo: function (t) {
                for (var n = 0, i = e.allCitys; n < i.length; n++) if (i[n].id == t) return {
                    cityId: i[n].id,
                    bigAreaId: i[n].big,
                    cityName: i[n].name,
                    citySpell: i[n].spell,
                    isProvince: i[n].id < 100
                };
                return {
                    cityId: this.AreaId,
                    bigAreaId: this.bigAreaId,
                    cityName: this.cityName,
                    citySpell: this.citySpell,
                    isProvince: !1
                }
            },
            getProvinceId: function (e) {
                var t = parseInt(e);
                if (t < 100) return t;
                if (t >= 100 && t <= 999) return e.toString().substr(0, 1);
                if (t >= 1e3 && t < 1e4) return e.toString().substr(0, 2);
                switch (t) {
                    case 622900:
                        return 4;
                    case 422800:
                        return 12;
                    case 652300:
                        return 28;
                    case 532300:
                        return 29;
                    case 532900:
                        return 29;
                    case 469e3:
                        return 8;
                    case 429e3:
                        return 12;
                    case 419e3:
                        return 10;
                    case 659e3:
                        return 28;
                    default:
                        return t
                }
            },
            GetCurrentProvinceId: function () {
                return this.getProvinceId(this.cityId)
            },
            _setLocationCity: function (e) {
                var t = this.getCityInfo(e);
                this.cityId = t.cityId, this.bigAreaId = t.bigAreaId, this.cityName = t.cityName, this.citySpell = t.citySpell, this.isLocation = !0;
                for (var n = 0, i = this._callBacks.length; n < i; n++) this._callBacks[n]();
                this._callBacks = []
            },
            saveIpCity: function (t) {
                var n = "undefined" != typeof ipConfig && ipConfig.gps ? ipConfig.expire : 24;
                e.Storage.setCookie(this.ipCityCookieKey, t, n, "/", "taoche.com"), this._setLocationCity(t)
            },
            locationByIp: function () {
                try {
                    var t = document.createElement("script");
                    t.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(t), t.src = "//ajax.taoche.cn/city/getcitybyip.ashx?jsonp=1&callback=Taoche.IpLocation.saveIpCity&_r=" + Math.random()
                } catch (n) {
                    e.IpLocation.saveIpCity(this.cityId)
                }
            },
            init: function () {
                for (var t = this, n = location.hostname.toLowerCase().split(".")[0], i = 0, r = e.allCitys, a = r.length; i < a; i++) if (r[i].spell == n) return e.isCitySite = !0, void t.saveIpCity(r[i].id);
                var o = e.Storage.getCookie(t.ipCityCookieKey);
                if (o && !isNaN(o)) return void t._setLocationCity(o);
                if ("undefined" == typeof ipConfig || !ipConfig.gps) return void t.locationByIp();
                var s = navigator.geolocation;
                if (!s) return void t.locationByIp();
                var l = null;
                navigator.userAgent && navigator.userAgent.indexOf("qqnews") > 0 && (l = setTimeout(function () {
                    t.locationByIp()
                }, 1e3)), s.getCurrentPosition(function (e) {
                    if (null !== l && clearTimeout(l), e && e.coords) {
                        var n = e.coords.latitude, i = e.coords.longitude;
                        try {
                            var r = document.createElement("script");
                            r.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(r), r.src = "//ajax.taoche.cn/city/getcitybygps.ashx?callback=Taoche.IpLocation.saveIpCity&x=" + n + "&y=" + i + "&_r=" + Math.random()
                        } catch (a) {
                            t.locationByIp()
                        }
                    } else t.locationByIp()
                }, function () {
                    null !== l && clearTimeout(l), t.locationByIp()
                }, {enableHighAccuracy: !1, timeout: 1e3, maximumAge: 0})
            }
        }, e.IpLocation.afterLocation(function () {
            e.currentCityId = e.IpLocation.cityId, e.currentCitySpell = e.IpLocation.citySpell, e.currentCityName = e.IpLocation.cityName;
            var t = e.currentCityId;
            window.BitautoCityForAd = e.currentCityName + (18 == t || 6 == t || 27 == t || 28 == t || 19 == t || t > 100 ? "" : "省")
        }), e.afterLocation = function (t) {
            e.IpLocation.afterLocation(t)
        }, e.IpLocation.init()
    }()
}, function (e, t) {
    "use strict";
    !function () {
        var e = window.Taoche || {};
        window.Taoche = e, e.isFunc = function (e) {
            return "[object Function]" === Object.prototype.toString.call(e)
        }, e.isNum = function (e) {
            return "[object Number]" === Object.prototype.toString.call(e)
        }, e.isString = function (e) {
            return "[object String]" === Object.prototype.toString.call(e)
        }, e.isArray = function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }, e.isObject = function (e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }
    }()
}, function (e, t) {
    "use strict";
    !function () {
        var e = window.Taoche || {};
        window.Taoche = e, window.CarInfo = [], e.htmlEncode = function (e) {
            return $("<div/>").text(e).html()
        }, e.htmlDecode = function (e) {
            return $("<div/>").html(e).text()
        }, e.SearchBox = {
            options: {
                inputEle: "",
                showListEle: "",
                clickSearchEles: "",
                tipFormat: "请输入心仪的品牌或车型",
                tipWords: ["5万 捷达", "10万以内", "5-8万 凯越", "SUV", "15万 SUV", "德国车", "自动挡 宝来"],
                initTip: !0,
                requestDelay: 250
            },
            keywordCacheKey: "t_search",
            timer: -97,
            ajaxUrl: "http://search.taoche.com/InputHandler.ashx",
            items: [],
            currIndex: -1,
            currVal: "",
            getInput: function () {
                return $(this.options.inputEle)
            },
            getShowList: function () {
                return $(this.options.showListEle)
            },
            closeList: function () {
                this.items = [], this.currIndex = -1, this.getShowList().hide()
            },
            tip: function () {
                if ("" == this.getInput().val()) {
                    var e = parseInt(Math.random() * this.options.tipWords.length),
                        t = this.options.tipFormat.replace("{0}", this.options.tipWords[e]);
                    this.currVal = t, this.getInput().val(t).removeClass("used-car-search-on")
                }
            },
            getSearchWord: function () {
                for (var e = this.getInput().val(), t = this.options.tipFormat.split("{0}"), n = 0; n < t.length; n++) e = e.replace(t[n], "");
                return e = e.replace(/</g, " ").replace(/>/g, " ").replace(/&/g, " ").replace(/"/g, " ").replace(/\'/g, " ")
            },
            ajaxCallBack: function (e) {
                if (CarInfo) {
                    if (this.items = CarInfo, 0 == this.items.length) return void this.closeList();
                    var t = [], n = [], i = "";
                    t[0] = n[0] = "<ul>";
                    for (var r = 0; r < this.items.length; r++) {
                        var a = this.items[r];
                        "5" == a.KeyType ? t.push(['<li><a target="_blank" data-index="', r, '" href="', a.url, '"><span>查看详情</span><i>', a.name, "</i></a></li>"].join("")) : "4" == a.KeyType ? n.push(['<li><a target="_blank" data-index="', r, '" href="', a.url, '"><span><strong>赞助商链接</strong></span><i style="font-weight:bold">', a.name, "</i></a></li>"].join("")) : a.url && "" != a.url ? n.push(['<li><a target="_blank" data-index="', r, '" href="', a.url, '"><span>约 ', a.pricecount, " 条车源</span><i>", a.name, "</i></a></li>"].join("")) : n.push(['<li><a data-index="', r, '" href="javascript:;"><span>约 ', a.pricecount, " 条车源</span><i>", a.name, "</i></a></li>"].join(""))
                    }
                    t.length > 1 && (t.push("</ul>"), i += t.join("")), n.length > 1 && (n.push("</ul>"), i += n.join(""));
                    var o = this;
                    this.getShowList().html(i).show().find("a").click(function () {
                        o.currIndex = $(this).attr("data-index"), o.getInput().val(o.items[o.currIndex].name), o.confirm("javascript:;" == $(this).attr("href"))
                    })
                }
            },
            search: function () {
                CarInfo = [], this.items = [], this.currIndex = -1;
                var t = this, n = this.getSearchWord();
                $.getScript(this.ajaxUrl + "?pfrom=pc&kw=" + encodeURIComponent(n) + "&target=" + encodeURI("http://www.taoche.com") + "&spell=" + e.currentCitySpell, function (e) {
                    t.ajaxCallBack(e)
                })
            },
            change: function () {
                var e = this.getInput().val();
                if (e != this.currVal) {
                    if (this.currVal = e, this.timer != -97 && clearTimeout(this.timer), "" == e) return void this.showSearchHistory();
                    var t = this;
                    this.timer = setTimeout(function () {
                        t.search()
                    }, this.options.requestDelay)
                }
            },
            confirm: function (t) {
                this.currVal = this.getInput().val();
                var n = this.currIndex < 0 ? {name: this.getSearchWord()} : this.items[this.currIndex];
                this.saveSearchWord(n.name), this.closeList(), t !== !1 && (n.url && "" != n.url ? window.open(n.url) : "" == n.name ? window.open("http://www.taoche.com/all/") : window.open("http://search.taoche.com/SearchHandler.ashx?pfrom=pc&kw=" + encodeURI(n.name) + "&areaid=" + e.currentCityId + "&areatype=1&target=" + encodeURI("http://www.taoche.com") + "&spell=" + e.currentCitySpell))
            },
            moveTo: function (e) {
                var t = this.getShowList().find("li");
                e < 0 || e >= this.items.length ? (t.removeClass("current"), this.getInput().val(this.currVal), this.getInput().val(this.currVal)) : (t.removeClass("current").eq(e).addClass("current"), this.getInput().val(this.items[e].name), this.getInput().val(this.items[e].name))
            },
            saveSearchWord: function (t) {
                var n = e.Storage.getCookie(this.keywordCacheKey);
                if (null == n || "" == n) return void e.Storage.setCookie(this.keywordCacheKey, t, 144, "/", "taoche.com");
                for (var i = n.split("|"), r = [t], a = 0; a < i.length && !(i[a] != t && "" != i[a] && (r.push(i[a]), r.length >= 10)); a++) ;
                e.Storage.setCookie(this.keywordCacheKey, r.join("|"), 144, "/", "taoche.com")
            },
            showSearchHistory: function () {
                var t = e.Storage.getCookie(this.keywordCacheKey);
                if (null != t && "" != t) {
                    var n = t.split("|");
                    if (0 != n.length) {
                        this.items = [], this.currIndex = -1;
                        for (var i = ['<div class="used-car-search-record">您曾搜索过</div><ul>'], r = 0, a = 0; a < n.length; a++) "" != n[a] && n[a] == e.htmlEncode(n[a]) && (this.items[this.items.length] = {
                            name: n[a],
                            KeyType: 3
                        }, i.push(['<li><a data-index="', r, '" href="javascript:;"><i>', n[a], "</i></a></li>"].join("")), r++);
                        i.push("</ul>");
                        var o = this;
                        this.getShowList().html(i.join("")).show().find("a").click(function () {
                            o.currIndex = $(this).attr("data-index"), o.getInput().val(o.items[o.currIndex].name).addClass("used-car-search-on"), o.confirm()
                        })
                    }
                }
            },
            _init: function () {
                this.getShowList().addClass("used-car-search-layer").hide(), this.options.initTip && this.tip();
                var e = this;
                this.getInput().attr("autocomplete", "off").focus(function () {
                    $(this).hasClass("used-car-search-on") || (e.currVal = "", $(this).val("").addClass("used-car-search-on"), e.showSearchHistory())
                }).blur(function () {
                    "" == $(this).val() && e.tip()
                }).keydown(function (t) {
                    switch (t.which) {
                        case 38:
                            return e.currIndex = e.currIndex <= -1 ? e.items.length - 1 : e.currIndex - 1, e.moveTo(e.currIndex), !1;
                        case 40:
                            e.currIndex = e.currIndex >= e.items.length - 1 ? -1 : e.currIndex + 1, e.moveTo(e.currIndex);
                            break;
                        case 13:
                            e.confirm()
                    }
                }).keyup(function (t) {
                    switch (t.which) {
                        case 38:
                        case 40:
                        case 13:
                            break;
                        default:
                            e.change()
                    }
                }).bind("paste", function () {
                    setTimeout(function () {
                        e.change()
                    }, 30)
                }), "" != this.options.clickSearchEles && $(this.options.clickSearchEles).click(function (t) {
                    e.confirm()
                }), $(document).click(function () {
                    e.closeList()
                }), this.getInput().click(function (e) {
                    e.stopPropagation()
                }), this.getShowList().click(function (e) {
                    e.stopPropagation()
                })
            },
            render: function (e) {
                this.options = $.extend(this.options, e), this._init()
            }
        }, $(function () {
            setTimeout(function () {
                e.SearchBox.render({inputEle: "#txtSearch", showListEle: "#divList", clickSearchEles: "#btnSearch"})
            }, 0)
        })
    }()
}, function (e, t) {
    "use strict";
    !function () {
        var e = window.Taoche || {};
        window.Taoche = e, e.Storage = {
            canLocal: function () {
                if (!window.localStorage) return !1;
                try {
                    var e = "_testkey_A0";
                    return localStorage.setItem(e, "1"), localStorage.removeItem(e), !0
                } catch (t) {
                    return !1
                }
            }(), setLocal: function (t, n, i) {
                var r = e.DateTime.addHours(i).getTime();
                try {
                    localStorage.setItem(t, "" + r + "," + n)
                } catch (a) {
                }
            }, getLocal: function (e) {
                try {
                    var t, n, i = localStorage.getItem(e);
                    return null == i ? null : (t = i.indexOf(","), t < 0 ? i : (n = i.substr(0, t), isNaN(n) ? i : new Date(parseInt(n)) <= new Date ? (localStorage.removeItem(e), null) : i.substr(t + 1, i.length - t - 1)))
                } catch (r) {
                    return null
                }
            }, removeLocal: function (e) {
                try {
                    localStorage.removeItem(e)
                } catch (t) {
                }
            }, setCookie: function (t, n, i, r, a, o) {
                document.cookie = t + "=" + escape(n) + (i ? "; expires=" + e.DateTime.addHours(i).toGMTString() : "") + (r ? "; path=" + r : "") + (a ? "; domain=" + a : "") + (o ? "; secure" : "")
            }, getCookie: function (e) {
                var t = document.cookie;
                if (t.length > 0) {
                    var n, i = t.indexOf(e + "=");
                    if (i != -1) return i = i + e.length + 1, n = t.indexOf(";", i), n == -1 && (n = t.length), unescape(t.substring(i, n))
                }
                return ""
            }, getCookieDecode: function (e) {
                for (var t = e + "=", n = t.length, i = document.cookie.length, r = 0, a = this; r < i;) {
                    var o = r + n;
                    if (document.cookie.substring(r, o) == t) return a.getCookieValDecode(o);
                    if (r = document.cookie.indexOf(" ", r) + 1, 0 == r) break
                }
                return ""
            }, removeCookie: function (e, t, n) {
                document.cookie = e + "=" + (t ? "; path=" + t : "") + (n ? "; domain=" + n : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT"
            }, setValue: function (e, t, n, i, r, a) {
                n && !isNaN(n) && parseInt(n) > 0 && this.canLocal ? this.setLocal(e, t, n) : this.setCookie(e, t, n, i, r, a)
            }, getValue: function (e) {
                var t = null;
                return this.canLocal && (t = this.getLocal(e)), null == t && (t = this.getCookie(e)), t
            }, removeValue: function (e, t, n) {
                this.canLocal && this.removeLocal(e), this.removeCookie(e, t, n)
            }
        }, window.Cookie = {
            getExpDate: function (e, t, n) {
                var i = new Date;
                if ("number" == typeof e && "number" == typeof t && "number" == typeof t) return i.setDate(i.getDate() + parseInt(e)), i.setHours(i.getHours() + parseInt(t)), i.setMinutes(i.getMinutes() + parseInt(n)), i.toGMTString()
            }, getCookie: function (t) {
                return e.Storage.getCookie(t)
            }, setCookie: function (e, t, n, i, r, a) {
                document.cookie = e + "=" + escape(t) + (n ? "; expires=" + n : "") + (i ? "; path=" + i : "") + (r ? "; domain=" + r : "") + (a ? "; secure" : "")
            }, deleteCookie: function (e, t, n) {
                this.getCookie(e) && (document.cookie = e + "=" + (t ? "; path=" + t : "") + (n ? "; domain=" + n : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT")
            }
        }
    }()
}, function (e, t, n) {
    "use strict";
    n(81), window.APIURL = window.APIURL || "http://api.chedai.bitauto.com/";
    var i = function (e, t) {
        this.element = e, this.defaults = {
            callBacks: new Function,
            loadCityUrl: APIURL + "api/Common/GetGroupingCityList",
            isRelationHeader: !1,
            isSetCookie: !0,
            data: {},
            dataType: "jsonp"
        }, this.opts = $.extend(this.defaults, t), this.cityDom = $('<div class="sel-city-menu drop-layer">'), this.boxHeight = this.element.height(), this.cacheDom = {}, this.cityData = "", this.asynData = !0, this.init()
    };
    i.prototype = {
        init: function () {
            var e = this;
            if (e.element.parent().hasClass("sel-city-wrapper") && e.element.next().hasClass("sel-city-menu")) {
                var t = location.href, n = t.split("?")[1];
                e.cityData = !0, e.asynData = !1, e.cityDom = e.element.next(".sel-city-menu.drop-layer"), n && e.cityDom.find("a").each(function () {
                    var e = $(this).attr("href") + "?" + n;
                    $(this).attr("href", e)
                }), e.cacheDom = {
                    domesticfrom: e.cityDom.find("div[data-panel='domesticfrom']"),
                    ABCDE: e.cityDom.find("div[data-panel='ABCDE']"),
                    FGHIJ: e.cityDom.find("div[data-panel='FGHIJ']"),
                    KLMNOP: e.cityDom.find("div[data-panel='KLMNOP']"),
                    QRSTUV: e.cityDom.find("div[data-panel='QRSTUV']"),
                    WXYZ: e.cityDom.find("div[data-panel='WXYZ']")
                }
            } else e.asynData = !0, e.renderDom();
            e.bindEvent()
        }, sendAjax: function (e, t, n) {
            var i = {url: "", timeout: 5e3, type: "get", dataType: "json", cache: !0, async: !0, data: {}};
            i = $.extend(i, e), $.ajax({
                url: i.url,
                type: i.type,
                dataType: i.dataType,
                async: i.async,
                cache: i.cache,
                data: i.data,
                beforeSend: function () {
                },
                success: function (e) {
                    t(e)
                },
                complete: function (e, t) {
                    "timeout" == status && n(t)
                }
            })
        }, renderDom: function () {
            var e = this, t = "";
            e.opts.isRelationHeader && (t = 'data-relation="true"'), e.element.wrap('<span class="sel-city-wrapper" ' + t + ' style="height:' + e.boxHeight + 'px;display:inline-block;"></span>'), e.cityDom.html('<div class="city-loading"></div>'), e.element.after(e.cityDom)
        }, loadCity: function () {
            function e(e) {
                if (e.Result) {
                    var t = e.Data;
                    $.each(t, function (e, t) {
                        "HOT" == t.GroupName ? (s += "热门城市", f += '<div data-panel="domesticfrom" class="hot-city"><dl class="clrfix"><dt>城市</dt><dd class="clrfix"><ul>', $.each(t.ItemCollection, function (e, t) {
                            f += '<li><a data-url="' + t.Url + '" data-id="' + t.CityId + '" data-regionId="' + t.RegionId + '" data-citySpell="' + t.CitySpell + '" href="javascript:void(0);" title="' + t.CityName + '">' + t.CityName + "</a></li>"
                        }), f += "</ul></dd></dl></div>", b[0] = "Hot") : t.GroupName >= "A" && t.GroupName <= "E" && "HOT" != t.GroupName ? (l += t.GroupName, h += "<dt>" + t.GroupName + '</dt><dd class="clrfix"><ul>', $.each(t.ItemCollection, function (e, t) {
                            h += '<li><a data-url="' + t.Url + '" data-id="' + t.CityId + '" data-regionId="' + t.RegionId + '" data-citySpell="' + t.CitySpell + '" href="javascript:void(0);" title="' + t.CityName + '">' + t.CityName + "</a></li>"
                        }), h += "</ul></dd>", b[1] = "ABCDE") : t.GroupName >= "F" && t.GroupName <= "J" && "HOT" != t.GroupName ? (u += t.GroupName, g += "<dt>" + t.GroupName + '</dt><dd class="clrfix"><ul>', $.each(t.ItemCollection, function (e, t) {
                            g += '<li><a data-url="' + t.Url + '" data-id="' + t.CityId + '" data-regionId="' + t.RegionId + '" data-citySpell="' + t.CitySpell + '" href="javascript:void(0);" title="' + t.CityName + '">' + t.CityName + "</a></li>"
                        }), g += "</ul></dd>", b[2] = "FGHIJ") : t.GroupName >= "K" && t.GroupName <= "P" && "HOT" != t.GroupName ? (c += t.GroupName, m += "<dt>" + t.GroupName + '</dt><dd class="clrfix"><ul>', $.each(t.ItemCollection, function (e, t) {
                            m += '<li><a data-url="' + t.Url + '" data-id="' + t.CityId + '" data-regionId="' + t.RegionId + '" data-citySpell="' + t.CitySpell + '" href="javascript:void(0);" title="' + t.CityName + '">' + t.CityName + "</a></li>"
                        }), m += "</ul></dd>", b[3] = "KLMNOP") : t.GroupName >= "Q" && t.GroupName <= "V" && "HOT" != t.GroupName ? (d += t.GroupName, y += "<dt>" + t.GroupName + '</dt><dd class="clrfix"><ul>', $.each(t.ItemCollection, function (e, t) {
                            y += '<li><a data-url="' + t.Url + '" data-id="' + t.CityId + '" data-regionId="' + t.RegionId + '" data-citySpell="' + t.CitySpell + '" href="javascript:void(0);" title="' + t.CityName + '">' + t.CityName + "</a></li>"
                        }), y += "</ul></dd>", b[4] = "QRSTUV") : t.GroupName >= "W" && t.GroupName <= "Z" && "HOT" != t.GroupName && (p += t.GroupName, v += "<dt>" + t.GroupName + '</dt><dd class="clrfix"><ul>', $.each(t.ItemCollection, function (e, t) {
                            v += '<li><a data-url="' + t.Url + '" data-id="' + t.CityId + '" data-regionId="' + t.RegionId + '" data-citySpell="' + t.CitySpell + '" href="javascript:void(0);" title="' + t.CityName + '">' + t.CityName + "</a></li>"
                        }), v += "</ul></dd>", b[5] = "WXYZ")
                    }), o = {
                        navHotStr: s,
                        navABCDEStr: l,
                        navFGHIJStr: u,
                        navKLMNOPStr: c,
                        navQRSTUVStr: d,
                        navWXYZStr: p,
                        domWXYZ: v,
                        domQRSTUV: y,
                        domKLMNOP: m,
                        domFGHIJ: g,
                        domABCDE: h,
                        domHot: f
                    }, r += '<div class="sel-city-menuCon"><i class="icon-close"></i><div class="sel-city-nav">';
                    var i = [], x = "", w = "";
                    $.each(b, function (e, t) {
                        void 0 != t && i.push(t)
                    }), $.each(i, function (e, t) {
                        0 == e ? (x = "active", w = "") : (x = "", w = "display:none"), "Hot" == t ? (r += '<span data-key="domesticfrom" class="' + x + '">' + s + "</span>", a += f) : (r += '<span data-key="' + t + '" class="' + x + '">' + o["nav" + t + "Str"] + "</span>", a += '<div data-panel="' + t + '" class="other-city" style="' + w + '"><dl>' + o["dom" + t] + "</dl></div>")
                    }), n.cityData = r + "</div>" + a + "</div>", n.cityDom.html(n.cityData), n.cacheDom = {
                        domesticfrom: n.cityDom.find("div[data-panel='domesticfrom']"),
                        ABCDE: n.cityDom.find("div[data-panel='ABCDE']"),
                        FGHIJ: n.cityDom.find("div[data-panel='FGHIJ']"),
                        KLMNOP: n.cityDom.find("div[data-panel='KLMNOP']"),
                        QRSTUV: n.cityDom.find("div[data-panel='QRSTUV']"),
                        WXYZ: n.cityDom.find("div[data-panel='WXYZ']")
                    }
                } else tools.showAlert("城市加载失败")
            }

            function t(e) {
                n.sendAjax({url: i, dataType: "jsonp"}, showSerials, t)
            }

            var n = this, i = n.opts.loadCityUrl, r = "", a = "", o = {}, s = "", l = "", u = "", c = "", d = "",
                p = "", f = "", h = "", g = "", m = "", y = "", v = "", b = [];
            n.sendAjax({url: i, data: n.opts.data, dataType: n.opts.dataType}, e, t)
        }, bindEvent: function () {
            var e = this;
            e.element.parent(".sel-city-wrapper").on("click", ".sel-city-nav span,dd li a,.icon-close", function (t) {
                var n = $(t.currentTarget);
                if (n.is(".sel-city-nav span")) {
                    t.preventDefault(), $(this).siblings("span").removeClass("active").end().addClass("active");
                    var i = n.attr("data-key");
                    e.cityDom.find("div[data-panel]").hide(), e.cacheDom[i].show()
                } else if (n.is("dd li a")) {
                    e.asynData && t.preventDefault();
                    var r = {
                        cityId: $(this).attr("data-id"),
                        cityName: $(this).text(),
                        regionId: $(this).attr("data-regionid"),
                        url: $(this).attr("data-url"),
                        citySpell: $(this).attr("data-citySpell")
                    };
                    e.element.parent(".sel-city-wrapper").find(".upArrow-icon").removeClass("upArrow-icon").addClass("downArrow-icon");
                    var a = tools.wildcardUrl();
                    if (e.opts.isSetCookie) {
                        var o = "t_city=" + r.cityId + ";path=/;domain=" + a;
                        document.cookie = o
                    }
                    e.asynData && setTimeout(function () {
                        e.element.find(".area-city-con").text(r.cityName), window.selCityHeader && "true" == e.element.parent(".sel-city-wrapper").attr("data-relation") && window.selCityHeader(r), window.selCityCallback && "true" == e.element.parent(".sel-city-wrapper").attr("data-relation") && window.selCityCallback(r), e.opts.callBacks(r)
                    }, 300), e.cityDom.hide()
                } else n.is(".icon-close") && (e.cityDom.hide(), e.element.parent(".sel-city-wrapper").find(".upArrow-icon").removeClass("upArrow-icon").addClass("downArrow-icon"))
            }), e.element.on("click", function (t) {
                t.preventDefault(), t.stopPropagation(), e.element.parent(".sel-city-wrapper").find(".sel-city-nav span").removeClass("active"), e.element.parent(".sel-city-wrapper").find(".sel-city-nav span:first").addClass("active"), e.element.parent(".sel-city-wrapper").find(".sel-city-menu div[data-panel]").hide(), e.element.parent(".sel-city-wrapper").find(".sel-city-menu div[data-panel]:first").show(), e.cityDom.is(":visible") ? (e.cityDom.hide(), e.element.parent(".sel-city-wrapper").find(".upArrow-icon").removeClass("upArrow-icon").addClass("downArrow-icon")) : ($(".drop-layer:visible").hide(), $(".up-arrow").removeClass("up-arrow"), $(".upArrow-icon").removeClass("upArrow-icon").addClass("downArrow-icon"), e.element.parent(".sel-city-wrapper").find(".downArrow-icon").removeClass("downArrow-icon").addClass("upArrow-icon"), "" == e.cityData && e.loadCity(), e.cityDom.show())
            }), $(document).on("click", function (t) {
                var n = $(t.target);
                !n.is(e.cityDom) && n.parents(".sel-city-menu").length <= 0 && n != e.element && (e.cityDom.hide(), e.element.parent(".sel-city-wrapper").find(".upArrow-icon").removeClass("upArrow-icon").addClass("downArrow-icon"))
            })
        }, setOptions: function (e) {
            this.opts = $.extend(this.opts, e), this.cityData = "", this.cityDom.html('<div class="city-loading"></div>')
        }
    }, $.fn.selCity = function (e) {
        if ($(this).data("selCity")) $(this).data("selCity").setOptions(e); else {
            var t = new i(this, e);
            $(this).data("selCity", t)
        }
        return this
    }, e.exports = $
}, function (module, exports) {
    "use strict";
    var applyBln = !0, applyTimer = null, Tools = {
        SetCookie: function (e, t, n, i) {
            var r = 1, a = "";
            void 0 != n && "" != n || (n = new Date, n.setTime(n.getTime() + 24 * r * 60 * 60 * 1e3), n = n.toGMTString()), i && (a = ";domain=" + i), document.cookie = e + "=" + escape(t) + ";path=/;expires=" + n + a
        }, GetCookie: function (e) {
            var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            return (t = document.cookie.match(n)) ? unescape(t[2]) : null
        }, GetLoginStatus: function (e) {
            var t = "";
            t = "undefined" == typeof USERCENTERURL ? "//home.taoche.com/User/GetCurrentUserIdentity" : USERCENTERURL + "/User/GetCurrentUserIdentity", $.ajax({
                url: t,
                dataType: "jsonp",
                beforeSend: function () {
                },
                success: function (t) {
                    $(window).data("userStatusReady", !0).on("getUserStatus", function () {
                        return {
                            login: t.Islogin,
                            id: t.LoanUserID,
                            mobile: t.Telphone,
                            hashMobile: t.HashTelphone,
                            token: t.Token,
                            name: t.UserName
                        }
                    }), $("#tc_top_myTaocheList").append('<a href="' + (USERCENTERURL || "//home.taoche.com/") + "user/logout?returnurl=" + encodeURIComponent(location.href) + '" rel="nofollow" id="tc_top_loginout">退出</a>'), "function" == typeof e && e(t)
                },
                error: function (t) {
                    console.log(t), "function" == typeof e && e(t)
                }
            })
        }, IsIp: function (e) {
            var t = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,
                n = e.match(t);
            return null != n
        }, WildcardUrl: function () {
            var e = "", t = window.location.hostname;
            if (Tools.IsIp(t) || "localhost" == t) e = t; else {
                var n = t.split(".");
                e = n[n.length - 2] + "." + n[n.length - 1]
            }
            return e
        }, ajaxUrl: {}, $ajax: function (e) {
            return !Tools.ajaxUrl[e.url] && (Tools.ajaxUrl[e.url] = !0, e.cache = !0, e.dataType = e.dataType ? e.dataType : "json", e.type = e.type ? e.type : "POST", e.error = function (e, t) {
                var n = e.status;
                0 != n && (500 == n ? alert("服务器错误") : 404 == n && alert("请求没有找到"))
            }, e.goSuccess = e.success, e.success = function (t) {
                e.goSuccess && e.goSuccess(t)
            }, e.complete = function () {
                delete Tools.ajaxUrl[e.url]
            }, void $.ajax(e))
        }, GetUrlParam: function (e) {
            var t = e.toLowerCase(), n = window.location.search.substr(1).toLowerCase(),
                i = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), r = n.match(i);
            return null != r ? unescape(r[2]) : null
        }, SetUrlParam: function SetUrlParam(name, value) {
            var pattern = name + "=([^&]*)", replaceText = name + "=" + value, url = window.location.href;
            if (url.match(pattern)) {
                var tmp = "/(" + name + "=)([^&]*)/gi";
                return tmp = url.replace(eval(tmp), replaceText)
            }
            return url.match("[?]") ? url + "&" + replaceText : url + "?" + replaceText
        }, ListPagination: function (e, t, n, i) {
            function r() {
                a += n == o ? '<a href="javascript:void(0);" class="num active">' + o + "</a>" : '<a href="javascript:void(0);" class="num">' + o + "</a>"
            }

            var e = e, t = t, n = n, a = "";
            if (a += 1 == n ? '<a href="javascript:void(0);" class="prev unclick">上一页</a>' : '<a href="javascript:void(0);" class="prev">上一页</a>', t <= 10) for (var o = 1; o <= t; ++o) r(); else if (n <= 4) {
                for (var o = 1; o <= 5; o++) r();
                a += '<a href="javascript:void(0);">...</a><a href="javascript:void(0);" class="num">' + t + "</a>"
            } else if (n >= t - 3) {
                a += '<a href="javascript:void(0);" class="num">1</a><a href="javascript:void(0);">...</a>';
                for (var o = t - 4; o <= t; o++) r()
            } else {
                a += '<a href="javascript:void(0);" class="num">1</a> <a href="javascript:void(0);" class="num">...</a>';
                for (var s = 0, o = n - 2; o <= n + 2; o++) s++, s <= 5 && r();
                a += '<a href="javascript:void(0);">...</a><a href="javascript:void(0);" class="num">' + t + "</a>"
            }
            a += n == t ? '<a href="javascript:void(0);" class="next unclick">下一页</a>' : '<a href="javascript:void(0);" class="next">下一页</a>', $("#" + e).html(a), $("#" + e).find(".prev").on("click", function (r) {
                return r.stopPropagation(), 1 == n ? (i(n), !1) : (--n, Tools.ListPagination(e, t, n, i), i(n), !1)
            }), $("#" + e).find(".num").on("click", function (r) {
                return r.stopPropagation(), n = parseInt($(this).text()), Tools.ListPagination(e, t, n, i), i(n), !1
            }), $("#" + e).find(".next").on("click", function (r) {
                return r.stopPropagation(), n == t ? (i(n), !1) : (++n, Tools.ListPagination(e, t, n, i), i(n), !1)
            })
        }, FormatCurrency: function (e) {
            e = e.toString().replace(/\$|\,/g, ""), isNaN(e) && (e = "0");
            var t = e == (e = Math.abs(e));
            e = Math.floor(100 * e + .50000000001);
            var n = e % 100;
            e = Math.floor(e / 100).toString(), n < 10 && (n = "0" + n);
            for (var i = 0; i < Math.floor((e.length - (1 + i)) / 3); i++) e = e.substring(0, e.length - (4 * i + 3)) + "," + e.substring(e.length - (4 * i + 3));
            return (t ? "" : "-") + e + "." + n
        }, GetUrl: function () {
            var e = window.location.href.split("//")[1];
            return e = e.split("/"), e.length > 0 ? "http://" + e[0] : ""
        }, ShowAlert: function (e, t) {
            var n, i = 0, r = e;
            $("#showAlertBox").length > 0 ? n = $("showAlertBox") : (n = $('<div id="showAlertBox">'), $("body").append(n)), $("#showAlertBox").text(r).css({
                "margin-left": "-" + $("#showAlertBox").outerWidth() / 2 + "px",
                "margin-top": "-" + $("#showAlertBox").outerHeight() / 2 + "px"
            }).fadeIn(), i = void 0 == t ? 2e3 : t, setTimeout(function () {
                $("#showAlertBox").fadeOut(300)
            }, i)
        }, AddCmma: function (e) {
            var t = String(e).substring(e.length, e.length - 1), n = String(Math.round(e));
            return "元" == t ? n = String(Math.round(e.substring(0, e.length - 1))) : "万" == t && (n = String(Math.round(1e4 * Number(e.substring(0, e.length - 1))))), n.replace(/\B(?=(?:\d{3})+\b)/g, ",")
        }, IsApply: function (e) {
            applyTimer ? e(applyBln) : (e(applyBln), applyBln = !1, applyTimer = setTimeout(function () {
                applyBln = !0, clearTimeout(applyTimer), applyTimer = null
            }, 1e3))
        }, SubstringClame: function (e, t) {
            var n = e.text(), i = n.length;
            i > t && (n = n.substring(0, t) + "...", e.text(n))
        }, Abtest: function (e, t) {
            var n = this, i = 1e3, r = t || 10, a = 0, o = function (e) {
                return e = (e || "1") + "", parseInt(e.substring(0, 1), 16) % 2 ? 1 : 2
            }, s = function l(e) {
                var t = n.getCookie("_utrace"), s = "function" == typeof e;
                return t || a > r || !s ? s ? e(o(t)) : o(t) : (a++, void setTimeout(l.bind(n, e), i))
            };
            return s(e)
        }
    };
    $.fn.selectControl = function (e, t, n) {
        function i() {
            r.find("li").length > 1 && (h = r.find("div").attr("data-id"), $(".drop-layer:visible").stop().hide(), $(".up-arrow").removeClass("up-arrow"), $(".upArrow-icon").removeClass("upArrow-icon").addClass("downArrow-icon"), r.find("li").each(function (e, t) {
                y = "" == m || $(t).index() == m, $(t).attr("data-id") == h && y ? $(this).addClass("cur") : $(this).removeClass("cur")
            }), r.addClass("up-arrow"), f.stop().fadeIn())
        }

        var r = $('<div class="select-ctrl">'), a = "", o = $(this), s = "", l = t, e = e;
        if (o.attr("class") ? s += " class:" + o.attr("class") : o.attr("id") && (s += " id:" + o.attr("id")), o.is("select")) {
            o.hide();
            var u = o.find("option[selected='selected']"), c = "", d = "";
            o.find("option[data-disabled='disabled']:eq(0)").text();
            $(this).attr("data-type") && (d = $(this).attr("data-type")), u.index() >= 0 ? (c = u.val(), d += u.text()) : (c = o.find("option").eq(0).val(), d += o.find("option").eq(0).text().replace("$$", ""));
            var p = "";
            o.find("option").each(function (e, t) {
                var n, i, r, o, s = "";
                if ($(this).attr("data-disabled") ? (n = $(this).attr("data-disabled"), p = $(this).text(), r = "disabled") : (n = "", r = ""), s = $(this).text().split("$$")[0], $(this).text().split("$$")[1] && (s += "<span>" + $(this).text().split("$$")[1] + "</span>"), o = $(this).attr("data-link") ? $(this).attr("data-link") : "", i = $(this).attr("data-type") ? $(this).attr("data-type") : "", 0 == e) {
                    if (a += '<div data-id="' + c + '" data-link="' + o + '" data-disabled="' + n + '" data-category="' + $(this).attr("data-year") + '" data-type="' + i + '">' + d + "</div>", a += '<ul class="drop-layer" style="display:none;"><li class="triangle-icon"></li>', "false" != $(this).attr("data-option")) {
                        var l = "";
                        l = $(this).attr("data-default") ? $(this).attr("data-default") : s, a += '<li data-id="' + $(this).val() + '" data-link="' + o + '" data-disabled="' + n + '" data-type="' + i + '" data-text="' + $(this).text() + '">' + l + "</li>"
                    }
                } else a += '<li class="' + r + '" data-category="' + p + '" data-id="' + $(this).val() + '" data-link="' + o + '" data-disabled="' + n + '" data-type="' + i + '">' + s + "</li>"
            }), a += "</ul>", r.html(a), o.after(r)
        } else "notRender" == n ? r = $(this) : console.log(s + " 参数有误！");
        r.find("li").length <= 1 && r.addClass("no-arrow");
        var f = r.find("ul"), h = r.find("div").attr("data-id"), g = r.find("div").text(), m = "", y = !1;
        return "hover" == l && r.hover(function () {
            i()
        }, function () {
            r.removeClass("up-arrow"), r.find("ul").stop().fadeOut()
        }), r.on("click", "div,li", function (t) {
            t.stopPropagation();
            var n = $(t.currentTarget);
            if ((n.is("div") || n.is(r)) && "hover" != l) f.is(":hidden") ? i() : (r.removeClass("up-arrow"), f.fadeOut()); else if (n.is("li") && !n.is("[data-disabled = 'disabled']")) {
                var a = n.attr("data-id"), s = n.attr("data-category"), u = "", c = "", d = "";
                m = n.index(), c = n.attr("data-text") ? n.attr("data-text") : n.text(), d = n.attr("data-link") ? n.attr("data-link") : "", u = n.attr("data-type") ? n.attr("data-type") + c : c, r.removeClass("up-arrow"), n.parent("ul").fadeOut().siblings("div").attr("data-id", a).text(u), e && e(a, u, r, s, {
                    oldDataId: h,
                    oldText: g
                }, d), o.val(a)
            }
        }), $(document).on("click", function (e) {
            var t = $(e.target), n = $(".select-ctrl");
            !t.is(n) && t.parents(".select-ctrl").length <= 0 && (n.removeClass("up-arrow"), n.find("ul").fadeOut())
        }), this
    }, function (e, t, n) {
        var i = {tabsId: "tabs", consId: "cons"}, r = function (e) {
            return this.data = t.extend(i, e), this.scroll = null, this.data.tabsId ? (this.tabsId = this.data.tabsId, this.data.consId ? (this.consId = this.data.consId, this.domInit(), void this.eventInit()) : console.log("请填写内容con ID")) : console.log("请填写选项tab ID")
        };
        r.prototype = {
            domInit: function () {
                t("#" + this.tabsId + ">div:eq(0)").addClass("stab active").siblings().addClass("stab"), t("#" + this.consId + ">div:eq(0)").addClass("scon active").siblings().addClass("scon")
            }, eventInit: function () {
                var e = this;
                t("body").on("mouseover", "#" + e.tabsId + ">div", function () {
                    var n = t("#" + e.consId), i = t(this).index();
                    t(this).addClass("active").siblings().removeClass("active"), n.children("div:eq(" + i + ")").addClass("active").siblings().removeClass("active")
                })
            }
        }, e.Tabs = r
    }(window, $), module.exports = {
        getUrlParam: Tools.GetUrlParam,
        setUrlParam: Tools.SetUrlParam,
        setCookie: Tools.SetCookie,
        getCookie: Tools.GetCookie,
        $ajax: Tools.$ajax,
        listPagination: Tools.ListPagination,
        showAlert: Tools.ShowAlert,
        formatCurrency: Tools.FormatCurrency,
        getUrl: Tools.GetUrl,
        wildcardUrl: Tools.WildcardUrl,
        isIP: Tools.IsIP,
        addCmma: Tools.AddCmma,
        isApply: Tools.IsApply,
        substringClame: Tools.SubstringClame,
        abtest: Tools.Abtest,
        getLoginStatus: Tools.GetLoginStatus
    }
}, function (e, t, n) {
    e.exports = {"default": n(48), __esModule: !0}
}, function (e, t, n) {
    e.exports = {"default": n(49), __esModule: !0}
}, function (e, t, n) {
    e.exports = {"default": n(50), __esModule: !0}
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0;
    var r = n(46), a = i(r), o = n(45), s = i(o),
        l = "function" == typeof s["default"] && "symbol" == typeof a["default"] ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof s["default"] && e.constructor === s["default"] && e !== s["default"].prototype ? "symbol" : typeof e
        };
    t["default"] = "function" == typeof s["default"] && "symbol" === l(a["default"]) ? function (e) {
        return "undefined" == typeof e ? "undefined" : l(e)
    } : function (e) {
        return e && "function" == typeof s["default"] && e.constructor === s["default"] && e !== s["default"].prototype ? "symbol" : "undefined" == typeof e ? "undefined" : l(e)
    }
}, function (e, t, n) {
    var i = n(9), r = i.JSON || (i.JSON = {stringify: JSON.stringify});
    e.exports = function (e) {
        return r.stringify.apply(r, arguments)
    }
}, function (e, t, n) {
    n(73), n(71), n(74), n(75), e.exports = n(9).Symbol
}, function (e, t, n) {
    n(72), n(76), e.exports = n(26).f("iterator")
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function (e, t) {
    e.exports = function () {
    }
}, function (e, t, n) {
    var i = n(6), r = n(68), a = n(67);
    e.exports = function (e) {
        return function (t, n, o) {
            var s, l = i(t), u = r(l.length), c = a(o, u);
            if (e && n != n) {
                for (; u > c;) if (s = l[c++], s != s) return !0
            } else for (; u > c; c++) if ((e || c in l) && l[c] === n) return e || c || 0;
            return !e && -1
        }
    }
}, function (e, t, n) {
    var i = n(51);
    e.exports = function (e, t, n) {
        if (i(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, i) {
                    return e.call(t, n, i)
                };
            case 3:
                return function (n, i, r) {
                    return e.call(t, n, i, r)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t, n) {
    var i = n(18), r = n(34), a = n(19);
    e.exports = function (e) {
        var t = i(e), n = r.f;
        if (n) for (var o, s = n(e), l = a.f, u = 0; s.length > u;) l.call(e, o = s[u++]) && t.push(o);
        return t
    }
}, function (e, t, n) {
    var i = n(1).document;
    e.exports = i && i.documentElement
}, function (e, t, n) {
    var i = n(27);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == i(e) ? e.split("") : Object(e)
    }
}, function (e, t, n) {
    var i = n(27);
    e.exports = Array.isArray || function (e) {
        return "Array" == i(e)
    }
}, function (e, t, n) {
    "use strict";
    var i = n(32), r = n(12), a = n(20), o = {};
    n(4)(o, n(7)("iterator"), function () {
        return this
    }), e.exports = function (e, t, n) {
        e.prototype = i(o, {next: r(1, n)}), a(e, t + " Iterator")
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {value: t, done: !!e}
    }
}, function (e, t, n) {
    var i = n(13)("meta"), r = n(11), a = n(2), o = n(5).f, s = 0, l = Object.isExtensible || function () {
        return !0
    }, u = !n(10)(function () {
        return l(Object.preventExtensions({}))
    }), c = function (e) {
        o(e, i, {value: {i: "O" + ++s, w: {}}})
    }, d = function (e, t) {
        if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
        if (!a(e, i)) {
            if (!l(e)) return "F";
            if (!t) return "E";
            c(e)
        }
        return e[i].i
    }, p = function (e, t) {
        if (!a(e, i)) {
            if (!l(e)) return !0;
            if (!t) return !1;
            c(e)
        }
        return e[i].w
    }, f = function (e) {
        return u && h.NEED && l(e) && !a(e, i) && c(e), e
    }, h = e.exports = {KEY: i, NEED: !1, fastKey: d, getWeak: p, onFreeze: f}
}, function (e, t, n) {
    var i = n(5), r = n(8), a = n(18);
    e.exports = n(3) ? Object.defineProperties : function (e, t) {
        r(e);
        for (var n, o = a(t), s = o.length, l = 0; s > l;) i.f(e, n = o[l++], t[n]);
        return e
    }
}, function (e, t, n) {
    var i = n(19), r = n(12), a = n(6), o = n(24), s = n(2), l = n(30), u = Object.getOwnPropertyDescriptor;
    t.f = n(3) ? u : function (e, t) {
        if (e = a(e), t = o(t, !0), l) try {
            return u(e, t)
        } catch (n) {
        }
        if (s(e, t)) return r(!i.f.call(e, t), e[t])
    }
}, function (e, t, n) {
    var i = n(6), r = n(33).f, a = {}.toString,
        o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        s = function (e) {
            try {
                return r(e)
            } catch (t) {
                return o.slice()
            }
        };
    e.exports.f = function (e) {
        return o && "[object Window]" == a.call(e) ? s(e) : r(i(e))
    }
}, function (e, t, n) {
    var i = n(2), r = n(69), a = n(21)("IE_PROTO"), o = Object.prototype;
    e.exports = Object.getPrototypeOf || function (e) {
        return e = r(e), i(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null
    }
}, function (e, t, n) {
    var i = n(23), r = n(14);
    e.exports = function (e) {
        return function (t, n) {
            var a, o, s = String(r(t)), l = i(n), u = s.length;
            return l < 0 || l >= u ? e ? "" : void 0 : (a = s.charCodeAt(l), a < 55296 || a > 56319 || l + 1 === u || (o = s.charCodeAt(l + 1)) < 56320 || o > 57343 ? e ? s.charAt(l) : a : e ? s.slice(l, l + 2) : (a - 55296 << 10) + (o - 56320) + 65536);
        }
    }
}, function (e, t, n) {
    var i = n(23), r = Math.max, a = Math.min;
    e.exports = function (e, t) {
        return e = i(e), e < 0 ? r(e + t, 0) : a(e, t)
    }
}, function (e, t, n) {
    var i = n(23), r = Math.min;
    e.exports = function (e) {
        return e > 0 ? r(i(e), 9007199254740991) : 0
    }
}, function (e, t, n) {
    var i = n(14);
    e.exports = function (e) {
        return Object(i(e))
    }
}, function (e, t, n) {
    "use strict";
    var i = n(52), r = n(60), a = n(16), o = n(6);
    e.exports = n(31)(Array, "Array", function (e, t) {
        this._t = o(e), this._i = 0, this._k = t
    }, function () {
        var e = this._t, t = this._k, n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, r(1)) : "keys" == t ? r(0, n) : "values" == t ? r(0, e[n]) : r(0, [n, e[n]])
    }, "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries")
}, function (e, t) {
}, function (e, t, n) {
    "use strict";
    var i = n(66)(!0);
    n(31)(String, "String", function (e) {
        this._t = String(e), this._i = 0
    }, function () {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {value: void 0, done: !0} : (e = i(t, n), this._i += e.length, {value: e, done: !1})
    })
}, function (e, t, n) {
    "use strict";
    var i = n(1), r = n(2), a = n(3), o = n(29), s = n(36), l = n(61).KEY, u = n(10), c = n(22), d = n(20), p = n(13),
        f = n(7), h = n(26), g = n(25), m = n(55), y = n(58), v = n(8), b = n(6), x = n(24), w = n(12), C = n(32),
        T = n(64), S = n(63), k = n(5), N = n(18), E = S.f, j = k.f, L = T.f, I = i.Symbol, D = i.JSON,
        A = D && D.stringify, $ = "prototype", _ = f("_hidden"), O = f("toPrimitive"), q = {}.propertyIsEnumerable,
        H = c("symbol-registry"), R = c("symbols"), z = c("op-symbols"), P = Object[$], M = "function" == typeof I,
        F = i.QObject, B = !F || !F[$] || !F[$].findChild, U = a && u(function () {
            return 7 != C(j({}, "a", {
                get: function () {
                    return j(this, "a", {value: 7}).a
                }
            })).a
        }) ? function (e, t, n) {
            var i = E(P, t);
            i && delete P[t], j(e, t, n), i && e !== P && j(P, t, i)
        } : j, W = function (e) {
            var t = R[e] = C(I[$]);
            return t._k = e, t
        }, G = M && "symbol" == typeof I.iterator ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return e instanceof I
        }, V = function (e, t, n) {
            return e === P && V(z, t, n), v(e), t = x(t, !0), v(n), r(R, t) ? (n.enumerable ? (r(e, _) && e[_][t] && (e[_][t] = !1), n = C(n, {enumerable: w(0, !1)})) : (r(e, _) || j(e, _, w(1, {})), e[_][t] = !0), U(e, t, n)) : j(e, t, n)
        }, X = function (e, t) {
            v(e);
            for (var n, i = m(t = b(t)), r = 0, a = i.length; a > r;) V(e, n = i[r++], t[n]);
            return e
        }, J = function (e, t) {
            return void 0 === t ? C(e) : X(C(e), t)
        }, K = function (e) {
            var t = q.call(this, e = x(e, !0));
            return !(this === P && r(R, e) && !r(z, e)) && (!(t || !r(this, e) || !r(R, e) || r(this, _) && this[_][e]) || t)
        }, Y = function (e, t) {
            if (e = b(e), t = x(t, !0), e !== P || !r(R, t) || r(z, t)) {
                var n = E(e, t);
                return !n || !r(R, t) || r(e, _) && e[_][t] || (n.enumerable = !0), n
            }
        }, Q = function (e) {
            for (var t, n = L(b(e)), i = [], a = 0; n.length > a;) r(R, t = n[a++]) || t == _ || t == l || i.push(t);
            return i
        }, Z = function (e) {
            for (var t, n = e === P, i = L(n ? z : b(e)), a = [], o = 0; i.length > o;) !r(R, t = i[o++]) || n && !r(P, t) || a.push(R[t]);
            return a
        };
    M || (I = function () {
        if (this instanceof I) throw TypeError("Symbol is not a constructor!");
        var e = p(arguments.length > 0 ? arguments[0] : void 0), t = function (n) {
            this === P && t.call(z, n), r(this, _) && r(this[_], e) && (this[_][e] = !1), U(this, e, w(1, n))
        };
        return a && B && U(P, e, {configurable: !0, set: t}), W(e)
    }, s(I[$], "toString", function () {
        return this._k
    }), S.f = Y, k.f = V, n(33).f = T.f = Q, n(19).f = K, n(34).f = Z, a && !n(17) && s(P, "propertyIsEnumerable", K, !0), h.f = function (e) {
        return W(f(e))
    }), o(o.G + o.W + o.F * !M, {Symbol: I});
    for (var ee = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), te = 0; ee.length > te;) f(ee[te++]);
    for (var ne = N(f.store), ie = 0; ne.length > ie;) g(ne[ie++]);
    o(o.S + o.F * !M, "Symbol", {
        "for": function (e) {
            return r(H, e += "") ? H[e] : H[e] = I(e)
        }, keyFor: function (e) {
            if (!G(e)) throw TypeError(e + " is not a symbol!");
            for (var t in H) if (H[t] === e) return t
        }, useSetter: function () {
            B = !0
        }, useSimple: function () {
            B = !1
        }
    }), o(o.S + o.F * !M, "Object", {
        create: J,
        defineProperty: V,
        defineProperties: X,
        getOwnPropertyDescriptor: Y,
        getOwnPropertyNames: Q,
        getOwnPropertySymbols: Z
    }), D && o(o.S + o.F * (!M || u(function () {
        var e = I();
        return "[null]" != A([e]) || "{}" != A({a: e}) || "{}" != A(Object(e))
    })), "JSON", {
        stringify: function (e) {
            if (void 0 !== e && !G(e)) {
                for (var t, n, i = [e], r = 1; arguments.length > r;) i.push(arguments[r++]);
                return t = i[1], "function" == typeof t && (n = t), !n && y(t) || (t = function (e, t) {
                    if (n && (t = n.call(this, e, t)), !G(t)) return t
                }), i[1] = t, A.apply(D, i)
            }
        }
    }), I[$][O] || n(4)(I[$], O, I[$].valueOf), d(I, "Symbol"), d(Math, "Math", !0), d(i.JSON, "JSON", !0)
}, function (e, t, n) {
    n(25)("asyncIterator")
}, function (e, t, n) {
    n(25)("observable")
}, function (e, t, n) {
    n(70);
    for (var i = n(1), r = n(4), a = n(16), o = n(7)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
        var u = s[l], c = i[u], d = c && c.prototype;
        d && !d[o] && r(d, o, u), a[u] = a.Array
    }
}, function (e, t, n) {
    (function (t) {
        e.exports = t.$ = n(78)
    }).call(t, function () {
        return this
    }())
}, function (e, t, n) {
    (function (t) {
        e.exports = t.jQuery = n(82)
    }).call(t, function () {
        return this
    }())
}, , function (e, t) {
}, function (e, t) {
}, function (e, t, n) {
    var i, r;
    /*!
	 * jQuery JavaScript Library v1.12.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:17Z
	 */
    !function (t, n) {
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function (n, a) {
        function o(e) {
            var t = !!e && "length" in e && e.length, n = ye.type(e);
            return "function" !== n && !ye.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function s(e, t, n) {
            if (ye.isFunction(t)) return ye.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return ye.grep(e, function (e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (Ee.test(t)) return ye.filter(t, e, n);
                t = ye.filter(t, e)
            }
            return ye.grep(e, function (e) {
                return ye.inArray(e, t) > -1 !== n
            })
        }

        function l(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function u(e) {
            var t = {};
            return ye.each(e.match($e) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function c() {
            se.addEventListener ? (se.removeEventListener("DOMContentLoaded", d), n.removeEventListener("load", d)) : (se.detachEvent("onreadystatechange", d), n.detachEvent("onload", d))
        }

        function d() {
            (se.addEventListener || "load" === n.event.type || "complete" === se.readyState) && (c(), ye.ready())
        }

        function p(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(Re, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : He.test(n) ? ye.parseJSON(n) : n)
                    } catch (r) {
                    }
                    ye.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function f(e) {
            var t;
            for (t in e) if (("data" !== t || !ye.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function h(e, t, n, i) {
            if (qe(e)) {
                var r, a, o = ye.expando, s = e.nodeType, l = s ? ye.cache : e, u = s ? e[o] : e[o] && o;
                if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[o] = oe.pop() || ye.guid++ : o), l[u] || (l[u] = s ? {} : {toJSON: ye.noop}), "object" != typeof t && "function" != typeof t || (i ? l[u] = ye.extend(l[u], t) : l[u].data = ye.extend(l[u].data, t)), a = l[u], i || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[ye.camelCase(t)] = n), "string" == typeof t ? (r = a[t], null == r && (r = a[ye.camelCase(t)])) : r = a, r
            }
        }

        function g(e, t, n) {
            if (qe(e)) {
                var i, r, a = e.nodeType, o = a ? ye.cache : e, s = a ? e[ye.expando] : ye.expando;
                if (o[s]) {
                    if (t && (i = n ? o[s] : o[s].data)) {
                        ye.isArray(t) ? t = t.concat(ye.map(t, ye.camelCase)) : t in i ? t = [t] : (t = ye.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                        for (; r--;) delete i[t[r]];
                        if (n ? !f(i) : !ye.isEmptyObject(i)) return
                    }
                    (n || (delete o[s].data, f(o[s]))) && (a ? ye.cleanData([e], !0) : ge.deleteExpando || o != o.window ? delete o[s] : o[s] = void 0)
                }
            }
        }

        function m(e, t, n, i) {
            var r, a = 1, o = 20, s = i ? function () {
                    return i.cur()
                } : function () {
                    return ye.css(e, t, "")
                }, l = s(), u = n && n[3] || (ye.cssNumber[t] ? "" : "px"),
                c = (ye.cssNumber[t] || "px" !== u && +l) && Pe.exec(ye.css(e, t));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c = +l || 1;
                do a = a || ".5", c /= a, ye.style(e, t, c + u); while (a !== (a = s() / l) && 1 !== a && --o)
            }
            return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
        }

        function y(e) {
            var t = Xe.split("|"), n = e.createDocumentFragment();
            if (n.createElement) for (; t.length;) n.createElement(t.pop());
            return n
        }

        function v(e, t) {
            var n, i, r = 0,
                a = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
            if (!a) for (a = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || ye.nodeName(i, t) ? a.push(i) : ye.merge(a, v(i, t));
            return void 0 === t || t && ye.nodeName(e, t) ? ye.merge([e], a) : a
        }

        function b(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) ye._data(n, "globalEval", !t || ye._data(t[i], "globalEval"))
        }

        function x(e) {
            Ue.test(e.type) && (e.defaultChecked = e.checked)
        }

        function w(e, t, n, i, r) {
            for (var a, o, s, l, u, c, d, p = e.length, f = y(t), h = [], g = 0; g < p; g++) if (o = e[g], o || 0 === o) if ("object" === ye.type(o)) ye.merge(h, o.nodeType ? [o] : o); else if (Ke.test(o)) {
                for (l = l || f.appendChild(t.createElement("div")), u = (We.exec(o) || ["", ""])[1].toLowerCase(), d = Je[u] || Je._default, l.innerHTML = d[1] + ye.htmlPrefilter(o) + d[2], a = d[0]; a--;) l = l.lastChild;
                if (!ge.leadingWhitespace && Ve.test(o) && h.push(t.createTextNode(Ve.exec(o)[0])), !ge.tbody) for (o = "table" !== u || Ye.test(o) ? "<table>" !== d[1] || Ye.test(o) ? 0 : l : l.firstChild, a = o && o.childNodes.length; a--;) ye.nodeName(c = o.childNodes[a], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (ye.merge(h, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = f.lastChild
            } else h.push(t.createTextNode(o));
            for (l && f.removeChild(l), ge.appendChecked || ye.grep(v(h, "input"), x), g = 0; o = h[g++];) if (i && ye.inArray(o, i) > -1) r && r.push(o); else if (s = ye.contains(o.ownerDocument, o), l = v(f.appendChild(o), "script"), s && b(l), n) for (a = 0; o = l[a++];) Ge.test(o.type || "") && n.push(o);
            return l = null, f
        }

        function C() {
            return !0
        }

        function T() {
            return !1
        }

        function S() {
            try {
                return se.activeElement
            } catch (e) {
            }
        }

        function k(e, t, n, i, r, a) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (s in t) k(e, s, n, i, t[s], a);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = T; else if (!r) return e;
            return 1 === a && (o = r, r = function (e) {
                return ye().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = ye.guid++)), e.each(function () {
                ye.event.add(this, t, r, i, n)
            })
        }

        function N(e, t) {
            return ye.nodeName(e, "table") && ye.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function E(e) {
            return e.type = (null !== ye.find.attr(e, "type")) + "/" + e.type, e
        }

        function j(e) {
            var t = lt.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function L(e, t) {
            if (1 === t.nodeType && ye.hasData(e)) {
                var n, i, r, a = ye._data(e), o = ye._data(t, a), s = a.events;
                if (s) {
                    delete o.handle, o.events = {};
                    for (n in s) for (i = 0, r = s[n].length; i < r; i++) ye.event.add(t, n, s[n][i])
                }
                o.data && (o.data = ye.extend({}, o.data))
            }
        }

        function I(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ge.noCloneEvent && t[ye.expando]) {
                    r = ye._data(t);
                    for (i in r.events) ye.removeEvent(t, i, r.handle);
                    t.removeAttribute(ye.expando)
                }
                "script" === n && t.text !== e.text ? (E(t).text = e.text, j(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ge.html5Clone && e.innerHTML && !ye.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ue.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }

        function D(e, t, n, i) {
            t = ue.apply([], t);
            var r, a, o, s, l, u, c = 0, d = e.length, p = d - 1, f = t[0], h = ye.isFunction(f);
            if (h || d > 1 && "string" == typeof f && !ge.checkClone && st.test(f)) return e.each(function (r) {
                var a = e.eq(r);
                h && (t[0] = f.call(this, r, a.html())), D(a, t, n, i)
            });
            if (d && (u = w(t, e[0].ownerDocument, !1, e, i), r = u.firstChild, 1 === u.childNodes.length && (u = r), r || i)) {
                for (s = ye.map(v(u, "script"), E), o = s.length; c < d; c++) a = u, c !== p && (a = ye.clone(a, !0, !0), o && ye.merge(s, v(a, "script"))), n.call(e[c], a, c);
                if (o) for (l = s[s.length - 1].ownerDocument, ye.map(s, j), c = 0; c < o; c++) a = s[c], Ge.test(a.type || "") && !ye._data(a, "globalEval") && ye.contains(l, a) && (a.src ? ye._evalUrl && ye._evalUrl(a.src) : ye.globalEval((a.text || a.textContent || a.innerHTML || "").replace(ut, "")));
                u = r = null
            }
            return e
        }

        function A(e, t, n) {
            for (var i, r = t ? ye.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || ye.cleanData(v(i)), i.parentNode && (n && ye.contains(i.ownerDocument, i) && b(v(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function $(e, t) {
            var n = ye(t.createElement(e)).appendTo(t.body), i = ye.css(n[0], "display");
            return n.detach(), i
        }

        function _(e) {
            var t = se, n = ft[e];
            return n || (n = $(e, t), "none" !== n && n || (pt = (pt || ye("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (pt[0].contentWindow || pt[0].contentDocument).document, t.write(), t.close(), n = $(e, t), pt.detach()), ft[e] = n), n
        }

        function O(e, t) {
            return {
                get: function () {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function q(e) {
            if (e in jt) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Et.length; n--;) if (e = Et[n] + t, e in jt) return e
        }

        function H(e, t) {
            for (var n, i, r, a = [], o = 0, s = e.length; o < s; o++) i = e[o], i.style && (a[o] = ye._data(i, "olddisplay"), n = i.style.display, t ? (a[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && Fe(i) && (a[o] = ye._data(i, "olddisplay", _(i.nodeName)))) : (r = Fe(i), (n && "none" !== n || !r) && ye._data(i, "olddisplay", r ? n : ye.css(i, "display"))));
            for (o = 0; o < s; o++) i = e[o], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[o] || "" : "none"));
            return e
        }

        function R(e, t, n) {
            var i = St.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function z(e, t, n, i, r) {
            for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; a < 4; a += 2) "margin" === n && (o += ye.css(e, n + Me[a], !0, r)), i ? ("content" === n && (o -= ye.css(e, "padding" + Me[a], !0, r)), "margin" !== n && (o -= ye.css(e, "border" + Me[a] + "Width", !0, r))) : (o += ye.css(e, "padding" + Me[a], !0, r), "padding" !== n && (o += ye.css(e, "border" + Me[a] + "Width", !0, r)));
            return o
        }

        function P(e, t, n) {
            var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, a = vt(e),
                o = ge.boxSizing && "border-box" === ye.css(e, "boxSizing", !1, a);
            if (r <= 0 || null == r) {
                if (r = bt(e, t, a), (r < 0 || null == r) && (r = e.style[t]), gt.test(r)) return r;
                i = o && (ge.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + z(e, t, n || (o ? "border" : "content"), i, a) + "px"
        }

        function M(e, t, n, i, r) {
            return new M.prototype.init(e, t, n, i, r)
        }

        function F() {
            return n.setTimeout(function () {
                Lt = void 0
            }), Lt = ye.now()
        }

        function B(e, t) {
            var n, i = {height: e}, r = 0;
            for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Me[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function U(e, t, n) {
            for (var i, r = (V.tweeners[t] || []).concat(V.tweeners["*"]), a = 0, o = r.length; a < o; a++) if (i = r[a].call(n, t, e)) return i
        }

        function W(e, t, n) {
            var i, r, a, o, s, l, u, c, d = this, p = {}, f = e.style, h = e.nodeType && Fe(e),
                g = ye._data(e, "fxshow");
            n.queue || (s = ye._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                s.unqueued || l()
            }), s.unqueued++, d.always(function () {
                d.always(function () {
                    s.unqueued--, ye.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = ye.css(e, "display"), c = "none" === u ? ye._data(e, "olddisplay") || _(e.nodeName) : u, "inline" === c && "none" === ye.css(e, "float") && (ge.inlineBlockNeedsLayout && "inline" !== _(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ge.shrinkWrapBlocks() || d.always(function () {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t) if (r = t[i], Dt.exec(r)) {
                if (delete t[i], a = a || "toggle" === r, r === (h ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    h = !0
                }
                p[i] = g && g[i] || ye.style(e, i)
            } else u = void 0;
            if (ye.isEmptyObject(p)) "inline" === ("none" === u ? _(e.nodeName) : u) && (f.display = u); else {
                g ? "hidden" in g && (h = g.hidden) : g = ye._data(e, "fxshow", {}), a && (g.hidden = !h), h ? ye(e).show() : d.done(function () {
                    ye(e).hide()
                }), d.done(function () {
                    var t;
                    ye._removeData(e, "fxshow");
                    for (t in p) ye.style(e, t, p[t])
                });
                for (i in p) o = U(h ? g[i] : 0, i, d), i in g || (g[i] = o.start, h && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function G(e, t) {
            var n, i, r, a, o;
            for (n in e) if (i = ye.camelCase(n), r = t[i], a = e[n], ye.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), o = ye.cssHooks[i], o && "expand" in o) {
                a = o.expand(a), delete e[i];
                for (n in a) n in e || (e[n] = a[n], t[n] = r)
            } else t[i] = r
        }

        function V(e, t, n) {
            var i, r, a = 0, o = V.prefilters.length, s = ye.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (r) return !1;
                for (var t = Lt || F(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, a = 1 - i, o = 0, l = u.tweens.length; o < l; o++) u.tweens[o].run(a);
                return s.notifyWith(e, [u, a, n]), a < 1 && l ? n : (s.resolveWith(e, [u]), !1)
            }, u = s.promise({
                elem: e,
                props: ye.extend({}, t),
                opts: ye.extend(!0, {specialEasing: {}, easing: ye.easing._default}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Lt || F(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = ye.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0, i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }), c = u.props;
            for (G(c, u.opts.specialEasing); a < o; a++) if (i = V.prefilters[a].call(u, e, c, u.opts)) return ye.isFunction(i.stop) && (ye._queueHooks(u.elem, u.opts.queue).stop = ye.proxy(i.stop, i)), i;
            return ye.map(c, U, u), ye.isFunction(u.opts.start) && u.opts.start.call(e, u), ye.fx.timer(ye.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function X(e) {
            return ye.attr(e, "class") || ""
        }

        function J(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0, a = t.toLowerCase().match($e) || [];
                if (ye.isFunction(n)) for (; i = a[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function K(e, t, n, i) {
            function r(s) {
                var l;
                return a[s] = !0, ye.each(e[s] || [], function (e, s) {
                    var u = s(t, n, i);
                    return "string" != typeof u || o || a[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
                }), l
            }

            var a = {}, o = e === nn;
            return r(t.dataTypes[0]) || !a["*"] && r("*")
        }

        function Y(e, t) {
            var n, i, r = ye.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
            return n && ye.extend(!0, e, n), e
        }

        function Q(e, t, n) {
            for (var i, r, a, o, s = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r) for (o in s) if (s[o] && s[o].test(r)) {
                l.unshift(o);
                break
            }
            if (l[0] in n) a = l[0]; else {
                for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                        a = o;
                        break
                    }
                    i || (i = o)
                }
                a = a || i
            }
            if (a) return a !== l[0] && l.unshift(a), n[a]
        }

        function Z(e, t, n, i) {
            var r, a, o, s, l, u = {}, c = e.dataTypes.slice();
            if (c[1]) for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
            for (a = c.shift(); a;) if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift()) if ("*" === a) a = l; else if ("*" !== l && l !== a) {
                if (o = u[l + " " + a] || u["* " + a], !o) for (r in u) if (s = r.split(" "), s[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                    o === !0 ? o = u[r] : u[r] !== !0 && (a = s[0], c.unshift(s[1]));
                    break
                }
                if (o !== !0) if (o && e["throws"]) t = o(t); else try {
                    t = o(t)
                } catch (d) {
                    return {state: "parsererror", error: o ? d : "No conversion from " + l + " to " + a}
                }
            }
            return {state: "success", data: t}
        }

        function ee(e) {
            return e.style && e.style.display || ye.css(e, "display")
        }

        function te(e) {
            if (!ye.contains(e.ownerDocument || se, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === ee(e) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            return !1
        }

        function ne(e, t, n, i) {
            var r;
            if (ye.isArray(t)) ye.each(t, function (t, r) {
                n || ln.test(e) ? i(e, r) : ne(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            }); else if (n || "object" !== ye.type(t)) i(e, t); else for (r in t) ne(e + "[" + r + "]", t[r], n, i)
        }

        function ie() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {
            }
        }

        function re() {
            try {
                return new n.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
            }
        }

        function ae(e) {
            return ye.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }

        var oe = [], se = n.document, le = oe.slice, ue = oe.concat, ce = oe.push, de = oe.indexOf, pe = {},
            fe = pe.toString, he = pe.hasOwnProperty, ge = {}, me = "1.12.4", ye = function (e, t) {
                return new ye.fn.init(e, t)
            }, ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, be = /^-ms-/, xe = /-([\da-z])/gi, we = function (e, t) {
                return t.toUpperCase()
            };
        ye.fn = ye.prototype = {
            jquery: me, constructor: ye, selector: "", length: 0, toArray: function () {
                return le.call(this)
            }, get: function (e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : le.call(this)
            }, pushStack: function (e) {
                var t = ye.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            }, each: function (e) {
                return ye.each(this, e)
            }, map: function (e) {
                return this.pushStack(ye.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, slice: function () {
                return this.pushStack(le.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: ce, sort: oe.sort, splice: oe.splice
        }, ye.extend = ye.fn.extend = function () {
            var e, t, n, i, r, a, o = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || ye.isFunction(o) || (o = {}), s === l && (o = this, s--); s < l; s++) if (null != (r = arguments[s])) for (i in r) e = o[i], n = r[i], o !== n && (u && n && (ye.isPlainObject(n) || (t = ye.isArray(n))) ? (t ? (t = !1, a = e && ye.isArray(e) ? e : []) : a = e && ye.isPlainObject(e) ? e : {}, o[i] = ye.extend(u, a, n)) : void 0 !== n && (o[i] = n));
            return o
        }, ye.extend({
            expando: "jQuery" + (me + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                throw new Error(e)
            }, noop: function () {
            }, isFunction: function (e) {
                return "function" === ye.type(e)
            }, isArray: Array.isArray || function (e) {
                return "array" === ye.type(e)
            }, isWindow: function (e) {
                return null != e && e == e.window
            }, isNumeric: function (e) {
                var t = e && e.toString();
                return !ye.isArray(e) && t - parseFloat(t) + 1 >= 0
            }, isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            }, isPlainObject: function (e) {
                var t;
                if (!e || "object" !== ye.type(e) || e.nodeType || ye.isWindow(e)) return !1;
                try {
                    if (e.constructor && !he.call(e, "constructor") && !he.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (!ge.ownFirst) for (t in e) return he.call(e, t);
                for (t in e) ;
                return void 0 === t || he.call(e, t)
            }, type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pe[fe.call(e)] || "object" : typeof e
            }, globalEval: function (e) {
                e && ye.trim(e) && (n.execScript || function (e) {
                    n.eval.call(n, e)
                })(e)
            }, camelCase: function (e) {
                return e.replace(be, "ms-").replace(xe, we)
            }, nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }, each: function (e, t) {
                var n, i = 0;
                if (o(e)) for (n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++) ; else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
                return e
            }, trim: function (e) {
                return null == e ? "" : (e + "").replace(ve, "")
            }, makeArray: function (e, t) {
                var n = t || [];
                return null != e && (o(Object(e)) ? ye.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)), n
            }, inArray: function (e, t, n) {
                var i;
                if (t) {
                    if (de) return de.call(t, e, n);
                    for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++) if (n in t && t[n] === e) return n
                }
                return -1
            }, merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
                if (n !== n) for (; void 0 !== t[i];) e[r++] = t[i++];
                return e.length = r, e
            }, grep: function (e, t, n) {
                for (var i, r = [], a = 0, o = e.length, s = !n; a < o; a++) i = !t(e[a], a), i !== s && r.push(e[a]);
                return r
            }, map: function (e, t, n) {
                var i, r, a = 0, s = [];
                if (o(e)) for (i = e.length; a < i; a++) r = t(e[a], a, n), null != r && s.push(r); else for (a in e) r = t(e[a], a, n), null != r && s.push(r);
                return ue.apply([], s)
            }, guid: 1, proxy: function (e, t) {
                var n, i, r;
                if ("string" == typeof t && (r = e[t], t = e, e = r), ye.isFunction(e)) return n = le.call(arguments, 2), i = function () {
                    return e.apply(t || this, n.concat(le.call(arguments)))
                }, i.guid = e.guid = e.guid || ye.guid++, i
            }, now: function () {
                return +new Date
            }, support: ge
        }), "function" == typeof Symbol && (ye.fn[Symbol.iterator] = oe[Symbol.iterator]), ye.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            pe["[object " + t + "]"] = t.toLowerCase()
        });
        var Ce = /*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
            function (e) {
                function t(e, t, n, i) {
                    var r, a, o, s, l, u, d, f, h = t && t.ownerDocument, g = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
                    if (!i && ((t ? t.ownerDocument || t : P) !== A && D(t), t = t || A, _)) {
                        if (11 !== g && (u = ye.exec(e))) if (r = u[1]) {
                            if (9 === g) {
                                if (!(o = t.getElementById(r))) return n;
                                if (o.id === r) return n.push(o), n
                            } else if (h && (o = h.getElementById(r)) && R(t, o) && o.id === r) return n.push(o), n
                        } else {
                            if (u[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = u[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(r)), n
                        }
                        if (w.qsa && !W[e + " "] && (!O || !O.test(e))) {
                            if (1 !== g) h = t, f = e; else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = z), d = k(e), a = d.length, l = pe.test(s) ? "#" + s : "[id='" + s + "']"; a--;) d[a] = l + " " + p(d[a]);
                                f = d.join(","), h = ve.test(e) && c(t.parentNode) || t
                            }
                            if (f) try {
                                return Q.apply(n, h.querySelectorAll(f)), n
                            } catch (m) {
                            } finally {
                                s === z && t.removeAttribute("id")
                            }
                        }
                    }
                    return E(e.replace(se, "$1"), t, n, i)
                }

                function n() {
                    function e(n, i) {
                        return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
                    }

                    var t = [];
                    return e
                }

                function i(e) {
                    return e[z] = !0, e
                }

                function r(e) {
                    var t = A.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function a(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
                }

                function o(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                    if (i) return i;
                    if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function l(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function u(e) {
                    return i(function (t) {
                        return t = +t, i(function (n, i) {
                            for (var r, a = e([], n.length, t), o = a.length; o--;) n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function c(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function d() {
                }

                function p(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i
                }

                function f(e, t, n) {
                    var i = t.dir, r = n && "parentNode" === i, a = F++;
                    return t.first ? function (t, n, a) {
                        for (; t = t[i];) if (1 === t.nodeType || r) return e(t, n, a)
                    } : function (t, n, o) {
                        var s, l, u, c = [M, a];
                        if (o) {
                            for (; t = t[i];) if ((1 === t.nodeType || r) && e(t, n, o)) return !0
                        } else for (; t = t[i];) if (1 === t.nodeType || r) {
                            if (u = t[z] || (t[z] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (s = l[i]) && s[0] === M && s[1] === a) return c[2] = s[2];
                            if (l[i] = c, c[2] = e(t, n, o)) return !0
                        }
                    }
                }

                function h(e) {
                    return e.length > 1 ? function (t, n, i) {
                        for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function g(e, n, i) {
                    for (var r = 0, a = n.length; r < a; r++) t(e, n[r], i);
                    return i
                }

                function m(e, t, n, i, r) {
                    for (var a, o = [], s = 0, l = e.length, u = null != t; s < l; s++) (a = e[s]) && (n && !n(a, i, r) || (o.push(a), u && t.push(s)));
                    return o
                }

                function y(e, t, n, r, a, o) {
                    return r && !r[z] && (r = y(r)), a && !a[z] && (a = y(a, o)), i(function (i, o, s, l) {
                        var u, c, d, p = [], f = [], h = o.length, y = i || g(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !i && t ? y : m(y, p, e, s, l), b = n ? a || (i ? e : h || r) ? [] : o : v;
                        if (n && n(v, b, s, l), r) for (u = m(b, f), r(u, [], s, l), c = u.length; c--;) (d = u[c]) && (b[f[c]] = !(v[f[c]] = d));
                        if (i) {
                            if (a || e) {
                                if (a) {
                                    for (u = [], c = b.length; c--;) (d = b[c]) && u.push(v[c] = d);
                                    a(null, b = [], u, l)
                                }
                                for (c = b.length; c--;) (d = b[c]) && (u = a ? ee(i, d) : p[c]) > -1 && (i[u] = !(o[u] = d))
                            }
                        } else b = m(b === o ? b.splice(h, b.length) : b), a ? a(null, o, b, l) : Q.apply(o, b)
                    })
                }

                function v(e) {
                    for (var t, n, i, r = e.length, a = C.relative[e[0].type], o = a || C.relative[" "], s = a ? 1 : 0, l = f(function (e) {
                        return e === t
                    }, o, !0), u = f(function (e) {
                        return ee(t, e) > -1
                    }, o, !0), c = [function (e, n, i) {
                        var r = !a && (i || n !== j) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                        return t = null, r
                    }]; s < r; s++) if (n = C.relative[e[s].type]) c = [f(h(c), n)]; else {
                        if (n = C.filter[e[s].type].apply(null, e[s].matches), n[z]) {
                            for (i = ++s; i < r && !C.relative[e[i].type]; i++) ;
                            return y(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(se, "$1"), n, s < i && v(e.slice(s, i)), i < r && v(e = e.slice(i)), i < r && p(e))
                        }
                        c.push(n)
                    }
                    return h(c)
                }

                function b(e, n) {
                    var r = n.length > 0, a = e.length > 0, o = function (i, o, s, l, u) {
                        var c, d, p, f = 0, h = "0", g = i && [], y = [], v = j, b = i || a && C.find.TAG("*", u),
                            x = M += null == v ? 1 : Math.random() || .1, w = b.length;
                        for (u && (j = o === A || o || u); h !== w && null != (c = b[h]); h++) {
                            if (a && c) {
                                for (d = 0, o || c.ownerDocument === A || (D(c), s = !_); p = e[d++];) if (p(c, o || A, s)) {
                                    l.push(c);
                                    break
                                }
                                u && (M = x)
                            }
                            r && ((c = !p && c) && f--, i && g.push(c))
                        }
                        if (f += h, r && h !== f) {
                            for (d = 0; p = n[d++];) p(g, y, o, s);
                            if (i) {
                                if (f > 0) for (; h--;) g[h] || y[h] || (y[h] = K.call(l));
                                y = m(y)
                            }
                            Q.apply(l, y), u && !i && y.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (M = x, j = v), g
                    };
                    return r ? i(o) : o
                }

                var x, w, C, T, S, k, N, E, j, L, I, D, A, $, _, O, q, H, R, z = "sizzle" + 1 * new Date,
                    P = e.document, M = 0, F = 0, B = n(), U = n(), W = n(), G = function (e, t) {
                        return e === t && (I = !0), 0
                    }, V = 1 << 31, X = {}.hasOwnProperty, J = [], K = J.pop, Y = J.push, Q = J.push, Z = J.slice,
                    ee = function (e, t) {
                        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                    ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                    oe = new RegExp(ne + "+", "g"),
                    se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                    le = new RegExp("^" + ne + "*," + ne + "*"),
                    ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                    ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(ae),
                    pe = new RegExp("^" + ie + "$"), fe = {
                        ID: new RegExp("^#(" + ie + ")"),
                        CLASS: new RegExp("^\\.(" + ie + ")"),
                        TAG: new RegExp("^(" + ie + "|[*])"),
                        ATTR: new RegExp("^" + re),
                        PSEUDO: new RegExp("^" + ae),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/,
                    ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, be = /'|\\/g,
                    xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), we = function (e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    }, Ce = function () {
                        D()
                    };
                try {
                    Q.apply(J = Z.call(P.childNodes), P.childNodes), J[P.childNodes.length].nodeType
                } catch (Te) {
                    Q = {
                        apply: J.length ? function (e, t) {
                            Y.apply(e, Z.call(t))
                        } : function (e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                            e.length = n - 1
                        }
                    }
                }
                w = t.support = {}, S = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, D = t.setDocument = function (e) {
                    var t, n, i = e ? e.ownerDocument || e : P;
                    return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, $ = A.documentElement, _ = !S(A), (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), w.attributes = r(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), w.getElementsByTagName = r(function (e) {
                        return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
                    }), w.getElementsByClassName = me.test(A.getElementsByClassName), w.getById = r(function (e) {
                        return $.appendChild(e).id = z, !A.getElementsByName || !A.getElementsByName(z).length
                    }), w.getById ? (C.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && _) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }, C.filter.ID = function (e) {
                        var t = e.replace(xe, we);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete C.find.ID, C.filter.ID = function (e) {
                        var t = e.replace(xe, we);
                        return function (e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), C.find.TAG = w.getElementsByTagName ? function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, i = [], r = 0, a = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return a
                    }, C.find.CLASS = w.getElementsByClassName && function (e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && _) return t.getElementsByClassName(e)
                    }, q = [], O = [], (w.qsa = me.test(A.querySelectorAll)) && (r(function (e) {
                        $.appendChild(e).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + z + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + z + "+*").length || O.push(".#.+[+~]")
                    }), r(function (e) {
                        var t = A.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                    })), (w.matchesSelector = me.test(H = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && r(function (e) {
                        w.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), q.push("!=", ae)
                    }), O = O.length && new RegExp(O.join("|")), q = q.length && new RegExp(q.join("|")), t = me.test($.compareDocumentPosition), R = t || me.test($.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function (e, t) {
                        if (t) for (; t = t.parentNode;) if (t === e) return !0;
                        return !1
                    }, G = t ? function (e, t) {
                        if (e === t) return I = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === P && R(P, e) ? -1 : t === A || t.ownerDocument === P && R(P, t) ? 1 : L ? ee(L, e) - ee(L, t) : 0 : 4 & n ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return I = !0, 0;
                        var n, i = 0, r = e.parentNode, a = t.parentNode, s = [e], l = [t];
                        if (!r || !a) return e === A ? -1 : t === A ? 1 : r ? -1 : a ? 1 : L ? ee(L, e) - ee(L, t) : 0;
                        if (r === a) return o(e, t);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (; s[i] === l[i];) i++;
                        return i ? o(s[i], l[i]) : s[i] === P ? -1 : l[i] === P ? 1 : 0
                    }, A) : A
                }, t.matches = function (e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function (e, n) {
                    if ((e.ownerDocument || e) !== A && D(e), n = n.replace(ce, "='$1']"), w.matchesSelector && _ && !W[n + " "] && (!q || !q.test(n)) && (!O || !O.test(n))) try {
                        var i = H.call(e, n);
                        if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (r) {
                    }
                    return t(n, A, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== A && D(e), R(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== A && D(e);
                    var n = C.attrHandle[t.toLowerCase()],
                        i = n && X.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
                    return void 0 !== i ? i : w.attributes || !_ ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, n = [], i = 0, r = 0;
                    if (I = !w.detectDuplicates, L = !w.sortStable && e.slice(0), e.sort(G), I) {
                        for (; t = e[r++];) t === e[r] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return L = null, e
                }, T = t.getText = function (e) {
                    var t, n = "", i = 0, r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else for (; t = e[i++];) n += T(t);
                    return n
                }, C = t.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(xe, we).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        }, CLASS: function (e) {
                            var t = B[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        }, ATTR: function (e, n, i) {
                            return function (r) {
                                var a = t.attr(r, e);
                                return null == a ? "!=" === n : !n || (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (a === i || a.slice(0, i.length + 1) === i + "-"))
                            }
                        }, CHILD: function (e, t, n, i, r) {
                            var a = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), s = "of-type" === t;
                            return 1 === i && 0 === r ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, l) {
                                var u, c, d, p, f, h, g = a !== o ? "nextSibling" : "previousSibling", m = t.parentNode,
                                    y = s && t.nodeName.toLowerCase(), v = !l && !s, b = !1;
                                if (m) {
                                    if (a) {
                                        for (; g;) {
                                            for (p = t; p = p[g];) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [o ? m.firstChild : m.lastChild], o && v) {
                                        for (p = m, d = p[z] || (p[z] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[e] || [], f = u[0] === M && u[1], b = f && u[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();) if (1 === p.nodeType && ++b && p === t) {
                                            c[e] = [M, f, b];
                                            break
                                        }
                                    } else if (v && (p = t, d = p[z] || (p[z] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[e] || [], f = u[0] === M && u[1], b = f), b === !1) for (; (p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++b || (v && (d = p[z] || (p[z] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), c[e] = [M, b]), p !== t));) ;
                                    return b -= r, b === i || b % i === 0 && b / i >= 0
                                }
                            }
                        }, PSEUDO: function (e, n) {
                            var r,
                                a = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return a[z] ? a(n) : a.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                                for (var i, r = a(e, n), o = r.length; o--;) i = ee(e, r[o]), e[i] = !(t[i] = r[o])
                            }) : function (e) {
                                return a(e, 0, r)
                            }) : a
                        }
                    },
                    pseudos: {
                        not: i(function (e) {
                            var t = [], n = [], r = N(e.replace(se, "$1"));
                            return r[z] ? i(function (e, t, n, i) {
                                for (var a, o = r(e, null, i, []), s = e.length; s--;) (a = o[s]) && (e[s] = !(t[s] = a))
                            }) : function (e, i, a) {
                                return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop()
                            }
                        }), has: i(function (e) {
                            return function (n) {
                                return t(e, n).length > 0
                            }
                        }), contains: i(function (e) {
                            return e = e.replace(xe, we), function (t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                        }), lang: i(function (e) {
                            return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(), function (t) {
                                var n;
                                do if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }), target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        }, root: function (e) {
                            return e === $
                        }, focus: function (e) {
                            return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        }, enabled: function (e) {
                            return e.disabled === !1
                        }, disabled: function (e) {
                            return e.disabled === !0
                        }, checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        }, selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        }, empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0
                        }, parent: function (e) {
                            return !C.pseudos.empty(e)
                        }, header: function (e) {
                            return ge.test(e.nodeName)
                        }, input: function (e) {
                            return he.test(e.nodeName)
                        }, button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        }, text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        }, first: u(function () {
                            return [0]
                        }), last: u(function (e, t) {
                            return [t - 1]
                        }), eq: u(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }), even: u(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }), odd: u(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }), lt: u(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }), gt: u(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }, C.pseudos.nth = C.pseudos.eq;
                for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) C.pseudos[x] = s(x);
                for (x in{submit: !0, reset: !0}) C.pseudos[x] = l(x);
                return d.prototype = C.filters = C.pseudos, C.setFilters = new d, k = t.tokenize = function (e, n) {
                    var i, r, a, o, s, l, u, c = U[e + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (s = e, l = [], u = C.preFilter; s;) {
                        i && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(a = [])), i = !1, (r = ue.exec(s)) && (i = r.shift(), a.push({
                            value: i,
                            type: r[0].replace(se, " ")
                        }), s = s.slice(i.length));
                        for (o in C.filter) !(r = fe[o].exec(s)) || u[o] && !(r = u[o](r)) || (i = r.shift(), a.push({
                            value: i,
                            type: o,
                            matches: r
                        }), s = s.slice(i.length));
                        if (!i) break
                    }
                    return n ? s.length : s ? t.error(e) : U(e, l).slice(0)
                }, N = t.compile = function (e, t) {
                    var n, i = [], r = [], a = W[e + " "];
                    if (!a) {
                        for (t || (t = k(e)), n = t.length; n--;) a = v(t[n]), a[z] ? i.push(a) : r.push(a);
                        a = W(e, b(r, i)), a.selector = e
                    }
                    return a
                }, E = t.select = function (e, t, n, i) {
                    var r, a, o, s, l, u = "function" == typeof e && e, d = !i && k(e = u.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && w.getById && 9 === t.nodeType && _ && C.relative[a[1].type]) {
                            if (t = (C.find.ID(o.matches[0].replace(xe, we), t) || [])[0], !t) return n;
                            u && (t = t.parentNode), e = e.slice(a.shift().value.length)
                        }
                        for (r = fe.needsContext.test(e) ? 0 : a.length; r-- && (o = a[r], !C.relative[s = o.type]);) if ((l = C.find[s]) && (i = l(o.matches[0].replace(xe, we), ve.test(a[0].type) && c(t.parentNode) || t))) {
                            if (a.splice(r, 1), e = i.length && p(a), !e) return Q.apply(n, i), n;
                            break
                        }
                    }
                    return (u || N(e, d))(i, t, !_, n, !t || ve.test(e) && c(t.parentNode) || t), n
                }, w.sortStable = z.split("").sort(G).join("") === z, w.detectDuplicates = !!I, D(), w.sortDetached = r(function (e) {
                    return 1 & e.compareDocumentPosition(A.createElement("div"))
                }), r(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || a("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), w.attributes && r(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || a("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), r(function (e) {
                    return null == e.getAttribute("disabled")
                }) || a(te, function (e, t, n) {
                    var i;
                    if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), t
            }(n);
        ye.find = Ce, ye.expr = Ce.selectors, ye.expr[":"] = ye.expr.pseudos, ye.uniqueSort = ye.unique = Ce.uniqueSort, ye.text = Ce.getText, ye.isXMLDoc = Ce.isXML, ye.contains = Ce.contains;
        var Te = function (e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (r && ye(e).is(n)) break;
                i.push(e)
            }
            return i
        }, Se = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }, ke = ye.expr.match.needsContext, Ne = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Ee = /^.[^:#\[\.,]*$/;
        ye.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ye.find.matchesSelector(i, e) ? [i] : [] : ye.find.matches(e, ye.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, ye.fn.extend({
            find: function (e) {
                var t, n = [], i = this, r = i.length;
                if ("string" != typeof e) return this.pushStack(ye(e).filter(function () {
                    for (t = 0; t < r; t++) if (ye.contains(i[t], this)) return !0
                }));
                for (t = 0; t < r; t++) ye.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? ye.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            }, filter: function (e) {
                return this.pushStack(s(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(s(this, e || [], !0))
            }, is: function (e) {
                return !!s(this, "string" == typeof e && ke.test(e) ? ye(e) : e || [], !1).length
            }
        });
        var je, Le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Ie = ye.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || je, "string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Le.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof ye ? t[0] : t, ye.merge(this, ye.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), Ne.test(i[1]) && ye.isPlainObject(t)) for (i in t) ye.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if (r = se.getElementById(i[2]), r && r.parentNode) {
                    if (r.id !== i[2]) return je.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = se, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ye.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(ye) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ye.makeArray(e, this))
        };
        Ie.prototype = ye.fn, je = ye(se);
        var De = /^(?:parents|prev(?:Until|All))/, Ae = {children: !0, contents: !0, next: !0, prev: !0};
        ye.fn.extend({
            has: function (e) {
                var t, n = ye(e, this), i = n.length;
                return this.filter(function () {
                    for (t = 0; t < i; t++) if (ye.contains(this, n[t])) return !0
                })
            }, closest: function (e, t) {
                for (var n, i = 0, r = this.length, a = [], o = ke.test(e) || "string" != typeof e ? ye(e, t || this.context) : 0; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && ye.find.matchesSelector(n, e))) {
                    a.push(n);
                    break
                }
                return this.pushStack(a.length > 1 ? ye.uniqueSort(a) : a)
            }, index: function (e) {
                return e ? "string" == typeof e ? ye.inArray(this[0], ye(e)) : ye.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(ye.uniqueSort(ye.merge(this.get(), ye(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ye.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return Te(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return Te(e, "parentNode", n)
            }, next: function (e) {
                return l(e, "nextSibling")
            }, prev: function (e) {
                return l(e, "previousSibling")
            }, nextAll: function (e) {
                return Te(e, "nextSibling")
            }, prevAll: function (e) {
                return Te(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return Te(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return Te(e, "previousSibling", n)
            }, siblings: function (e) {
                return Se((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return Se(e.firstChild)
            }, contents: function (e) {
                return ye.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ye.merge([], e.childNodes)
            }
        }, function (e, t) {
            ye.fn[e] = function (n, i) {
                var r = ye.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ye.filter(i, r)), this.length > 1 && (Ae[e] || (r = ye.uniqueSort(r)), De.test(e) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var $e = /\S+/g;
        ye.Callbacks = function (e) {
            e = "string" == typeof e ? u(e) : ye.extend({}, e);
            var t, n, i, r, a = [], o = [], s = -1, l = function () {
                for (r = e.once, i = t = !0; o.length; s = -1) for (n = o.shift(); ++s < a.length;) a[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = a.length, n = !1);
                e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
            }, c = {
                add: function () {
                    return a && (n && !t && (s = a.length - 1, o.push(n)), function i(t) {
                        ye.each(t, function (t, n) {
                            ye.isFunction(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== ye.type(n) && i(n)
                        })
                    }(arguments), n && !t && l()), this
                }, remove: function () {
                    return ye.each(arguments, function (e, t) {
                        for (var n; (n = ye.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= s && s--
                    }), this
                }, has: function (e) {
                    return e ? ye.inArray(e, a) > -1 : a.length > 0
                }, empty: function () {
                    return a && (a = []), this
                }, disable: function () {
                    return r = o = [], a = n = "", this
                }, disabled: function () {
                    return !a
                }, lock: function () {
                    return r = !0, n || c.disable(), this
                }, locked: function () {
                    return !!r
                }, fireWith: function (e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], o.push(n), t || l()), this
                }, fire: function () {
                    return c.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return c
        }, ye.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", ye.Callbacks("once memory"), "resolved"], ["reject", "fail", ye.Callbacks("once memory"), "rejected"], ["notify", "progress", ye.Callbacks("memory")]],
                    n = "pending", i = {
                        state: function () {
                            return n
                        }, always: function () {
                            return r.done(arguments).fail(arguments), this
                        }, then: function () {
                            var e = arguments;
                            return ye.Deferred(function (n) {
                                ye.each(t, function (t, a) {
                                    var o = ye.isFunction(e[t]) && e[t];
                                    r[a[1]](function () {
                                        var e = o && o.apply(this, arguments);
                                        e && ye.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        }, promise: function (e) {
                            return null != e ? ye.extend(e, i) : i
                        }
                    }, r = {};
                return i.pipe = i.then, ye.each(t, function (e, a) {
                    var o = a[2], s = a[3];
                    i[a[1]] = o.add, s && o.add(function () {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[a[0]] = function () {
                        return r[a[0] + "With"](this === r ? i : this, arguments), this
                    }, r[a[0] + "With"] = o.fireWith
                }), i.promise(r), e && e.call(r, r), r
            }, when: function (e) {
                var t, n, i, r = 0, a = le.call(arguments), o = a.length,
                    s = 1 !== o || e && ye.isFunction(e.promise) ? o : 0, l = 1 === s ? e : ye.Deferred(),
                    u = function (e, n, i) {
                        return function (r) {
                            n[e] = this, i[e] = arguments.length > 1 ? le.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (o > 1) for (t = new Array(o), n = new Array(o), i = new Array(o); r < o; r++) a[r] && ye.isFunction(a[r].promise) ? a[r].promise().progress(u(r, n, t)).done(u(r, i, a)).fail(l.reject) : --s;
                return s || l.resolveWith(i, a), l.promise()
            }
        });
        var _e;
        ye.fn.ready = function (e) {
            return ye.ready.promise().done(e), this
        }, ye.extend({
            isReady: !1, readyWait: 1, holdReady: function (e) {
                e ? ye.readyWait++ : ye.ready(!0)
            }, ready: function (e) {
                (e === !0 ? --ye.readyWait : ye.isReady) || (ye.isReady = !0, e !== !0 && --ye.readyWait > 0 || (_e.resolveWith(se, [ye]), ye.fn.triggerHandler && (ye(se).triggerHandler("ready"), ye(se).off("ready"))))
            }
        }), ye.ready.promise = function (e) {
            if (!_e) if (_e = ye.Deferred(), "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll) n.setTimeout(ye.ready); else if (se.addEventListener) se.addEventListener("DOMContentLoaded", d), n.addEventListener("load", d); else {
                se.attachEvent("onreadystatechange", d), n.attachEvent("onload", d);
                var t = !1;
                try {
                    t = null == n.frameElement && se.documentElement
                } catch (i) {
                }
                t && t.doScroll && !function r() {
                    if (!ye.isReady) {
                        try {
                            t.doScroll("left")
                        } catch (e) {
                            return n.setTimeout(r, 50)
                        }
                        c(), ye.ready()
                    }
                }()
            }
            return _e.promise(e)
        }, ye.ready.promise();
        var Oe;
        for (Oe in ye(ge)) break;
        ge.ownFirst = "0" === Oe, ge.inlineBlockNeedsLayout = !1, ye(function () {
            var e, t, n, i;
            n = se.getElementsByTagName("body")[0], n && n.style && (t = se.createElement("div"), i = se.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ge.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }), function () {
            var e = se.createElement("div");
            ge.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                ge.deleteExpando = !1
            }
            e = null
        }();
        var qe = function (e) {
            var t = ye.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
        }, He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Re = /([A-Z])/g;
        ye.extend({
            cache: {},
            noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (e) {
                return e = e.nodeType ? ye.cache[e[ye.expando]] : e[ye.expando], !!e && !f(e)
            },
            data: function (e, t, n) {
                return h(e, t, n)
            },
            removeData: function (e, t) {
                return g(e, t)
            },
            _data: function (e, t, n) {
                return h(e, t, n, !0)
            },
            _removeData: function (e, t) {
                return g(e, t, !0)
            }
        }), ye.fn.extend({
            data: function (e, t) {
                var n, i, r, a = this[0], o = a && a.attributes;
                if (void 0 === e) {
                    if (this.length && (r = ye.data(a), 1 === a.nodeType && !ye._data(a, "parsedAttrs"))) {
                        for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = ye.camelCase(i.slice(5)), p(a, i, r[i])));
                        ye._data(a, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function () {
                    ye.data(this, e)
                }) : arguments.length > 1 ? this.each(function () {
                    ye.data(this, e, t)
                }) : a ? p(a, e, ye.data(a, e)) : void 0
            }, removeData: function (e) {
                return this.each(function () {
                    ye.removeData(this, e)
                })
            }
        }), ye.extend({
            queue: function (e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = ye._data(e, t), n && (!i || ye.isArray(n) ? i = ye._data(e, t, ye.makeArray(n)) : i.push(n)), i || []
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = ye.queue(e, t), i = n.length, r = n.shift(), a = ye._queueHooks(e, t), o = function () {
                    ye.dequeue(e, t)
                };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, o, a)), !i && a && a.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return ye._data(e, n) || ye._data(e, n, {
                    empty: ye.Callbacks("once memory").add(function () {
                        ye._removeData(e, t + "queue"), ye._removeData(e, n)
                    })
                })
            }
        }), ye.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ye.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = ye.queue(this, e, t);
                    ye._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ye.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    ye.dequeue(this, e)
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, i = 1, r = ye.Deferred(), a = this, o = this.length, s = function () {
                    --i || r.resolveWith(a, [a])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = ye._data(a[o], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        }), function () {
            var e;
            ge.shrinkWrapBlocks = function () {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = se.getElementsByTagName("body")[0], n && n.style ? (t = se.createElement("div"), i = se.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(se.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
        var ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Pe = new RegExp("^(?:([+-])=|)(" + ze + ")([a-z%]*)$", "i"), Me = ["Top", "Right", "Bottom", "Left"],
            Fe = function (e, t) {
                return e = t || e, "none" === ye.css(e, "display") || !ye.contains(e.ownerDocument, e)
            }, Be = function (e, t, n, i, r, a, o) {
                var s = 0, l = e.length, u = null == n;
                if ("object" === ye.type(n)) {
                    r = !0;
                    for (s in n) Be(e, t, s, n[s], !0, a, o)
                } else if (void 0 !== i && (r = !0, ye.isFunction(i) || (o = !0), u && (o ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                        return u.call(ye(e), n)
                    })), t)) for (; s < l; s++) t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : u ? t.call(e) : l ? t(e[0], n) : a
            }, Ue = /^(?:checkbox|radio)$/i, We = /<([\w:-]+)/, Ge = /^$|\/(?:java|ecma)script/i, Ve = /^\s+/,
            Xe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        !function () {
            var e = se.createElement("div"), t = se.createDocumentFragment(), n = se.createElement("input");
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ge.leadingWhitespace = 3 === e.firstChild.nodeType, ge.tbody = !e.getElementsByTagName("tbody").length, ge.htmlSerialize = !!e.getElementsByTagName("link").length, ge.html5Clone = "<:nav></:nav>" !== se.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ge.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ge.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = se.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ge.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ge.noCloneEvent = !!e.addEventListener, e[ye.expando] = 1, ge.attributes = !e.getAttribute(ye.expando)
        }();
        var Je = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ge.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, Je.th = Je.td;
        var Ke = /<|&#?\w+;/, Ye = /<tbody/i;
        !function () {
            var e, t, i = se.createElement("div");
            for (e in{
                submit: !0,
                change: !0,
                focusin: !0
            }) t = "on" + e, (ge[e] = t in n) || (i.setAttribute(t, "t"), ge[e] = i.attributes[t].expando === !1);
            i = null
        }();
        var Qe = /^(?:input|select|textarea)$/i, Ze = /^key/, et = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            tt = /^(?:focusinfocus|focusoutblur)$/, nt = /^([^.]*)(?:\.(.+)|)/;
        ye.event = {
            global: {},
            add: function (e, t, n, i, r) {
                var a, o, s, l, u, c, d, p, f, h, g, m = ye._data(e);
                if (m) {
                    for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = ye.guid++), (o = m.events) || (o = m.events = {}), (c = m.handle) || (c = m.handle = function (e) {
                        return "undefined" == typeof ye || e && ye.event.triggered === e.type ? void 0 : ye.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match($e) || [""], s = t.length; s--;) a = nt.exec(t[s]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f && (u = ye.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = ye.event.special[f] || {}, d = ye.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && ye.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, l), (p = o[f]) || (p = o[f] = [], p.delegateCount = 0, u.setup && u.setup.call(e, i, h, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), ye.event.global[f] = !0);
                    e = null
                }
            },
            remove: function (e, t, n, i, r) {
                var a, o, s, l, u, c, d, p, f, h, g, m = ye.hasData(e) && ye._data(e);
                if (m && (c = m.events)) {
                    for (t = (t || "").match($e) || [""], u = t.length; u--;) if (s = nt.exec(t[u]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f) {
                        for (d = ye.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = c[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = p.length; a--;) o = p[a], !r && g !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (p.splice(a, 1), o.selector && p.delegateCount--, d.remove && d.remove.call(e, o));
                        l && !p.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || ye.removeEvent(e, f, m.handle), delete c[f])
                    } else for (f in c) ye.event.remove(e, f + t[u], n, i, !0);
                    ye.isEmptyObject(c) && (delete m.handle, ye._removeData(e, "events"))
                }
            },
            trigger: function (e, t, i, r) {
                var a, o, s, l, u, c, d, p = [i || se], f = he.call(e, "type") ? e.type : e,
                    h = he.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = c = i = i || se, 3 !== i.nodeType && 8 !== i.nodeType && !tt.test(f + ye.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), o = f.indexOf(":") < 0 && "on" + f, e = e[ye.expando] ? e : new ye.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : ye.makeArray(t, [e]), u = ye.event.special[f] || {}, r || !u.trigger || u.trigger.apply(i, t) !== !1)) {
                    if (!r && !u.noBubble && !ye.isWindow(i)) {
                        for (l = u.delegateType || f, tt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                        c === (i.ownerDocument || se) && p.push(c.defaultView || c.parentWindow || n)
                    }
                    for (d = 0; (s = p[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? l : u.bindType || f, a = (ye._data(s, "events") || {})[e.type] && ye._data(s, "handle"), a && a.apply(s, t), a = o && s[o], a && a.apply && qe(s) && (e.result = a.apply(s, t), e.result === !1 && e.preventDefault());
                    if (e.type = f, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), t) === !1) && qe(i) && o && i[f] && !ye.isWindow(i)) {
                        c = i[o], c && (i[o] = null), ye.event.triggered = f;
                        try {
                            i[f]()
                        } catch (g) {
                        }
                        ye.event.triggered = void 0, c && (i[o] = c)
                    }
                    return e.result
                }
            },
            dispatch: function (e) {
                e = ye.event.fix(e);
                var t, n, i, r, a, o = [], s = le.call(arguments), l = (ye._data(this, "events") || {})[e.type] || [],
                    u = ye.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (o = ye.event.handlers.call(this, e, l), t = 0; (r = o[t++]) && !e.isPropagationStopped();) for (e.currentTarget = r.elem, n = 0; (a = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a, e.data = a.data, i = ((ye.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, t) {
                var n, i, r, a, o = [], s = t.delegateCount, l = e.target;
                if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                    for (i = [], n = 0; n < s; n++) a = t[n], r = a.selector + " ", void 0 === i[r] && (i[r] = a.needsContext ? ye(r, this).index(l) > -1 : ye.find(r, this, null, [l]).length), i[r] && i.push(a);
                    i.length && o.push({elem: l, handlers: i})
                }
                return s < t.length && o.push({elem: this, handlers: t.slice(s)}), o
            },
            fix: function (e) {
                if (e[ye.expando]) return e;
                var t, n, i, r = e.type, a = e, o = this.fixHooks[r];
                for (o || (this.fixHooks[r] = o = et.test(r) ? this.mouseHooks : Ze.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new ye.Event(a), t = i.length; t--;) n = i[t], e[n] = a[n];
                return e.target || (e.target = a.srcElement || se), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, a) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n, i, r, a = t.button, o = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || se, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== S() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === S() && this.blur) return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if (ye.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    }, _default: function (e) {
                        return ye.nodeName(e.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n) {
                var i = ye.extend(new ye.Event, n, {type: e, isSimulated: !0});
                ye.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
            }
        }, ye.removeEvent = se.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        } : function (e, t, n) {
            var i = "on" + t;
            e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
        }, ye.Event = function (e, t) {
            return this instanceof ye.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? C : T) : this.type = e, t && ye.extend(this, t), this.timeStamp = e && e.timeStamp || ye.now(), void(this[ye.expando] = !0)) : new ye.Event(e, t)
        }, ye.Event.prototype = {
            constructor: ye.Event,
            isDefaultPrevented: T,
            isPropagationStopped: T,
            isImmediatePropagationStopped: T,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = C, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = C, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = C, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ye.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            ye.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, i = this, r = e.relatedTarget, a = e.handleObj;
                    return r && (r === i || ye.contains(i, r)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ge.submit || (ye.event.special.submit = {
            setup: function () {
                return !ye.nodeName(this, "form") && void ye.event.add(this, "click._submit keypress._submit", function (e) {
                    var t = e.target,
                        n = ye.nodeName(t, "input") || ye.nodeName(t, "button") ? ye.prop(t, "form") : void 0;
                    n && !ye._data(n, "submit") && (ye.event.add(n, "submit._submit", function (e) {
                        e._submitBubble = !0
                    }), ye._data(n, "submit", !0))
                })
            }, postDispatch: function (e) {
                e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && ye.event.simulate("submit", this.parentNode, e))
            }, teardown: function () {
                return !ye.nodeName(this, "form") && void ye.event.remove(this, "._submit")
            }
        }), ge.change || (ye.event.special.change = {
            setup: function () {
                return Qe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ye.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                }), ye.event.add(this, "click._change", function (e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1), ye.event.simulate("change", this, e)
                })), !1) : void ye.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    Qe.test(t.nodeName) && !ye._data(t, "change") && (ye.event.add(t, "change._change", function (e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ye.event.simulate("change", this.parentNode, e)
                    }), ye._data(t, "change", !0))
                })
            }, handle: function (e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
            }, teardown: function () {
                return ye.event.remove(this, "._change"), !Qe.test(this.nodeName)
            }
        }), ge.focusin || ye.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = function (e) {
                ye.event.simulate(t, e.target, ye.event.fix(e))
            };
            ye.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this, r = ye._data(i, t);
                    r || i.addEventListener(e, n, !0), ye._data(i, t, (r || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, r = ye._data(i, t) - 1;
                    r ? ye._data(i, t, r) : (i.removeEventListener(e, n, !0), ye._removeData(i, t))
                }
            }
        }), ye.fn.extend({
            on: function (e, t, n, i) {
                return k(this, e, t, n, i)
            }, one: function (e, t, n, i) {
                return k(this, e, t, n, i, 1)
            }, off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ye(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = T), this.each(function () {
                    ye.event.remove(this, e, n, t)
                })
            }, trigger: function (e, t) {
                return this.each(function () {
                    ye.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return ye.event.trigger(e, t, n, !0)
            }
        });
        var it = / jQuery\d+="(?:null|\d+)"/g, rt = new RegExp("<(?:" + Xe + ")[\\s/>]", "i"),
            at = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ot = /<script|<style|<link/i, st = /checked\s*(?:[^=]|=\s*.checked.)/i, lt = /^true\/(.*)/,
            ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ct = y(se), dt = ct.appendChild(se.createElement("div"));
        ye.extend({
            htmlPrefilter: function (e) {
                return e.replace(at, "<$1></$2>")
            }, clone: function (e, t, n) {
                var i, r, a, o, s, l = ye.contains(e.ownerDocument, e);
                if (ge.html5Clone || ye.isXMLDoc(e) || !rt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (dt.innerHTML = e.outerHTML, dt.removeChild(a = dt.firstChild)), !(ge.noCloneEvent && ge.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ye.isXMLDoc(e))) for (i = v(a), s = v(e), o = 0; null != (r = s[o]); ++o) i[o] && I(r, i[o]);
                if (t) if (n) for (s = s || v(e), i = i || v(a), o = 0; null != (r = s[o]); o++) L(r, i[o]); else L(e, a);
                return i = v(a, "script"), i.length > 0 && b(i, !l && v(e, "script")), i = s = r = null, a
            }, cleanData: function (e, t) {
                for (var n, i, r, a, o = 0, s = ye.expando, l = ye.cache, u = ge.attributes, c = ye.event.special; null != (n = e[o]); o++) if ((t || qe(n)) && (r = n[s], a = r && l[r])) {
                    if (a.events) for (i in a.events) c[i] ? ye.event.remove(n, i) : ye.removeEvent(n, i, a.handle);
                    l[r] && (delete l[r], u || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), oe.push(r))
                }
            }
        }), ye.fn.extend({
            domManip: D, detach: function (e) {
                return A(this, e, !0)
            }, remove: function (e) {
                return A(this, e)
            }, text: function (e) {
                return Be(this, function (e) {
                    return void 0 === e ? ye.text(this) : this.empty().append((this[0] && this[0].ownerDocument || se).createTextNode(e))
                }, null, e, arguments.length)
            }, append: function () {
                return D(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = N(this, e);
                        t.appendChild(e)
                    }
                })
            }, prepend: function () {
                return D(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = N(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            }, before: function () {
                return D(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            }, after: function () {
                return D(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ye.cleanData(v(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ye.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            }, clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return ye.clone(this, e, t)
                })
            }, html: function (e) {
                return Be(this, function (e) {
                    var t = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(it, "") : void 0;
                    if ("string" == typeof e && !ot.test(e) && (ge.htmlSerialize || !rt.test(e)) && (ge.leadingWhitespace || !Ve.test(e)) && !Je[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = ye.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (ye.cleanData(v(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (r) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = [];
                return D(this, arguments, function (t) {
                    var n = this.parentNode;
                    ye.inArray(this, e) < 0 && (ye.cleanData(v(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), ye.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            ye.fn[e] = function (e) {
                for (var n, i = 0, r = [], a = ye(e), o = a.length - 1; i <= o; i++) n = i === o ? this : this.clone(!0), ye(a[i])[t](n), ce.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var pt, ft = {HTML: "block", BODY: "block"}, ht = /^margin/,
            gt = new RegExp("^(" + ze + ")(?!px)[a-z%]+$", "i"), mt = function (e, t, n, i) {
                var r, a, o = {};
                for (a in t) o[a] = e.style[a], e.style[a] = t[a];
                r = n.apply(e, i || []);
                for (a in t) e.style[a] = o[a];
                return r
            }, yt = se.documentElement;
        !function () {
            function e() {
                var e, c, d = se.documentElement;
                d.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = r = s = !1, i = o = !0, n.getComputedStyle && (c = n.getComputedStyle(u), t = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, r = "4px" === (c || {width: "4px"}).width, u.style.marginRight = "50%", i = "4px" === (c || {marginRight: "4px"}).marginRight, e = u.appendChild(se.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", o = !parseFloat((n.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", a = 0 === u.getClientRects().length, a && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === e[0].offsetHeight, a && (e[0].style.display = "", e[1].style.display = "none", a = 0 === e[0].offsetHeight)), d.removeChild(l)
            }

            var t, i, r, a, o, s, l = se.createElement("div"), u = se.createElement("div");
            u.style && (u.style.cssText = "float:left;opacity:.5", ge.opacity = "0.5" === u.style.opacity, ge.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", ge.clearCloneStyle = "content-box" === u.style.backgroundClip, l = se.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), ge.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, ye.extend(ge, {
                reliableHiddenOffsets: function () {
                    return null == t && e(), a
                }, boxSizingReliable: function () {
                    return null == t && e(), r
                }, pixelMarginRight: function () {
                    return null == t && e(), i
                }, pixelPosition: function () {
                    return null == t && e(), t
                }, reliableMarginRight: function () {
                    return null == t && e(), o
                }, reliableMarginLeft: function () {
                    return null == t && e(), s
                }
            }))
        }();
        var vt, bt, xt = /^(top|right|bottom|left)$/;
        n.getComputedStyle ? (vt = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n), t.getComputedStyle(e)
        }, bt = function (e, t, n) {
            var i, r, a, o, s = e.style;
            return n = n || vt(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== o && void 0 !== o || ye.contains(e.ownerDocument, e) || (o = ye.style(e, t)), n && !ge.pixelMarginRight() && gt.test(o) && ht.test(t) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a), void 0 === o ? o : o + ""
        }) : yt.currentStyle && (vt = function (e) {
            return e.currentStyle
        }, bt = function (e, t, n) {
            var i, r, a, o, s = e.style;
            return n = n || vt(e), o = n ? n[t] : void 0, null == o && s && s[t] && (o = s[t]), gt.test(o) && !xt.test(t) && (i = s.left, r = e.runtimeStyle, a = r && r.left, a && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : o, o = s.pixelLeft + "px", s.left = i, a && (r.left = a)), void 0 === o ? o : o + "" || "auto"
        });
        var wt = /alpha\([^)]*\)/i, Ct = /opacity\s*=\s*([^)]*)/i, Tt = /^(none|table(?!-c[ea]).+)/,
            St = new RegExp("^(" + ze + ")(.*)$", "i"),
            kt = {position: "absolute", visibility: "hidden", display: "block"},
            Nt = {letterSpacing: "0", fontWeight: "400"}, Et = ["Webkit", "O", "Moz", "ms"],
            jt = se.createElement("div").style;
        ye.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = bt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": ge.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, a, o, s = ye.camelCase(t), l = e.style;
                    if (t = ye.cssProps[s] || (ye.cssProps[s] = q(s) || s), o = ye.cssHooks[t] || ye.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t];
                    if (a = typeof n, "string" === a && (r = Pe.exec(n)) && r[1] && (n = m(e, t, r), a = "number"), null != n && n === n && ("number" === a && (n += r && r[3] || (ye.cssNumber[s] ? "" : "px")), ge.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, i))))) try {
                        l[t] = n
                    } catch (u) {
                    }
                }
            },
            css: function (e, t, n, i) {
                var r, a, o, s = ye.camelCase(t);
                return t = ye.cssProps[s] || (ye.cssProps[s] = q(s) || s), o = ye.cssHooks[t] || ye.cssHooks[s], o && "get" in o && (a = o.get(e, !0, n)), void 0 === a && (a = bt(e, t, i)), "normal" === a && t in Nt && (a = Nt[t]), "" === n || n ? (r = parseFloat(a), n === !0 || isFinite(r) ? r || 0 : a) : a
            }
        }), ye.each(["height", "width"], function (e, t) {
            ye.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n) return Tt.test(ye.css(e, "display")) && 0 === e.offsetWidth ? mt(e, kt, function () {
                        return P(e, t, i)
                    }) : P(e, t, i)
                }, set: function (e, n, i) {
                    var r = i && vt(e);
                    return R(e, n, i ? z(e, t, i, ge.boxSizing && "border-box" === ye.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), ge.opacity || (ye.cssHooks.opacity = {
            get: function (e, t) {
                return Ct.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            }, set: function (e, t) {
                var n = e.style, i = e.currentStyle, r = ye.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    a = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ye.trim(a.replace(wt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = wt.test(a) ? a.replace(wt, r) : a + " " + r)
            }
        }), ye.cssHooks.marginRight = O(ge.reliableMarginRight, function (e, t) {
            if (t) return mt(e, {display: "inline-block"}, bt, [e, "marginRight"])
        }), ye.cssHooks.marginLeft = O(ge.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat(bt(e, "marginLeft")) || (ye.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - mt(e, {marginLeft: 0}, function () {
                return e.getBoundingClientRect().left
            }) : 0)) + "px"
        }), ye.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            ye.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Me[i] + t] = a[i] || a[i - 2] || a[0];
                    return r
                }
            }, ht.test(e) || (ye.cssHooks[e + t].set = R)
        }), ye.fn.extend({
            css: function (e, t) {
                return Be(this, function (e, t, n) {
                    var i, r, a = {}, o = 0;
                    if (ye.isArray(t)) {
                        for (i = vt(e), r = t.length; o < r; o++) a[t[o]] = ye.css(e, t[o], !1, i);
                        return a
                    }
                    return void 0 !== n ? ye.style(e, t, n) : ye.css(e, t)
                }, e, t, arguments.length > 1)
            }, show: function () {
                return H(this, !0)
            }, hide: function () {
                return H(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    Fe(this) ? ye(this).show() : ye(this).hide()
                })
            }
        }), ye.Tween = M, M.prototype = {
            constructor: M, init: function (e, t, n, i, r, a) {
                this.elem = e, this.prop = n, this.easing = r || ye.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (ye.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = M.propHooks[this.prop];
                return e && e.get ? e.get(this) : M.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = M.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ye.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
            }
        }, M.prototype.init.prototype = M.prototype, M.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ye.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                }, set: function (e) {
                    ye.fx.step[e.prop] ? ye.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ye.cssProps[e.prop]] && !ye.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ye.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ye.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }, _default: "swing"
        }, ye.fx = M.prototype.init, ye.fx.step = {};
        var Lt, It, Dt = /^(?:toggle|show|hide)$/, At = /queueHooks$/;
        ye.Animation = ye.extend(V, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return m(n.elem, e, Pe.exec(t), n), n
                }]
            }, tweener: function (e, t) {
                ye.isFunction(e) ? (t = e, e = ["*"]) : e = e.match($e);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], V.tweeners[n] = V.tweeners[n] || [], V.tweeners[n].unshift(t)
            }, prefilters: [W], prefilter: function (e, t) {
                t ? V.prefilters.unshift(e) : V.prefilters.push(e)
            }
        }), ye.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? ye.extend({}, e) : {
                complete: n || !n && t || ye.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ye.isFunction(t) && t
            };
            return i.duration = ye.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ye.fx.speeds ? ye.fx.speeds[i.duration] : ye.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                ye.isFunction(i.old) && i.old.call(this), i.queue && ye.dequeue(this, i.queue)
            }, i
        }, ye.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(Fe).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
            }, animate: function (e, t, n, i) {
                var r = ye.isEmptyObject(e), a = ye.speed(t, n, i), o = function () {
                    var t = V(this, ye.extend({}, e), a);
                    (r || ye._data(this, "finish")) && t.stop(!0)
                };
                return o.finish = o, r || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
            }, stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0, r = null != e && e + "queueHooks", a = ye.timers, o = ye._data(this);
                    if (r) o[r] && o[r].stop && i(o[r]); else for (r in o) o[r] && o[r].stop && At.test(r) && i(o[r]);
                    for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
                    !t && n || ye.dequeue(this, e)
                })
            }, finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = ye._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], a = ye.timers,
                        o = i ? i.length : 0;
                    for (n.finish = !0, ye.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                    for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ye.each(["toggle", "show", "hide"], function (e, t) {
            var n = ye.fn[t];
            ye.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, i, r)
            }
        }), ye.each({
            slideDown: B("show"),
            slideUp: B("hide"),
            slideToggle: B("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            ye.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), ye.timers = [], ye.fx.tick = function () {
            var e, t = ye.timers, n = 0;
            for (Lt = ye.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || ye.fx.stop(), Lt = void 0
        }, ye.fx.timer = function (e) {
            ye.timers.push(e), e() ? ye.fx.start() : ye.timers.pop()
        }, ye.fx.interval = 13, ye.fx.start = function () {
            It || (It = n.setInterval(ye.fx.tick, ye.fx.interval))
        }, ye.fx.stop = function () {
            n.clearInterval(It), It = null
        }, ye.fx.speeds = {slow: 600, fast: 200, _default: 400}, ye.fn.delay = function (e, t) {
            return e = ye.fx ? ye.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, i) {
                var r = n.setTimeout(t, e);
                i.stop = function () {
                    n.clearTimeout(r)
                }
            })
        }, function () {
            var e, t = se.createElement("input"), n = se.createElement("div"), i = se.createElement("select"),
                r = i.appendChild(se.createElement("option"));
            n = se.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", ge.getSetAttribute = "t" !== n.className, ge.style = /top/.test(e.getAttribute("style")), ge.hrefNormalized = "/a" === e.getAttribute("href"), ge.checkOn = !!t.value, ge.optSelected = r.selected, ge.enctype = !!se.createElement("form").enctype, i.disabled = !0, ge.optDisabled = !r.disabled, t = se.createElement("input"), t.setAttribute("value", ""), ge.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ge.radioValue = "t" === t.value
        }();
        var $t = /\r/g, _t = /[\x20\t\r\n\f]+/g;
        ye.fn.extend({
            val: function (e) {
                var t, n, i, r = this[0];
                {
                    if (arguments.length) return i = ye.isFunction(e), this.each(function (n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, ye(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ye.isArray(r) && (r = ye.map(r, function (e) {
                            return null == e ? "" : e + ""
                        })), t = ye.valHooks[this.type] || ye.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return t = ye.valHooks[r.type] || ye.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace($t, "") : null == n ? "" : n)
                }
            }
        }), ye.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = ye.find.attr(e, "value");
                        return null != t ? t : ye.trim(ye.text(e)).replace(_t, " ")
                    }
                }, select: {
                    get: function (e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || r < 0, o = a ? null : [], s = a ? r + 1 : i.length, l = r < 0 ? s : a ? r : 0; l < s; l++) if (n = i[l], (n.selected || l === r) && (ge.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ye.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ye(n).val(), a) return t;
                            o.push(t)
                        }
                        return o
                    }, set: function (e, t) {
                        for (var n, i, r = e.options, a = ye.makeArray(t), o = r.length; o--;) if (i = r[o], ye.inArray(ye.valHooks.option.get(i), a) > -1) try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), ye.each(["radio", "checkbox"], function () {
            ye.valHooks[this] = {
                set: function (e, t) {
                    if (ye.isArray(t)) return e.checked = ye.inArray(ye(e).val(), t) > -1
                }
            }, ge.checkOn || (ye.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Ot, qt, Ht = ye.expr.attrHandle, Rt = /^(?:checked|selected)$/i, zt = ge.getSetAttribute, Pt = ge.input;
        ye.fn.extend({
            attr: function (e, t) {
                return Be(this, ye.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    ye.removeAttr(this, e)
                })
            }
        }), ye.extend({
            attr: function (e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof e.getAttribute ? ye.prop(e, t, n) : (1 === a && ye.isXMLDoc(e) || (t = t.toLowerCase(), r = ye.attrHooks[t] || (ye.expr.match.bool.test(t) ? qt : Ot)), void 0 !== n ? null === n ? void ye.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ye.find.attr(e, t), null == i ? void 0 : i))
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!ge.radioValue && "radio" === t && ye.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }, removeAttr: function (e, t) {
                var n, i, r = 0, a = t && t.match($e);
                if (a && 1 === e.nodeType) for (; n = a[r++];) i = ye.propFix[n] || n, ye.expr.match.bool.test(n) ? Pt && zt || !Rt.test(n) ? e[i] = !1 : e[ye.camelCase("default-" + n)] = e[i] = !1 : ye.attr(e, n, ""), e.removeAttribute(zt ? n : i)
            }
        }), qt = {
            set: function (e, t, n) {
                return t === !1 ? ye.removeAttr(e, n) : Pt && zt || !Rt.test(n) ? e.setAttribute(!zt && ye.propFix[n] || n, n) : e[ye.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, ye.each(ye.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = Ht[t] || ye.find.attr;
            Pt && zt || !Rt.test(t) ? Ht[t] = function (e, t, i) {
                var r, a;
                return i || (a = Ht[t], Ht[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Ht[t] = a), r
            } : Ht[t] = function (e, t, n) {
                if (!n) return e[ye.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Pt && zt || (ye.attrHooks.value = {
            set: function (e, t, n) {
                return ye.nodeName(e, "input") ? void(e.defaultValue = t) : Ot && Ot.set(e, t, n)
            }
        }), zt || (Ot = {
            set: function (e, t, n) {
                var i = e.getAttributeNode(n);
                if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
            }
        }, Ht.id = Ht.name = Ht.coords = function (e, t, n) {
            var i;
            if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, ye.valHooks.button = {
            get: function (e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified) return n.value
            }, set: Ot.set
        }, ye.attrHooks.contenteditable = {
            set: function (e, t, n) {
                Ot.set(e, "" !== t && t, n)
            }
        }, ye.each(["width", "height"], function (e, t) {
            ye.attrHooks[t] = {
                set: function (e, n) {
                    if ("" === n) return e.setAttribute(t, "auto"), n
                }
            }
        })), ge.style || (ye.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || void 0
            }, set: function (e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Mt = /^(?:input|select|textarea|button|object)$/i, Ft = /^(?:a|area)$/i;
        ye.fn.extend({
            prop: function (e, t) {
                return Be(this, ye.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return e = ye.propFix[e] || e, this.each(function () {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (t) {
                    }
                })
            }
        }), ye.extend({
            prop: function (e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return 1 === a && ye.isXMLDoc(e) || (t = ye.propFix[t] || t, r = ye.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = ye.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Mt.test(e.nodeName) || Ft.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }, propFix: {"for": "htmlFor", "class": "className"}
        }), ge.hrefNormalized || ye.each(["href", "src"], function (e, t) {
            ye.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ge.optSelected || (ye.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }, set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), ye.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ye.propFix[this.toLowerCase()] = this
        }), ge.enctype || (ye.propFix.enctype = "encoding");
        var Bt = /[\t\r\n\f]/g;
        ye.fn.extend({
            addClass: function (e) {
                var t, n, i, r, a, o, s, l = 0;
                if (ye.isFunction(e)) return this.each(function (t) {
                    ye(this).addClass(e.call(this, t, X(this)))
                });
                if ("string" == typeof e && e) for (t = e.match($e) || []; n = this[l++];) if (r = X(n), i = 1 === n.nodeType && (" " + r + " ").replace(Bt, " ")) {
                    for (o = 0; a = t[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                    s = ye.trim(i), r !== s && ye.attr(n, "class", s)
                }
                return this
            }, removeClass: function (e) {
                var t, n, i, r, a, o, s, l = 0;
                if (ye.isFunction(e)) return this.each(function (t) {
                    ye(this).removeClass(e.call(this, t, X(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e) for (t = e.match($e) || []; n = this[l++];) if (r = X(n), i = 1 === n.nodeType && (" " + r + " ").replace(Bt, " ")) {
                    for (o = 0; a = t[o++];) for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
                    s = ye.trim(i), r !== s && ye.attr(n, "class", s)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ye.isFunction(e) ? this.each(function (n) {
                    ye(this).toggleClass(e.call(this, n, X(this), t), t)
                }) : this.each(function () {
                    var t, i, r, a;
                    if ("string" === n) for (i = 0, r = ye(this), a = e.match($e) || []; t = a[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" !== n || (t = X(this), t && ye._data(this, "__className__", t), ye.attr(this, "class", t || e === !1 ? "" : ye._data(this, "__className__") || ""));
                })
            }, hasClass: function (e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + X(n) + " ").replace(Bt, " ").indexOf(t) > -1) return !0;
                return !1
            }
        }), ye.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            ye.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ye.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        var Ut = n.location, Wt = ye.now(), Gt = /\?/,
            Vt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ye.parseJSON = function (e) {
            if (n.JSON && n.JSON.parse) return n.JSON.parse(e + "");
            var t, i = null, r = ye.trim(e + "");
            return r && !ye.trim(r.replace(Vt, function (e, n, r, a) {
                return t && n && (i = 0), 0 === i ? e : (t = r || n, i += !a - !r, "")
            })) ? Function("return " + r)() : ye.error("Invalid JSON: " + e)
        }, ye.parseXML = function (e) {
            var t, i;
            if (!e || "string" != typeof e) return null;
            try {
                n.DOMParser ? (i = new n.DOMParser, t = i.parseFromString(e, "text/xml")) : (t = new n.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
            } catch (r) {
                t = void 0
            }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ye.error("Invalid XML: " + e), t
        };
        var Xt = /#.*$/, Jt = /([?&])_=[^&]*/, Kt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Yt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Qt = /^(?:GET|HEAD)$/, Zt = /^\/\//,
            en = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, tn = {}, nn = {}, rn = "*/".concat("*"),
            an = Ut.href, on = en.exec(an.toLowerCase()) || [];
        ye.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: an,
                type: "GET",
                isLocal: Yt.test(on[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": rn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": ye.parseJSON, "text xml": ye.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? Y(Y(e, ye.ajaxSettings), t) : Y(ye.ajaxSettings, e)
            },
            ajaxPrefilter: J(tn),
            ajaxTransport: J(nn),
            ajax: function (e, t) {
                function i(e, t, i, r) {
                    var a, d, v, b, w, T = t;
                    2 !== x && (x = 2, l && n.clearTimeout(l), c = void 0, s = r || "", C.readyState = e > 0 ? 4 : 0, a = e >= 200 && e < 300 || 304 === e, i && (b = Q(p, C, i)), b = Z(p, b, C, a), a ? (p.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (ye.lastModified[o] = w), w = C.getResponseHeader("etag"), w && (ye.etag[o] = w)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, d = b.data, v = b.error, a = !v)) : (v = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || T) + "", a ? g.resolveWith(f, [d, T, C]) : g.rejectWith(f, [C, T, v]), C.statusCode(y), y = void 0, u && h.trigger(a ? "ajaxSuccess" : "ajaxError", [C, p, a ? d : v]), m.fireWith(f, [C, T]), u && (h.trigger("ajaxComplete", [C, p]), --ye.active || ye.event.trigger("ajaxStop")))
                }

                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, a, o, s, l, u, c, d, p = ye.ajaxSetup({}, t), f = p.context || p,
                    h = p.context && (f.nodeType || f.jquery) ? ye(f) : ye.event, g = ye.Deferred(),
                    m = ye.Callbacks("once memory"), y = p.statusCode || {}, v = {}, b = {}, x = 0, w = "canceled",
                    C = {
                        readyState: 0, getResponseHeader: function (e) {
                            var t;
                            if (2 === x) {
                                if (!d) for (d = {}; t = Kt.exec(s);) d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        }, getAllResponseHeaders: function () {
                            return 2 === x ? s : null
                        }, setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return x || (e = b[n] = b[n] || e, v[e] = t), this
                        }, overrideMimeType: function (e) {
                            return x || (p.mimeType = e), this
                        }, statusCode: function (e) {
                            var t;
                            if (e) if (x < 2) for (t in e) y[t] = [y[t], e[t]]; else C.always(e[C.status]);
                            return this
                        }, abort: function (e) {
                            var t = e || w;
                            return c && c.abort(t), i(0, t), this
                        }
                    };
                if (g.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || an) + "").replace(Xt, "").replace(Zt, on[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = ye.trim(p.dataType || "*").toLowerCase().match($e) || [""], null == p.crossDomain && (r = en.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === on[1] && r[2] === on[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (on[3] || ("http:" === on[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ye.param(p.data, p.traditional)), K(tn, p, t, C), 2 === x) return C;
                u = ye.event && p.global, u && 0 === ye.active++ && ye.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Qt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (Gt.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Jt.test(o) ? o.replace(Jt, "$1_=" + Wt++) : o + (Gt.test(o) ? "&" : "?") + "_=" + Wt++)), p.ifModified && (ye.lastModified[o] && C.setRequestHeader("If-Modified-Since", ye.lastModified[o]), ye.etag[o] && C.setRequestHeader("If-None-Match", ye.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + rn + "; q=0.01" : "") : p.accepts["*"]);
                for (a in p.headers) C.setRequestHeader(a, p.headers[a]);
                if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === x)) return C.abort();
                w = "abort";
                for (a in{success: 1, error: 1, complete: 1}) C[a](p[a]);
                if (c = K(nn, p, t, C)) {
                    if (C.readyState = 1, u && h.trigger("ajaxSend", [C, p]), 2 === x) return C;
                    p.async && p.timeout > 0 && (l = n.setTimeout(function () {
                        C.abort("timeout")
                    }, p.timeout));
                    try {
                        x = 1, c.send(v, i)
                    } catch (T) {
                        if (!(x < 2)) throw T;
                        i(-1, T)
                    }
                } else i(-1, "No Transport");
                return C
            },
            getJSON: function (e, t, n) {
                return ye.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return ye.get(e, void 0, t, "script")
            }
        }), ye.each(["get", "post"], function (e, t) {
            ye[t] = function (e, n, i, r) {
                return ye.isFunction(n) && (r = r || i, i = n, n = void 0), ye.ajax(ye.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                }, ye.isPlainObject(e) && e))
            }
        }), ye._evalUrl = function (e) {
            return ye.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
        }, ye.fn.extend({
            wrapAll: function (e) {
                if (ye.isFunction(e)) return this.each(function (t) {
                    ye(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ye(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            }, wrapInner: function (e) {
                return ye.isFunction(e) ? this.each(function (t) {
                    ye(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = ye(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                var t = ye.isFunction(e);
                return this.each(function (n) {
                    ye(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    ye.nodeName(this, "body") || ye(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ye.expr.filters.hidden = function (e) {
            return ge.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : te(e)
        }, ye.expr.filters.visible = function (e) {
            return !ye.expr.filters.hidden(e)
        };
        var sn = /%20/g, ln = /\[\]$/, un = /\r?\n/g, cn = /^(?:submit|button|image|reset|file)$/i,
            dn = /^(?:input|select|textarea|keygen)/i;
        ye.param = function (e, t) {
            var n, i = [], r = function (e, t) {
                t = ye.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (void 0 === t && (t = ye.ajaxSettings && ye.ajaxSettings.traditional), ye.isArray(e) || e.jquery && !ye.isPlainObject(e)) ye.each(e, function () {
                r(this.name, this.value)
            }); else for (n in e) ne(n, e[n], t, r);
            return i.join("&").replace(sn, "+")
        }, ye.fn.extend({
            serialize: function () {
                return ye.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = ye.prop(this, "elements");
                    return e ? ye.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !ye(this).is(":disabled") && dn.test(this.nodeName) && !cn.test(e) && (this.checked || !Ue.test(e))
                }).map(function (e, t) {
                    var n = ye(this).val();
                    return null == n ? null : ye.isArray(n) ? ye.map(n, function (e) {
                        return {name: t.name, value: e.replace(un, "\r\n")}
                    }) : {name: t.name, value: n.replace(un, "\r\n")}
                }).get()
            }
        }), ye.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function () {
            return this.isLocal ? re() : se.documentMode > 8 ? ie() : /^(get|post|head|put|delete|options)$/i.test(this.type) && ie() || re()
        } : ie;
        var pn = 0, fn = {}, hn = ye.ajaxSettings.xhr();
        n.attachEvent && n.attachEvent("onunload", function () {
            for (var e in fn) fn[e](void 0, !0)
        }), ge.cors = !!hn && "withCredentials" in hn, hn = ge.ajax = !!hn, hn && ye.ajaxTransport(function (e) {
            if (!e.crossDomain || ge.cors) {
                var t;
                return {
                    send: function (i, r) {
                        var a, o = e.xhr(), s = ++pn;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) o[a] = e.xhrFields[a];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i) void 0 !== i[a] && o.setRequestHeader(a, i[a] + "");
                        o.send(e.hasContent && e.data || null), t = function (n, i) {
                            var a, l, u;
                            if (t && (i || 4 === o.readyState)) if (delete fn[s], t = void 0, o.onreadystatechange = ye.noop, i) 4 !== o.readyState && o.abort(); else {
                                u = {}, a = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (c) {
                                    l = ""
                                }
                                a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                            }
                            u && r(a, l, u, o.getAllResponseHeaders())
                        }, e.async ? 4 === o.readyState ? n.setTimeout(t) : o.onreadystatechange = fn[s] = t : t()
                    }, abort: function () {
                        t && t(void 0, !0)
                    }
                }
            }
        }), ye.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (e) {
                    return ye.globalEval(e), e
                }
            }
        }), ye.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ye.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n = se.head || ye("head")[0] || se.documentElement;
                return {
                    send: function (i, r) {
                        t = se.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    }, abort: function () {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var gn = [], mn = /(=)\?(?=&|$)|\?\?/;
        ye.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = gn.pop() || ye.expando + "_" + Wt++;
                return this[e] = !0, e
            }
        }), ye.ajaxPrefilter("json jsonp", function (e, t, i) {
            var r, a, o,
                s = e.jsonp !== !1 && (mn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && mn.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = ye.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(mn, "$1" + r) : e.jsonp !== !1 && (e.url += (Gt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                return o || ye.error(r + " was not called"), o[0]
            }, e.dataTypes[0] = "json", a = n[r], n[r] = function () {
                o = arguments
            }, i.always(function () {
                void 0 === a ? ye(n).removeProp(r) : n[r] = a, e[r] && (e.jsonpCallback = t.jsonpCallback, gn.push(r)), o && ye.isFunction(a) && a(o[0]), o = a = void 0
            }), "script"
        }), ye.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || se;
            var i = Ne.exec(e), r = !n && [];
            return i ? [t.createElement(i[1])] : (i = w([e], t, r), r && r.length && ye(r).remove(), ye.merge([], i.childNodes))
        };
        var yn = ye.fn.load;
        ye.fn.load = function (e, t, n) {
            if ("string" != typeof e && yn) return yn.apply(this, arguments);
            var i, r, a, o = this, s = e.indexOf(" ");
            return s > -1 && (i = ye.trim(e.slice(s, e.length)), e = e.slice(0, s)), ye.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), o.length > 0 && ye.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                a = arguments, o.html(i ? ye("<div>").append(ye.parseHTML(e)).find(i) : e)
            }).always(n && function (e, t) {
                o.each(function () {
                    n.apply(this, a || [e.responseText, t, e])
                })
            }), this
        }, ye.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            ye.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), ye.expr.filters.animated = function (e) {
            return ye.grep(ye.timers, function (t) {
                return e === t.elem
            }).length
        }, ye.offset = {
            setOffset: function (e, t, n) {
                var i, r, a, o, s, l, u, c = ye.css(e, "position"), d = ye(e), p = {};
                "static" === c && (e.style.position = "relative"), s = d.offset(), a = ye.css(e, "top"), l = ye.css(e, "left"), u = ("absolute" === c || "fixed" === c) && ye.inArray("auto", [a, l]) > -1, u ? (i = d.position(), o = i.top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(l) || 0), ye.isFunction(t) && (t = t.call(e, n, ye.extend({}, s))), null != t.top && (p.top = t.top - s.top + o), null != t.left && (p.left = t.left - s.left + r), "using" in t ? t.using.call(e, p) : d.css(p)
            }
        }, ye.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    ye.offset.setOffset(this, e, t)
                });
                var t, n, i = {top: 0, left: 0}, r = this[0], a = r && r.ownerDocument;
                if (a) return t = a.documentElement, ye.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = ae(a), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i
            }, position: function () {
                if (this[0]) {
                    var e, t, n = {top: 0, left: 0}, i = this[0];
                    return "fixed" === ye.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ye.nodeName(e[0], "html") || (n = e.offset()), n.top += ye.css(e[0], "borderTopWidth", !0), n.left += ye.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - ye.css(i, "marginTop", !0),
                        left: t.left - n.left - ye.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && !ye.nodeName(e, "html") && "static" === ye.css(e, "position");) e = e.offsetParent;
                    return e || yt
                })
            }
        }), ye.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
            var n = /Y/.test(t);
            ye.fn[e] = function (i) {
                return Be(this, function (e, i, r) {
                    var a = ae(e);
                    return void 0 === r ? a ? t in a ? a[t] : a.document.documentElement[i] : e[i] : void(a ? a.scrollTo(n ? ye(a).scrollLeft() : r, n ? r : ye(a).scrollTop()) : e[i] = r)
                }, e, i, arguments.length, null)
            }
        }), ye.each(["top", "left"], function (e, t) {
            ye.cssHooks[t] = O(ge.pixelPosition, function (e, n) {
                if (n) return n = bt(e, t), gt.test(n) ? ye(e).position()[t] + "px" : n
            })
        }), ye.each({Height: "height", Width: "width"}, function (e, t) {
            ye.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
                ye.fn[i] = function (i, r) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        o = n || (i === !0 || r === !0 ? "margin" : "border");
                    return Be(this, function (t, n, i) {
                        var r;
                        return ye.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? ye.css(t, n, o) : ye.style(t, n, i, o)
                    }, t, a ? i : void 0, a, null)
                }
            })
        }), ye.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), ye.fn.size = function () {
            return this.length
        }, ye.fn.andSelf = ye.fn.addBack, i = [], r = function () {
            return ye
        }.apply(t, i), !(void 0 !== r && (e.exports = r));
        var vn = n.jQuery, bn = n.$;
        return ye.noConflict = function (e) {
            return n.$ === ye && (n.$ = bn), e && n.jQuery === ye && (n.jQuery = vn), ye
        }, a || (n.jQuery = n.$ = ye), ye
    })
}]);