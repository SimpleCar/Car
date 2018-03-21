<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 0011 2018年03月11日
  Time: 下午 18:11:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title>订单列表</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">
    <meta property="wb:webmaster" content="14dba3c44bd1a68e">
    <meta property="qc:admins" content="23517766776411351663757">
    <meta name="keywords" content="新车分期，广州买车，分期买车，广州分期买车，车贷，易鑫车贷">
    <meta name="description"
          content="易鑫车贷（易车车贷）是易车、腾讯、京东三家公司合资成立的易鑫资本旗下的易鑫汽车金融平台，为用户提供全面的线上汽车金融平台，为金融客户提供有效的O2O运营服务。易鑫车贷（易车车贷）提供优质的广州新车分期服务、广州车主分期服务（汽车抵押分期）、广州车险、广州车款管理等汽车金融服务。">
    <meta name="renderer" content="webkit">
    <link rel="dns-prefetch" href="https://www.daikuan.com/">
    <link rel="dns-prefetch" href="https://img1.bitautoimg.com/">
    <link rel="dns-prefetch" href="https://img2.bitautoimg.com/">
    <link rel="dns-prefetch" href="https://img3.bitautoimg.com/">
    <link rel="dns-prefetch" href="https://img4.bitautoimg.com/">

    <link rel="icon" type="image/x-icon" href="https://cache.taoche.com/favicon.ico">

    <link href="../../statics/orderList/common.css" rel="stylesheet" type="text/css">

    <script src="../../statics/orderList/push.js"></script>
    <script type="text/javascript" async="" src="../../statics/orderList/bc.js"></script>
    <script src="../../statics/orderList/hm_002.js"></script>
    <script type="text/javascript" async="" src="../../statics/orderList/dc.js"></script>
    <script src="../../statics/orderList/hm.js"></script>
    <%-- <script src="../../statics/js/jquery-3.3.1.js"></script>--%>
    <script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
    <script>
        var locationCityId = 501;
        var xinche = 'http://kaizouba.taoche.com';
        var citySpell = 'guangzhou';
        var USERCENTERURL = 'https://home.taoche.com/';
        var APIURL = "//webapi.daikuan.com/";
        var RESURL = "//img1.yixinfinance.com/jinrong/newpcweb/";
        var CODE_GETTING_URL = '/Login/GetCode';
        var CODE_VALIDATING_URL = '/Login/CheckCode';
        var domainQueue = ["img1.bitautoimg.com", "img2.bitautoimg.com", "img3.bitautoimg.com", "img4.bitautoimg.com"];
        var BusinessLine = 550;
        var city = {
            "CityId": 501,
            "RegionId": 440100,
            "CityName": "广州",
            "CitySpell": "guangzhou",
            "SelectCityLevel": 0,
            "SelectCityName": null,
            "LocateResultType": 1
        };
        var getSlideVerifyApi = '/Login/initialsign'
        var CheckSign = '/Login/checksign'
    </script>


    <!--[if lt IE 9]>
    <script src="../../statics/orderList/shim.dll.js?v=201706081140?v=201801301002"></script>
    <![endif lt IE 9]-->


    <link rel="stylesheet" href="../../statics/orderList/index.css">


    <style>
        #tc_top_divCurrentCityName {
            display: none;
        }
    </style>
</head>
<body>
<!-- -----------------------头开始--------------------------- -->

<link rel="stylesheet" type="text/css" href="../../statics/orderList/2018_pc_headfoot_style-20180305102257-1506.css"
      media="all">
<jsp:include page="top2.jsp"/>
<!-- header -->
<input name="__RequestVerificationToken" id="__RequestVerificationToken"
       data-id="C-HiqXiK9rRE24d3B4M4pv5v6lY-DgoeQa8r1q8zBaEvC08kHqzt_KUFzF2Am_Y3RLp9V7cjnv6wvqdKGeYW8-ojdXQ1"
       value="C-HiqXiK9rRE24d3B4M4pv5v6lY-DgoeQa8r1q8zBaEvC08kHqzt_KUFzF2Am_Y3RLp9V7cjnv6wvqdKGeYW8-ojdXQ1"
       type="hidden">

<!--Content-->


