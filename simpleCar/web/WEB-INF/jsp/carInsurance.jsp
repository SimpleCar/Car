<%--
  Created by IntelliJ IDEA.
  User: hjh
  Date: 2018/3/14
  Time: 14:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>车险</title>
    <script type="text/javascript">
        var sUserAgent = navigator.userAgent,
            mobileAgents = ['Windows CE', 'iPod', 'Symbian', 'iPhone', 'BlackBerry', 'Android', 'Windows Phone'];
        var url = 'chexian.taoche.com';
        var pfrom = '';
        for (var i = 0, len = mobileAgents.length; i < len; i++) {
            if (sUserAgent.indexOf(mobileAgents[i]) !== -1) {
                if (url.indexOf("chexian") >= 0) {
                    location.href = 'https://m.chexian.com?yxms=WMH0033';
                } else if (pfrom != "" && pfrom != null && pfrom != "null") {
                    location.href = 'https://m.chexian.com?yxms=' + pfrom;
                } else {
                    location.href = 'https://m.chexian.com?yxms=WMH0034';
                }
                break;
            }
        }
    </script>
    <meta charset="utf-8" />
    <title>【汽车保险】_交强险_商业险_车险比价-淘车</title>
    <meta name="keywords" content="汽车保险，车险报价，交强险，商业险，车险比价" />
    <meta name="description" content="易鑫车险为车主提供汽车保险、交强险、商业险、车险比价等优质服务，提供丰富便捷的一站式汽车保险服务，涵盖人保车险、平安车险、太平洋车险、阳光车险、大地车险、安盛天平车险等六大车险公司；易鑫车险是易车、腾讯、京东、百度旗下的中国领先互联网汽车保险平台，车险购买优选易鑫车险！" />
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width" />
    <meta property="wb:webmaster" content="14dba3c44bd1a68e" />
    <meta name="renderer" content="webkit">
    <meta name="applicable-device" content="pc">
    <link rel="alternate" media="only screen and(max-width: 640px)" href="https://m.chexian.com/">
    <link rel="dns-prefetch" href="//www.baoxian.daikuan.com" />
    <link rel="dns-prefetch" href="//img1.bitautoimg.com" />
    <link rel="dns-prefetch" href="//img2.bitautoimg.com" />
    <link rel="dns-prefetch" href="//img3.bitautoimg.com" />
    <link rel="dns-prefetch" href="//img4.bitautoimg.com" />
    <link rel="icon" type="image/x-icon" href="https://cache.taoche.com/favicon.ico">
    <link rel="apple-touch-icon-precomposed" href="https://img3.yixinfinance.com/taoche/newpcweb//images/insurance/chexian_vi.png?v=201801101533">
    <link href="../../statics/css/carInsurance/insurancecomm_taoche.css" rel="stylesheet" type="text/css" />
    <script src="js/jquery-1.8.1.min.js" type="text/javascript" charset="utf-8"></script>


    <script>
        var USERCENTERURL = 'https://home.taoche.com/';
        var APIURL = "http://api.chedai.bitauto.com/";
        var RESURL = "https://img1.yixinfinance.com/taoche/newpcweb/";

        //var city = { "CityId": 2401, "RegionId": 310100, "CityName": "上海", "CitySpell": "www", "SelectCityLevel": 0, "SelectCityName": null, "LocateResultType": 0 };
    </script>
    <script src="../../statics/js/carInsurance/sea.js" type="text/javascript" charset="utf-8"></script>
    <link href="../../statics/css/carInsurance/common.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript">
        var ALIAS = {
            "jquery": "https://img4.yixinfinance.com/taoche/newpcweb/scripts/libs/jquery-1.11.3.js?v=201801101533",
            "global": "https://img1.yixinfinance.com/taoche/newpcweb/scripts/libs/global.js?v=201801101533",
            "check": "https://img2.yixinfinance.com/taoche/newpcweb/scripts/libs/check.js?v=201801101533",
            "insure_check": "https://img3.yixinfinance.com/taoche/newpcweb/scripts/insurance/check.js?v=201801101533",
            "insuranceApicheck": "https://img4.yixinfinance.com/taoche/newpcweb/scripts/insurance/insuranceapi/check-taoche.js?v=201801101533",
            "tools": "https://img1.yixinfinance.com/taoche/newpcweb/scripts/libs/tools.js?v=201801101533",
            "selCar": "https://img2.yixinfinance.com/taoche/newpcweb/scripts/libs/selcar.js?v=201801101533",
            "selCity": "https://img3.yixinfinance.com/taoche/newpcweb/scripts/libs/selcity.js?v=201801101533",
            "slider": "https://img4.yixinfinance.com/taoche/newpcweb/scripts/libs/jquery.nivo.slider.js?v=201801101533",
            "lazyload": "https://img1.yixinfinance.com/taoche/newpcweb/scripts/libs/jquery.lazyload.js?v=201801101533",
            "knockout": "https://img2.yixinfinance.com/taoche/newpcweb/scripts/libs/knockout-3.4.0.js?v=201801101533",
            "carPhotos": "https://img3.yixinfinance.com/taoche/newpcweb/scripts/libs/carphotos.js?v=201801101533",
            "swiper": "https://img4.yixinfinance.com/taoche/newpcweb/scripts/libs/swiper2_0.js?v=201801101533",
            "datetimepicker": "https://img1.yixinfinance.com/taoche/newpcweb/scripts/libs/jquery.datetimepicker.js?v=201801101533",
            "NewSelectCity": "https://img2.yixinfinance.com/taoche/newpcweb/scripts/insurance/newselectcity.js?v=201801101533",
            "bannerImg": "https://img3.yixinfinance.com/taoche/newpcweb/scripts/insurance/bannerimg.js?v=201801101533",
            "index": "https://img4.yixinfinance.com/taoche/newpcweb/scripts/insurance/index_taoche.js?v=201801101533",
            "mail": "https://img1.yixinfinance.com/taoche/newpcweb/scripts/insurance/mail.js?v=201801101533",
            "formValidator": "https://img2.yixinfinance.com/taoche/newpcweb/scripts/insurance/formvalidator.js?v=201801101533",
            "formValidatorRegex": "https://img3.yixinfinance.com/taoche/newpcweb/scripts/insurance/formvalidatorregex.js?v=201801101533",
            "commData": "https://img4.yixinfinance.com/taoche/newpcweb/scripts/insurance/insuranceapi/commdata.js?v=201801101533",
            "userBasicInfo": "https://img1.yixinfinance.com/taoche/newpcweb/scripts/insurance/insuranceapi/userbasicinfo-taoche.js?v=201801101533",
            "insuranceChoice": "https://img2.yixinfinance.com/taoche/newpcweb/scripts/insurance/insuranceapi/insurancechoice-taoche.js?v=201801101533",
            "orderSubmit": "https://img3.yixinfinance.com/taoche/newpcweb/scripts/insurance/insuranceapi/ordersubmit-taoche.js?v=201801101533",
            "insureResult": "https://img4.yixinfinance.com/taoche/newpcweb/scripts/insurance/insuranceapi/insureresult.js?v=201801101533",
            "bnbj": "https://img1.yixinfinance.com/taoche/newpcweb/scripts/insurance/bnbj.js?v=201801101533",
            "Apply": "https://img2.yixinfinance.com/taoche/newpcweb/scripts/insurance/apply.js?v=201801101533",
            "ajaxfileupload": "https://img3.yixinfinance.com/taoche/newpcweb/scripts/insurance/ajaxfileupload.js?v=201801101533",
            "jqueryJson": "https://img4.yixinfinance.com/taoche/newpcweb/scripts/libs/jquery.json-2.4.js?v=201801101533",
            "comm": "https://img1.yixinfinance.com/taoche/newpcweb/scripts/insurance/insuranceapi/comm.js?v=201801101533",
            "InsuranceApi": "https://img2.yixinfinance.com/taoche/newpcweb/scripts/insurance/newinsuranceapi.js?v=201801101533",
            "feedback": "https://img3.yixinfinance.com/taoche/newpcweb/scripts/insurance/home/feedback.js?v=201801101533",
            "comment": "https://img4.yixinfinance.com/taoche/newpcweb/scripts/insurance/comment_taoche.js?v=201801101533",
            "comm1": "https://img1.yixinfinance.com/taoche/newpcweb/scripts/insurance/comm/comm.js?v=201801101533"
        };
        seajs.config({
            base: RESURL, //需要写入服务器静态资源地址
            alias: ALIAS,
            map: [
                [/^(.*\.(?:css|js))(.*)$/i, '$1?v=201801101533']
            ]
        });
        seajs.use("jquery");
        seajs.use("knockout");
        seajs.use("comm1");
    </script>
    <!--[if lt IE 9]>
    <script src="../../statics/jquerys/carInsurance/html5shiv.js"></script>
    <script src="../../statics/js/carInsurance/selectivizr.js"></script>
    <![endif lt IE 9]-->

    <link href="../../statics/css/carInsurance/index_taoche.css" rel="stylesheet" type="text/css" />
    <!--[if IE]>
    <script type="text/javascript" src="../../statics/js/carInsurance/html5.js"></script>
    <script type="text/javascript" src="../../statics/js/carInsurance/excanvas.compiled.js"></script>
    <![endif]-->
