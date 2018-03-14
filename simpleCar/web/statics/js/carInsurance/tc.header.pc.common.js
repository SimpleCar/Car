/* Taoche对象扩展通用头部导航栏和搜索处理，此模块与通用头部html代码及样式关联，仅适用于匹配的位置
 * 依赖脚本：jquery.js, tc.ip.js, tc.url.js tc.domain.js tc.user.js tc.storage.js
 * by：yuhf */
; (function () {
    var tc = window.Taoche || {};
    window.Taoche = tc;

    function SetToggleMenu() {
        return new TopToggleMenu(arguments);
    }
    function TopToggleMenu(arguments) {
        this.times = null;
        this.btn = $(arguments[0]);
        this.menu = $(arguments[1]);
        this.hover = arguments[2];
        this.ele = $(arguments[3]);

        this.init();
    }
    TopToggleMenu.prototype.init = function () {
        var that = this;
        this.btn.on('mouseover', function () {
            that.timeOver();
        });
        this.btn.on('mouseout', function () {
            that.timeOut();
        });
        this.menu.on('mouseover', function () {
            that.timeOver();
        });
        this.menu.on('mouseout', function () {
            that.timeOut();
        });
    };
    TopToggleMenu.prototype.mouseOver = function () {
        if (!this.ele.get(0)) {
            this.btn.addClass(this.hover);
        } else {
            this.btn.children(0).addClass(this.hover);
        }
        this.menu.show();
    };
    TopToggleMenu.prototype.mouseOut = function () {
        if (!this.ele.get(0)) {
            this.btn.removeClass(this.hover);
        } else {
            this.btn.children(0).removeClass(this.hover);
        }
        this.menu.hide();
    };
    TopToggleMenu.prototype.timeOut = function () {
        var that = this;
        clearTimeout(this.times);
        this.times = setTimeout(function () {
            that.mouseOut();
        }, 100);
    };
    TopToggleMenu.prototype.timeOver = function () {
        var that = this;
        clearTimeout(this.times);
        this.times = setTimeout(function () {
            that.mouseOver();
        });
    };
    //头部导航通栏处理模块
    tc.NavigationBar = {
        //是否是二手车站点
        isErshoucheWeb: false,
        //判断是否是二手车站点
        checkIsErshoucheWeb: function () {
            var obj = this;
            var ershoucheMenuArray = ',home,ershouche,buycar,pinggu,sellcar,bangmai,jinrong,qiugou,zhihuan,dealer,huati,news,';
            var currentMenu = $('#hidMenuFocus').val() || '';
            if (ershoucheMenuArray.indexOf(',' + currentMenu.toLowerCase() + ',') > -1) {
                obj.isErshoucheWeb = true;
            }
        },
        //登录信息模块初始化
        initLogin: function () {
            var currentUrl = location.href.toLowerCase();
            if (currentUrl.indexOf('/login') > -1 || currentUrl.indexOf('login/bindaccount') > -1) {
                if (currentUrl.indexOf('?returnurl=') > -1) {
                    var returnUrl = tc.getQuery('returnurl',currentUrl);
                    $('#tc_top_myNickName').removeAttr('onclick').attr('href', "https://home.taoche.com/login/?returnurl=" + encodeURIComponent(returnUrl));
                    return;
                }
                currentUrl = 'https://' + tc.domain.taochePC;
                $('#tc_top_myNickName').removeAttr('onclick').attr('href', "https://home.taoche.com/login/?returnurl=" + encodeURIComponent(currentUrl));
            }
            tc.afterCheckLogin(function () {
                if (!tc.isLogined) return;
                $('#tc_top_myNickName').removeAttr('onclick').attr('href', 'https://home.taoche.com/').html(tc.loginUserShowName);
                if ($('#tc_top_loginout').size() > 0) {
                    $('#tc_top_loginout').attr('href', 'https://' + tc.domain.taochePCHome + '/user/logout?returnurl=' + encodeURIComponent(location.href));
                } else {
                    $('#tc_top_myTaocheList').append('<a href="https://' + tc.domain.taochePCHome + '/user/logout?returnurl=' + encodeURIComponent(location.href) + '" rel="nofollow" id="tc_top_loginout">退出</a>');
                }
            });
        },
        //初始化定位城市
        initCity: function () {
            //此处必须依赖ip定向执行完毕才执行
            tc.afterLocation(function () {
                //头部展示城市
                $('#tc_top_currentCityName').html(tc.currentCityName + '<em></em>');
                //修改二手车菜单连接为当前城市列表页
                $('#tc_top_liMenuErshouche a:first').attr('href', '//' + tc.currentCitySpell + '.' + tc.mainDomain + '/all/');
            });
        },
        //初始化顶部导航
        initTopMenu: function () {
            //我的淘车
            $('#tc_top_liMyTaoche').mouseenter(function () {
                $('#tc_top_myTaoche').addClass('hover');
                $('#tc_top_myTaocheList').addClass('show');
            }).mouseleave(function () {
                $('#tc_top_myTaoche').removeClass('hover');
                $('#tc_top_myTaocheList').removeClass('show');
            });
            //我是商家
            $('#tc_top_liMyDealer').mouseenter(function () {
                $('#tc_top_myDealer').addClass('hover');
                $('#tc_top_myDealerList').addClass('show');
            }).mouseleave(function () {
                $('#tc_top_myDealer').removeClass('hover');
                $('#tc_top_myDealerList').removeClass('show');
            });
            //App下载
            $('#tc_top_liAppDownload').mouseenter(function () {
                $('#tc_top_appDownload').addClass('hover');
                $('#tc_top_appDownloadList').addClass('show');
            }).mouseleave(function () {
                $('#tc_top_appDownload').removeClass('hover');
                $('#tc_top_appDownloadList').removeClass('show');
            });
        },
        //导航菜单模块
        initMenu: function () {
            //设置导航通栏菜单当前焦点
            //通过页面内隐藏域 hidMenuFocus 指定当前哪个频道处于焦点状态，如果不包含此隐藏域，则焦点为首页
            var val = $('#hidMenuFocus').val() || '', lis = $('#ul_menu li[data-menu]'), isFocus = false;
            lis.each(function () {
                var t = $(this), a = t.attr('data-menu');
                if (a && val.indexOf(a) >= 0) {
                    t.addClass('current');
                    isFocus = true;
                }
            });
            if (!isFocus) {
                //无有效的隐藏域指定焦点，此处对news.taoche.com特殊处理(新闻页)，焦点定位到人车生活频道
                if (location.host.toLowerCase() == tc.domain.newsPC) {
                    $('#ul_menu li[data-menu="ershouche"]').addClass('current');
                } else {
                    lis.eq(0).addClass('current');
                }
            }
            //如果定位到二手车菜单，搜索框选中二手车
            if (val.indexOf('ershouche') >= 0) {
                $('#tc_search_ershoucheTab').click();
            }
        },
        //二手车-头部城市选择弹层
        appendErShoucheCityList: function () {
            //如果是城市站列表页，且存在SEO优化区块，采用SEO城市弹层
            var seoBlock = $('#divCityListForSEO');
            if (seoBlock.size() == 1) {
                var seoBlockHtml = seoBlock.html();
                seoBlock.remove();
                $('.nav_menu').after(seoBlockHtml);
            }
            //城市弹层-关闭事件
            $('#tc_top_closeCityList').click(function () {
                $('#tc_top_divCityList').addClass('hide');
            });
        },
        //手动选择城市模块
        initCitySelect: function () {
            var obj = this;
            if (obj.isErshoucheWeb) {
                obj.appendErShoucheCityList();
            }

            var sTime;
            //新车或二手车
            //当前城市hover
            $('#tc_top_divCurrentCityName').mouseenter(function () {
                clearTimeout(sTime);
                sTime = setTimeout(function () {
                    $('#tc_top_divCurrentCityName').addClass('city-hover');
                    $('#tc_top_divCityList').removeClass('hide');
                }, 100);

                var spell = tc.currentCitySpell.toLowerCase(),
                    cityName = tc.currentCityName,
                    firstchar = spell.toUpperCase().substr(0, 1),
                    cityId = tc.currentCityId;
                //quanguo修改为www
                if (spell == "www") {
                    $('.header-city-hot dd.header-city-hot-text>a:first').addClass('currcity');
                    return;
                }
                //选中当前热门城市
                $('.header-city-hot dd.header-city-hot-text>a[href*="' + spell + '"]:last').addClass('currcity');
                //清空选中
                $('.header-city-province-tit a').removeClass('current');
                //选中当前城市字母
                $('.header-city-province-tit a[data-code="' + firstchar + '"]').addClass('current');

                //展示弹层，目的：弹层不展示不能自动滚动到当前城市区域
                $('#tc_top_divCurrentCityName').addClass('city-hover');
                $('#tc_top_divCityList').removeClass('hide');
                var $seltext = obj.isErshoucheWeb ? $('.header-city-province-mian>ul>li a[href*="' + spell + '"]:last') : $('.header-city-province-mian>ul>li a[attr-cityid="' + cityId + '"]:last'),
                    $selcontainer = $('.header-city-province-mian'),
                    $seltext = !!$seltext ? $seltext : $('.header-city-province-mian>ul>li a:first');
                tp1 = $seltext.offset().top,
                    tp2 = $selcontainer.offset().top;
                //选中当前城市
                $seltext.addClass('currcity');
                $selcontainer.scrollTop(tp1 - tp2 + $selcontainer.scrollTop() - 10);
            }).mouseleave(function () {
                clearTimeout(sTime);
                sTime = setTimeout(function () {
                    $('#tc_top_divCurrentCityName').removeClass('city-hover');
                    $('#tc_top_divCityList').addClass('hide');
                }, 100);
            });
            //城市弹层hover
            $('#tc_top_divCityList').mouseenter(function () {
                clearTimeout(sTime);
                sTime = setTimeout(function () {
                    $('#tc_top_divCurrentCityName').addClass('city-hover');
                }, 100);

            }).mouseleave(function () {
                clearTimeout(sTime);
                sTime = setTimeout(function () {
                    $('#tc_top_divCurrentCityName').removeClass('city-hover');
                    $('#tc_top_divCityList').addClass('hide');
                }, 100);
            });
            //城市省份字母点击事件
            $('.header-city-province-tit a').click(function () {
                $('.header-city-province-tit a').removeClass('current');
                $(this).addClass('current');
                var a = $('#iCity_' + $(this).attr('data-code')), b = $('.header-city-province-mian'), tp1 = a.offset().top, tp2 = b.offset().top;
                b.scrollTop(tp1 - tp2 + b.scrollTop() - 10);
            });
        },
        //初始化易鑫的搜索框
        initYixinSearchBox: function () {
            var obj = this;
            window.NewCarSearchURL = "//" + tc.domain.xinchePC + "/";//分期
            $("#tc_search_txtNewcar").selCar({
                IsBrandsBack: true,
                CallBacks: function selctCarcallback(obj) {
                    var hrefStr = "javascript:void(0);",
                        targetStr = "",
                        inputText = "",
                        $inputDom = $('#tc_search_txtNewcar');
                    if (obj.returnType == "carType") {
                        var carName = obj.carType,
                            carId = obj.carTypeId,
                            brandName = obj.brandName,
                            spell = obj.spell;
                        inputText = brandName + " " + carName;
                        hrefStr = window.NewCarSearchURL + Taoche.currentCitySpell + "/" + spell + "/?source=606";
                        $inputDom.val(inputText).attr("data-spell", spell);
                        window.open(hrefStr);
                        targetStr = "_blank";
                    } else if (obj.returnType == "brands") {
                        inputText = obj.brandName;
                        if (obj.spell) {
                            if (obj.categoryId) {
                                hrefStr = window.NewCarSearchURL + Taoche.currentCitySpell + "/list/?source=987";
                            } else {
                                hrefStr = window.NewCarSearchURL + Taoche.currentCitySpell + "/budget-b" + obj.brandId + "/?source=987";
                            }
                            $inputDom.val(inputText).attr("data-spell", obj.spell);
                            window.open(hrefStr);
                            targetStr = "_blank";
                        }
                    } else if (obj.returnType == "clear") {//清空
                        hrefStr = "javascript:void(0);"
                        targetStr = "_self";
                    }
                    $("#tc_search_btnNewcar").attr({ "href": hrefStr, "target": targetStr });
                }
            });
            $('#tc_search_ershoucheTab').click(function () {
                $(this).addClass('current');
                $('#tc_search_newcarTab').removeClass('current');
                $('.sel-car-wrapper').hide();
                $('#tc_search_txtErshouche').show();
                $('#tc_search_btnErshouche').show();
                $('#tc_search_btnNewcar').hide();
            });
            $('#tc_search_newcarTab').click(function () {
                $(this).addClass('current');
                $('#tc_search_ershoucheTab').removeClass('current');
                $('#tc_search_txtErshouche').hide();
                $('#tc_search_txtNewcar,.sel-car-wrapper').show();
                $('#tc_search_btnErshouche').hide();
                $('#tc_search_btnNewcar').show();
            });
            $('#tc_search_btnNewcar').click(function () {
                var searchText = $('#tc_search_txtNewcar').val();
                var $searchDropLi = $('.sel-car-menu-left li[data-spell]');
                if (obj.isErshoucheWeb) {
                    if (searchText.replace(' ', '') == '' || searchText == '请输入心仪的品牌或车型') {
                        location.href = window.NewCarSearchURL + Taoche.currentCitySpell + "/list/?source=606";
                        return;
                    }
                    if (!!$searchDropLi && $searchDropLi.size() > 0 && $searchDropLi.eq(0).attr('data-spell').length > 0) {
                        location.href = window.NewCarSearchURL + Taoche.currentCitySpell + "/" + $searchDropLi.eq(0).attr('data-spell') + "/?source=606";
                        return;
                    }
                }
                else {
                    if (searchText.replace(' ', '') == '' || searchText == '请输入心仪的品牌或车型') {
                        return;
                    }
                    if (!!$searchDropLi && $searchDropLi.size() > 0 && $searchDropLi.eq(0).attr('data-spell').length > 0) {
                        window.open(window.NewCarSearchURL + Taoche.currentCitySpell + "/" + $searchDropLi.eq(0).attr('data-spell') + "/?source=606");
                        return;
                    }
                }

            });
        },
        //初始化
        init: function () {
            this.checkIsErshoucheWeb();
            this.initLogin();
            this.initCity();
            this.initTopMenu();
            var that = this;
            $(function () {
                setTimeout(function () {
                    that.initCitySelect();
                    that.initYixinSearchBox();
                    that.initMenu();
                }, 300);
            });
        }
    };
    //立即执行
    tc.NavigationBar.init();


    ///*****二手车搜索框 START******///
    //Html转码方法
    tc.htmlEncode = function (str) {
        return $('<div/>').text(str).html();
    };
    //Html解码方法
    tc.htmlDecode = function (str) {
        return $('<div/>').html(str).text();
    };

    //搜索框插件
    tc.SearchBox = {
        //默认的配置选项，可通过初始化参数重写
        options: {
            inputEle: '', //输入文本框的jquery选择器，只能匹配一个元素
            showListEle: '', //用于展示下拉列表的元素的jquery选择器，只能匹配一个元素
            clickSearchEles: '', //在点击时可触发搜索的元素的jquery选择器，可以匹配多个元素
            tipFormat: '搜“{0}”试试', //提示文案格式，可包含 {0} 占位符表示具体提示词
            tipWords: ["5万 捷达", "10万以内", "5-8万 凯越", "SUV", "15万 SUV", "德国车", "自动挡 宝来"], //初始随机提示词列表
            initTip: true, //初始化是否加载随机提示词，默认是
            blurTip: true,//输入框失去焦点时是否加载随机提示词，默认是
            requestDelay: 250//当输入发生更改后延迟多久进行数据请求(毫秒)
        },
        //记录搜索历史的本地存储(localStorage或cookie)的名称，值为每次搜索词以|分隔的字符串，最多记录最近10个，最新的记录在最前面
        keywordCacheKey: "t_search",
        //延迟请求的延迟计时器
        timer: -9,
        //进行搜索请求的接口地址，此接口返回的是js，内容是名称为 CarInfo 的数组
        ajaxUrl: '//search.taoche.com/InputHandler.ashx',
        //下拉框数据源，可能是本地存储的搜索记录或发起请求的返回结果
        items: [],
        //当前选择项的索引
        currIndex: -1,
        //用于记录输入控件内的值，每当此值发生改变时触发search 
        currVal: '',
        //获取当前输入框对象(JQuery对象)
        getInput: function () { return $(this.options.inputEle); },
        //获取当前下拉框对象(JQuery对象)
        getShowList: function () { return $(this.options.showListEle); },
        //关闭下拉框列表
        closeList: function () {
            this.items = [];
            this.currIndex = -1;
            this.getShowList().hide();
        },
        //随机显示提示词
        tip: function () {
            if (this.getInput().val() != '') return;
            var i = parseInt(Math.random() * this.options.tipWords.length),
                word = this.options.tipFormat.replace('{0}', this.options.tipWords[i]);
            this.currVal = word;
            //this.getInput().val(word).removeClass('search-on');
            this.getInput().attr('placeholder', word);
        },
        //获取当前搜索框内的实际搜索词，对于随机提示词会过滤掉提示字返回真实搜索词，加入xss过滤
        getSearchWord: function () {
            var kw = this.getInput().val(),
                arr = this.options.tipFormat.split('{0}'),
                tipKw = this.getInput().attr('placeholder');
            kw = kw || tipKw;
            for (var i = 0; i < arr.length; i++) { kw = kw.replace(arr[i], ''); }
            //此处进行搜索词的xss过滤，如果输入非法字符则将其替换为空格
            kw = kw.replace(/</g, ' ').replace(/>/g, ' ').replace(/&/g, ' ').replace(/"/g, ' ').replace(/\'/g, ' ');
            return kw;
        },
        //异步搜索请求到数据后的回调函数
        ajaxCallBack: function (res) {
            if (CarInfo) { this.items = CarInfo; } else { return; }
            if (this.items.length == 0) { this.closeList(); return; } //无结果
            //返回的结果中，如果某个对象包含url属性，则选中时直接跳转到此url，否则使用 name 属性的值作为关键词跳到搜索链接
            var dealerHtml = [], carHtml = [], html = '';
            dealerHtml[0] = carHtml[0] = '<ul>';
            for (var i = 0; i < this.items.length; i++) {
                var m = this.items[i];
                if (m.KeyType == '5') {//经销商
                    dealerHtml.push(['<li><a target="_blank" data-index="', i, '" href="', m.url, '"><span>查看详情</span><i>', m.name, '</i></a></li>'].join(''));
                } else if (m.KeyType == '4') {//赞助商广告，需要加粗展示
                    carHtml.push(['<li><a target="_blank" data-index="', i, '" href="', m.url, '"><span><strong>赞助商链接</strong></span><i style="font-weight:bold">', m.name, '</i></a></li>'].join(''));
                } else {//车源
                    if (m.url && m.url != '') {//有url
                        carHtml.push(['<li><a target="_blank" data-index="', i, '" href="', m.url, '"><span>约 ', m.pricecount, ' 条车源</span><i>', m.name, '</i></a></li>'].join(''));
                    } else {//无url
                        carHtml.push(['<li><a data-index="', i, '" href="javascript:;"><span>约 ', m.pricecount, ' 条车源</span><i>', m.name, '</i></a></li>'].join(''));
                    }
                }
            }
            if (dealerHtml.length > 1) {
                dealerHtml.push('</ul>');
                html += dealerHtml.join('');
            }
            if (carHtml.length > 1) {
                carHtml.push('</ul>');
                html += carHtml.join('');
            }
            var that = this;
            this.getShowList().html(html).show().find('a').click(function () {//下拉列表条目绑定鼠标点击选择事件
                that.currIndex = $(this).attr('data-index');
                that.getInput().val(that.items[that.currIndex].name);
                that.confirm($(this).attr('href') == 'javascript:;');
            });
        },
        //发起搜索请求
        search: function () {
            CarInfo = []; //清空上次请求返回结果
            this.items = [];
            this.currIndex = -1;
            var that = this, kw = this.getSearchWord();
            $.getScript(this.ajaxUrl + '?pfrom=pc&kw=' + encodeURIComponent(kw) + "&target=" + encodeURI('//' + tc.domain.taochePC) + "&spell=" + tc.currentCitySpell, function (data) {
                that.ajaxCallBack(data);
            });
        },
        //监听输入框的各个事件来触发此方法，只有当值改变的时候才触发search，加入了延迟搜索请求的逻辑
        change: function () {
            var v = this.getInput().val();
            if (v != this.currVal) {
                this.currVal = v;
                //此处延迟搜索请求，避免用户输入过程中持续请求造成的资源浪费
                if (this.timer != -9) { clearTimeout(this.timer); } //已有延迟请求计时器，不论其是否已执行都调用清除方法
                if (v == '') {//输入框值更改为空时，展示历史搜索记录
                    this.showSearchHistory(); return;
                }
                var that = this;
                this.timer = setTimeout(function () { that.search() }, this.options.requestDelay);
            }
        },
        //确定选中了某个选项，参数指定是否新开窗口打开对应链接，默认为是
        confirm: function (isOpen) {
            this.currVal = this.getInput().val();
            var item = this.currIndex < 0 ? { name: this.getSearchWord() } : this.items[this.currIndex];
            this.saveSearchWord(item.name);
            this.closeList();
            if (isOpen === false) { return; }//无需新开窗口
            if (item.url && item.url != '') {
                window.open(item.url);
            } else {
                if (item.name == '') {
                    window.open("//www.taoche.com/all/");
                } else {
                    window.open("//search.taoche.com/SearchHandler.ashx?pfrom=pc&kw=" + encodeURI(item.name) + "&areaid=" + tc.currentCityId + "&areatype=1&target=" + encodeURI('//' + tc.domain.taochePC) + "&spell=" + tc.currentCitySpell);
                }
            }

            //return false;
        },
        //在下拉列表中将选择焦点移动到指定索引对应的数据条目上
        moveTo: function (index) {
            var lis = this.getShowList().find('li');
            if (index < 0 || index >= this.items.length) {
                lis.removeClass('current');
                this.getInput().val(this.currVal);
                this.getInput().val(this.currVal);
            } else {
                lis.removeClass('current').eq(index).addClass('current');
                this.getInput().val(this.items[index].name);
                this.getInput().val(this.items[index].name);
            }
        },
        //记录当前确定选中了的搜索词(保存到本地存储中)
        saveSearchWord: function (word) {
            var vl = tc.Storage.getCookie(this.keywordCacheKey);
            if (vl == null || vl == "") {
                tc.Storage.setCookie(this.keywordCacheKey, word, 144, '/', tc.domain.cookie);
                return;
            }
            var arr = vl.split("|"), arr2 = [word];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] != word && arr[i] != "") {
                    arr2.push(arr[i]);
                    if (arr2.length >= 10) break;
                }
            }
            tc.Storage.setCookie(this.keywordCacheKey, arr2.join('|'), 144, '/', tc.domain.cookie);
        },
        //展示搜索历史(从本地存储中取数据源)
        showSearchHistory: function () {
            var vl = tc.Storage.getCookie(this.keywordCacheKey);
            if (vl == null || vl == "") return;
            var arr = vl.split("|");
            if (arr.length == 0) return;
            this.items = [];
            this.currIndex = -1;
            var ts = ['<div class="search-record">您曾搜索过</div><ul>'], index = 0;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] != "" && arr[i] == tc.htmlEncode(arr[i])) {//经过html编码的值仍与本身相同才视为合法
                    this.items[this.items.length] = { name: arr[i], KeyType: 3 };
                    ts.push(['<li><a data-index="', index, '" href="javascript:;"><i>', arr[i], '</i></a></li>'].join(''));
                    index++;
                }
            }
            ts.push('</ul>');
            var that = this;
            this.getShowList().html(ts.join('')).show().find('a').click(function () {//下拉列表条目绑定鼠标点击选择事件
                that.currIndex = $(this).attr('data-index');
                that.getInput().val(that.items[that.currIndex].name).addClass('search-on'); //历史记录点击选中时设置输入框已有搜索词的样式
                that.confirm();
            });
        },
        //初始化
        _init: function () {
            this.getShowList().hide();
            if (this.options.initTip)
                this.tip();
            var that = this;
            //输入框绑定各个事件
            this.getInput().attr('autocomplete', 'off').focus(function () {//获取焦点时：清空自动提示的文字，展示历史搜索记录，文本框已有用户输入时不做任何处理
                if (!$(this).hasClass('search-on')) {//不包含此样式表示是自动提示文字
                    that.currVal = '';
                    $(this).val('').addClass('search-on');
                    that.showSearchHistory();
                }
                //$(this).attr('placeholder', '请输入心仪的品牌或车型');
            }).blur(function () {//失去焦点时，文本框为空时展示随机提示
                if ($(this).val() == '') {//为空则设置默认提示
                    if (that.options.blurTip) {
                        that.tip();
                    } else {
                        $(this).removeClass('search-on');
                    }
                }
            }).keydown(function (event) {//keydown时文本框的值尚未改变，此时只监听上下键及回车键进行相关逻辑操作
                switch (event.which) {
                    case 38: //up
                        that.currIndex = that.currIndex <= -1 ? that.items.length - 1 : that.currIndex - 1;
                        that.moveTo(that.currIndex);
                        return false;//解决部分浏览器中(如chrome)上键光标回到输入框开头的问题
                    case 40: //down
                        that.currIndex = that.currIndex >= that.items.length - 1 ? -1 : that.currIndex + 1;
                        that.moveTo(that.currIndex);
                        break;
                    case 13: //enter
                        that.confirm();
                        break;
                    default: break;
                }
            }).keyup(function (event) {//keyup时文本框的值已发生更改，此时触发change事件
                switch (event.which) {
                    case 38: //up
                    case 40: //down
                    case 13: //enter
                        break;
                    default: that.change(); break;
                }
            }).bind('paste', function () {//绑定粘贴事件触发搜索请求
                setTimeout(function () { that.change(); }, 30);
            });
            //绑定可点击触发搜索的其他元素的点击事件
            if (this.options.clickSearchEles != '') {
                $(this.options.clickSearchEles).click(function (e) {
                    return that.confirm();
                });
            }
            //点击其他位置关闭下拉框，下拉框及输入框阻止冒泡
            $(document).click(function () { that.closeList(); });
            this.getInput().click(function (e) { e.stopPropagation(); });
            this.getShowList().click(function (e) { e.stopPropagation(); });
        },
        //渲染搜索控件
        render: function (opts) {
            this.options = $.extend(this.options, opts);
            this._init();
        }
    };

    //自动渲染搜索控件
    $(function () {
        //使用setTimeout将此模块放入异步线程执行，即将执行顺序排在主业务脚本之后
        setTimeout(function () {
            var isph = 'placeholder' in document.createElement('input');
            tc.SearchBox.render({ inputEle: '#tc_search_txtErshouche', showListEle: '#divList', clickSearchEles: '#tc_search_btnErshouche', initTip: true, blurTip: !isph });
        }, 0);
    });

    ///*****二手车搜索框 END******///
})();
