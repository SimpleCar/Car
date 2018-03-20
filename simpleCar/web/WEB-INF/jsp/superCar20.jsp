<%--
  Created by IntelliJ IDEA.
  User: Schoki
  Date: 2018/3/13
  Time: 16:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<<!DOCTYPE html>
<!-- saved from url=(0045)#guangzhou/budget-c6l13/ -->
<html>
<head>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
    <style>
        .carlist ul li {
            display: inline-block;
        }
    </style>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script src="../../statics/js/push.js"></script>
    <script type="text/javascript" async="" src="../../statics/js/bc.js"></script>
    <script src="../../statics/js/hm.js"></script>
    <script type="text/javascript" async="" src="../../statics/js/dc.js"></script>
    <script src="../../statics/js/hm(1).js"></script>
    <script type="text/javascript" src="../../statics/js/irt.js"></script>

    <title>【淘车新车】广州新车贷款-淘车</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">
    <meta property="wb:webmaster" content="14dba3c44bd1a68e">
    <meta property="qc:admins" content="23517766776411351663757">
    <meta name="keywords" content="淘车新车,广州,新车贷款,淘车">
    <meta name="description" content="淘车新车按预算购车，根据用户的首付、月供、车价等信息，为用户推荐广州合适的车型和贷款额度。">
    <meta name="renderer" content="webkit">
    <meta name="applicable-device" content="pc">
    <meta http-equiv="Cache-Control" content="no-transform">
    <meta http-equiv="Cache-Control" content="no-siteapp">
    <meta name="location" content="province=广东;city=广州;coord=113.30765,23.120049">
    <link rel="dns-prefetch" href="#">
    <link rel="dns-prefetch" href="#">
    <link rel="dns-prefetch" href="#">
    <link rel="dns-prefetch" href="#">
    <link rel="dns-prefetch" href="#">
    <link rel="icon" type="image/x-icon" href="http://cache.taoche.com/favicon.ico">


    <link rel="canonical" href="#guangzhou/budget-c6l13/">
    <link rel="alternate" media="only screen and(max-width: 640px)"
          href="http://xin.m.taoche.com/guangzhou/budget-c6l13/">
    <meta name="mobile-agent" content="format=html5; url=#">


    <link href="../../statics/css/common.css" rel="stylesheet" type="text/css">

    <script>
        //导航url
        var TAOCHEURL = "#" + "/";//首页
        var XINCHEURL = "#" + "/";//新车
        var FENQIURL = "#" + "/";//分期
        var KAIZOUBAURL = "#" + "/";//开走吧
        var USERCENTERURL = "#" + "/";//用户中心
        var SQURL = "//#";//申请
        var TIYANDIANURL = "#" + "/";//体验店
        var ZHIHUANURL = "#" + "/";//置换
        var BANGMAIURL = "#" + "/";//帮买
        var MAICHEURL = "#" + "/";//卖车
        var PINGGUURL = "#";//评估
        var ERSHOUCHEURL = "#";//二手车
        var RESURL = "//img1.yixinfinance.com/taoche" + "/"; //静态资源
        var FENQITOPICURL = "#" + "/topic/"; //分期专题页

        //api url
        var APIURL = "#" + "/";
        var ADVISERAPIURL = "#" + "/";

        //city
        var city = {
            "CityId": 501,
            "RegionId": 440100,
            "CityName": "广州",
            "CitySpell": "guangzhou",
            "LocateResultType": 0,
            "ClientIp": null,
            "ProvinceId": 5,
            "ProvinceName": "广东",
            "Longitude": "113.30765",
            "Latitude": "23.120049"
        };

        var BusinessLine = 550;

        //广告城市变量
        window.BitautoCityForAd = "广州";
    </script>

    <!--[if lt IE 9]>
    <script src="../../statics/js/shim.dll.js?v=201802281711"></script>
    <![endif lt IE 9]-->

    <script src="../../statics/js/index.js"></script>
    <link href="../../statics/css/budget.css" rel="stylesheet" type="text/css">
    <script>
        var total = 2;
        var pagesize = 48;
        var city = {
            "CityId": 501,
            "RegionId": 440100,
            "CityName": "广州",
            "CitySpell": "guangzhou",
            "LocateResultType": 0,
            "ClientIp": null,
            "ProvinceId": 5,
            "ProvinceName": "广东",
            "Longitude": "113.30765",
            "Latitude": "23.120049"
        };
        var condition = 'c6l13';
        var getBudgetListUrl = "/budget/GegBudgetList";//参数：condition,cityId,pageIndex，pageSize
        var getFlashSaleCar = "/flashsale/getflashsalecar?cityid=501" + "&terminal=0";

        //埋点标识
        var BEACON_INIT = {
            data: {
                pid: 23
            }
        }
    </script>