</head>
<body>

<input type="hidden" id="hidMenuFocus" value="chexian" />
<jsp:include page="top2.jsp"/>
<!--Content-->

<div id="indexBox">
    <section class="focus_box" id="indexBanner">
        <div class="swiper-container focus_box_bg clearfix">
            <div class="swiper-wrapper focus_box_big clearfix">
                <div class="swiper-slide focus_con clearfix">
                    <a class="banner" href="javascript:void(0);" data-id="index">
                        <img src="../../statics/image/carInsurance/index_banner_orange.png" alt="">
                    </a>
                </div>
                <div class="swiper-slide focus_con clearfix">
                    <a class="banner" href="javascript:void(0);" data-id="PICC">
                        <img src="../../statics/image/carInsurance/index_picc_orange.png" alt="">
                    </a>
                </div>
                <div class="swiper-slide focus_con clearfix">
                    <a class="banner" href="javascript:void(0);" data-id="CPIC">
                        <img src="../../statics/image/carInsurance/index_paic_orange.png" alt="">
                    </a>
                </div>
                <div class="swiper-slide focus_con clearfix">
                    <a class="banner" href="javascript:void(0);">
                        <ins id="div_093ee1fa-290f-448f-b3c7-e915ac24bbf1" data-type="ad_play" data-adplay_IP="" data-adplay_AreaName="" data-adplay_CityName="" data-adplay_BrandID="" data-adplay_BrandName="" data-adplay_BrandType="" data-adplay_BlockCode="093ee1fa-290f-448f-b3c7-e915ac24bbf1"> </ins>
                    </a>
                </div>
                <div class="swiper-slide focus_con clearfix">
                    <a class="banner" href="javascript:void(0);">
                        <ins id="div_1e4275e4-7469-448b-b72a-04dbc8e5d13e" data-type="ad_play" data-adplay_IP="" data-adplay_AreaName="" data-adplay_CityName="" data-adplay_BrandID="" data-adplay_BrandName="" data-adplay_BrandType="" data-adplay_BlockCode="1e4275e4-7469-448b-b72a-04dbc8e5d13e"> </ins>

                    </a>
                </div>
            </div>
            <div class="pagination" id="focus_dot">
            </div>
        </div>
        <div class="QuickInsuranceBox">
            <div class="main">
                <h3>车险报价</h3>
                <ul class="fromList">
                    <li>
                        <div class="selectCity">
                            <input type="text" placeholder="请选择用车城市" class="inputText select" data-bind="value: CityName, attr: { cityId: cityId }" value="北京" maxlength="10">
                        </div>
                    </li>
                    <li>
                        <input type="text" placeholder="请输入车牌号" class="inputText toUpperCase" data-bind="value: LicensePlateCode, attr: { readonly: plateNumReadonly }" value="京" id="carNum" maxlength="7">
                    </li>
                    <li class="newCar">
                        <div class="chooseNewCar quickCheck">
                            <em class="checkBox " data-bind="css: { checked: newCar }"></em><em>新车未上牌</em>
                        </div>
                    </li>
                </ul>
                <h4>选择保险公司</h4>
                <ul class="companyList">
                    <li class="active" data-id="PICC">人保</li>
                    <li data-id="CPIC">太平洋</li>
                    <li class="last" data-id="AXATP">安盛天平</li>
                </ul>
                <a href="javascript:void(0)" class="submitBtn">立即申请</a>
                <div class="recentInsurance">
                    <span>最近申请：</span>
                    <div class="swiper-container swiper-container-horizontal recentInsurance_swipe" id="recentInsurance_swipe">
                        <div class="swiper-wrapper ul" data-bind="foreach: recentInsurance">
                            <div class="li swiper-slide"><a href="javascript:void(0);" data-bind="html: Name + '&nbsp;' + money + '&nbsp;' + removeMoney"></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="BrandZone" id="BrandZone">
        <h3 class="titile">品牌专区</h3>
        <div class="swiper-container clearfix">
            <div class="swiper-wrapper clearfix">

                <div class="swiper-slide list clearfix">
                    <a company="PICC" href="javascript:void(0);">
                        <img src="../../statics/image/carInsurance/index_picc.html.png" alt="">
                        <p>投保免费享受金牌服务</p>
                        <p>值得信赖</p>
                        <div class="btn"><span>去投保</span></div>
                    </a>
                </div>

                <div class="swiper-slide list clearfix">
                    <a company="CPIC" href="javascript:void(0);">
                        <img src="../../statics/image/carInsurance/index_cpic.html.png" alt="">
                        <p>老品牌，全国通赔</p>
                        <p>舒心投保体验</p>
                        <div class="btn"><span>去投保</span></div>
                    </a>
                </div>

                <div class="swiper-slide list  clearfix">
                    <a company="AXATP" href="javascript:void(0);">
                        <img src="../../statics/image/carInsurance/index_axatp.html.png" alt="">
                        <p>好司机省更多</p>
                        <p>理赔省心</p>
                        <div class="btn"><span>去投保</span></div>
                    </a>
                </div>
                <div class="swiper-slide list last clearfix">
                    <a company="YGBX" href="javascript:void(0);">
                        <img src="../../statics/image/carInsurance/index_ygbx.html.png" alt="">
                        <p>快易免服务</p>
                        <p>24h快速理赔</p>
                        <div class="btn"><span>去投保</span></div>
                    </a>
                </div>
            </div>
        </div>
        <div class="elseList">
            <div class="prev" data-bind="visible: showClickIcon">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAyCAYAAABcfPsmAAAAAXNSR0IArs4c6QAAAvBJREFUSA2tl8+L01AQx5u0hp4UCrVNYfEgCOpBkF7WxZvgaVlwxaPi6q4n/WNU0K4iiOBtPXpYEG+7IOjRswhtWgsFBT2kP+J3spkwSd57adoWujPvvZlPZvJ9L+mWSiv89Hq9q+VV8QaDwbUgCC5YqwAOh0N3PB5/AqttLwtEVY7v+wfgHLZarX+VZYGe5z0HYx3fnWVZJYjwqNvtBrCfGbZwyxBhHe0+JZBlWS8YuJAokQhfAXQBG7iuuwY7JmjhClkEgkVVvWbYQkAhArU6A2Q/AoemUIUkAirbZQD8j9gqP3lMdm6gFIEBtm3HYvDcXKJIEeJEy/oBMc5HbfN0foUKETi5k4bRQm7LEOEZ4ugkyI+Pdt/ICfaNQIiwhwr3OFjYD81m85cYx64WGIlA1WU+aDUjBgcpRVGJECdY1ndslcs8TttMhQYRwlysa6ujgMzjSyNCCEOrf6vV6rtwoPmTqNAgAqe/r9Vqv3mgsjHQJIJIfCl8pRsCSYTpdEqPcUcZhUm0+wVifNOt87ydJwIHmrYKx5C1TSLIwEqlcijHOp9aDnSLch5vtltyrPNtPDGeYPFIFyDmHwpf69q4N77jOLdhPW3UycIVbKt2TszJ06Zer3vlcnkbwX5OQm6VibOMCnaheuIdIS+ALv5g7NIvBDkv/Xhj0yQCXyGpIwOkj4udxvodOZf2E0BajEQ6TgfyGFBj2xkgKiCRtmGVIgG4gVtzkS+QthkgBcwh0oM0iMdKIC02Go1jVPmYA1P2LipVnnstkAAQaR/QjEiA1fv9/lbqIuHQCKQInUg6cXKBBpFuQJxz6SpzgZSgEgkV0qNvZyEgJWlEuk9gCU0M5ILKj0SSR3MN4tyUsYWAlAiRaCvFJyktTmGgQqRNVHmWqywMpEQpEio8he+9pYCULEWazWbao8gXmttiL3ai/1Wuz51kCkS7DoBHAL+luIXuobwAi4S5jdFodCbxCpCBRX36KTOZTC4VzTPGo+32f4YmW0GXUuy/AAAAAElFTkSuQmCC" alt="">
            </div>
            <div class="next" data-bind="visible: showClickIcon">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAyCAYAAABcfPsmAAAAAXNSR0IArs4c6QAAAuxJREFUSA2tl8+L01AQx9vUBOpBoVDbFESv7kVQL+viTfC0CO7iTcVf9bT+Ma6gWxdBPOxp9+jBy952wYM3j16UNq2FggctRNr4nZAJL5OXl6RtoDvvTWY++b79Jn1pZTAYXKus8LDAWhuNRjdXxSTg0Ww22x+Px+4qoFan0/kL0Gff9w+DIHCWhZJCOt7is+553utwtoo/MOe43+8HiC+W4bHCSrVafUMgLPsVTFpfFFrlRoBsLPknYgtwz7bt681m0+PzRaOq8B+a9qkRUHdRk2JgpKAHdfNovJBJCSBuoR9Q9ykCktLnZU1KAAlkWVZojgItZVJsigKwYM53qLvMuTImpRRG/8M9hlEsY1IKSAAs+z2CT2PlIJN2lbl2qAW22+1fqD6SHVDahUldmVfnWiAVYOkJc7gJ0F3Tk5QyhRspQs03ANbUHI1NJmUqpEbAslRmPklGYL1e/wg1fwiuObQmGYGNRuM3QAcaWJjSmWQERiDtsvki0qRcIJ7vr1j2FwZoooM96ZD3pFwgAbJuIYZDZWyS8bbhBly9g+/HPs+zIi7cK6QQsHtZEJEPCgHR9Ew06qYnruu+zAXiabmB7qs6AuewVM9xnG1EPxeIpjx1fq1W2+INzWgK1J0F0IOL51iNjFDVxa31jvNGhSi+nwPbU2EENQIBMy33lExgZRzP8EBGLPcKgBsyT3MyAS8CW2SCPG9S+FQWR/OECbJGC4Qyeq17KItpDlU7rVbrVHeOclrgcDi8C2hTNgFGJvRkXp1rgRlmaE1QYTROmQIzLiF/Wy00maDW0TgFhLonyKvKjSZIoNpImxLNH6tFeSaotTROAGHGHeQuchFgvTwTuJZjAijMIBN2uLBojIFQdwFNm9RIJuDrSPsk5IFjINQ9wsdGQykT5AVi4Hw+Dx+1siZIYDjHvXcr+o2SeC/UFhdJAvgBwBMsefmfZpPJ5DwuurGoCVKwNZ1Ot7EnPOA9QRaUnmO5tKut7PgPndVUluRxp4EAAAAASUVORK5CYII=" alt="">
            </div>
            <div class="swiper-container swiper-container-horizontal list_box clearfix">
                <div class="swiper-wrapper clearfix">

                    <div class="swiper-slide list clearfix">
                        <a company="CIC" href="javascript:void(0);">
                            <img src="../../statics/image/carInsurance/index_cic.html.png" alt="">
                            <p>一对一专项顾问</p>
                            <p>服务新升级</p>
                            <div class="btn"><span>去投保</span></div>
                        </a>
                    </div>
                    <div class="swiper-slide list clearfix">
                        <a company="BOCI" href="javascript:void(0);">
                            <img src="../../statics/image/carInsurance/index_boci.html.png" alt="">
                            <p>车险分期付</p>
                            <p>还享多种好礼</p>
                            <div class="btn"><span>去投保</span></div>
                        </a>
                    </div>
                    <div class="swiper-slide list clearfix">
                        <a company="ZABX" href="javascript:void(0);">
                            <img src="../../statics/image/carInsurance/index_zabx.html.png" alt="">
                            <p>0息分期</p>
                            <p>众安平安联合车险</p>
                            <div class="btn"><span>去投保</span></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="toolBox back-gray" id="toolBox clearfix">
        <div class="boxMain">
            <h3 class="titile">车险小工具</h3>
            <div class="toolMian">
                <h4>订单找回</h4>
                <p>请填写以下信息，系统将为您找回未完成的订单</p>
                <ul class="fromList findInsurance">
                    <li class="cityBox">
                        <div class="selectCity1">
                            <span>用车城市</span>
                            <input type="text" placeholder="请选择用车城市" class="inputText select " data-bind="value: CityName1, attr: { cityId: cityId1 }" maxlength="10">
                        </div>
                    </li>
                    <li class="newCar">
                        <div class="chooseNewCar">
                            <em class="checkBox " data-bind="css: { checked: newCar1 }"></em><em>新车未上牌</em>
                        </div>
                    </li>
                    <li>
                        <span>车牌号</span>
                        <input type="text" placeholder="请输入车牌号" id="carNum1" name="CarNumber" class="inputText toUpperCase" data-bind="value: LicensePlateCode1, attr: { readonly: plateNumReadonly1 }" maxlength="7">
                    </li>
                    <li>
                        <span>车主姓名</span>
                        <input type="text" placeholder="请输入车主姓名" name="Name" class="inputText" data-bind="value: Name" maxlength="15">
                    </li>
                    <li>
                        <span>手机号</span>
                        <input type="text" placeholder="请输入手机号" name="Phone" class="inputText" data-bind="value: phone" maxlength="11">
                    </li>
                </ul>
                <a href="javascript:void(0)" class="submitBtn">下一步</a>
            </div>
            <div class="toolMian two">
                <ul class="tabList">
                    <li class="active"><a href="javascript:void(0);">车险到期提醒</a></li>
                    <li><a href="javascript:void(0);">我要回电</a></li>
                </ul>
                <ul class="fromList remindInsurance" id="remindCtn">
                    <li>
                        <span>姓名</span>
                        <input type="text" placeholder="请输入姓名" name="Name" class="inputText" data-bind="value: Name2" maxlength="15">
                    </li>
                    <li>
                        <span>手机号</span>
                        <input type="text" placeholder="请输入手机号" name="Phone" class="inputText" data-bind="value: phone2" maxlength="11">
                    </li>
                    <li>
                        <span>到期月份</span>
                        <input type="text" placeholder="请选择到期月份" class="inputText select" name="DateMonth" data-bind="value: endDate" readonly>
                    </li>
                    <li>
                        <span>车牌号</span>
                        <input type="text" placeholder="请输入车牌号" name="CarNumber" class="inputText toUpperCase" data-bind="value: LicensePlateCode2" maxlength="7">
                    </li>
                    <li>
                        <span>提醒日期</span>
                        <input type="text" placeholder="请选择提醒日期" class="inputText select" name="Datetime" data-bind="value: remindDate" readonly>
                    </li>
                </ul>
                <ul class="fromList hide callInsurance" id="callbackCtn">
                    <li>
                        <span>回电公司</span>
                        <input type="text" placeholder="请选择回电公司" class="inputText select" readonly="readonly" id="compantList" data-bind="value: ShortEName">
                        <div class="downMenu">
                            <p class="PICC" data-id="5">人保保险</p>

                            <p class="CPIC" data-id="0">太平洋保险</p>

                            <p class="AXATP" data-id="3">安盛天平保险</p>
                            <p class="YGBX" data-id="1">阳光保险</p>
                            <p class="CIC" data-id="12">中华保险</p>
                            <p class="BOCI" data-id="10">中银保险</p>
                        </div>
                    </li>
                    <li>
                        <span>姓名</span>
                        <input type="text" placeholder="请输入姓名" name="Name" class="inputText" data-bind="value: Name1" maxlength="15">
                    </li>
                    <li>
                        <span>手机号</span>
                        <input type="text" placeholder="请输入手机号" name="Phone" class="inputText" data-bind="value: phone1" maxlength="11">
                    </li>
                </ul>
                <a href="javascript:void(0)" class="submitBtn">下一步</a>
                <div class="successBox">
                    <div class="successInfo">
                        <span class="close">
                            <img src="../../statics/image/carInsurance/close.png" alt="Alternate Text" />
                        </span>
                        <img src="../../statics/image/carInsurance/wancheng-green.png" alt="Alternate Text" />
                        <p class="text">
                            信息提交成功<br />
                            您将在提醒日期收到短信
                        </p>
                        <a href="javascript:void(0);" class="submitBtn">确认</a>
                    </div>
                </div>
            </div>
            <div class="toolMian three">
                <h4>快捷服务</h4>
                <ul class="companyLogo clearfix">
                    <li>
                        <a href="javascript:void(0);" data-query="http://www.epicc.com.cn/ecenter/views/insuringAndClaims/insurAndClaimsforIndex/claimEntrance.jsp" data-down="http://www.epicc.com.cn/idprovider/views/login.jsp?h=/fuwu/dianzibaodan/" data-claims="http://www.epicc.com.cn/lipei/baoxianlipeiliucheng/">
                            <img src="../../statics/image/carInsurance/company_logo_picc.html.png" alt="">
                        </a>
                    </li>

                    <li>
                        <a href="javascript:void(0);" data-query="http://service1.cpic.com.cn/policy/searchInit" data-down="http://service1.cpic.com.cn/ePolicy/ePolicyInit " data-claims="http://service1.cpic.com.cn/searchClaims/index ">
                            <img src="../../statics/image/carInsurance/company_logo_cpic.html.png" alt="">
                        </a>
                    </li>

                    <li class="last">
                        <a href="javascript:void(0);" data-query="http://www.axatp.com/service/ " data-down="http://chexian.axatp.com/template/client/showGetEPolicyFile.html  " data-claims="http://www.axatp.com/claim/  ">
                            <img src="../../statics/image/carInsurance/company_logo_axatp.html.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" data-query="http://query.sinosig.com/testfwl/fwebs/Prpcmain/search_car.jsp  " data-down="http://wecare.sinosig.com/common/new_customerservice/html/baodanfuwu/dzbd_index.html" data-claims="http://query.sinosig.com/testfwl/fwebs/Prpcmain/search_car.jsp ">
                            <img src="../../statics/image/carInsurance/company_logo_ygbx.html.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" data-query="http://e.cic.cn/web/publicService/toServicePage.do?index=2 " data-down="http://e.cic.cn/web/publicService/toServicePage.do?index=2 " data-claims="http://query.cic.cn/autoclaim/epiq/main.jsp ">
                            <img src="../../statics/image/carInsurance/company_logo_cic.html.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" data-query="https://e.bocins.com/EbsWeb/newPagesCxtbcs.html " data-down="https://e.bocins.com/EbsWeb/newPagesCxtbcs.html" data-claims="http://cha.bocins.com/hysis/">
                            <img src="../../statics/image/carInsurance/company_logo_boci.html.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" data-query="https://chexian.zhongan.com/open/policy/policySearch9" data-down="https://chexian.zhongan.com/open/policy/policyVerify" data-claims="https://chexian.zhongan.com/open/claim/castleClaimApply.htm">
                            <img src="../../statics/image/carInsurance/company_logo_zabx.html.png" alt="">
                        </a>
                    </li>
                </ul>
                <div class="queryBox">
                    <a href="javascript:void(0)" class="query" target="_blank">保单查询</a><a href="javascript:void(0)" class="down" target="_blank">保单下载</a><a class="claims" href="javascript:void(0)" target="_blank">保单理赔</a>
                    <span class="before"></span><span class="after"></span>
                </div>
            </div>
        </div>
    </section>
    <section class="toubaoList" id="toubaoList">
        <h3 class="titile">投保流程</h3>
        <ul class="lostMian">
            <li class="one">
                <div class="imgBox"><img src="../../statics/image/carInsurance/liucheng_1.png" alt=""></div>
                <h4>1.信息填写</h4>
                <p>输入车辆信息、个人信息，即可进行报价</p>
            </li>
            <li class="two">
                <div class="imgBox"><img src="../../statics/image/carInsurance/liucheng_2.png" alt=""></div>
                <h4>2.精准报价</h4>
                <p>直通多家公司官网，量身定制优质车险方案</p>
            </li>
            <li class="three">
                <div class="imgBox"><img src="../../statics/image/carInsurance/liucheng_3.png" alt=""></div>
                <h4>3.支付保费</h4>
                <p>支付环境严格加密，有卡就能付</p>
            </li>
        </ul>

    </section>
    <section class="typeChoose back-gray" id="typeChoose">
        <h3 class="titile">险种介绍</h3>
        <div class="chooseBox">
            <div class="nameList">
                <ul class="clearfix">
                    <li class="chesun" EName="chesun">车辆损失险</li>
                    <li class="sanzhe" EName="sanzhe">商业第三者责任险</li>
                    <li class="daoq" EName="daoq">全车盗抢险</li>
                    <li class="huahen" EName="huahen">车身划痕险</li>
                    <li class="chengke" EName="chengke">乘客座位责任险</li>
                    <li class="siji" EName="siji">司机座位责任险</li>
                    <li class="boli last" EName="boli">玻璃单独破碎险</li>
                    <li class="sheshui" EName="sheshui">涉水行驶损失险</li>
                    <li class="ziran" EName="ziran">自燃损失险</li>
                    <li class="buji" EName="buji">不计免赔特约条款</li>
                    <li class="wufa last" EName="wufa">车损无法找到第三方</li>
                </ul>
                <span class="btn"></span>
            </div>
            <div class="info_main clearfix">
                <div class="Percentage">
                    <canvas id="canvas" width="200" height="200" style="background:#fff;"></canvas>
                    <p class="canvasNum">95%</p>
                    <p class="canvasText">购买指数</p>
                </div>
                <div class="text">
                    <h3 class="">司机责任险</h3>
                    <p><span>「 险种释义 」</span><em>负责赔付车内驾驶员本人的人身伤亡费用</em></p>
                    <p><span>「 险种案例 」</span><em>负责赔付车内驾驶员本人的人身伤亡费用</em></p>
                    <p><span>「 保险理赔 」</span><em>负责赔付车内驾驶员本人的人身伤亡费用</em></p>
                    <p><span>「 适用人群 」</span><em>负责赔付车内驾驶员本人的人身伤亡费用</em></p>
                </div>
            </div>
        </div>
    </section>
    <section class="ClaimProcess" id="ClaimProcess">
        <h3 class="titile">理赔指引</h3>
        <div class="box">
            <ul>
                <li class="baohu active">
                    <h4>STEP1</h4>
                    <p>保护急救现场</p>
                </li>
                <li class="boda">
                    <h4>STEP2</h4>
                    <p>拨打报案电话</p>
                </li>
                <li class="shigu">
                    <h4>STEP3</h4>
                    <p>事故勘察损失确认</p>
                </li>
                <li class="xiuche">
                    <h4>STEP4</h4>
                    <p>修车</p>
                </li>
                <li class="tijiao">
                    <h4>STEP5</h4>
                    <p>提交理赔流程</p>
                </li>
                <li class="lingqu last">
                    <h4>STEP6</h4>
                    <p>领取赔款</p>
                </li>
            </ul>
            <div class="info" id='baohu'>
                <h4>保护急救现场</h4>
                <p>发生事故后，不推荐移动车辆位置。</p>
                <p>请立即开启危险报警闪光灯，夜间出险还应打开示廓灯和后尾灯。</p>
                <p>在来车方向50-100米处摆放反光牌等警告标志（高速公路在150米以外），防止新的意外事故。</p>
            </div>
        </div>
    </section>
    <section class="comment back-gray" id="comment">
        <h3 class="titile">车主评论<a href="/Home/comment" class="moreList" target="_blank">更多评论</a></h3>
        <ul class="clearfix" data-bind="foreach: commentList">
            <li data-bind="attr: { name: className }">
                <a href="javascript:void(0)">
                    <div class="photo">
                        <img data-bind="attr: { src: imgurl }" alt="">
                    </div>
                    <h4 data-bind="text: tel"></h4>
                    <span data-bind="text: dateVal">216-12-20</span>
                    <p data-bind="text: main">网上购买的很省力，服务也很到位，好评！</p>
                    <h5 data-bind="text: company">投保大地车险</h5>
                </a>
            </li>
        </ul>
    </section>
    <section class="cooperation" id="cooperation">
        <h3 class="titile">合作机构<span class="next"></span><span class="prev"></span></h3>
        <ul class="list_box clearfix">
            <li><img src="../../statics/image/carInsurance/index_picc.html.png" alt="" /></li>
            <li><img src="../../statics/image/carInsurance/index_cpic.html.png" alt="" /></li>
            <li><img src="../../statics/image/carInsurance/index_axatp.html.png" alt="" /></li>
            <li><img src="../../statics/image/carInsurance/index_ygbx.html.png" alt="" /></li>
            <li><img src="../../statics/image/carInsurance/index_cic.html.png" alt="" /></li>
            <li class="last"><img src="../../statics/image/carInsurance/index_boci.html.png" alt="" /></li>
            <li><img src="../../statics/image/carInsurance/index_zabx.html.png" alt="" /></li>
        </ul>
    </section>
