<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/3/10
  Time: 13:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="zh-CN">
<head>
    <meta charset=utf-8"utf-8"/>
    <title>登录</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width"/>
    <meta property="wb:webmaster" content="14dba3c44bd1a68e"/>
    <meta property="qc:admins" content="23517766776411351663757">
    <meta name="keywords" content="新车分期，广州买车，分期买车，广州分期买车，车贷，易鑫车贷"/>
    <meta name="description"
          content="易鑫车贷（易车车贷）是易车、腾讯、京东三家公司合资成立的易鑫资本旗下的易鑫汽车金融平台，为用户提供全面的线上汽车金融平台，为金融客户提供有效的O2O运营服务。易鑫车贷（易车车贷）提供优质的广州新车分期服务、广州车主分期服务（汽车抵押分期）、广州车险、广州车款管理等汽车金融服务。"/>
    <meta name="renderer" content="webkit">
    <link rel="dns-prefetch" href="//www.daikuan.com"/>
    <link rel="dns-prefetch" href="//img1.bitautoimg.com"/>
    <link rel="dns-prefetch" href="//img2.bitautoimg.com"/>
    <link rel="dns-prefetch" href="//img3.bitautoimg.com"/>
    <link rel="dns-prefetch" href="//img4.bitautoimg.com"/>

    <link rel="icon" type="image/x-icon" href="//cache.taoche.com/favicon.ico">

    <link href="../../statics/css/common.css" rel="stylesheet" type="text/css"/>

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
            "LocateResultType": 3
        };
        var getSlideVerifyApi = '/Login/initialsign'
        var CheckSign = '/Login/checksign'
    </script>

    <!--[if lt IE 9]>
    <script src="//img4.yixinfinance.com/taoche/dll/shim.dll.js?v=201706081140?v=201801301002"></script>
    <![endif lt IE 9]-->

    <link href="../../statics/css/index.css" rel="stylesheet" type="text/css"/>
    <script>
        var returnurl = "http://www.taoche.com/all/?WT.mc_id=PC_PZ_BD&from=9408";
        // var loadsign = 'login';
        var loadsign = false;
        CODE_GETTING_URL = '/Login/GetCodeII';
        var isShowCaptcha = true;
        var ImgValidateCodeUrl = '/Login/GetImageValidateCode';
        var isShowCaptcha = true;
        var businessid = 1003;
    </script>

    <style>
        #tc_top_divCurrentCityName {
            display: none;
        }
    </style>
</head>
<body>
<jsp:include page="top.jsp"/>

<!-- -----------------------头结束--------------------------- -->
<!-- header -->
<input type='hidden' name='__RequestVerificationToken' id='__RequestVerificationToken'
       data-id='OEsD0-BIWo_2sLUBgVsN8yV1NTJ94W2fOWDTwe8UBefdXZ4_Q_dymVDJHhdaYlds8LgsgFxJg0lRcek_GhqzWRbwjMM1'
       value='OEsD0-BIWo_2sLUBgVsN8yV1NTJ94W2fOWDTwe8UBefdXZ4_Q_dymVDJHhdaYlds8LgsgFxJg0lRcek_GhqzWRbwjMM1'>

<!--Content-->