</head>
<body>
<!--二手车公共头判断tab定位-->
<input type="hidden" id="hidMenuFocus" value="xinche">

<jsp:include page="top2.jsp"></jsp:include>


<h1 class="hide">广州车贷</h1>

<div class="breadcrumbs">
    <nav>
        <a href="#">淘车</a>
        <i> &gt; </i>
        <a href="#guangzhou/" title="广州新车">广州新车</a>

    </nav>
</div>
<div class="new-car-li-container">
    <div class="new-car-li-left">
        <nav class="li-category">
            <div>全部新车</div>
            <a target="_self" href="#">开走吧</a>
        </nav>

        <div class="filter-item clearfix">
            <div class="filter-text">您已选择：</div>
            <div class="filter-tags">
                <a class="tag" href="#guangzhou/budget-l13/">
                    车价：20-30万 <i class="close-btn"></i>
                </a>
                <a class="tag" href="#guangzhou/budget-c6/">
                    级别：跑车 <i class="close-btn"></i>
                </a>
            </div>
            <a class="filter-clear" href="#guangzhou/list/">
                清除全部
            </a>
        </div>

        <!-- 筛选条件-->
        <section class="budget-filter">
            <!-- 品牌条件 -->
            <div class="condition-wrap last special">
                <dl>
                    <dt>品牌：</dt>
                    <dd><a href="#guangzhou/budget-b7c6l13/" data-key="b7">丰田</a></dd>
                    <dd><a href="#guangzhou/budget-b111c6l13/" data-key="b111">斯巴鲁</a></dd>
                </dl>
            </div>
            <!--常用条件-->
            <div class="condition-wrap special">
                <dl>
                    <dt>车价：</dt>
                    <dd><a href="#" data-key="c6" class="active">20-30万</a>
                    </dd>
                    <dd><a href="${pageContext.request.contextPath}/carController/superCar30" data-key="c7">30-45万</a>
                    </dd>
                    <dd><a href="${pageContext.request.contextPath}/carController/superCar45" data-key="c8">45万以上</a>
                    </dd>

                    <dd class="custom-wrapper">
                        <span class="tit">自定义<i class="icon_down"></i></span>
                        <form class="custom">
                            <font>车价</font>
                            <label><input type="text" data-key="a" value="" maxlength="4" name="min">万</label>
                            <span>-</span>
                            <label><input type="text" data-key="s" value="" maxlength="4" name="max">万</label>
                            <button type="submit" data-url="/guangzhou/budget-l13{placeholder}/">确定</button>
                            <div class="error-tip"></div>
                        </form>
                    </dd>
                </dl>
            </div>
            <div class="condition-wrap">
                <dl>
                    <dt>级别：</dt>
                    <dd><a href="#guangzhou/budget-c6l0/" data-key="l0">微型车</a></dd>
                    <dd><a href="#guangzhou/budget-c6l1/" data-key="l1">小型车</a></dd>
                    <dd><a href="#guangzhou/budget-c6l2/" data-key="l2">紧凑型车</a></dd>
                    <dd><a href="#guangzhou/budget-c6l3/" data-key="l3">中型车</a></dd>
                    <dd><a href="#guangzhou/budget-c6l4/" data-key="l4">中大型车</a></dd>
                    <dd><a href="#guangzhou/budget-c6l6/" data-key="l6">MPV</a></dd>
                    <dd><a href="#guangzhou/budget-c6l7/" data-key="l7">SUV</a></dd>
                    <dd><a href="#guangzhou/budget-c6l13/" data-key="l13" class="active">跑车</a>
                    </dd>
                    <dd><a href="#guangzhou/budget-c6l15/" data-key="l15">皮卡</a></dd>

                </dl>
            </div>
            <div class="condition-wrap">
                <dl>
                    <dt>首付：</dt>
                    <dd><a href="#guangzhou/budget-c6d0l13/" data-key="d0">0首付</a></dd>
                    <dd><a href="#guangzhou/budget-c6d1l13/" data-key="d1">3万以下</a></dd>
                    <dd><a href="#guangzhou/budget-c6d2l13/" data-key="d2">3-5万</a></dd>
                    <dd><a href="#guangzhou/budget-c6d3l13/" data-key="d3">5-8万</a></dd>
                    <dd><a href="#guangzhou/budget-c6d4l13/" data-key="d4">8-10万</a></dd>
                    <dd><a href="#guangzhou/budget-c6d5l13/" data-key="d5">10-15万</a></dd>
                    <dd><a href="#guangzhou/budget-c6d6l13/" data-key="d6">15-20万</a></dd>

                </dl>
            </div>
            <div class="condition-wrap special">
                <dl>
                    <dt>月供：</dt>
                    <dd><a href="#guangzhou/budget-c6l13m1/" data-key="m1">1000-3000元</a></dd>
                    <dd><a href="#guangzhou/budget-c6l13m2/" data-key="m2">3000-5000元</a></dd>
                    <dd><a href="#guangzhou/budget-c6l13m3/" data-key="m3">5000-8000元</a></dd>
                    <dd><a href="#guangzhou/budget-c6l13m4/" data-key="m4">8000-10000元</a></dd>
                    <dd><a href="#guangzhou/budget-c6l13m5/" data-key="m5">10000元以上</a></dd>

                    <dd class="custom-wrapper">
                        <span class="tit">自定义<i class="icon_down"></i></span>
                        <form class="custom">
                            <font>月供</font>
                            <label><input type="text" data-key="q" value="" maxlength="5" name="min">元</label>
                            <span>-</span>
                            <label><input type="text" data-key="w" value="" maxlength="5" name="max">元</label>
                            <button type="submit" data-url="/guangzhou/budget-c6l13{placeholder}/">确定</button>
                            <div class="error-tip"></div>
                        </form>
                    </dd>
                </dl>
            </div>
            <div class="condition-wrap special">
                <dl>
                    <dt>期限：</dt>
                    <dd><a href="#guangzhou/budget-c6l13p0/" data-key="p0">12期</a></dd>
                    <dd><a href="#guangzhou/budget-c6l13p1/" data-key="p1">24期</a></dd>
                    <dd><a href="#guangzhou/budget-c6l13p2/" data-key="p2">36期</a></dd>
                    <dd><a href="#guangzhou/budget-c6l13p3/" data-key="p3">48期</a></dd>
                    <dd><a href="#guangzhou/budget-c6l13p4/" data-key="p4">60期</a></dd>

                </dl>
            </div>
        </section>
        <!-- end of budget-filter -->
        <div class="sort-wrap" id="sort-wrap">
            <ul class="sort">
                <li><a href="#guangzhou/budget-c6l13x0/" class="active">默认排序</a></li>
                <li><a href="#guangzhou/budget-c6l13x1/" class="up">价格</a></li>
            </ul>


            <div class="count">
                为您筛选出

                <em>${count}条</em>车源

            </div>
        </div>
        <!-- end of sort-wrap -->


        <div class="carlist">

            <ul>
                <c:forEach var="car" items="${list}">
                    <li>
                        <div class="car-card">
                            <div class="photos">
                                <a href="#guangzhou/fengtiangt86/">
                                    <img src="${car.cimage}" alt="${car.cname}">
                                </a>
                            </div>
                            <div class="text">
                                <dl>
                                    <dt>
                                        <span class="name"><a href="${pageContext.request.contextPath}/carController/goCarInformation?cname=${car.cname}">${car.cname}</a></span>
                                        <span class="parameter">排量 2.0L | 油耗 7.5-8.2L</span>
                                    </dt>
                                    <dd>${car.cmin}-${car.cmax}</dd>
                                </dl>
                            </div>
                        </div>
                    </li>
                </c:forEach>
                <%-- <li>
                     <div class="car-card">
                         <div class="photos">
                             <a href="#guangzhou/sibalubrz/">
                                 <img src="./【淘车新车】广州新车贷款-淘车_files/1005247693_6.jpg" alt="斯巴鲁BRZ">
                             </a>
                         </div>
                         <div class="text">
                             <dl>
                                 <dt>
                                 <span class="name"><a
                                         href="#guangzhou/sibalubrz/">斯巴鲁BRZ</a></span>
                                     <span class="parameter">排量 2.0L | 油耗 7.5-8.2L</span>
                                 </dt>
                                 <dd>24.98-28.78万</dd>
                             </dl>
                         </div>
                     </div>
                 </li>--%>
            </ul>


        </div>

        <div class="list-loading" id="list-loading" style="display: none;">
            <div class="loading-icon"></div>
            正在努力加载中...
        </div>
        <div id="listPagination" class="list_pagination"><a href="javascript:void(0);" class="prev unclick">上一页</a><a
                href="javascript:void(0);" class="num active">1</a><a href="javascript:void(0);" class="next unclick">下一页</a>
        </div>
    </div>

    <div class="new-car-li-right">
        <ins class="ad-wrapper" id="div_99def019-cf5f-4993-a61e-4c8cd0e2346e" data-type="ad_play" data-adplay_ip=""
             data-adplay_areaname="" data-adplay_cityname="" data-adplay_brandid="" data-adplay_brandname=""
             data-adplay_brandtype="" data-adplay_blockcode="99def019-cf5f-4993-a61e-4c8cd0e2346e"
             style="display: none;" ssp-kl="1"></ins>
        <ins class="ad-wrapper" id="div_79429e94-daa2-472a-bacf-25ed9ed3ae63" data-type="ad_play" data-adplay_ip=""
             data-adplay_areaname="" data-adplay_cityname="" data-adplay_brandid="" data-adplay_brandname=""
             data-adplay_brandtype="" data-adplay_blockcode="79429e94-daa2-472a-bacf-25ed9ed3ae63"
             style="display: none;" ssp-kl="1"></ins>
        <ins class="ad-wrapper" id="div_310a4235-3bee-455a-aaf0-2465f94ce5cb" data-type="ad_play" data-adplay_ip=""
             data-adplay_areaname="" data-adplay_cityname="" data-adplay_brandid="" data-adplay_brandname=""
             data-adplay_brandtype="" data-adplay_blockcode="310a4235-3bee-455a-aaf0-2465f94ce5cb"
             style="display: none;" ssp-kl="1"></ins>
        <dl class="panic-buying-wrapper"
            style="position: static; bottom: auto; left: 0px; right: auto; top: auto; margin-left: 0px;">
            <dt>限时抢购</dt>
            <dd class="clearfix">
                <a target="_blank" href="#beijing/m127137/p134073/">
                    <header>
                        <div>8天8时25分</div>
                        剩160台
                    </header>
                    <footer>
                        <div class="panic-buying-left"><img src="../../statics/image/0358372166_3.jpg"></div>
                        <div class="panic-buying-right">
                            <h6>宝骏560</h6>
                            <span><b>1734元</b>/月*36期</span>
                            <i>利息折扣</i>
                        </div>
                    </footer>
                </a>
            </dd>
            <dd class="clearfix">
                <a target="_blank" href="#beijing/m120773/p134073/">
                    <header>
                        <div>8天17时52分</div>
                        剩136台
                    </header>
                    <footer>
                        <div class="panic-buying-left"><img src="../../statics/image/1018516799_3.jpg"></div>
                        <div class="panic-buying-right">
                            <h6>远景SUV</h6>
                            <span><b>1709元</b>/月*36期</span>
                            <i>20%首付起</i>
                        </div>
                    </footer>
                </a>
            </dd>
            <dd class="clearfix">
                <a target="_blank" href="#beijing/m121316/p141727/">
                    <header>
                        <div>13天8时25分</div>
                        剩174台
                    </header>
                    <footer>
                        <div class="panic-buying-left"><img src="../../statics/image/0540510419_3.jpg"></div>
                        <div class="panic-buying-right">
                            <h6>玛莎拉蒂Ghibli</h6>
                            <span><b>6262元</b>/月*12期</span>
                            <i>限时贴息</i>
                        </div>
                    </footer>
                </a>
            </dd>
        </dl>
    </div>