</div>

<div class='alert_box error_box1' style="display: none;">
    <div class='mark'></div>
    <div class='info'>
        <div class='close'>
            <em>提示</em><span></span>
        </div>
        <div class='info_main'>请求超时，请重新提交表单</div>
        <div class="bottom">
            <input type="button" name="name" value="确认" class="btn btn-gray">
        </div>
    </div>
</div>

<div class="alert_box codeAlertBox" data-bind="css: { show: isShowCodeBox }">
    <div class='mark'></div>
    <div class='info'>
        <div class='close'>
            <em data-bind="html: titleText"></em>
            <span class="hide"></span>
        </div>
        <div class='info_main'>
            <form class="checkFrom">
                <ul class="FromList clearfix">
                    <li class="codeBox clearfix">
                        <a href="javascript:void(0);" class="clearfix">
                            <label for="phone">验证码</label><input name="Telphone" type="text" class="inputText toUpperCase" maxlength="6" placeholder="请输入验证码" data-bind="value: verifyCode, attr: { placeholde: mantissaPlaceholder }" /><span class="getCodeBtn" data-bind="    text: getCodeText, css: { gray: isGetCodeGray }"></span>
                        </a>
                    </li>
                </ul>
            </form>
        </div>
        <div class="bottom">
            <input type="button" name="name" value="确认" class="btn btn-gray">
        </div>
    </div>
