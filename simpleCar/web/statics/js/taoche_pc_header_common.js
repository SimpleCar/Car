!function () {
    var e = window.Taoche || {};
    window.Taoche = e, e.getMainDomain = function (e) {
        for (var i = ["taoche.com", "taoche.cn", "etaoche.cn"], a = 0; a < i.length; a++) if (!(e.indexOf("." + i[a]) <= -1)) return i[a];
        return "taoche.com"
    }, e.mainDomain = e.getMainDomain(window.location.host.toLowerCase()) || "taoche.com", e.domain = {
        getURLHost: function (i) {
            return null == i || "" == i ? e.mainDomain : "." == i.charAt(i.length - 1) ? i + e.mainDomain : i + "." + e.mainDomain
        },
        cookie: e.mainDomain,
        cache: "cache.taoche.cn",
        ajax: "ajax.taoche.cn",
        taochePCHome: "home." + e.mainDomain,
        taochePC: "www." + e.mainDomain,
        taocheM: "m." + e.mainDomain,
        taocheCooperM: "cooper.m." + e.mainDomain,
        bangmaiPC: "bangmai." + e.mainDomain,
        bangmaiM: "bangmai.m." + e.mainDomain,
        jinrongPC: "jinrong." + e.mainDomain,
        jinrongM: "jinrong.m." + e.mainDomain,
        zhihuanPC: "zhihuan." + e.mainDomain,
        zhihuanM: "zhihuan.m." + e.mainDomain,
        maichePC: "maiche." + e.mainDomain,
        newsPC: "news." + e.mainDomain,
        xinchePC: "xin." + e.mainDomain,
        xincheM: "xin.m." + e.mainDomain,
        mfenqiM: "fenqi.m." + e.mainDomain,
        fenqiPC: "fenqi." + e.mainDomain,
        searchPC: "search.taoche.com",
        taocheMHome: "home.m." + e.mainDomain
    }
}(), function () {
    var e = window.Taoche || {};
    window.Taoche = e, e.DateTime = {
        addDays: function (e, i) {
            return i = i || new Date, new Date(i.getTime() + 24 * e * 60 * 60 * 1e3)
        }, addHours: function (e, i) {
            return i = i || new Date, new Date(i.getTime() + 60 * e * 60 * 1e3)
        }, addMinutes: function (e, i) {
            return i = i || new Date, new Date(i.getTime() + 60 * e * 1e3)
        }, addSeconds: function (e, i) {
            return i = i || new Date, new Date(i.getTime() + 1e3 * e)
        }, getString: function (e, i) {
            e = e || "yyyyMMddHHmmss", i = i || new Date;
            var a = i.getFullYear(), n = i.getMonth() + 1, t = i.getDate(), l = i.getHours(), s = i.getMinutes(),
                r = i.getSeconds();
            return n < 10 && (n = "0" + n), t < 10 && (t = "0" + t), l < 10 && (l = "0" + l), s < 10 && (s = "0" + s), r < 10 && (r = "0" + r), e.replace("yyyy", a).replace("MM", n).replace("dd", t).replace("HH", l).replace("mm", s).replace("ss", r)
        }
    }
}(), function () {
    var e = window.Taoche || {};
    window.Taoche = e, e.Storage = {
        canLocal: function () {
            if (!window.localStorage) return !1;
            try {
                var e = "_testkey_A0";
                return localStorage.setItem(e, "1"), localStorage.removeItem(e), !0
            } catch (e) {
                return !1
            }
        }, setLocal: function (i, a, n) {
            var t = e.DateTime.addHours(n).getTime();
            try {
                localStorage.setItem(i, "" + t + "," + a)
            } catch (e) {
            }
        }, getLocal: function (e) {
            try {
                var i, a, n = localStorage.getItem(e);
                return null == n ? null : (i = n.indexOf(","), i < 0 ? n : (a = n.substr(0, i), isNaN(a) ? n : new Date(parseInt(a)) <= new Date ? (localStorage.removeItem(e), null) : n.substr(i + 1, n.length - i - 1)))
            } catch (e) {
                return null
            }
        }, removeLocal: function (e) {
            try {
                localStorage.removeItem(e)
            } catch (e) {
            }
        }, setCookie: function (i, a, n, t, l, s) {
            document.cookie = i + "=" + escape(a) + (n ? "; expires=" + e.DateTime.addHours(n).toGMTString() : "") + (t ? "; path=" + t : "") + (l ? "; domain=" + l : "") + (s ? "; secure" : "")
        }, getCookie: function (e) {
            var i = document.cookie;
            if (i.length > 0) {
                var a, n = i.indexOf(e + "=");
                if (n != -1) return n = n + e.length + 1, a = i.indexOf(";", n), a == -1 && (a = i.length), unescape(i.substring(n, a))
            }
            return ""
        }, getCookieDecode: function (e) {
            for (var i = e + "=", a = i.length, n = document.cookie.length, t = 0, l = this; t < n;) {
                var s = t + a;
                if (document.cookie.substring(t, s) == i) return l.getCookieValDecode(s);
                if (t = document.cookie.indexOf(" ", t) + 1, 0 == t) break
            }
            return ""
        }, removeCookie: function (e, i, a) {
            document.cookie = e + "=" + (i ? "; path=" + i : "") + (a ? "; domain=" + a : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT"
        }, setValue: function (e, i, a, n, t, l) {
            a && !isNaN(a) && parseInt(a) > 0 && this.canLocal ? this.setLocal(e, i, a) : this.setCookie(e, i, a, n, t, l)
        }, getValue: function (e) {
            var i = null;
            return this.canLocal && (i = this.getLocal(e)), null == i && (i = this.getCookie(e)), i
        }, removeValue: function (e, i, a) {
            this.canLocal && this.removeLocal(e), this.removeCookie(e, i, a)
        }
    }, window.Cookie = {
        getExpDate: function (e, i, a) {
            var n = new Date;
            if ("number" == typeof e && "number" == typeof i && "number" == typeof i) return n.setDate(n.getDate() + parseInt(e)), n.setHours(n.getHours() + parseInt(i)), n.setMinutes(n.getMinutes() + parseInt(a)), n.toGMTString()
        }, getCookie: function (i) {
            return e.Storage.getCookie(i)
        }, setCookie: function (e, i, a, n, t, l) {
            document.cookie = e + "=" + escape(i) + (a ? "; expires=" + a : "") + (n ? "; path=" + n : "") + (t ? "; domain=" + t : "") + (l ? "; secure" : "")
        }, deleteCookie: function (e, i, a) {
            this.getCookie(e) && (document.cookie = e + "=" + (i ? "; path=" + i : "") + (a ? "; domain=" + a : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT")
        }
    }
}(), function () {
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
}(), function () {
    var e = window.Taoche || {};
    window.Taoche = e, e.isCitySite = !1, e.allCitys = [{id: "0", big: "1", name: "全国", spell: "quanguo"}, {
        id: 901,
        big: 1,
        name: "石家庄",
        spell: "shijiazhuang"
    }, {id: 902, big: 1, name: "唐山", spell: "tangshan"}, {id: 905, big: 1, name: "秦皇岛", spell: "qinhuangdao"}, {
        id: 907,
        big: 1,
        name: "邯郸",
        spell: "handan"
    }, {id: 903, big: 1, name: "邢台", spell: "xingtai"}, {id: 910, big: 1, name: "保定", spell: "baoding"}, {
        id: 911,
        big: 1,
        name: "张家口",
        spell: "zhangjiakou"
    }, {id: 912, big: 1, name: "承德", spell: "chengde"}, {id: 909, big: 1, name: "沧州", spell: "cangzhou"}, {
        id: 906,
        big: 1,
        name: "廊坊",
        spell: "langfang"
    }, {id: 908, big: 1, name: "衡水", spell: "hengshui"}, {id: 2201, big: 1, name: "太原", spell: "taiyuan"}, {
        id: 2202,
        big: 1,
        name: "大同",
        spell: "datong"
    }, {id: 2218, big: 1, name: "阳泉", spell: "yangquan"}, {id: 2206, big: 1, name: "长治", spell: "changzhi"}, {
        id: 2203,
        big: 1,
        name: "晋城",
        spell: "jincheng"
    }, {id: 2219, big: 1, name: "朔州", spell: "shuozhou"}, {id: 2204, big: 1, name: "晋中", spell: "jinzhong"}, {
        id: 2207,
        big: 1,
        name: "运城",
        spell: "yuncheng"
    }, {id: 2210, big: 1, name: "忻州", spell: "xinzhou"}, {id: 2205, big: 1, name: "临汾", spell: "linfen"}, {
        id: 2227,
        big: 1,
        name: "吕梁",
        spell: "lvliang"
    }, {id: 1801, big: 1, name: "呼和浩特", spell: "huhehaote"}, {id: 1802, big: 1, name: "包头", spell: "baotou"}, {
        id: 1805,
        big: 1,
        name: "乌海",
        spell: "wuhai"
    }, {id: 1803, big: 1, name: "赤峰", spell: "chifeng"}, {id: 1804, big: 1, name: "通辽", spell: "tongliao"}, {
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
    }, {id: 1401, big: 3, name: "长春", spell: "changchun"}, {id: 1402, big: 3, name: "吉林", spell: "jilin"}, {
        id: 3001,
        big: 4,
        name: "杭州",
        spell: "hangzhou"
    }, {id: 3002, big: 4, name: "宁波", spell: "ningbo"}, {id: 3003, big: 4, name: "温州", spell: "wenzhou"}, {
        id: 3005,
        big: 4,
        name: "嘉兴",
        spell: "jiaxing"
    }, {id: 3011, big: 4, name: "湖州", spell: "huzhou"}, {id: 3016, big: 4, name: "绍兴", spell: "shaoxing"}, {
        id: 3006,
        big: 4,
        name: "金华",
        spell: "jinhua"
    }, {id: 3012, big: 4, name: "衢州", spell: "quzhou"}, {id: 3020, big: 4, name: "舟山", spell: "zhoushan"}, {
        id: 3015,
        big: 4,
        name: "台州",
        spell: "tz"
    }, {id: 3009, big: 4, name: "丽水", spell: "lishui"}, {id: 125, big: 4, name: "亳州", spell: "bozhou"}, {
        id: 105,
        big: 4,
        name: "池州",
        spell: "chizhou"
    }, {id: 115, big: 4, name: "宣城", spell: "xuancheng"}, {id: 1601, big: 5, name: "南昌", spell: "nanchang"}, {
        id: 1612,
        big: 5,
        name: "景德镇",
        spell: "jingdezhen"
    }, {id: 1603, big: 5, name: "萍乡", spell: "pingxiang"}, {id: 1606, big: 5, name: "九江", spell: "jiujiang"}, {
        id: 1604,
        big: 5,
        name: "新余",
        spell: "xinyu"
    }, {id: 1615, big: 5, name: "鹰潭", spell: "yingtan"}, {id: 1607, big: 5, name: "赣州", spell: "ganzhou"}, {
        id: 1609,
        big: 5,
        name: "吉安",
        spell: "jian"
    }, {id: 1605, big: 5, name: "宜春", spell: "yichun"}, {id: 1613, big: 5, name: "抚州", spell: "jxfz"}, {
        id: 1602,
        big: 5,
        name: "上饶",
        spell: "shangrao"
    }, {id: 2301, big: 2, name: "西安", spell: "xian"}, {id: 2310, big: 2, name: "铜川", spell: "tongchuan"}, {
        id: 2305,
        big: 2,
        name: "宝鸡",
        spell: "baoji"
    }, {id: 2302, big: 2, name: "咸阳", spell: "xianyang"}, {id: 2303, big: 2, name: "渭南", spell: "weinan"}, {
        id: 2308,
        big: 2,
        name: "延安",
        spell: "yanan"
    }, {id: 2307, big: 2, name: "汉中", spell: "hanzhong"}, {id: 2304, big: 2, name: "榆林", spell: "yl"}, {
        id: 2306,
        big: 2,
        name: "安康",
        spell: "ankang"
    }, {id: 2313, big: 2, name: "商洛", spell: "shangluo"}, {id: 401, big: 2, name: "兰州", spell: "lanzhou"}, {
        id: 416,
        big: 2,
        name: "嘉峪关",
        spell: "jiayuguan"
    }, {id: 417, big: 2, name: "金昌", spell: "jinchang"}, {id: 418, big: 2, name: "白银", spell: "baiyin"}, {
        id: 415,
        big: 2,
        name: "天水",
        spell: "tianshui"
    }, {id: 412, big: 2, name: "武威", spell: "wuwei"}, {id: 410, big: 2, name: "张掖", spell: "zhangye"}, {
        id: 405,
        big: 2,
        name: "平凉",
        spell: "pingliang"
    }, {id: 409, big: 2, name: "酒泉", spell: "jiuquan"}, {id: 411, big: 2, name: "庆阳", spell: "qingyang"}, {
        id: 402,
        big: 2,
        name: "定西",
        spell: "dingxi"
    }, {id: 421, big: 2, name: "陇南", spell: "longnan"}, {id: 622900, big: 2, name: "临夏", spell: "linxia"}, {
        id: 422,
        big: 2,
        name: "甘南",
        spell: "gannan"
    }, {id: 2001, big: 2, name: "西宁", spell: "xining"}, {id: 2029, big: 2, name: "海东", spell: "haidongdiqu"}, {
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
    }, {id: 2810, big: 2, name: "石河子", spell: "shihezi"}, {
        id: 2832,
        big: 2,
        name: "吐鲁番",
        spell: "tulufandiqu"
    }, {id: 2833, big: 2, name: "哈密", spell: "hamidiqu"}, {id: 652300, big: 2, name: "昌吉", spell: "changji"}, {
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
    }, {id: 2830, big: 2, name: "和田", spell: "hetiandiqu"}, {id: 2823, big: 2, name: "伊犁", spell: "yili"}, {
        id: 2831,
        big: 2,
        name: "塔城",
        spell: "tachengdiqu"
    }, {id: 2834, big: 2, name: "阿勒泰", spell: "aletaidiqu"}, {
        id: 659e3,
        big: 2,
        name: "新疆直辖",
        spell: "xinjiangzhixiaxian"
    }, {id: 1301, big: 5, name: "长沙", spell: "changsha"}, {id: 1307, big: 5, name: "株洲", spell: "zhuzhou"}, {
        id: 1309,
        big: 5,
        name: "湘潭",
        spell: "xiangtan"
    }, {id: 1304, big: 5, name: "衡阳", spell: "hengyang"}, {id: 1310, big: 5, name: "邵阳", spell: "shaoyang"}, {
        id: 1308,
        big: 5,
        name: "岳阳",
        spell: "yueyang"
    }, {id: 1303, big: 5, name: "常德", spell: "changde"}, {
        id: 1315,
        big: 5,
        name: "张家界",
        spell: "zhangjiajie"
    }, {id: 1313, big: 5, name: "益阳", spell: "yiyang"}, {id: 1302, big: 5, name: "郴州", spell: "chenzhou"}, {
        id: 1312,
        big: 5,
        name: "永州",
        spell: "yongzhou"
    }, {id: 1305, big: 5, name: "怀化", spell: "huaihua"}, {id: 1306, big: 5, name: "娄底", spell: "loudi"}, {
        id: 1333,
        big: 5,
        name: "湘西",
        spell: "xiangxi"
    }, {id: 501, big: 7, name: "广州", spell: "guangzhou"}, {id: 511, big: 7, name: "韶关", spell: "shaoguan"}, {
        id: 502,
        big: 7,
        name: "深圳",
        spell: "shenzhen"
    }, {id: 503, big: 7, name: "珠海", spell: "zhuhai"}, {id: 507, big: 7, name: "汕头", spell: "shantou"}, {
        id: 518,
        big: 7,
        name: "佛山",
        spell: "foshan"
    }, {id: 521, big: 7, name: "江门", spell: "jiangmen"}, {id: 513, big: 7, name: "湛江", spell: "zhanjiang"}, {
        id: 515,
        big: 7,
        name: "茂名",
        spell: "maoming"
    }, {id: 514, big: 7, name: "肇庆", spell: "zhaoqing"}, {id: 520, big: 7, name: "惠州", spell: "huizhou"}, {
        id: 516,
        big: 7,
        name: "梅州",
        spell: "meizhou"
    }, {id: 552, big: 7, name: "汕尾", spell: "shanwei"}, {id: 535, big: 7, name: "河源", spell: "heyuan"}, {
        id: 532,
        big: 7,
        name: "阳江",
        spell: "yangjiang"
    }, {id: 524, big: 7, name: "清远", spell: "qingyuan"}, {id: 504, big: 7, name: "东莞", spell: "dongguan"}, {
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
    }, {id: 803, big: 7, name: "三亚", spell: "sanya"}, {id: 460300, big: 7, name: "三沙", spell: "sanshashi"}, {
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
    }, {id: 2510, big: 6, name: "广元", spell: "guangyuan"}, {id: 2503, big: 6, name: "遂宁", spell: "suining"}, {
        id: 2519,
        big: 6,
        name: "内江",
        spell: "neijiang"
    }, {id: 2512, big: 6, name: "乐山", spell: "leshan"}, {id: 2513, big: 6, name: "南充", spell: "nanchong"}, {
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
    }, {id: 701, big: 6, name: "贵阳", spell: "guiyang"}, {id: 708, big: 6, name: "六盘水", spell: "liupanshui"}, {
        id: 702,
        big: 6,
        name: "遵义",
        spell: "zunyi"
    }, {id: 705, big: 6, name: "安顺", spell: "anshun"}, {id: 719, big: 6, name: "铜仁", spell: "tongrendiqu"}, {
        id: 718,
        big: 6,
        name: "黔西南",
        spell: "qianxinan"
    }, {id: 717, big: 6, name: "毕节", spell: "bijiediqu"}, {
        id: 714,
        big: 6,
        name: "黔东南",
        spell: "qiandongnan"
    }, {id: 715, big: 6, name: "黔南", spell: "qiannan"}, {id: 2901, big: 6, name: "昆明", spell: "kunming"}, {
        id: 2903,
        big: 6,
        name: "曲靖",
        spell: "qujing"
    }, {id: 2902, big: 6, name: "玉溪", spell: "yuxi"}, {id: 2907, big: 6, name: "保山", spell: "baoshan"}, {
        id: 2918,
        big: 6,
        name: "昭通",
        spell: "zhaotong"
    }, {id: 2922, big: 6, name: "丽江", spell: "lijiang"}, {id: 2929, big: 6, name: "普洱", spell: "puer"}, {
        id: 2911,
        big: 6,
        name: "临沧",
        spell: "lincang"
    }, {id: 532300, big: 6, name: "楚雄", spell: "chuxiong"}, {id: 2923, big: 6, name: "红河", spell: "honghe"}, {
        id: 2914,
        big: 6,
        name: "文山",
        spell: "wenshan"
    }, {id: 2915, big: 6, name: "西双版纳", spell: "xishuangbanna"}, {
        id: 532900,
        big: 6,
        name: "大理",
        spell: "dali"
    }, {id: 2925, big: 6, name: "德宏", spell: "dehong"}, {id: 2927, big: 6, name: "怒江", spell: "nujiang"}, {
        id: 2928,
        big: 6,
        name: "迪庆",
        spell: "diqing"
    }, {id: 1616, big: 3, name: "四平", spell: "siping"}, {id: 1405, big: 3, name: "辽源", spell: "liaoyuan"}, {
        id: 1403,
        big: 3,
        name: "通化",
        spell: "tonghua"
    }, {id: 1406, big: 3, name: "白山", spell: "baishan"}, {id: 1425, big: 3, name: "松原", spell: "songyuan"}, {
        id: 1412,
        big: 3,
        name: "白城",
        spell: "baicheng"
    }, {id: 1428, big: 3, name: "延边", spell: "yanbian"}, {id: 1101, big: 3, name: "哈尔滨", spell: "haerbin"}, {
        id: 1103,
        big: 3,
        name: "齐齐哈尔",
        spell: "qiqihaer"
    }, {id: 1107, big: 3, name: "鸡西", spell: "jixi"}, {id: 1104, big: 3, name: "鹤岗", spell: "hegang"}, {
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
    }, {id: 2401, big: 4, name: "上海", spell: "shanghai"}, {id: 2601, big: 1, name: "天津", spell: "tianjin"}, {
        id: 3101,
        big: 6,
        name: "重庆",
        spell: "chongqing"
    }, {id: 1501, big: 4, name: "南京", spell: "nanjing"}, {id: 1503, big: 4, name: "无锡", spell: "wuxi"}, {
        id: 1518,
        big: 4,
        name: "徐州",
        spell: "xuzhou"
    }, {id: 1505, big: 4, name: "常州", spell: "changzhou"}, {id: 1502, big: 4, name: "苏州", spell: "suzhou"}, {
        id: 1511,
        big: 4,
        name: "南通",
        spell: "nantong"
    }, {id: 1510, big: 4, name: "连云港", spell: "lianyungang"}, {
        id: 1507,
        big: 4,
        name: "淮安",
        spell: "huaian"
    }, {id: 1512, big: 4, name: "盐城", spell: "yancheng"}, {id: 1513, big: 4, name: "扬州", spell: "yangzhou"}, {
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
    }, {id: 2707, big: 6, name: "阿里", spell: "alidiqu"}, {id: 2710, big: 6, name: "林芝", spell: "linzhidiqu"}, {
        id: 101,
        big: 4,
        name: "合肥",
        spell: "hefei"
    }, {id: 114, big: 4, name: "芜湖", spell: "wuhu"}, {id: 103, big: 4, name: "蚌埠", spell: "bengbu"}, {
        id: 108,
        big: 4,
        name: "淮南",
        spell: "huainan"
    }, {id: 110, big: 4, name: "马鞍山", spell: "maanshan"}, {id: 107, big: 4, name: "淮北", spell: "huaibei"}, {
        id: 113,
        big: 4,
        name: "铜陵",
        spell: "tongling"
    }, {id: 102, big: 4, name: "安庆", spell: "anqing"}, {id: 118, big: 4, name: "黄山", spell: "huangshan"}, {
        id: 116,
        big: 4,
        name: "滁州",
        spell: "chuzhou"
    }, {id: 106, big: 4, name: "阜阳", spell: "fuyang"}, {id: 120, big: 4, name: "宿州", spell: "sz"}, {
        id: 104,
        big: 4,
        name: "巢湖",
        spell: "chaohu"
    }, {id: 109, big: 4, name: "六安", spell: "luan"}, {id: 301, big: 4, name: "福州", spell: "fuzhou"}, {
        id: 302,
        big: 4,
        name: "厦门",
        spell: "xiamen"
    }, {id: 306, big: 4, name: "莆田", spell: "putian"}, {id: 318, big: 4, name: "三明", spell: "sanming"}, {
        id: 307,
        big: 4,
        name: "泉州",
        spell: "quanzhou"
    }, {id: 305, big: 4, name: "漳州", spell: "zhangzhou"}, {id: 314, big: 4, name: "南平", spell: "nanping"}, {
        id: 303,
        big: 4,
        name: "龙岩",
        spell: "longyan"
    }, {id: 315, big: 4, name: "宁德", spell: "ningde"}, {id: 2101, big: 4, name: "济南", spell: "jinan"}, {
        id: 2102,
        big: 4,
        name: "青岛",
        spell: "qingdao"
    }, {id: 2109, big: 4, name: "淄博", spell: "zibo"}, {id: 2107, big: 4, name: "枣庄", spell: "zaozhuang"}, {
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
    }, {id: 2114, big: 4, name: "聊城", spell: "liaocheng"}, {id: 2113, big: 4, name: "滨州", spell: "binzhou"}, {
        id: 2112,
        big: 4,
        name: "菏泽",
        spell: "heze"
    }, {id: 1001, big: 5, name: "郑州", spell: "zhengzhou"}, {id: 1013, big: 5, name: "开封", spell: "kaifeng"}, {
        id: 1002,
        big: 5,
        name: "洛阳",
        spell: "luoyang"
    }, {id: 1018, big: 5, name: "平顶山", spell: "pingdingshan"}, {
        id: 1019,
        big: 5,
        name: "济源",
        spell: "jiyuan"
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
    }, {id: 1010, big: 5, name: "漯河", spell: "luohe"}, {id: 1007, big: 5, name: "三门峡", spell: "sanmenxia"}, {
        id: 1009,
        big: 5,
        name: "南阳",
        spell: "nanyang"
    }, {id: 1006, big: 5, name: "商丘", spell: "shangqiu"}, {id: 1004, big: 5, name: "信阳", spell: "xinyang"}, {
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
    }, {id: 1207, big: 5, name: "宜昌", spell: "yichang"}, {id: 1203, big: 5, name: "襄阳", spell: "xiangfan"}, {
        id: 1216,
        big: 5,
        name: "鄂州",
        spell: "ezhou"
    }, {id: 1209, big: 5, name: "荆门", spell: "jingmen"}, {id: 1229, big: 5, name: "孝感", spell: "xiaogan"}, {
        id: 1210,
        big: 5,
        name: "荆州",
        spell: "jingzhou"
    }, {id: 1236, big: 5, name: "黄冈", spell: "huanggang"}, {id: 1217, big: 5, name: "咸宁", spell: "xianning"}, {
        id: 1219,
        big: 5,
        name: "潜江",
        spell: "qianjiang"
    }, {id: 1204, big: 5, name: "随州", spell: "suizhou"}, {id: 1205, big: 5, name: "仙桃", spell: "xiantao"}, {
        id: 1206,
        big: 5,
        name: "天门",
        spell: "tianmen"
    }, {id: 422800, big: 5, name: "恩施", spell: "enshi"}, {
        id: 429e3,
        big: 5,
        name: "湖北直辖",
        spell: "hubeizhixiaxian"
    }, {id: 201, big: 1, name: "北京", spell: "beijing"}, {id: 1701, big: 3, name: "沈阳", spell: "shenyang"}, {
        id: 1708,
        big: 3,
        name: "大连",
        spell: "dalian"
    }, {id: 1710, big: 3, name: "鞍山", spell: "anshan"}, {id: 1703, big: 3, name: "抚顺", spell: "fushun"}, {
        id: 1709,
        big: 3,
        name: "本溪",
        spell: "benxi"
    }, {id: 1702, big: 3, name: "丹东", spell: "dandong"}, {id: 1711, big: 3, name: "锦州", spell: "jinzhou"}, {
        id: 1714,
        big: 3,
        name: "营口",
        spell: "yingkou"
    }, {id: 1704, big: 3, name: "阜新", spell: "fuxin"}, {id: 1713, big: 3, name: "辽阳", spell: "liaoyang"}, {
        id: 1716,
        big: 3,
        name: "盘锦",
        spell: "panjin"
    }, {id: 1717, big: 3, name: "铁岭", spell: "tieling"}, {id: 1707, big: 3, name: "朝阳", spell: "chaoyang"}, {
        id: 1705,
        big: 3,
        name: "葫芦岛",
        spell: "huludao"
    }, {id: 1, big: 4, name: "安徽", spell: "anhui"}, {id: 3, big: 4, name: "福建", spell: "fujian"}, {
        id: 4,
        big: 2,
        name: "甘肃",
        spell: "gansu"
    }, {id: 5, big: 7, name: "广东", spell: "guangdong"}, {id: 6, big: 7, name: "广西", spell: "guangxi"}, {
        id: 7,
        big: 6,
        name: "贵州",
        spell: "guizhou"
    }, {id: 8, big: 7, name: "海南", spell: "hainan"}, {id: 9, big: 1, name: "河北", spell: "hebei"}, {
        id: 10,
        big: 5,
        name: "河南",
        spell: "henan"
    }, {id: 11, big: 3, name: "黑龙江", spell: "heilongjiang"}, {id: 12, big: 5, name: "湖北", spell: "hubei"}, {
        id: 13,
        big: 5,
        name: "湖南",
        spell: "hunan"
    }, {id: 14, big: 3, name: "吉林", spell: "jl"}, {id: 15, big: 4, name: "江苏", spell: "jiangsu"}, {
        id: 16,
        big: 5,
        name: "江西",
        spell: "jiangxi"
    }, {id: 17, big: 3, name: "辽宁", spell: "liaoning"}, {id: 18, big: 1, name: "内蒙古", spell: "neimenggu"}, {
        id: 19,
        big: 2,
        name: "宁夏",
        spell: "ningxia"
    }, {id: 20, big: 2, name: "青海", spell: "qinghai"}, {id: 21, big: 4, name: "山东", spell: "shandong"}, {
        id: 22,
        big: 1,
        name: "山西",
        spell: "shanxi"
    }, {id: 23, big: 2, name: "陕西", spell: "shaanxi"}, {id: 25, big: 6, name: "四川", spell: "sichuan"}, {
        id: 27,
        big: 6,
        name: "西藏",
        spell: "xizang"
    }, {id: 28, big: 2, name: "新疆", spell: "xinjiang"}, {id: 29, big: 6, name: "云南", spell: "yunnan"}, {
        id: 30,
        big: 4,
        name: "浙江",
        spell: "zhejiang"
    }, {id: 33, big: "1", name: "京津冀", spell: "jjj"}, {id: 34, big: "1", name: "江浙沪", spell: "jzh"}, {
        id: 35,
        big: "1",
        name: "珠三角",
        spell: "zsj"
    }, {id: 36, big: "1", name: "长三角", spell: "csj"}, {
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
        afterLocation: function (i) {
            if (e.isFunc(i)) return this.isLocation && 0 == this._callBacks.length ? void i() : void this._callBacks.push(i)
        },
        getCityInfo: function (i) {
            for (var a = 0, n = e.allCitys; a < n.length; a++) if (n[a].id == i) return {
                cityId: n[a].id,
                bigAreaId: n[a].big,
                cityName: n[a].name,
                citySpell: n[a].spell,
                isProvince: n[a].id < 100
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
            var i = parseInt(e);
            if (i < 100) return i;
            if (i >= 100 && i <= 999) return e.toString().substr(0, 1);
            if (i >= 1e3 && i < 1e4) return e.toString().substr(0, 2);
            switch (i) {
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
                    return i
            }
        },
        GetCurrentProvinceId: function () {
            return this.getProvinceId(this.cityId)
        },
        GetCityIdByRegionId: function (e) {
            if (!e) return e;
            if (e.length <= 4) return e;
            var i = parseInt(e);
            switch (i) {
                case 419e3:
                    return 1019;
                case 429e3:
                    return 1206;
                case 659e3:
                    return 2810;
                default:
                    return e
            }
        },
        _setLocationCity: function (e) {
            var i = this.getCityInfo(e);
            this.cityId = i.cityId, this.bigAreaId = i.bigAreaId, this.cityName = i.cityName, this.citySpell = i.citySpell, this.isLocation = !0;
            for (var a = 0, n = this._callBacks.length; a < n; a++) this._callBacks[a]();
            this._callBacks = []
        },
        _setXincheLocationCity: function () {
            var i = window.city ? window.city : {
                CityId: 201,
                RegionId: 110100,
                CityName: "北京",
                CitySpell: "beijing",
                ProvinceId: 2,
                ProvinceName: "北京市"
            };
            this.cityId = i.CityId, this.bigAreaId = 0, this.cityName = i.CityName, this.citySpell = i.CitySpell, this.isLocation = !0, e.Storage.setCookie(this.ipCityCookieKey, this.cityId, this.expire, "/", e.domain.cookie);
            for (var a = 0, n = this._callBacks.length; a < n; a++) this._callBacks[a]();
            this._callBacks = []
        },
        saveIpCity: function (i) {
            var a = "undefined" != typeof ipConfig && ipConfig.gps ? ipConfig.expire : 24;
            e.Storage.setCookie(this.ipCityCookieKey, i, a, "/", e.domain.cookie), this._setLocationCity(i)
        },
        locationByIp: function () {
            try {
                var i = document.createElement("script");
                i.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(i), i.src = "//ajax.taoche.cn/city/getcitybyip.ashx?jsonp=1&callback=Taoche.IpLocation.saveIpCity&_r=" + Math.random()
            } catch (i) {
                e.IpLocation.saveIpCity(this.cityId)
            }
            var a = this;
            setTimeout(function () {
                a.isLocation || a.saveIpCity(a.cityId)
            }, 5e3)
        },
        init: function () {
            var i = this, a = location.hostname.toLowerCase().split(".")[0], n = location.search.substr(1), t = "cn",
                l = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"), s = n.match(l), r = 0;
            null != s && (r = unescape(s[2])), 1 == r && (a = "quanguo");
            for (var o = 0, d = e.allCitys, c = d.length; o < c; o++) if (d[o].spell == a) return e.isCitySite = !0, void i.saveIpCity(d[o].id);
            if (!e.isCitySite && window.city && !isNaN(window.city.CityId)) return void i._setXincheLocationCity();
            var u = e.Storage.getCookie(i.ipCityCookieKey);
            if (u && !isNaN(u)) {
                var h = i.GetCityIdByRegionId(u);
                return void i._setLocationCity(h)
            }
            if ("undefined" == typeof ipConfig || !ipConfig.gps) return void i.locationByIp();
            var m = navigator.geolocation;
            if (!m) return void i.locationByIp();
            var p = null;
            navigator.userAgent && navigator.userAgent.indexOf("qqnews") > 0 && (p = setTimeout(function () {
                i.locationByIp()
            }, 1e3)), m.getCurrentPosition(function (e) {
                if (null !== p && clearTimeout(p), e && e.coords) {
                    var a = e.coords.latitude, n = e.coords.longitude;
                    try {
                        var t = document.createElement("script");
                        t.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(t), t.src = "//ajax.taoche.cn/city/getcitybygps.ashx?callback=Taoche.IpLocation.saveIpCity&x=" + a + "&y=" + n + "&_r=" + Math.random()
                    } catch (e) {
                        i.locationByIp()
                    }
                } else i.locationByIp()
            }, function () {
                null !== p && clearTimeout(p), i.locationByIp()
            }, {enableHighAccuracy: !1, timeout: 1e3, maximumAge: 0})
        }
    }, e.IpLocation.afterLocation(function () {
        e.currentCityId = e.IpLocation.cityId, "quanguo" == e.IpLocation.citySpell ? e.currentCitySpell = "www" : e.currentCitySpell = e.IpLocation.citySpell, e.currentCityName = e.IpLocation.cityName;
        var i = e.currentCityId;
        window.BitautoCityForAd = e.currentCityName + (18 == i || 6 == i || 27 == i || 28 == i || 19 == i || i > 100 ? "" : "省")
    }), e.afterLocation = function (i) {
        e.IpLocation.afterLocation(i)
    }, e.IpLocation.init()
}(), !function () {
    var e = Taoche.Storage.getCookie("CIGDCID");
    e || Taoche.Storage.setCookie("CIGDCID", "abc" + (new Date).getTime(), 24, "/", Taoche.domain.cookie)
}(), function () {
    var e = window.Taoche || {};
    window.Taoche = e, e.getQuery = function (e, i) {
        if (!e) return "";
        var a = "";
        if (i) {
            var n = i.indexOf("?");
            if (n < 0) return "";
            a = i.substr(n + 1)
        } else a = location.search.substr(1);
        var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), l = a.match(t);
        return null != l ? unescape(l[2]) : ""
    }, e.getUrlNoAnchor = function (e) {
        e = e || location.href;
        var i = e.indexOf("#");
        return i < 0 ? e : e.substr(0, i)
    }, e.getUrlNoParam = function (e) {
        e = this.getUrlNoAnchor(e);
        var i = e.indexOf("?");
        return i < 0 ? e : e.substr(0, i)
    }, e.getUrlLastTag = function (e) {
        e = e || location.href;
        var i = e.lastIndexOf("#");
        return i < 0 ? "" : e.substr(i + 1)
    }, e.addQuery = function (e, i, a) {
        if (a = a || location.href, !e) return a;
        var n = a.indexOf("#"), t = "", l = "", s = "";
        if (n >= 0 && (s = a.substr(n), a = a.substr(0, n)), n = a.indexOf("?"), n < 0) return a + "?" + e + "=" + encodeURI(i) + s;
        l = a.substr(n).replace("?", "&") + "&", t = a.substr(0, n);
        var r = new RegExp("&" + e + "=([^&]*)&", "i"), o = l.replace(r, "##");
        return l == o ? t + "?" + l.substr(1) + e + "=" + encodeURI(i) + s : (l = o.replace("##", "&" + e + "=" + encodeURI(i) + "&"), t + "?" + l.substr(1, l.length - 2) + s)
    }, e.removeQuery = function (e, i) {
        if (i = i || location.href, !e) return i;
        var a = i.indexOf("#"), n = "", t = "", l = "";
        if (a >= 0 && (l = i.substr(a), i = i.substr(0, a)), a = i.indexOf("?"), a < 0) return i + l;
        if (t = i.substr(a).replace("?", "&") + "&", n = i.substr(0, a), t.length <= 2) return n + l;
        var s = new RegExp("&" + e + "=([^&]*)&", "i");
        return t = t.replace(s, "&"), t.length <= 2 ? n + l : n + "?" + t.substr(1, t.length - 2) + l
    }, e.getQueryNameValues = function (i) {
        i = i || location.href, i = e.getUrlNoAnchor(i);
        var a = i.indexOf("?");
        if (a < 0) return {};
        for (var n, t = i.substr(a + 1).split("&"), l = {}, s = 0, r = t.length; s < r; s++) n = t[s].split("="), "" != n[0] && (l[n[0]] = decodeURIComponent(n[1]));
        return l
    }
}(), function () {
    var e = window.Taoche || {};
    window.Taoche = e, e.DynamicFunc = e.DynamicFunc || {
        index: 0, getFuncName: function (i, a, n) {
            var t = "CB__A" + this.index;
            this.index++;
            var l = this;
            return this[t] = function (s) {
                i && e.isFunc(i) && (n && e.isFunc(n) && (s = n(s)), i(s)), a !== !1 && (l[t] = null)
            }, "Taoche.DynamicFunc." + t
        }
    }
}(), function () {
    var e = window.Taoche || {};
    window.Taoche = e, e.isLogined = !1, e.loginUserId = 0, e.loginUserName = null, e.loginUserShowName = null, e.loginUserPhone = null, e.loginUserImg = null, e.loginUserRawPhone = null, e.User = {
        isInit: !1,
        callBacks: [],
        isGetPh: !1,
        rawPhCbs: [],
        trigCbs: function () {
            for (var e = 0; e < this.callBacks.length; e++) this.callBacks[e]();
            this.callBacks = []
        },
        init: function () {
            var i = e.DynamicFunc.getFuncName(function (i) {
                e.User.isInit = !0, e.isLogined = i.Islogin, e.loginUserId = i.LoanUserID, e.loginUserName = i.UserName, e.loginUserShowName = i.UserName, e.loginUserPhone = i.Telphone, e.loginUserImg = i.HeadPortrait, e.User.trigCbs()
            }), a = "https://" + e.domain.taochePCHome + "/User/GetCurrentUserIdentity?callback=" + i;
            $.getScript(a).fail(function () {
                e.User.isInit = !0, e.User.trigCbs()
            }), setTimeout(function () {
                e.User.isInit || (e.User.isInit = !0, e.User.trigCbs())
            }, 5e3)
        },
        afterCheckLogin: function (i) {
            if (e.isFunc(i)) return this.isInit && 0 == this.callBacks.length ? void i() : void this.callBacks.push(i)
        },
        runFuncNeedRawPhone: function (i) {
            if (e.isFunc(i)) {
                if (null !== e.loginUserRawPhone) {
                    if (0 == this.rawPhCbs.length) return void i(e.loginUserRawPhone)
                } else if (this.isInit && 0 == e.loginUserId) return e.loginUserRawPhone = "", void i("");
                if (this.rawPhCbs.push(i), !this.isGetPh) {
                    this.isGetPh = !0;
                    var a = this;
                    e.jsonp("//" + e.domain.taochePC + "/ajax/jsonp/getloginuser.ashx", function (i) {
                        var n = !0;
                        i && 100 == i.Status ? (e.loginUserRawPhone = i.Data.Phone, e.loginUserId > 0 && e.loginUserId != i.Data.UserId && (n = !1)) : e.loginUserRawPhone = "";
                        for (var t = 0; t < a.rawPhCbs.length; t++) a.rawPhCbs[t](e.loginUserRawPhone);
                        a.rawPhCbs = [], n || a.refreshLoginStatus()
                    })
                }
            }
        },
        _refresh: function (i) {
            this.isInit = !1, e.isLogined = !1, e.loginUserId = 0, e.loginUserName = null, e.loginUserShowName = null, e.loginUserPhone = null, e.loginUserImg = null, this.afterCheckLogin(i), this.init()
        },
        refreshLoginStatus: function (i) {
            this.isGetPh = !1, e.loginUserRawPhone = null, this._refresh(i)
        },
        getLoginRawPhone: function (i) {
            e.jsonp("//" + e.domain.taochePC + "/ajax/jsonp/getloginuser.ashx", function (e) {
                i(e && 100 == e.Status ? e.Data.Phone : "")
            })
        }
    }, e.afterCheckLogin = function (i) {
        e.User.afterCheckLogin(i)
    }, e.runFuncNeedRawPhone = function (i) {
        e.User.runFuncNeedRawPhone(i)
    }, e.User.init()
}(), function (e) {
    var i = function (i, a) {
        this.element = i, this.defaults = {
            CallBacks: new Function,
            OnlyOnSale: !0,
            IsThreeLevelList: !1,
            IsDownMenu: !0,
            FailTip: "未找到符合条件的车型！",
            SerialImgShow: !0,
            IsOpenSearch: !0,
            IsBrandsBack: !1,
            DownMenuWidth: 240,
            BrandsUrl: "",
            BrandsType: "jsonp",
            SerialsUrl: "",
            ShowLevel: "",
            SerialsType: "jsonp",
            DefaultLevel: 1,
            EventType: "click"
        }, this.opts = e.extend(this.defaults, a), this.loadSearchUrl = "//apicheyisou.yiche.com/sugservice/sugOnlyCarModel.ashx?k=", this.loadBrandsUrl = this.opts.BrandsUrl || "//webapi.taoche.com/api/Common/GetCarMasterBrandListWithFirstLetter", this.loadSerialsUrl = this.opts.SerialsUrl || "//webapi.taoche.com/api/Common/GetCarSerialListWithBrand?masterBrandId=", this.loadCarsUrl = "//webapi.taoche.com/api/Common/GetCarListWithPrice?serialId=", this.emptyDom = e('<div class="empty-search"></div>'), this.downMenuDom = e('<div class="sel-car-menu drop-layer">'), this.downMenuRDom = e('<div class="sel-car-menu-right">'), this.curOpts = 0, this.textVal = "", this.inputHeight = this.element.height(), this.IsSearch = !0, this.brandsListDom = e('<div class="sel-car-brands drop-layer"><div class="sel-car-loading"></div></div>'), this.letterNavDom = e('<div class="brand_letters" id="master-index_letters">'), this.brandsNameDom = e('<div class="brand_name_bg"><div class="brand_name" id="masterIndexList">'), this.carTypeListDom = e('<div class="sel-car-type drop-layer"><div class="sel-car-loading"></div></div>'), this.hasloadBrands = !1, this.callBacksObj = {}, this.init()
    };
    i.prototype = {
        init: function () {
            var e = this;
            e.renderDom(), e.bindEvent()
        }, sendAjax: function (i, a, n) {
            var t = {url: "", timeout: 5e3, type: "get", dataType: "json", cache: !0, async: !0, data: {}};
            t = e.extend(t, i), e.ajax({
                url: t.url,
                type: t.type,
                dataType: t.dataType,
                async: t.async,
                cache: t.cache,
                data: t.data,
                beforeSend: function () {
                },
                success: function (e) {
                    a(e)
                },
                complete: function (e, i) {
                    "timeout" == status && n(i)
                }
            })
        }, downMenu: function () {
            function i(i) {
                i.s && i.s.length > 0 ? (n.downMenuDom.css({
                    height: "auto",
                    width: n.opts.DownMenuWidth + "px"
                }), n.downMenuRDom.hide(), l += '<ul class="sel-car-menu-left">', e.each(i.s, function (e, i) {
                    "品牌" != i.type && (l += "主品牌" == i.type ? '<li data-id="" data-brandid="' + i.id + '" data-brandspell="' + i.spell + '" class="sel-car-brand">' + i.name + "</li>" : '<li data-id="' + i.id + '" data-brandid="" data-spell="' + i.spell + '">' + i.name + "</li>")
                })) : (n.downMenuRDom.hide(), l += '<ul class="sel-car-menu-left menu-fail">', l += '<li class="fail-tip">' + n.opts.FailTip + "</li>", n.downMenuDom.css({
                    height: "30px",
                    width: "240px"
                })), l += "</ul>", n.downMenuDom.html(l), n.downMenuRDom.html('<div class="menu-right-title">全部车型</div><div class="menu-right-con"></div>'), n.downMenuDom.append(n.downMenuRDom)
            }

            function a(e) {
                n.sendAjax({url: t, dataType: "jsonp"}, showSerials, a)
            }

            var n = this, t = n.loadSearchUrl + n.textVal, l = "";
            n.sendAjax({url: t, dataType: "jsonp"}, i, a), n.downMenuDom.show()
        }, renderDom: function () {
            var e = this;
            e.element.wrap('<span class="sel-car-wrapper"></span>'),
            e.opts.IsOpenSearch && (e.element.after(e.emptyDom), e.element.after(e.downMenuDom), e.downMenuDom.css("top", e.inputHeight)), e.element.after(e.brandsListDom), e.brandsListDom.css("top", e.inputHeight), e.brandsListDom.append(e.letterNavDom).append(e.brandsNameDom).after(e.carTypeListDom), e.brandsListDom.css("top", e.inputHeight), e.carTypeListDom.css("top", e.inputHeight)
        }, bindEvent: function () {
            var i = this;
            i.opts.IsOpenSearch ? (i.element.on("focus keyup", function (a) {
                a.preventDefault(), e(".drop-layer:visible").hide(), e(".up-arrow").removeClass("up-arrow"), e(".upArrow-icon").removeClass("upArrow-icon").addClass("downArrow-icon"), i.downMenuDom.show();
                var n = i.downMenuDom.find(".sel-car-menu-left li").length,
                    t = i.downMenuDom.find(".sel-car-menu-left li");
                if (38 == a.keyCode && i.downMenuDom.is(":visible")) i.IsSearch = !1, 0 == i.curOpts || 1 == i.curOpts ? i.curOpts = n : i.curOpts -= 1, 0 != i.curOpts && i.downMenuDom.find(".sel-car-menu-left li.fail-tip").length <= 0 && (i.element.attr("data-id", t.eq(i.curOpts - 1).attr("data-id")), i.element.attr("data-brandid", t.eq(i.curOpts - 1).attr("data-brandid")), i.element.val(t.eq(i.curOpts - 1).text())); else if (40 == a.keyCode && i.downMenuDom.is(":visible")) i.IsSearch = !1, i.curOpts == n ? i.curOpts = 1 : i.curOpts += 1, 0 != i.curOpts && i.downMenuDom.find(".sel-car-menu-left li.fail-tip").length <= 0 && (i.element.attr("data-id", t.eq(i.curOpts - 1).attr("data-id")), i.element.attr("data-brandid", t.eq(i.curOpts - 1).attr("data-brandid")), i.element.val(t.eq(i.curOpts - 1).text())); else if (13 == a.keyCode && i.downMenuDom.is(":visible") && "" != e.trim(i.element.val()) && !i.downMenuDom.find(".sel-car-menu-left li").hasClass("fail-tip")) {
                    var l, s = i.downMenuDom.find(".menu-right-con");
                    l = 0 != i.downMenuDom.find(".sel-car-menu-left li.hover").length ? i.downMenuDom.find(".sel-car-menu-left li.hover") : i.downMenuDom.find(".sel-car-menu-left li").eq(0), l.hasClass("sel-car-brand") ? i.opts.IsBrandsBack ? (i.callBacksObj.brandName = l.text(), i.callBacksObj.brandId = l.attr("data-brandid"), i.callBacksObj.spell = "", i.callBacksObj.carType = "", i.callBacksObj.carTypeId = "", i.callBacksObj.returnType = "brands") : 0 != s.find("dd.hover").length ? (i.callBacksObj.brandName = "", i.callBacksObj.brandId = "", i.callBacksObj.spell = s.find("dd.hover").attr("data-spell"), i.callBacksObj.carType = s.find("dd.hover").text(), i.callBacksObj.carTypeId = s.find("dd.hover").attr("data-id"), i.callBacksObj.returnType = "carType") : i.callBacksObj = {} : 0 != l.length && (i.callBacksObj.brandName = "", i.callBacksObj.brandId = "", i.callBacksObj.spell = l.attr("data-spell"), i.callBacksObj.carType = l.text(), i.callBacksObj.carTypeId = l.attr("data-id"), i.callBacksObj.returnType = "carType"), i.callBackFun()
                } else 8 == a.keyCode && (i.element.attr("data-id", ""), i.element.attr("data-brandid", ""), i.IsSearch = !0);
                0 != i.curOpts && (t.removeClass("hover").eq(i.curOpts - 1).addClass("hover"), t.eq(i.curOpts - 1).hasClass("sel-car-brand") && "" != e.trim(i.element.val()) ? (i.downMenuModel(t.eq(i.curOpts - 1).attr("data-brandid"), t.eq(i.curOpts - 1).text()), i.element.attr("data-brandid", t.eq(i.curOpts - 1).attr("data-brandid")), i.downMenuDom.css({
                    height: "290px",
                    width: "450px"
                }), i.downMenuRDom.show()) : (i.downMenuRDom.hide(), i.downMenuDom.css({
                    height: "auto",
                    width: i.opts.DownMenuWidth + "px"
                }))), i.inputBoxChange()
            }), i.downMenuDom.on("mouseover", ".sel-car-menu-left li,.sel-car-menu-right dd,.sel-car-menu-right .menu-right-title,.sel-car-menu-right dt", function (a) {
                a.preventDefault();
                var n = e(a.currentTarget);
                e(this).siblings().removeClass("hover").end().addClass("hover"), n.is(".sel-car-menu-left li") ? e(this).hasClass("sel-car-brand") ? (i.downMenuModel(e(this).attr("data-brandid"), e(this).text()), i.element.attr("data-brandid", e(this).attr("data-brandid")), i.downMenuDom.css({
                    height: "290px",
                    width: "450px"
                }), i.downMenuRDom.show()) : e(this).text() != i.opts.FailTip && (i.element.attr("data-id", e(this).attr("data-id")), i.element.attr("data-brandid", e(this).attr("data-brandid")), i.element.val(e(this).text()), i.downMenuRDom.hide(), i.downMenuDom.css({
                    height: "auto",
                    width: i.opts.DownMenuWidth + "px"
                })) : n.is(".sel-car-menu-right dd") ? (i.element.attr("data-id", e(this).attr("data-id")), i.element.attr("data-brandid", e(this).attr("data-brandid")), i.element.val(e(".sel-car-menu-left li.hover").text() + " " + e(this).text())) : n.is(".sel-car-menu-right dt") && i.opts.IsBrandsBack ? (i.element.attr("data-id", ""), i.element.attr("data-brandid", e(this).attr("data-id")), i.element.val(e(this).text())) : n.is(".sel-car-menu-right .menu-right-title") && i.opts.IsBrandsBack && (i.element.attr("data-id", ""), i.element.attr("data-brandid", i.downMenuDom.find(".sel-car-menu-left li.hover").attr("data-brandid")), i.element.val(i.downMenuDom.find(".sel-car-menu-left li.hover").text()))
            })) : "click" == i.opts.EventType ? i.element.on("click", function () {
                i.element.hasClass("up-arrow") ? (i.carTypeListDom.hide(), i.element.removeClass("up-arrow"), i.brandsListDom.hide()) : (e(".drop-layer:visible").hide(), e(".up-arrow").removeClass("up-arrow"), e(".upArrow-icon").removeClass("upArrow-icon").addClass("downArrow-icon"), i.element.addClass("up-arrow"), 1 == i.opts.DefaultLevel ? i.carCtrlBrands() : 2 == i.opts.DefaultLevel && (i.carTypeListDom.css({left: 0}).show(), i.carCtrlSerials()))
            }) : "hover" == i.opts.EventType && i.element.on("mouseover", function () {
                e(".drop-layer:visible").hide(), e(".up-arrow").removeClass("up-arrow"), e(".upArrow-icon").removeClass("upArrow-icon").addClass("downArrow-icon"), i.element.addClass("up-arrow"), 1 == i.opts.DefaultLevel ? i.carCtrlBrands() : 2 == i.opts.DefaultLevel && (i.carTypeListDom.css({left: 0}).show(), i.carCtrlSerials())
            }), i.brandsListDom.on("click", "#master-index_letters span a,#masterIndexList dd", function (a) {
                a.preventDefault();
                var n = e(a.currentTarget);
                if (n.is("#master-index_letters span a")) {
                    var t = "#master-indexletters_" + e(this).parent("span").attr("data-char"),
                        l = i.brandsNameDom.find("#masterIndexList"), s = e(t).position().top + l.scrollTop();
                    l.scrollTop(s)
                } else n.is("#masterIndexList dd") && (i.carTypeListDom.show(), i.brandsNameDom.find("a").removeClass("current"), e(this).find("a").addClass("current"), i.carCtrlSerials(e(this).find("a").attr("data-id"), e(this).find("a").attr("data-text"), e(this).find("a").attr("data-spell")))
            });
            var a = "";
            "hover" == i.opts.EventType ? a = "mouseover" : "click" == i.opts.EventType && (a = "click"), e(document).on(a, function (a) {
                var n = e(a.target);
                !n.is(i.downMenuDom) && n.parents(".sel-car-wrapper").length <= 0 && (i.downMenuDom.hide(), i.element.removeClass("up-arrow")), !n.is(i.carTypeListDom) && n.parents(".sel-car-wrapper").length <= 0 && !n.is(i.brandsListDom) && (i.carTypeListDom.hide(), i.brandsListDom.hide(), i.element.removeClass("up-arrow"))
            }), i.downMenuDom.on("click", ".sel-car-menu-left li,.sel-car-menu-right .menu-right-con dd,.sel-car-menu-right .menu-right-title,.sel-car-menu-right dt", function (a) {
                a.preventDefault();
                var n = e(a.currentTarget);
                n.is(".sel-car-menu-left li") ? e(this).text() != i.opts.FailTip && (e(this).hasClass("sel-car-brand") ? (delete i.callBacksObj.carType, delete i.callBacksObj.carTypeId, delete i.callBacksObj.spell, delete i.callBacksObj.categoryId, i.callBacksObj.brandName = e(this).text(), i.callBacksObj.brandId = e(this).attr("data-brandid"), i.callBacksObj.returnType = "brands") : (i.callBacksObj.brandName = "", i.callBacksObj.brandId = "", i.callBacksObj.spell = e(this).attr("data-spell"), i.callBacksObj.carType = e(this).text(), i.callBacksObj.carTypeId = e(this).attr("data-id"), i.callBacksObj.returnType = "carType"), i.opts.IsBrandsBack ? i.callBackFun() : e(this).hasClass("sel-car-brand") || i.callBackFun()) : n.is(".sel-car-menu-right .menu-right-con dd") ? (i.callBacksObj.brandName = i.downMenuDom.find(".sel-car-menu-left li.hover").text(), i.callBacksObj.brandId = i.downMenuDom.find(".sel-car-menu-left li.hover").attr("data-id"), i.callBacksObj.spell = e(this).attr("data-spell"), i.callBacksObj.carType = e(this).find("span").text(), i.callBacksObj.carTypeId = e(this).attr("data-id"), i.callBacksObj.returnType = "carType", i.callBackFun()) : n.is(".sel-car-menu-right .menu-right-title") && i.opts.IsBrandsBack ? (i.callBacksObj.brandName = i.downMenuDom.find(".sel-car-menu-left li.hover").text(), i.callBacksObj.brandId = i.downMenuDom.find(".sel-car-menu-left li.hover").attr("data-brandid"), i.callBacksObj.spell = i.downMenuDom.find(".sel-car-menu-left li.hover").attr("data-brandspell"), i.callBacksObj.carType = "", i.callBacksObj.carTypeId = "", i.callBacksObj.returnType = "brands", i.callBackFun()) : n.is(".sel-car-menu-right dt") && i.opts.IsBrandsBack && (i.callBacksObj.brandName = e(this).text(), i.callBacksObj.brandId = e(this).attr("data-id"), i.callBacksObj.categoryId = e(this).attr("data-categoryid"), i.callBacksObj.spell = i.downMenuDom.find(".sel-car-menu-left li.hover").attr("data-brandspell"), i.callBacksObj.carType = "", i.callBacksObj.carTypeId = "", i.callBacksObj.returnType = "brands", i.callBackFun())
            }), i.carTypeListDom.on("click", "#serialIndexList dd,h6", function (a) {
                a.preventDefault();
                var n = e(a.currentTarget), t = i.brandsNameDom.find("a.current");
                i.element.removeClass("up-arrow"), n.is("#serialIndexList dd") ? (delete i.callBacksObj.categoryId, i.callBacksObj.brandId = t.attr("data-id"), i.callBacksObj.brandName = e(this).parents("dl").find("dt i").text(), i.callBacksObj.spell = e(this).find("a").attr("data-spell"), i.callBacksObj.carType = e(this).find("span").text(), i.callBacksObj.carTypeId = e(this).find("a").attr("data-id"), i.callBacksObj.returnType = "carType", i.callBackFun()) : n.is("h6") && i.opts.IsBrandsBack && (delete i.callBacksObj.categoryId, delete i.callBacksObj.carType, delete i.callBacksObj.carTypeId, i.callBacksObj.spell = e(this).find("span").attr("data-spell"), i.callBacksObj.brandId = e(this).find("span").attr("data-id"), i.callBacksObj.brandName = e(this).find("span").attr("data-text"), i.callBacksObj.returnType = "brands", i.callBackFun())
            }), i.emptyDom.on("click", function () {
                i.curOpts = 0, i.element.removeClass("up-arrow"), i.element.attr("data-brandid", ""), i.element.attr("data-id", ""), i.element.val(""), i.downMenuDom.hide(), i.carTypeListDom.hide(), i.brandsListDom.hide(), i.emptyDom.hide(), i.textVal = "", delete i.callBacksObj.carType, delete i.callBacksObj.carTypeId, delete i.callBacksObj.brandId, delete i.callBacksObj.brandName, delete i.callBacksObj.spell, delete i.callBacksObj.categoryId, i.callBacksObj.returnType = "clear", i.callBackFun()
            })
        }, inputBoxChange: function () {
            var i = this;
            i.emptyDom.show();
            var a = e.trim(i.element.val());
            i.textVal != i.trim(a, "g") ? (i.textVal = i.trim(a, "g"), "" != i.textVal && i.opts.IsDownMenu && (i.carTypeListDom.hide(), i.brandsListDom.hide(), i.IsSearch && (i.curOpts = 0, i.downMenu()))) : "" == i.textVal ? (i.IsSearch = !0, i.downMenuDom.hide(), i.element.attr("data-id", ""), i.carCtrlBrands()) : i.element.attr("data-id", "")
        }, downMenuModel: function (i, a) {
            function n(n) {
                if (n.Result) {
                    var t = n.Data;
                    if (0 != t.length) {
                        s.downMenuRDom.find("sel-car-loading").hide();
                        var l = "<dl>";
                        e.each(t, function (a, n) {
                            var t = "";
                            s.opts.IsBrandsBack && (t = "cursor: pointer;"), l += '<dt data-id="' + i + '" data-categoryid="' + n.CategoryId + '" style="' + t + '">' + n.CategoryName + "</dt>", e.each(n.CategoryCollection, function (e, i) {
                                if (s.opts.SerialImgShow) {
                                    var a = "";
                                    a = 0 != e || s.opts.IsBrandsBack ? "" : ' class="hover"', l += '<dd data-id="' + i.Id + '" data-spell="' + i.Spell + '" ' + a + '><img src="' + i.ImgUrl + '"/><span>' + i.Name + "</span></dd>"
                                } else l += '<dd data-id="' + i.Id + '" data-spell="' + i.Spell + '"><span>' + i.Name + "</span></dd>"
                            })
                        }), l += "</dl>", s.downMenuRDom.find(".menu-right-con").html(l);
                        var r = "";
                        r = s.opts.IsBrandsBack ? a : a + " " + s.downMenuRDom.find("dd").eq(0).text(), s.element.attr("data-id", s.downMenuRDom.find("dd").eq(0).attr("data-id")), s.element.val(r)
                    } else s.IsSearch = !0, s.downMenuDom.css({width: "450px"}), s.downMenuDom.find(".sel-car-menu-left").css({height: "290px"}), s.downMenuRDom.height(s.element.parent(".sel-car-wrapper").find(".sel-car-menu-left").height()), s.downMenuRDom.html('<div class="no-models">此品牌下没有车型(T_T)</div>')
                }
            }

            function t(e) {
                s.sendAjax({url: l, dataType: s.opts.SerialsType}, n, t)
            }

            var l, s = this;
            s.downMenuRDom.find(".menu-right-con").html('<div class="sel-car-loading"></div>'), l = s.opts.OnlyOnSale ? s.loadSerialsUrl + i : s.loadSerialsUrl + i + "&onlyOnSale=false", s.sendAjax({
                url: l,
                dataType: s.opts.SerialsType
            }, n, t)
        }, carCtrlBrands: function () {
            function i(e) {
                n.sendAjax({url: _url, dataType: n.opts.BrandsType}, a, i)
            }

            function a(i) {
                n.brandsListDom.find(".sel-car-loading").hide();
                var a = "", t = "";
                if (i.Result) {
                    n.hasloadBrands = !0;
                    var l = i.Data;
                    e.each(l, function (i, n) {
                        a += '<span data-char="' + n.CategoryName + '"><a href="javascript:void(0);">' + n.CategoryName + "</a></span>", t += '<dl id="master-indexletters_' + n.CategoryName + '">', e.each(n.CategoryCollection, function (e, i) {
                            t += '<dd><a href="javascript:void(0);" data-id="' + i.Id + '" data-text="' + i.Name + '" data-spell="' + i.Spell + '"><img src="' + i.ImgUrl + '">' + n.CategoryName + " " + i.Name + "</a></dd>"
                        }), t += "</dl>"
                    }), n.letterNavDom.html(a), n.brandsNameDom.find("#masterIndexList").html(t)
                }
            }

            var n = this;
            n.brandsListDom.show(), n.hasloadBrands || n.sendAjax({
                url: n.loadBrandsUrl,
                dataType: n.opts.BrandsType
            }, a, i)
        }, trim: function (e, i) {
            var a;
            return a = e.replace(/(^\s+)|(\s+$)/g, ""), "g" == i.toLowerCase() && (a = a.replace(/\s/g, "")), a
        }, carCtrlSerials: function (i, a, n) {
            function t(t) {
                var l = "";
                s.opts.IsBrandsBack && (l = "cursor: pointer;");
                var r = '<h6 style="' + l + '"><span data-id="' + i + '" data-text="' + a + '" data-spell="' + n + '">全部车型</span></h6><div class="models_detail_bg"><div class="models_detail" id="serialIndexList">';
                if (t.Result) {
                    var o = t.Data;
                    e.each(o, function (i, a) {
                        r += '<dl><dt data-spell="' + n + '" data-categoryId="' + a.CategoryId + '"><span>·&nbsp;&nbsp;<i>' + a.CategoryName + "</i></span></dt>", e.each(a.CategoryCollection, function (e, i) {
                            r += s.opts.SerialImgShow ? '<dd><a data-id="' + i.Id + '" data-spell="' + i.Spell + '" href="javascript:void(0);"><img src="' + i.ImgUrl + '"><span>' + i.Name + "<br/>" + i.Price + "</span></a></dd>" : '<dd><a style="padding-left:12px;" data-id="' + i.Id + '" data-spell="' + i.Spell + '" href="javascript:void(0);"><span>' + i.Name + "<br/>" + i.Price + "</span></a></dd>"
                        }), r += "</dl>"
                    })
                }
                r += "</div></div>", s.carTypeListDom.html(r)
            }

            function l(e) {
                s.sendAjax({url: r, dataType: "jsonp"}, t, l)
            }

            var s = this;
            s.carTypeListDom.html('<div class="sel-car-loading"></div>');
            var r = s.loadSerialsUrl;
            1 == s.opts.DefaultLevel ? r = s.opts.OnlyOnSale ? s.loadSerialsUrl + i : s.loadSerialsUrl + i + "&onlyOnSale=false" : 2 == s.opts.DefaultLevel && (r = s.opts.OnlyOnSale ? s.loadSerialsUrl : s.loadSerialsUrl + "&onlyOnSale=false"), s.sendAjax({
                url: r,
                dataType: s.opts.SerialsType
            }, t, l)
        }, callBackFun: function () {
            var e = this;
            e.downMenuDom.hide(), e.carTypeListDom.hide(), e.brandsListDom.hide(), e.opts.CallBacks(e.callBacksObj)
        }
    }, e.fn.selCar = function (e) {
        new i(this, e);
        return this
    }
}(jQuery), function () {
    function e(arguments) {
        this.times = null, this.btn = $(arguments[0]), this.menu = $(arguments[1]), this.hover = arguments[2], this.ele = $(arguments[3]), this.init()
    }

    var i = window.Taoche || {};
    window.Taoche = i, e.prototype.init = function () {
        var e = this;
        this.btn.on("mouseover", function () {
            e.timeOver()
        }), this.btn.on("mouseout", function () {
            e.timeOut()
        }), this.menu.on("mouseover", function () {
            e.timeOver()
        }), this.menu.on("mouseout", function () {
            e.timeOut()
        })
    }, e.prototype.mouseOver = function () {
        this.ele.get(0) ? this.btn.children(0).addClass(this.hover) : this.btn.addClass(this.hover), this.menu.show()
    }, e.prototype.mouseOut = function () {
        this.ele.get(0) ? this.btn.children(0).removeClass(this.hover) : this.btn.removeClass(this.hover), this.menu.hide()
    }, e.prototype.timeOut = function () {
        var e = this;
        clearTimeout(this.times), this.times = setTimeout(function () {
            e.mouseOut()
        }, 100)
    }, e.prototype.timeOver = function () {
        var e = this;
        clearTimeout(this.times), this.times = setTimeout(function () {
            e.mouseOver()
        })
    }, i.NavigationBar = {
        isErshoucheWeb: !1, checkIsErshoucheWeb: function () {
            var e = this, i = ",home,ershouche,buycar,pinggu,sellcar,bangmai,jinrong,qiugou,zhihuan,dealer,huati,news,",
                a = $("#hidMenuFocus").val() || "";
            i.indexOf("," + a.toLowerCase() + ",") > -1 && (e.isErshoucheWeb = !0)
        }, initLogin: function () {
            var e = location.href.toLowerCase();
            if (e.indexOf("/login") > -1 || e.indexOf("login/bindaccount") > -1) {
                if (e.indexOf("?returnurl=") > -1) {
                    var a = i.getQuery("returnurl", e);
                    return void $("#tc_top_myNickName").removeAttr("onclick").attr("href", "https://home.taoche.com/login/?returnurl=" + encodeURIComponent(a))
                }
                e = "https://" + i.domain.taochePC, $("#tc_top_myNickName").removeAttr("onclick").attr("href", "https://home.taoche.com/login/?returnurl=" + encodeURIComponent(e))
            }
            i.afterCheckLogin(function () {
                i.isLogined && ($("#tc_top_myNickName").removeAttr("onclick").attr("href", "https://home.taoche.com/").html(i.loginUserShowName), $("#tc_top_loginout").size() > 0 ? $("#tc_top_loginout").attr("href", "https://" + i.domain.taochePCHome + "/user/logout?returnurl=" + encodeURIComponent(location.href)) : $("#tc_top_myTaocheList").append('<a href="https://' + i.domain.taochePCHome + "/user/logout?returnurl=" + encodeURIComponent(location.href) + '" rel="nofollow" id="tc_top_loginout">退出</a>'))
            })
        }, initCity: function () {
            i.afterLocation(function () {
                $("#tc_top_currentCityName").html(i.currentCityName + "<em></em>"), $("#tc_top_liMenuErshouche a:first").attr("href", "//" + i.currentCitySpell + "." + i.mainDomain + "/all/")
            })
        }, initTopMenu: function () {
            $("#tc_top_liMyTaoche").mouseenter(function () {
                $("#tc_top_myTaoche").addClass("hover"), $("#tc_top_myTaocheList").addClass("show")
            }).mouseleave(function () {
                $("#tc_top_myTaoche").removeClass("hover"), $("#tc_top_myTaocheList").removeClass("show")
            }), $("#tc_top_liMyDealer").mouseenter(function () {
                $("#tc_top_myDealer").addClass("hover"), $("#tc_top_myDealerList").addClass("show")
            }).mouseleave(function () {
                $("#tc_top_myDealer").removeClass("hover"), $("#tc_top_myDealerList").removeClass("show")
            }), $("#tc_top_liAppDownload").mouseenter(function () {
                $("#tc_top_appDownload").addClass("hover"), $("#tc_top_appDownloadList").addClass("show")
            }).mouseleave(function () {
                $("#tc_top_appDownload").removeClass("hover"), $("#tc_top_appDownloadList").removeClass("show")
            })
        }, initMenu: function () {
            var e = $("#hidMenuFocus").val() || "", a = $("#ul_menu li[data-menu]"), n = !1;
            a.each(function () {
                var i = $(this), a = i.attr("data-menu");
                a && e.indexOf(a) >= 0 && (i.addClass("current"), n = !0)
            }), n || (location.host.toLowerCase() == i.domain.newsPC ? $('#ul_menu li[data-menu="ershouche"]').addClass("current") : a.eq(0).addClass("current")), e.indexOf("ershouche") >= 0 && $("#tc_search_ershoucheTab").click()
        }, appendErShoucheCityList: function () {
            var e = $("#divCityListForSEO");
            if (1 == e.size()) {
                var i = e.html();
                e.remove(), $(".nav_menu").after(i)
            }
            $("#tc_top_closeCityList").click(function () {
                $("#tc_top_divCityList").addClass("hide")
            })
        }, initCitySelect: function () {
            var e = this;
            e.isErshoucheWeb && e.appendErShoucheCityList();
            var a;
            $("#tc_top_divCurrentCityName").mouseenter(function () {
                clearTimeout(a), a = setTimeout(function () {
                    $("#tc_top_divCurrentCityName").addClass("city-hover"), $("#tc_top_divCityList").removeClass("hide")
                }, 100);
                var n = i.currentCitySpell.toLowerCase(), t = (i.currentCityName, n.toUpperCase().substr(0, 1)),
                    l = i.currentCityId;
                if ("www" == n) return void $(".header-city-hot dd.header-city-hot-text>a:first").addClass("currcity");
                $('.header-city-hot dd.header-city-hot-text>a[href*="' + n + '"]:last').addClass("currcity"), $(".header-city-province-tit a").removeClass("current"), $('.header-city-province-tit a[data-code="' + t + '"]').addClass("current"), $("#tc_top_divCurrentCityName").addClass("city-hover"), $("#tc_top_divCityList").removeClass("hide");
                var s = e.isErshoucheWeb ? $('.header-city-province-mian>ul>li a[href*="' + n + '"]:last') : $('.header-city-province-mian>ul>li a[attr-cityid="' + l + '"]:last'),
                    r = $(".header-city-province-mian"), s = s ? s : $(".header-city-province-mian>ul>li a:first");
                tp1 = s.offset().top, tp2 = r.offset().top, s.addClass("currcity"), r.scrollTop(tp1 - tp2 + r.scrollTop() - 10)
            }).mouseleave(function () {
                clearTimeout(a), a = setTimeout(function () {
                    $("#tc_top_divCurrentCityName").removeClass("city-hover"), $("#tc_top_divCityList").addClass("hide")
                }, 100)
            }), $("#tc_top_divCityList").mouseenter(function () {
                clearTimeout(a), a = setTimeout(function () {
                    $("#tc_top_divCurrentCityName").addClass("city-hover")
                }, 100)
            }).mouseleave(function () {
                clearTimeout(a), a = setTimeout(function () {
                    $("#tc_top_divCurrentCityName").removeClass("city-hover"), $("#tc_top_divCityList").addClass("hide")
                }, 100)
            }), $(".header-city-province-tit a").click(function () {
                $(".header-city-province-tit a").removeClass("current"), $(this).addClass("current");
                var e = $("#iCity_" + $(this).attr("data-code")), i = $(".header-city-province-mian"),
                    a = e.offset().top, n = i.offset().top;
                i.scrollTop(a - n + i.scrollTop() - 10)
            })
        }, initYixinSearchBox: function () {
            var e = this;
            window.NewCarSearchURL = "//" + i.domain.xinchePC + "/";
            var a = i.getQuery("source", location.href.toLowerCase());
            $("#tc_search_txtNewcar").selCar({
                IsBrandsBack: !0, CallBacks: function (e) {
                    var i = "javascript:void(0);", n = "", t = "", l = $("#tc_search_txtNewcar");
                    if ("carType" == e.returnType) {
                        var s = e.carType, r = (e.carTypeId, e.brandName), o = e.spell;
                        t = r + " " + s, i = window.NewCarSearchURL + Taoche.currentCitySpell + "/" + o + "/", i = a && "" != a ? i + "?source=" + a : i, l.val(t).attr("data-spell", o), window.open(i), n = "_blank"
                    } else "brands" == e.returnType ? (t = e.brandName, e.spell && (i = e.categoryId ? window.NewCarSearchURL + Taoche.currentCitySpell + "/list/" : window.NewCarSearchURL + Taoche.currentCitySpell + "/budget-b" + e.brandId + "/", i = a && "" != a ? i + "?source=" + a : i, l.val(t).attr("data-spell", e.spell), window.open(i), n = "_blank")) : "clear" == e.returnType && (i = "javascript:void(0);", n = "_self");
                    $("#tc_search_btnNewcar").attr({href: i, target: n})
                }
            }), $("#tc_search_ershoucheTab").click(function () {
                $(this).addClass("current"), $("#tc_search_newcarTab").removeClass("current"), $(".sel-car-wrapper").hide(), $("#tc_search_txtErshouche").show(), $("#tc_search_btnErshouche").show(), $("#tc_search_btnNewcar").hide()
            }), $("#tc_search_newcarTab").click(function () {
                $(this).addClass("current"), $("#tc_search_ershoucheTab").removeClass("current"), $("#tc_search_txtErshouche").hide(), $("#tc_search_txtNewcar,.sel-car-wrapper").show(), $("#tc_search_btnErshouche").hide(), $("#tc_search_btnNewcar").show()
            }), $("#tc_search_btnNewcar").click(function () {
                var i = $("#tc_search_txtNewcar").val(), a = $(".sel-car-menu-left li[data-spell]");
                if (e.isErshoucheWeb) {
                    if ("" == i.replace(" ", "") || "请输入心仪的品牌或车型" == i) return void(location.href = window.NewCarSearchURL + Taoche.currentCitySpell + "/list/?source=606");
                    if (a && a.size() > 0 && a.eq(0).attr("data-spell").length > 0) return void(location.href = window.NewCarSearchURL + Taoche.currentCitySpell + "/" + a.eq(0).attr("data-spell") + "/?source=606")
                } else {
                    if ("" == i.replace(" ", "") || "请输入心仪的品牌或车型" == i) return;
                    if (a && a.size() > 0 && a.eq(0).attr("data-spell").length > 0) return void window.open(window.NewCarSearchURL + Taoche.currentCitySpell + "/" + a.eq(0).attr("data-spell") + "/?source=606")
                }
            })
        }, init: function () {
            this.checkIsErshoucheWeb(), this.initLogin(), this.initCity(), this.initTopMenu();
            var e = this;
            $(function () {
                setTimeout(function () {
                    e.initCitySelect(), e.initYixinSearchBox(), e.initMenu()
                }, 300)
            })
        }
    }, i.NavigationBar.init(), i.htmlEncode = function (e) {
        return $("<div/>").text(e).html()
    }, i.htmlDecode = function (e) {
        return $("<div/>").html(e).text()
    }, i.SearchBox = {
        options: {
            inputEle: "",
            showListEle: "",
            clickSearchEles: "",
            tipFormat: "搜“{0}”试试",
            tipWords: ["5万 捷达", "10万以内", "5-8万 凯越", "SUV", "15万 SUV", "德国车", "自动挡 宝来"],
            initTip: !0,
            blurTip: !0,
            requestDelay: 250
        },
        keywordCacheKey: "t_search",
        timer: -9,
        ajaxUrl: "//search.taoche.com/InputHandler.ashx",
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
                    i = this.options.tipFormat.replace("{0}", this.options.tipWords[e]);
                this.currVal = i, this.getInput().attr("placeholder", i)
            }
        },
        getSearchWord: function () {
            var e = this.getInput().val(), i = this.options.tipFormat.split("{0}"),
                a = this.getInput().attr("placeholder");
            e = e || a;
            for (var n = 0; n < i.length; n++) e = e.replace(i[n], "");
            return e = e.replace(/</g, " ").replace(/>/g, " ").replace(/&/g, " ").replace(/"/g, " ").replace(/\'/g, " ")
        },
        ajaxCallBack: function (e) {
            if (CarInfo) {
                if (this.items = CarInfo, 0 == this.items.length) return void this.closeList();
                var i = [], a = [], n = "";
                i[0] = a[0] = "<ul>";
                for (var t = 0; t < this.items.length; t++) {
                    var l = this.items[t];
                    "5" == l.KeyType ? i.push(['<li><a target="_blank" data-index="', t, '" href="', l.url, '"><span>查看详情</span><i>', l.name, "</i></a></li>"].join("")) : "4" == l.KeyType ? a.push(['<li><a target="_blank" data-index="', t, '" href="', l.url, '"><span><strong>赞助商链接</strong></span><i style="font-weight:bold">', l.name, "</i></a></li>"].join("")) : l.url && "" != l.url ? a.push(['<li><a target="_blank" data-index="', t, '" href="', l.url, '"><span>约 ', l.pricecount, " 条车源</span><i>", l.name, "</i></a></li>"].join("")) : a.push(['<li><a data-index="', t, '" href="javascript:;"><span>约 ', l.pricecount, " 条车源</span><i>", l.name, "</i></a></li>"].join(""))
                }
                i.length > 1 && (i.push("</ul>"), n += i.join("")), a.length > 1 && (a.push("</ul>"), n += a.join(""));
                var s = this;
                this.getShowList().html(n).show().find("a").click(function () {
                    s.currIndex = $(this).attr("data-index"), s.getInput().val(s.items[s.currIndex].name), s.confirm("javascript:;" == $(this).attr("href"))
                })
            }
        },
        search: function () {
            CarInfo = [], this.items = [], this.currIndex = -1;
            var e = this, a = this.getSearchWord();
            $.getScript(this.ajaxUrl + "?pfrom=pc&kw=" + encodeURIComponent(a) + "&target=" + encodeURI("//" + i.domain.taochePC) + "&spell=" + i.currentCitySpell, function (i) {
                e.ajaxCallBack(i)
            })
        },
        change: function () {
            var e = this.getInput().val();
            if (e != this.currVal) {
                if (this.currVal = e, this.timer != -9 && clearTimeout(this.timer), "" == e) return void this.showSearchHistory();
                var i = this;
                this.timer = setTimeout(function () {
                    i.search()
                }, this.options.requestDelay)
            }
        },
        confirm: function (e) {
            this.currVal = this.getInput().val();
            var a = this.currIndex < 0 ? {name: this.getSearchWord()} : this.items[this.currIndex];
            this.saveSearchWord(a.name), this.closeList(), e !== !1 && (a.url && "" != a.url ? window.open(a.url) : "" == a.name ? window.open("//www.taoche.com/all/") : window.open("//search.taoche.com/SearchHandler.ashx?pfrom=pc&kw=" + encodeURI(a.name) + "&areaid=" + i.currentCityId + "&areatype=1&target=" + encodeURI("//" + i.domain.taochePC) + "&spell=" + i.currentCitySpell))
        },
        moveTo: function (e) {
            var i = this.getShowList().find("li");
            e < 0 || e >= this.items.length ? (i.removeClass("current"), this.getInput().val(this.currVal), this.getInput().val(this.currVal)) : (i.removeClass("current").eq(e).addClass("current"), this.getInput().val(this.items[e].name), this.getInput().val(this.items[e].name))
        },
        saveSearchWord: function (e) {
            var a = i.Storage.getCookie(this.keywordCacheKey);
            if (null == a || "" == a) return void i.Storage.setCookie(this.keywordCacheKey, e, 144, "/", i.domain.cookie);
            for (var n = a.split("|"), t = [e], l = 0; l < n.length && !(n[l] != e && "" != n[l] && (t.push(n[l]), t.length >= 10)); l++) ;
            i.Storage.setCookie(this.keywordCacheKey, t.join("|"), 144, "/", i.domain.cookie)
        },
        showSearchHistory: function () {
            var e = i.Storage.getCookie(this.keywordCacheKey);
            if (null != e && "" != e) {
                var a = e.split("|");
                if (0 != a.length) {
                    this.items = [], this.currIndex = -1;
                    for (var n = ['<div class="search-record">您曾搜索过</div><ul>'], t = 0, l = 0; l < a.length; l++) "" != a[l] && a[l] == i.htmlEncode(a[l]) && (this.items[this.items.length] = {
                        name: a[l],
                        KeyType: 3
                    }, n.push(['<li><a data-index="', t, '" href="javascript:;"><i>', a[l], "</i></a></li>"].join("")), t++);
                    n.push("</ul>");
                    var s = this;
                    this.getShowList().html(n.join("")).show().find("a").click(function () {
                        s.currIndex = $(this).attr("data-index"), s.getInput().val(s.items[s.currIndex].name).addClass("search-on"), s.confirm()
                    })
                }
            }
        },
        _init: function () {
            this.getShowList().hide(), this.options.initTip && this.tip();
            var e = this;
            this.getInput().attr("autocomplete", "off").focus(function () {
                $(this).hasClass("search-on") || (e.currVal = "", $(this).val("").addClass("search-on"), e.showSearchHistory())
            }).blur(function () {
                "" == $(this).val() && (e.options.blurTip ? e.tip() : $(this).removeClass("search-on"))
            }).keydown(function (i) {
                switch (i.which) {
                    case 38:
                        return e.currIndex = e.currIndex <= -1 ? e.items.length - 1 : e.currIndex - 1, e.moveTo(e.currIndex), !1;
                    case 40:
                        e.currIndex = e.currIndex >= e.items.length - 1 ? -1 : e.currIndex + 1, e.moveTo(e.currIndex);
                        break;
                    case 13:
                        e.confirm()
                }
            }).keyup(function (i) {
                switch (i.which) {
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
            }), "" != this.options.clickSearchEles && $(this.options.clickSearchEles).click(function (i) {
                return e.confirm()
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
            var e = "placeholder" in document.createElement("input");
            i.SearchBox.render({
                inputEle: "#tc_search_txtErshouche",
                showListEle: "#divList",
                clickSearchEles: "#tc_search_btnErshouche",
                initTip: !0,
                blurTip: !e
            })
        }, 0)
    })
}();