</div>


<!--整屏蒙层start-->
<div id="maskLayer"></div>
<!--整屏蒙层end-->
<!--右侧浮动start-->
<ul class="ui-sidebar">
    <li class="app">
        <a href="javascript:void(0)"><i></i></a>
    </li>
    <!-- 普通的打电话start -->
    <li class="feedback">
        <a href="javascript:void(0)"><i></i></a>
    </li>
    <li id="backTop" class="backtop gohover">
        <a href="javascript:void(0)"></a>
        <span>返回顶部</span>
    </li>
    <!-- 普通的打电话end -->
</ul>
<div class="right-nav-line"></div>
<!--右侧浮动end-->

<div id="FooterSEO">

    <dl class="footer-middle">
        <dt class="clrfix">
            <div class="cur">热门品牌</div>
            <div>热门车型</div>
            <div class="last-child">周边城市</div>
        </dt>
        <dd class="clrfix">
            <div class="clrfix">
                <a href="#guangzhou/budget-b13/" target="_blank">广州现代贷款</a>
                <a href="#guangzhou/budget-b30/" target="_blank">广州日产贷款</a>
                <a href="#guangzhou/budget-b48/" target="_blank">广州五菱贷款</a>
                <a href="#guangzhou/budget-b127/" target="_blank">广州别克贷款</a>
                <a href="#guangzhou/budget-b147/" target="_blank">广州广汽传祺贷款</a>
                <a href="#guangzhou/budget-b17/" target="_blank">广州福特贷款</a>
                <a href="#guangzhou/budget-b3/" target="_blank">广州宝马贷款</a>
                <a href="#guangzhou/budget-b2/" target="_blank">广州奔驰贷款</a>
                <a href="#guangzhou/budget-b15/" target="_blank">广州比亚迪贷款</a>
                <a href="#guangzhou/budget-b49/" target="_blank">广州雪佛兰贷款</a>
                <a href="#guangzhou/budget-b18/" target="_blank">广州马自达贷款</a>
                <a href="#guangzhou/budget-b28/" target="_blank">广州起亚贷款</a>
                <a href="#guangzhou/budget-b270/" target="_blank">广州WEY贷款</a>
                <a href="#guangzhou/budget-b78/" target="_blank">广州荣威贷款</a>
                <a href="#guangzhou/budget-b4/" target="_blank">广州Jeep贷款</a>
                <a href="#guangzhou/budget-b159/" target="_blank">广州长安欧尚贷款</a>
                <a href="#guangzhou/budget-b153/" target="_blank">广州猎豹贷款</a>
                <a href="#guangzhou/budget-b42/" target="_blank">广州奇瑞贷款</a>
                <a href="#guangzhou/budget-b10/" target="_blank">广州斯柯达贷款</a>
                <a href="#guangzhou/budget-b253/" target="_blank">广州东风风光贷款</a>
                <a href="#guangzhou/budget-b36/" target="_blank">广州陆风贷款</a>
                <a href="#guangzhou/budget-b156/" target="_blank">广州启辰贷款</a>
                <a href="#guangzhou/budget-b5/" target="_blank">广州标致贷款</a>
                <a href="#guangzhou/budget-b211/" target="_blank">广州北汽幻速贷款</a>
                <a href="#guangzhou/budget-b29/" target="_blank">广州东南贷款</a>
                <a href="#guangzhou/budget-b107/" target="_blank">广州凯迪拉克贷款</a>
                <a href="#guangzhou/budget-b35/" target="_blank">广州江淮贷款</a>
                <a href="#guangzhou/budget-b115/" target="_blank">广州东风风行贷款</a>
                <a href="#guangzhou/budget-b32/" target="_blank">广州海马贷款</a>
                <a href="#guangzhou/budget-b6/" target="_blank">广州雪铁龙贷款</a>
                <a href="#guangzhou/budget-b25/" target="_blank">广州三菱贷款</a>
            </div>
            <div class="hide clrfix">
                <a href="#guangzhou/baojun510/" target="_blank">广州宝骏510贷款</a>
                <a href="#guangzhou/hafuh6/" target="_blank">广州哈弗H6贷款</a>
                <a href="#guangzhou/siyucivic/" target="_blank">广州思域贷款</a>
                <a href="#guangzhou/baojun730/" target="_blank">广州宝骏730贷款</a>
                <a href="#guangzhou/zhongtait700/" target="_blank">广州众泰T700贷款</a>
                <a href="#guangzhou/changancs75/" target="_blank">广州长安CS75贷款</a>
                <a href="#guangzhou/yuanjingx3/" target="_blank">广州远景X3贷款</a>
                <a href="#guangzhou/baojun310wagon-5112/" target="_blank">广州宝骏310W贷款</a>
                <a href="#guangzhou/bentian2xw/" target="_blank">广州XR-V贷款</a>
                <a href="#guangzhou/jieda/" target="_blank">广州捷达贷款</a>
                <a href="#guangzhou/kaluola/" target="_blank">广州卡罗拉贷款</a>
                <a href="#guangzhou/wulinghongguangs/" target="_blank">广州五菱宏光S贷款</a>
                <a href="#guangzhou/dibadaiyage/" target="_blank">广州雅阁贷款</a>
                <a href="#guangzhou/dongfengbentiancrv/" target="_blank">广州CR-V贷款</a>
                <a href="#guangzhou/jilinl3/" target="_blank">广州博越贷款</a>
                <a href="#guangzhou/chuanqigs4/" target="_blank">广州传祺GS4贷款</a>
                <a href="#guangzhou/yinglangsanxiang/" target="_blank">广州英朗贷款</a>
                <a href="#guangzhou/quanxinaodia4l/" target="_blank">广州奥迪A4L贷款</a>
                <a href="#guangzhou/baojun310/" target="_blank">广州宝骏310贷款</a>
                <a href="#guangzhou/langyi/" target="_blank">广州朗逸贷款</a>
                <a href="#guangzhou/changancs55/" target="_blank">广州长安CS55贷款</a>
                <a href="#guangzhou/xuanyi/" target="_blank">广州轩逸贷款</a>
                <a href="#guangzhou/jilidihaogs/" target="_blank">广州帝豪GS贷款</a>
                <a href="#guangzhou/verna/" target="_blank">广州瑞纳贷款</a>
                <a href="#guangzhou/boluo/" target="_blank">广州POLO贷款</a>
                <a href="#guangzhou/hanlanda/" target="_blank">广州汉兰达贷款</a>
                <a href="#guangzhou/baojun560/" target="_blank">广州宝骏560贷款</a>
                <a href="#guangzhou/w01/" target="_blank">广州VV7贷款</a>
                <a href="#guangzhou/maiteng/" target="_blank">广州迈腾贷款</a>
                <a href="#guangzhou/suteng/" target="_blank">广州速腾贷款</a>
            </div>
            <div class="hide clrfix">
                <a href="#foshan/" target="_top">佛山车贷</a>
                <a href="#dongguan/" target="_top">东莞车贷</a>
                <a href="#zhongshan/" target="_top">中山车贷</a>
                <a href="#jiangmen/" target="_top">江门车贷</a>
                <a href="#qingyuan/" target="_top">清远车贷</a>
                <a href="#zhaoqing/" target="_top">肇庆车贷</a>
                <a href="#shenzhen/" target="_top">深圳车贷</a>
                <a href="#zhuhai/" target="_top">珠海车贷</a>
                <a href="#huizhou/" target="_top">惠州车贷</a>
                <a href="#yunfu/" target="_top">云浮车贷</a>
                <a href="#heyuan/" target="_top">河源车贷</a>
                <a href="#shaoguan/" target="_top">韶关车贷</a>
                <a href="#yangjiang/" target="_top">阳江车贷</a>
                <a href="#wuzhou/" target="_top">梧州车贷</a>
                <a href="#shanwei/" target="_top">汕尾车贷</a>
                <a href="#hezhou/" target="_top">贺州车贷</a>
                <a href="#maoming/" target="_top">茂名车贷</a>
                <a href="#chenzhou/" target="_top">郴州车贷</a>
                <a href="#meizhou/" target="_top">梅州车贷</a>
                <a href="#jieyang/" target="_top">揭阳车贷</a>
            </div>
        </dd>
    </dl>