<section class="pagewrap clrfix">

    <script>
        var arrImg = ['//img1.yixinfinance.com/taoche/common/images/car-001.png?v=201801301002',
            '//img2.yixinfinance.com/taoche/common//images/car-002.png?v=201801301002',
            '//img4.yixinfinance.com/taoche/common//images/car-003.png?v=201801301002',
            '//img1.yixinfinance.com/taoche/common/images/car-004.png?v=201801301002',
            '//img2.yixinfinance.com/taoche/common/images/car-005.png?v=201801301002',
            '//img4.yixinfinance.com/taoche/common/images/car-006.png?v=201801301002',
            '//img1.yixinfinance.com/taoche/common/images/car-007.png?v=201801301002',
            '//img2.yixinfinance.com/taoche/common/images/car-008.png?v=201801301002'];
    </script>

    <jsp:include page="orderLeft.jsp"/>

    <section class="maincont fl" id="userRight">
        <!-- nav start -->
        <div class="nav_area">
            <ul class="nav_list clrfix">
                <c:forEach var="ordel" items="${selectOrdel}">
                <c:forEach var="car" items="${ordel.cars}">
                <li>
                </li>
                <li class="active"><a href="javascript:void(0);">所有订单</a></li>

            </ul>
        </div>
        <!-- nav end -->
        <!-- order start -->
        <div class="order_area">

            <div class="order_thead">
                <div>商品信息</div>
                <div>订单金额</div>
                <div>交易状态</div>
                <div>操作</div>
            </div>
            <div class="order_item" id="order_id_item">
                <header class="order_item_head">
                    <ul>
                        <li><i class="tag_type">新车贷</i></li>
                        <li><span>${ordel.createdate}</span></li>
                        <li>订单号：<span>${ordel.orderNum}</span></li>
                        <li>下单人：<span>${ordel.uid}</span></li>
                        <li>购车城市：<span>广州市</span></li>
                    </ul>
                </header>
                <section class="order_item_body">
                    <ul>
                        <li>
                            <img src="${car.cimage}" class="order_item_img">
                            <h1 title="雪佛兰 科迈罗 2.0T RS">
                                    ${car.cname}
                            </h1>
                            <p title="鑫氧贷"><span>鑫氧贷</span></p>
                        </li>
                        <li>
                            <p>金额&nbsp;<span class="highlight">${car.cprice}</span></p>
                        </li>
                        <li stateid="789">
                            <p><span>${car.cState}</span></p>
                            <!--分期礼包start-->
                            <!--分期礼包end-->
                        </li>
                        <li>

                            <a target="_blank"
                               href="#"
                               class="btn-link"><span>订单详情</span></a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        </c:forEach>
        </c:forEach>
        <!-- order end -->
        </div>

    </section>


    <!-- pop start -->
    <section class="page_pop" id="popRefund">
        <div class="masklayer"></div>
        <article class="pop_area pop_refund">
            <a href="javascript:void(0);" class="pop_x"></a>
            <header class="pop_header">
                <img data-bind="attr:{'src': carImageUrl, 'alt': carName}">
                <div class="detail">
                    <h1 data-bind="text:carName"></h1>
                    <p>参考报价：<span class="highlight" data-bind="text:carPrice"></span></p>
                    <!--<p>订金：<span class="highlight" data-bind="text:orderAmount">¥199.00</span></p>-->
                </div>
            </header>
            <section class="pop_body clrfix">
                <ul class="form clrfix">
                    <li class="clrfix">
                    <span class="first-child"><img data-bind="attr:{'src': companyLogoUrl, 'alt': companyName}"
                                                   class="form_img"></span>
                        <span data-bind="text:packageCompanyName"></span>
                    </li>
                    <li class="clrfix">
                        <span class="first-child">退款金额</span>
                        <span><span class="highlight" data-bind="text:orderAmount"></span></span>
                    </li>
                    <li class="clrfix" style="position:relative">
                        <span class="first-child">退款原因</span>
                        <span class="first-child" id="refundRemark-lab"
                              style="position:absolute;left:0;top:48px;display:none;">退款说明</span>
                        <span class="select">
                        <div class="select-ctrl">
                            <div id="refundReason" data-id="-1" data-link="" data-disabled=""
                                 data-type=""><span>请选择</span></div>
                            <ul class="drop-layer" style="display: none;">
                                <li class="triangle-icon"></li>
                                <li data-id="1" data-link="" data-disabled="" data-type="" data-text="分期额度不够" class="">分期额度不够</li>
                                <li class="" data-category="" data-id="2" data-link="" data-disabled="" data-type="">分期利率过高</li>
                                <li class="" data-category="" data-id="3" data-link="" data-disabled="" data-type="">购车首付不够</li>
                                <li class="cur" data-category="" data-id="4" data-link="" data-disabled="" data-type="">我想买其他车</li>
                                <li class="" data-category="" data-id="5" data-link="" data-disabled="" data-type="">我不想买了</li>
                                <li class="" data-category="" data-id="0" data-link="" data-disabled=""
                                    data-type="">其他</li>
                            </ul>
                        </div>
                        <div class="remind1">请选择退款原因</div>
                        
                         <textarea name="refundRemark" id="refundRemark" cols="" rows="" class="textarea"></textarea>
                        
                       
                        <div class="remind2">请填写退款说明</div>
                    </span>
                    </li>
                </ul>
            </section>
            <footer class="pop_footer">
                <a href="javascript:void(0);" class="btn_large btn_dark" id="btnRefundOk"><span>确定</span></a>
                <a href="javascript:void(0);" class="btn_large btn_gray" id="btnRefundCancle"><span>取消</span></a>
            </footer>
        </article>
    </section>
    <!-- pop end -->

    <!--礼包弹层start-->
    <section id="popGifts" class="pop-up-layer">
        <header>
            <div class="close-layer"></div>
        </header>
        <dl data-bind="foreach:{data:loanPackageGifts,as:'gift'}"></dl>
        <a class="confirm-btn" href="javascript:void(0);">完成领取</a><br>
        稍后会有客服联系您
    </section>
    <!--礼包弹层end-->


    <!--Content-->
    <!--整屏蒙层start-->
    <div id="maskLayer"></div>
    <!--整屏蒙层end-->


    <script src="../../statics/orderList/common.js"></script>


    <script src="../../statics/orderList/index.js"></script>

    <!-- -----------------------尾开始--------------------------- -->
    <p class="ft-copy"><span>经营许可证编号：京ICP备15006372号-5&nbsp;&nbsp;公安备案号码：