</div>
<script src="../../statics/js/carInsurance/sensenew.js"></script>
<script type="text/javascript">
    var _imgCdn = 'https://img1.yixinfinance.com/taoche/newpcweb/';
    window._imgCdn = _imgCdn;
    seajs.use("index");
</script>

<script type="text/javascript">
    dataLayer = [{
        'google_tag_params': window.google_tag_params
    }];
</script>
<!-- Google Tag Manager -->
<noscript>
    <iframe src="//www.googletagmanager.com/ns.html?id=GTM-KZ92DG"
            height="0" width="0" style="display: none; visibility: hidden"></iframe>
</noscript>
<script>
    (function (w, d, s, l, i) {
        w[l] = w[l] || []; w[l].push({
            'gtm.start':
                new Date().getTime(), event: 'gtm.js'
        }); var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            '//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-KZ92DG');</script>
<!-- End Google Tag Manager -->

<!--Content-->

<div class='alert_box error_box' style="display: none;">
    <div class='mark'></div>
    <div class='info'>
        <div class='close'>
            <em>提示</em><span></span>
        </div>
        <div class='info_main'>请求超时，请重新提交表单</div>
        <div class="bottom">
            <a href="javascript:void(0);" class="btn gray cancel">取消</a>
            <a href="javascript:void(0);" class="btn ok">确认</a>
        </div>
    </div>
</div>
<div class="loadding">
    <div class='mark'></div>
    <div class="info">
        <img src="../../statics/image/carInsurance/loadinganimate.gif" alt="Alternate Text"/>
        <p class="fontSize_16">加载中...</p>
    </div>
</div>
<!-- 页尾 start-->
<p class="ft-copy"><span>经营许可证编号：京ICP备15006372号-5&nbsp;&nbsp;公安备案号码：京公网安备&nbsp;11010802020005号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CopyRight&nbsp;©&nbsp;2015-2018 taoche.com版权所有&nbsp;北京易鑫信息科技有限公司</span><img class="ft-rc3" src="picture/adv-group.png" alt="广告" /></p>

<!-- 页尾 end-->

<!--startbuild 合并构建起始标识，勿删除-->

<!--<script src="js/tc.domain.js"></script>
<script src="js/tc.datetime.js"></script>
<script src="js/tc.storage.js"></script>
<script src="js/tc.istype.js"></script>
<script src="js/tc.ip.js"></script>
<script src="js/tc.url.js"></script>
<script src="js/tc.dynamicfunc.js"></script>
<script src="js/tc.user.js"></script>
<script src="js/selcar.pc.js"></script>
<script src="js/tc.header.pc.common.js"></script>-->

<!--endbuild  合并构建结束标识，勿删除-->
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
<!--整屏蒙层start-->

<script src="../../statics/js/carInsurance/common.js"></script>
<script src="../../statics/js/carInsurance/react.dll.js"></script>
<script src="../../statics/js/carInsurance/taoche_pc_header_common.js"></script>

<script type="text/javascript">
    $('#tc_top_divCurrentCityName').hide();
</script>
<div id="maskLayer"></div>
<!--整屏蒙层end-->

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
<script type="text/javascript" src="../../statics/js/carInsurance/dcs_ucar.js"></script>
<!-- 易鑫统计基础代码 -->
<script>
    (function () {
        var bc = document.createElement('script'); bc.type = 'text/javascript'; bc.async = true;
        bc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dt.taoche.com/bc.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(bc, s);
    })();
</script>

<!--艾瑞统计-->
<script type="text/javascript">
    (function (G, D, s, c, p) {
        c = {
            UA: "UA-taoche-000001",
            NO_FLS: 0,
            WITH_REF: 1,
            URL: 'http://st1.taoche.cn/tongji/iwtstatictis/iwt-min.js'
        };
        G._iwt ? G._iwt.track(c, p) : (G._iwtTQ = G._iwtTQ || []).push([c, p]), !G._iwtLoading && lo();
        function lo(t) {
            G._iwtLoading = 1; s = D.createElement("script"); s.src = c.URL;
            t = D.getElementsByTagName("script"); t = t[t.length - 1];
            t.parentNode.insertBefore(s, t);
        }
    })(this, document);
</script>
</body>
</html>