</div>

<!-- 页尾 start-->
<p class="ft-copy"><span>经营许可证编号：京ICP备15006372号-5&nbsp;&nbsp;公安备案号码：京公网安备&nbsp;11010802020005号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CopyRight&nbsp;©&nbsp;2015-2018 taoche.com版权所有&nbsp;北京易鑫信息科技有限公司</span><img
        class="ft-rc3" src="../../statics/image/adv-group.png" alt="广告"></p>
<!-- 页尾 end-->

<script src="../../statics/js/common.js"></script>
<script src="../../statics/js/react.dll.js"></script>

<!-- 2018 Taoche PC改版新车和二手车公共头部所需JS引用 -->
<script src="../../statics/js/taoche_pc_header_common.js"></script>


<script src="../../statics/js/budget.js"></script>


<!--艾瑞统计-->
<script src="../../statics/js/iwt-min.js"></script>
<script>
    (function (G, D, s, c, p) {
        c = {
            UA: "UA-taoche-000001",
            NO_FLS: 0,
            WITH_REF: 1,
            URL: '//st1.taoche.cn/tongji/iwtstatictis/iwt-min.js'
        };
        G._iwt ? G._iwt.track(c, p) : (G._iwtTQ = G._iwtTQ || []).push([c, p]), !G._iwtLoading && lo();

        function lo(t) {
            G._iwtLoading = 1;
            s = D.createElement("script");
            s.src = c.URL;
            t = D.getElementsByTagName("script");
            t = t[t.length - 1];
            t.parentNode.insertBefore(s, t);
        }
    })(this, document);