<div class="login"
     style="background-image: url('//img1.yixinfinance.com/chedai/a82583d3-bd93-4eef-a35c-4692515ea748.jpg')">
    <article class="content clrfix">
        <blockquote class="login-form">
            <div class="form clrfix">
                <header class="tab-box clrfix">
                    <aside id="2" class="fl tab cur-p cur">手机快捷登录</aside>
                    <aside id="1" class="fl tab cur-p">账号密码登录</aside>
                </header>
                <article class="login-con">
                    <blockquote id="form">
                        <!-- 账号密码登录 -->
                        <blockquote id="tab1" class="hide">
                            <form method="post" action="/userController/signIn">
                                <%--输入手机--%>
                                <div class="pad10B pad30RL">
                                    <div class="input-item clrfix">
                                        <div class="input-box"><input id="mobile1" name="mobile" placeholder="请输入手机号"
                                                                      autocomplete="off"/></div>
                                    </div>
                                </div>
                                <div class="jyts-box">
                                    <span class="jyts jyts-mobile1">请输入正确的手机号</span>
                                </div>
                                <%--密码--%>
                                <div class="pad10B pad30RL">
                                    <div class="input-item clrfix">
                                        <div class="input-box"><input autocomplete="new-password" id="password"
                                                                      name="password" type="password" minlength="6"
                                                                      maxlength="20"
                                                                      class="AppCheck nocheck data border1"
                                                                      placeholder="请输入密码"/></div>
                                    </div>
                                </div>
                                <div class="jyts-box">
                                    <span class="jyts jyts-password">请输入正确的密码</span>
                                </div>
                                <%--验证码--%>
                                <%--<div class="pad10B pad30RL clrfix">
                                    <div class="input-item fl clrfix w-180">
                                        <div class="input-box"><input id="ImgValidateCode1" name="imgValidateCode" type="text" maxlength="4" class="inputNumber AppCheck nocheck data w-120 border1" autocomplete="off" placeholder="请输入右侧验证码" autocomplete="off" /></div>
                                    </div>
                                    <div id="GetImgValidateCode1" class="GetImgValidateCode fr"><img src=""></div>
                                </div>
                                <div class="jyts-box"><span class="jyts jyts-imgValidateCode">请输入正确的验证码</span></div>--%>
                                <%--自动登录--%>
                                <div class="clrfix tools-box">
                                    <div class="fl">
                                        <input id="rememberMe1" name="rememberMe" class="data" type="checkbox"
                                               value="false"> 自动登录
                                    </div>
                                    <%--修改密码--%>
                                    <a class="apart hide fr" href="">忘记密码</a>
                                </div>
                                <%--提交--%>
                                <div id="user-btn1" class="btn user-btn hide disabled">立即登录</div>
                            </form>
                        </blockquote>

                        <!-- 动态密码登录 -->
                        <blockquote id="tab2">

                            <form action="/userController/signIn" method="post">
                                <div class="pad10B pad30RL">
                                    <div class="input-item clrfix">
                                        <div class="input-box">
                                            <input id="mobile" name="mobile" type="text"
                                                                      maxlength="11"
                                                                      class="inputNumber AppCheck nocheck data border1"
                                                                      autocomplete="off" placeholder="请输入手机号"
                                                                      autocomplete="off"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="jyts-box"><span class="jyts jyts-mobile">请输入正确的手机号</span></div>
                                <%--短信验证--%>
                                <%--<div class="pad10B pad30RL clrfix border1">
                                    <div class="input-item fl clrfix w-180">
                                        <div class="input-box"><input id="ValidateCode" autocomplete="off" name="mobileValidateCode" maxlength="4" type="text" class="inputNumber AppCheck data w-120" placeholder="请输入验证码" autocomplete="off" /></div>
                                    </div>
                                    <div id="GetValidateCode" class="fr btn code-btn disable">获取验证码</div>
                                </div>
                                <div class="jyts-box">
                                    <span class="jyts jyts-mobileValidateCode">请输入正确的验证码</span>
                                </div>--%>
                                <%--自动登录--%>
                                <div class="clrfix tools-box">
                                    <div class="fl">
                                        <input id="rememberMe2" name="rememberMe" class="data"
                                                           type="checkbox" value="false"> 自动登录
                                    </div>
                                </div>
                                <div id="user-btn2" class="btn user-btn">立即登录</div>
                            </form>

                        </blockquote>


                        <div class="reg-link">
                            <a href="/userController/goSignUp">免费注册</a>
                        </div>


                    </blockquote>
                </article>
            </div>
        </blockquote>
    </article>
    <aside class="banner_btm"></aside>
</div>


<!--Content-->
<!--整屏蒙层start-->
<div id="maskLayer"></div>
<!--整屏蒙层end-->


<%--<script src="../../statics/js/common.js"></script>


<script src="../../statics/js/index.js"></script>--%>

<!-- -----------------------尾开始--------------------------- -->
<p class="ft-copy"><span>经营许可证编号：京ICP备15006372号-5&nbsp;&nbsp;公安备案号码：京公网安备&nbsp;11010802020005号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CopyRight&nbsp;©&nbsp;2015-2018 taoche.com版权所有&nbsp;北京易鑫信息科技有限公司
</p>

<!-- -----------------------尾结束--------------------------- -->
<!-- 2018 Taoche PC改版新车和二手车公共头部所需JS引用 -->
<script src="../../statics/js/header_common.js"></script>
<!-- 广告代码 -->
<script src="../../statics/js/senseNew.js"></script>

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