京公网安备&nbsp;11010802020005
号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CopyRight&nbsp;©&nbsp;2015-2018
 taoche.com版权所有&nbsp;北京易鑫信息科技有限公司</span><img class="ft-rc3" src="../../statics/orderList/adv-group.png" alt="广告"></p>

    <!-- -----------------------尾结束--------------------------- -->
    <!-- 2018 Taoche PC改版新车和二手车公共头部所需JS引用 -->
    <script src="../../statics/orderList/taoche_pc_header_common.js"></script>
    <!-- 广告代码 -->
    <script src="../../statics/orderList/senseNew.js"></script>

    <!--百度统计PC-->
    <script>
        var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "../../statics/orderList/hm.js?b43ce35f868b496d8c3af5108a539019";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>
    <!--webtrendsPC-->
    <script type="text/javascript" src="../../statics/orderList/dcs_ucar.js"></script>
    <!--大数据-->
    <script type="text/javascript">
        (function () {
            var dc = document.createElement("script");
            dc.type = "text/javascript";
            dc.async = true;
            dc.src = "../../statics/orderList/dc.js?163"; //此ID为系统生成的网站唯一标识
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
            bc.src = '../../statics/orderListbc.js';
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
                bp.src = '../../statics/orderList/push.js';
            }
            else {
                bp.src = '../../statics/orderList/push.js';
            }
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(bp, s);
        })();


        //为点击的绑定事件
        $("a").on("click", "#jvaa", function () {
            alert("进入");
            var agio = 0.1;
            var carname = $("#changeCar").html();
            $.ajax({


                //路径
                url: "/carController/getAJAX",
                //是否异步，默认true
                async: true,
                //类型post
                type: "POST",
                data: {"carname": carname, "end": agio},
                success: function (data) {
                    window.location = "/orderController/goto"
                },
                dataType: "json"
            });
        });

    </script>


</body>
</html>