</script>

<!-- 广告代码 -->
<script src="../../statics/js/senseNew.js"></script>
<script src="../../statics/js/getAdDataByDiv.ashx"></script>

<!--百度统计PC-->
<script>
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b43ce35f868b496d8c3af5108a539019";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
<!--webtrendsPC-->
<script type="text/javascript" src="../../statics/js/dcs_ucar.js"></script>
<!--大数据-->
<script type="text/javascript">
    (function () {
        var dc = document.createElement("script");
        dc.type = "text/javascript";
        dc.async = true;
        dc.src = ("https:" == document.location.protocol ? "https://" : "http://") + "js.ctags.cn/dc.js?163"; //此ID为系统生成的网站唯一标识
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(dc, s);
    })();
</script>
<!-- 百度统计pc端 -->
<script>
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = window.location.host.indexOf("etaoche.cn") >= 0 ? "https://hm.baidu.com/hm.js?f68148618e51c0e86681df69a3d0d08d" : "https://hm.baidu.com/hm.js?db7dedc48a653d8087cb460082e491b4";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>

<!-- 易鑫统计基础代码 -->
<script>
    (function () {
        var bc = document.createElement('script');
        bc.type = 'text/javascript';
        bc.async = true;
        bc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dt.taoche.com/bc.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(bc, s);
    })();
</script>

<!--seo,自动推送代码-->
<script>
    (function () {
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
            bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
        }
        else {
            bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    })();
</script>


</body>
</html>