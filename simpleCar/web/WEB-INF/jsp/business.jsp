<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 0011 2018年03月11日
  Time: 下午 18:11:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>我是商家</title>
    <link rel="stylesheet" type="text/css" href="../../statics/css/xin.css">
</head>
<body>
<%--<!--顶-->
<div class="shortcut">
    <div class="w1200 clearfix">
        <!-- left -->
        <div class="back-home float-l">
            <a href="#" title="淘车-腾讯京东百度易车共同投资的互联网汽车交易平台" class="back-link" logwt="navigation_header_taoche">淘车首页</a>
        </div>
        <!-- right -->
        <ul class="clearfix shortcut_info float-r">
            <li>
                <span>欢迎来到淘车</span>
                <a href="/goTo/signIn" class="active" id="tc_top_myNickName"></a>
            </li>
            <li id="tc_top_liMyTaoche" class="my-tc">
                <a href="/goTo/order" class="info-link" logwt="navigation_header_login_C" id="tc_top_myTaoche">我的淘车
                    <i></i>
                </a>
                <div class="my-tc-menu" id="tc_top_myTaocheList">
                    <a href="#" target="_blank">新车订单</a>
                    <a href="#" target="_blank">二手车订单</a>
                    <a href="#" target="_blank">二手车服务</a>
                    <a href="#" target="_blank" logwt="navigation_header_Cadmin">免费发车</a>
                </div>
            </li>
            <li id="tc_top_liMyDealer" class="my-sj">
                <a class="info-link" id="tc_top_myDealer">我是商家
                    <i></i>
                </a>
                <!--<div class="my-seller-menu" id="tc_top_myDealerList">-->
                <!--<a href="/goTo/businessLogin&#10;" target="_blank" logwt="navigation_header_login_B">商家登录</a>-->

                <!--</div>-->
            </li>
            <li id="tc_top_liAppDownload" class="app-down">
                <a href="javascript:;" class="info-link" id="tc_top_appDownload">App
                    <i></i>
                </a>
                <div class="my-app-down" id="tc_top_appDownloadList">
                    <a href="#" target="_blank" rel="nofollow" logwt="navigation_header_app_ersc">
                        淘车
                        <div class="scan-code">
                            <img src="../../statics/image/scan-code.png" alt="">
                        </div>
                    </a>
                    <a href="#" target="_blank" rel="nofollow">淘车新车</a>
                    <a href="#" target="_blank" rel="nofollow" logwt="navigation_header_app_ersc">淘车二手车</a>
                    <a href="#" target="_blank" rel="nofollow">易鑫车贷</a>
                </div>
            </li>
            <li class="yx-zp">
                <a rel="nofollow" target="_blank" href="#" title="易鑫招聘" class="info-link">易鑫招聘</a>
            </li>
        </ul>
    </div>
</div>
<!--顶-->

<!--淘-->
<div class="tc-header">
    <div class="w1200">
        <div class="logo">
            <a href="#" title="淘车网">
                <!--[if IE]>
                <img src="//image.bitautoimg.cimage/om/taoche/2018_pc_usedcar/taoche-logo.png" width="102" height="76"
                     alt="淘车"/>
                <![endif]-->
                <!--[if !IE]><!-->
                <img src="../../statics/image/taoche-logo.svg" width="102" height="76" alt="淘车">
                <!--<![endif]-->
            </a>
        </div>
        <!-- city-hover -->
        <div id="tc_top_divCurrentCityName" class="city-name">
            <a id="tc_top_currentCityName" href="javascript:;" class="city-name-link">广州<em></em></a>
        </div>
        <div class="search clearfix">
            <div class="search-tab">
                <a href="javascript:" class="current" id="tc_search_newcarTab">新车</a>
                <a href="javascript:" id="tc_search_ershoucheTab">二手车</a>
            </div>
            <span class="sel-car-wrapper"><input type="text" id="tc_search_txtNewcar" name="tc_search_txtNewcar" autocomplete="off" placeholder="请输入心仪的品牌或车型"><div class="sel-car-brands drop-layer" style="top: 14px;"><div class="sel-car-loading"></div><div class="brand_letters" id="master-index_letters"></div><div class="brand_name_bg"><div class="brand_name" id="masterIndexList"></div></div></div><div class="sel-car-type drop-layer" style="top: 14px;"><div class="sel-car-loading"></div></div><div class="sel-car-menu drop-layer" style="top: 14px;"></div><div class="empty-search"></div></span>
            <a class="search-btn" id="tc_search_btnNewcar" href="javascript:;">搜索</a>
            <input type="text" id="tc_search_txtErshouche" name="tc_search_txtErshouche" autocomplete="off" placeholder="搜“5万 捷达”试试" style="display:none;">
            <a class="search-btn" href="javascript:;" id="tc_search_btnErshouche" style="display:none;">搜索</a>
            <!-- 搜索历史记录 -->
            <div id="divList" class="search-layer" style="display:none;"></div>
        </div>
    </div>
</div>
<!--淘-->

<!--首页-->
<div class="nav_menu">
    <ul id="ul_menu" class="area clearfix">
        <li data-menu="home" class="home">
            <a logwt="navigation_home" class="link" href="/goTo/indexPage" _islog="1">
                <span>首页</span>
            </a>
            <em class="spacer"></em>
        </li>
        <li data-menu="xinche">
            <a logwt="navigation_newcar" class="link" href="/goTo/newCar" _islog="1">
                <span>新车</span>
            </a>
            <em class="spacer"></em>
        </li>

        <li data-menu="fenqi">
            <a logwt="navigation_insurance" class="link" href="/goTo/carInsurance" _islog="1">
                <span>车险</span>
            </a>
            <em class="spacer"></em>
        </li>

        <li data-menu="fenqi">
            <a logwt="navigation_installment" class="link" href="/goTo/stages" _islog="1">
                <span>分期</span>
            </a>
            <em class="spacer"></em>
        </li>

        <li data-menu="tiyandian">
            <a logwt="navigation_store" class="link" href="/goTo/try" _islog="1">
                <span>体验店</span>
            </a>
        </li>
    </ul>
</div>
<!--首页-->--%>


<!--中部-->
<div class="zhongbu">
    <br/>
    <h1>欢迎&nbsp;&nbsp;${business.bName}&nbsp;&nbsp;商家,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="gotoAddCar" style="color: #0C88E8">去发布新车信息</a>
    </h1>
    <br/>
    <table>
        <c:forEach items="${carListByBusiness}" var="carInfos" varStatus="cishu">
            <tr class="r1">
                <td class="d1">第&nbsp;&nbsp;<span>${cishu.count}</span>&nbsp;&nbsp;条&nbsp;记&nbsp;录:</td>
                <td class="d2">品&nbsp;牌:&nbsp;&nbsp;<span>${carInfos.cvariety}</span></td>
                <td class="d3">型号名字:&nbsp;&nbsp;<span>${carInfos.cname}</span></td>
                <td class="d4">价格:&nbsp;&nbsp;<span>${carInfos.cprice}</span>&nbsp;&nbsp;元</td>
                <td class="d5">卖车状态:&nbsp;&nbsp;<span>${carInfos.cState}</span></td>
            </tr>
        </c:forEach>
    </table>
</div>
<!--中部-->
<script src="../../statics/js/common.js"></script>
<script src="../../statics/js/index.js"></script>
<script src="../../statics/js/header_common.js"></script>
<jsp:include page="bottom.jsp"></jsp:include>

</body>
</html>
