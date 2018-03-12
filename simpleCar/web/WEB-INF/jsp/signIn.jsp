<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/3/12
  Time: 10:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="zh-CN">
<head>
    <meta charset=utf-8"utf-8" />
    <title>登录</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width" />
    <meta property="wb:webmaster" content="14dba3c44bd1a68e" />
    <meta property="qc:admins" content="23517766776411351663757">
    <meta name="keywords" content="新车分期，广州买车，分期买车，广州分期买车，车贷，易鑫车贷" />
    <meta name="description" content="易鑫车贷（易车车贷）是易车、腾讯、京东三家公司合资成立的易鑫资本旗下的易鑫汽车金融平台，为用户提供全面的线上汽车金融平台，为金融客户提供有效的O2O运营服务。易鑫车贷（易车车贷）提供优质的广州新车分期服务、广州车主分期服务（汽车抵押分期）、广州车险、广州车款管理等汽车金融服务。" />
    <meta name="renderer" content="webkit">
    <link rel="dns-prefetch" href="//www.daikuan.com" />
    <link rel="dns-prefetch" href="//img1.bitautoimg.com" />
    <link rel="dns-prefetch" href="//img2.bitautoimg.com" />
    <link rel="dns-prefetch" href="//img3.bitautoimg.com" />
    <link rel="dns-prefetch" href="//img4.bitautoimg.com" />

    <link rel="icon" type="image/x-icon" href="//cache.taoche.com/favicon.ico">

    <link href="../../statics/css/common.css" rel="stylesheet" type="text/css" />

    <script>
        var locationCityId = 501;
        var xinche='http://kaizouba.taoche.com';
        var citySpell = 'guangzhou';
        var USERCENTERURL='https://home.taoche.com/';
        var APIURL = "//webapi.daikuan.com/";
        var RESURL = "//img1.yixinfinance.com/jinrong/newpcweb/";
        var CODE_GETTING_URL='/Login/GetCode';
        var CODE_VALIDATING_URL='/Login/CheckCode';
        var domainQueue = ["img1.bitautoimg.com","img2.bitautoimg.com","img3.bitautoimg.com","img4.bitautoimg.com"];
        var BusinessLine = 550;
        var city = {"CityId":501,"RegionId":440100,"CityName":"广州","CitySpell":"guangzhou","SelectCityLevel":0,"SelectCityName":null,"LocateResultType":3};
        var getSlideVerifyApi = '/Login/initialsign'
        var CheckSign = '/Login/checksign'
    </script>

    <!--[if lt IE 9]>
    <script src="//img4.yixinfinance.com/taoche/dll/shim.dll.js?v=201706081140?v=201801301002"></script>
    <![endif lt IE 9]-->

    <link href="../../statics/css/index.css" rel="stylesheet" type="text/css" />
    <script>
        var returnurl = "http://xin.taoche.com/guangzhou/";
        // var loadsign = 'login';
        var loadsign = false;
        CODE_GETTING_URL='/Login/GetCodeII';
        var isShowCaptcha =true;
        var ImgValidateCodeUrl='/Login/GetImageValidateCode';
        var isShowCaptcha = true;
        var businessid=1003;
    </script>

    <style>
        #tc_top_divCurrentCityName {
            display: none;
        }
    </style>
</head>
<body>
<!-- -----------------------头开始--------------------------- -->

<link rel="stylesheet" type="text/css" href="../../statics/css/headfoot_style.css" media="all" />

<!-- 顶部 s -->
<div class="shortcut">
    <div class="w1200 clearfix">
        <!-- left -->
        <div class="back-home float-l">
            <a href="//www.taoche.com/" title="淘车-腾讯京东百度易车共同投资的互联网汽车交易平台" class="back-link" logwt="navigation_header_taoche">淘车首页</a>
        </div>
        <!-- right -->
        <ul class="clearfix shortcut_info float-r">
            <li>
                <span>欢迎来到淘车</span>
                <a href="javascript:;" class="active" id="tc_top_myNickName" onclick="location.href='https://home.taoche.com/login/?returnurl='+encodeURIComponent(location.href)">登录</a>
            </li>
            <li id="tc_top_liMyTaoche" class="my-tc">
                <a href="javascript:;" class="info-link" logwt="navigation_header_login_C" id="tc_top_myTaoche">我的淘车
                    <i></i>
                </a>
                <div class="my-tc-menu" id="tc_top_myTaocheList">
                    <a href="https://home.taoche.com/myorder" target="_blank">新车订单</a>
                    <a href="https://home.taoche.com/ershouche/order" target="_blank">二手车订单</a>
                    <a href="https://home.taoche.com/ershouche" target="_blank">二手车服务</a>
                    <a href="//maiche.taoche.com/" target="_blank" logwt="navigation_header_Cadmin">免费发车</a>
                </div>
            </li>
            <li id="tc_top_liMyDealer" class="my-sj">
                <a href="javascript:;" class="info-link" id="tc_top_myDealer">我是商家
                    <i></i>
                </a>
                <div class="my-seller-menu" id="tc_top_myDealerList">
                    <a href="//dealer.taoche.com/" target="_blank" logwt="navigation_header_login_B">商家登录</a>
                    <a href="//dealer.taoche.com/account/register/" target="_blank" logwt="navigation_header_login_Brelease">商家发车</a>
                </div>
            </li>
            <li id="tc_top_liAppDownload" class="app-down">
                <a href="javascript:;" class="info-link" id="tc_top_appDownload">App下载
                    <i></i>
                </a>
                <div class="my-app-down" id="tc_top_appDownloadList">
                    <a href="//www.taoche.com/download/taocheapp/" target="_blank" rel="nofollow" logwt="navigation_header_app_ersc">
                        淘车
                        <div class="scan-code">
                            <img src="//image.bitautoimg.com/taoche/2018_pc_usedcar/scan-code.png" alt="" />
                        </div>
                    </a>
                    <a href="//xin.taoche.com/app/download/" target="_blank" rel="nofollow">淘车新车</a>
                    <a href="//app.yiche.com/taoche/" target="_blank" rel="nofollow" logwt="navigation_header_app_ersc">淘车二手车</a>
                    <a href="//www.daikuan.com/app/" target="_blank" rel="nofollow">易鑫车贷</a>
                </div>
            </li>
            <li class="yx-zp">
                <a rel="nofollow" target="_blank" href="//job.yxqiche.com/" title="易鑫招聘" class="info-link">易鑫招聘</a>
            </li>
        </ul>
    </div>
</div>
<!-- 顶部 e -->
<!--全屏广告-->
<div id="divFullPic" class="add-adv1"></div>
<!--头部广告 star -->
<div id="divHeadPic" class="add-adv1"></div>
<!--头部广告 end -->
<!-- 头部 s -->
<div class="tc-header">
    <div class="w1200">
        <div class="logo">
            <a href="//www.taoche.com" title="淘车网">
                <!--[if IE]>
                <img src="//image.bitautoimg.com/taoche/2018_pc_usedcar/taoche-logo.png" width="102" height="76" alt="淘车"/>
                <![endif]-->
                <!--[if !IE]><!-->
                <img src="//img1.yixinfinance.com/taoche/common/images/taoche-logo.svg" width="102" height="76" alt="淘车">
                <!--<![endif]-->
            </a>
        </div>
        <!-- city-hover -->
        <div id="tc_top_divCurrentCityName" class="city-name">
            <a id="tc_top_currentCityName" href="javascript:;" class="city-name-link">
                <em></em>
            </a>
        </div>
        <div class="search clearfix">
            <div class="search-tab">
                <a href="javascript:;" class="current" id="tc_search_newcarTab">新车</a>
                <a href="javascript:;" id="tc_search_ershoucheTab">二手车</a>
            </div>
            <input type="text" id="tc_search_txtNewcar" name="tc_search_txtNewcar" autocomplete="off" placeholder="请输入心仪的品牌或车型" />
            <a class="search-btn" id="tc_search_btnNewcar" href="javascript:;">搜索</a>
            <input type="text" id="tc_search_txtErshouche" name="tc_search_txtErshouche" autocomplete="off" placeholder="请输入心仪的品牌或车型"
                   style="display:none;">
            <a class="search-btn" href="javascript:;" id="tc_search_btnErshouche" style="display:none;">搜索</a>
            <!-- 搜索历史记录 -->
            <div id="divList" class="search-layer" style="display:none;"></div>
        </div>
    </div>
</div>
<!-- 头部 e -->

<!--头部城市浮层 end -->
<!-- 菜单导航 s -->
<div class="nav_menu">
    <ul id="ul_menu" class="area clearfix">
        <li data-menu="home" class="home">
            <a logwt="navigation_home" class="link" href="//www.taoche.com/" _islog="1">
                <span>首页</span>
            </a>
            <em class="spacer"></em>
        </li>
        <li data-menu="xinche">
            <a logwt="navigation_newcar" class="link" href="//xin.taoche.com/" _islog="1">
                <span>新车</span>
            </a>
            <em class="spacer"></em>
        </li>
        <li data-menu="ershouche" id="tc_top_liMenuErshouche">
            <a id="tc_top_menuErshouche" href="//beijing.taoche.com/all/" class="link sub" logwt="navigation_usedcar" _islog="1">
                <span>二手车</span>
            </a>
            <em class="spacer"></em>
        </li>
        <li data-menu="fenqi">
            <a logwt="navigation_installment" class="link" href="//fenqi.taoche.com/topic/" _islog="1">
                <span>分期</span>
            </a>
            <em class="spacer"></em>
        </li>
        <li data-menu="chexian">
            <a logwt="navigation_insurance" class="link" href="//chexian.taoche.com/?yxms=NPH0006" _islog="1">
                <span>车险</span>
            </a>
            <em class="spacer"></em>
        </li>
        <li data-menu="tiyandian">
            <a logwt="navigation_store" class="link" href="//tiyandian.taoche.com/" _islog="1">
                <span>体验店</span>
            </a>
        </li>
    </ul>
</div>
<!-- 菜单导航 e -->

<!-- -----------------------头结束--------------------------- -->
<!-- header -->
<input type='hidden' name='__RequestVerificationToken' id='__RequestVerificationToken' data-id='y91GimhSAotK8qnEfzYmiQCD3ExwONO-jC-eB76ShmTQYP9pjvTUD43URhhmbbtbb3J1jv2d_SU5pCrVLh2dwPxiOU81' value='y91GimhSAotK8qnEfzYmiQCD3ExwONO-jC-eB76ShmTQYP9pjvTUD43URhhmbbtbb3J1jv2d_SU5pCrVLh2dwPxiOU81'>

<!--Content-->



<div class="login" style="background-image: url('//img1.yixinfinance.com/chedai/a82583d3-bd93-4eef-a35c-4692515ea748.jpg')">
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
                            <div class="pad10B pad30RL">
                                <div class="input-item clrfix">
                                    <div class="input-box"><input id="mobile1" name="mobile" type="text" maxlength="11" class="inputNumber AppCheck nocheck data border1" autocomplete="off" placeholder="请输入手机号" autocomplete="off" /></div>
                                </div>
                            </div>
                            <div class="jyts-box"><span class="jyts jyts-mobile1">请输入正确的手机号</span></div>
                            <div class="pad10B pad30RL">
                                <div class="input-item clrfix">
                                    <div class="input-box"><input autocomplete="new-password" id="password" name="password" type="password" minlength="6" maxlength="20" class="AppCheck nocheck data border1" placeholder="请输入密码" /></div>
                                </div>
                            </div>
                            <div class="jyts-box"><span class="jyts jyts-password">请输入正确的密码</span></div>
                            <div class="pad10B pad30RL clrfix">
                                <div class="input-item fl clrfix w-180">
                                    <div class="input-box"><input id="ImgValidateCode1" name="imgValidateCode" type="text" maxlength="4" class="inputNumber AppCheck nocheck data w-120 border1" autocomplete="off" placeholder="请输入右侧验证码" autocomplete="off" /></div>
                                </div>
                                <div id="GetImgValidateCode1" class="GetImgValidateCode fr"><img src=""></div>
                            </div>
                            <div class="jyts-box"><span class="jyts jyts-imgValidateCode">请输入正确的验证码</span></div>
                            <div class="clrfix tools-box">
                                <div class="fl"><input id="rememberMe1" name="rememberMe" class="data" type="checkbox" value="false"> 自动登录</div>
                                <a class="apart hide fr" href="/ForgetPwd?returnurl=http%253a%252f%252fxin.taoche.com%252fguangzhou%252f">忘记密码</a>
                            </div>
                        </blockquote>

                        <!-- 动态密码登录 -->
                        <blockquote id="tab2">

                            <div class="pad10B pad30RL">
                                <div class="input-item clrfix">
                                    <div class="input-box"><input id="mobile" name="mobile" type="text" maxlength="11" class="inputNumber AppCheck nocheck data border1" autocomplete="off" placeholder="请输入手机号" autocomplete="off" /></div>
                                </div>
                            </div>
                            <div class="jyts-box"><span class="jyts jyts-mobile">请输入正确的手机号</span></div>

                            <div class="pad10B pad30RL clrfix border1">
                                <div class="input-item fl clrfix w-180">
                                    <div class="input-box"><input id="ValidateCode" autocomplete="off" name="mobileValidateCode" maxlength="4" type="text" class="inputNumber AppCheck data w-120" placeholder="请输入验证码" autocomplete="off" /></div>
                                </div>
                                <div id="GetValidateCode" class="fr btn code-btn disable">获取验证码</div>
                            </div>
                            <div class="jyts-box"><span class="jyts jyts-mobileValidateCode">请输入正确的验证码</span></div>
                            <div class="clrfix tools-box">
                                <div class="fl"><input id="rememberMe2" name="rememberMe" class="data" type="checkbox" value="false"> 自动登录</div>
                            </div>
                        </blockquote>

                        <div id="user-btn1" class="btn user-btn hide disabled">立即登录</div>
                        <div id="user-btn2" class="btn user-btn disabled">立即登录</div>

                        <div class="reg-link">
                            <a href="/Register?returnurl=http%253a%252f%252fxin.taoche.com%252fguangzhou%252f">免费注册</a>
                        </div>

                        <dl class="other-login">
                            <dt>其他方式登录</dt>
                            <dd>
                                <a href="/login/LoginWeiXin?returnurl=http%253a%252f%252fxin.taoche.com%252fguangzhou%252f" class="icon01"></a>
                                <a href="/login/LoginSina?returnurl=http%253a%252f%252fxin.taoche.com%252fguangzhou%252f" class="icon02"></a>
                                <a href="/login/LoginQQ?returnurl=http%253a%252f%252fxin.taoche.com%252fguangzhou%252f" class="icon03"></a>
                                <a href="/login/LoginJD?returnurl=http%253a%252f%252fxin.taoche.com%252fguangzhou%252f" class="icon04"></a>
                                <a href="/login/LoginYiChe?returnurl=http%253a%252f%252fxin.taoche.com%252fguangzhou%252f" class="icon05"></a>
                            </dd>
                        </dl>
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


<script src="//img2.yixinfinance.com/taoche/common/common.js?v=201801301002"></script>


<script src="//img4.yixinfinance.com/taoche/usercenter/login/index.js?v=201801301002"></script>

<!-- -----------------------尾开始--------------------------- -->
<p class="ft-copy"><span>经营许可证编号：京ICP备15006372号-5&nbsp;&nbsp;公安备案号码：京公网安备&nbsp;11010802020005号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CopyRight&nbsp;©&nbsp;2015-2018 taoche.com版权所有&nbsp;北京易鑫信息科技有限公司</span><img class="ft-rc3" src="//image.bitautoimg.com/taoche/2018_pc_usedcar/adv-group.png" alt="广告" /></p>

<!-- -----------------------尾结束--------------------------- -->
<!-- 2018 Taoche PC改版新车和二手车公共头部所需JS引用 -->
<script src="//cache.taoche.cn/packjs/taoche_pc_header_common.js?v=201801301002"></script>
<!-- 广告代码 -->
<script src="//g.taoche.cn/js/senseNew.js"></script>

<!--百度统计PC-->
<script>
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b43ce35f868b496d8c3af5108a539019";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
<!--webtrendsPC-->
<script type="text/javascript" src="https://st1.taoche.cn/tongji/webtrends/dcs_ucar.js"></script>
<!--大数据-->
<script type="text/javascript">
    (function () {
        var dc = document.createElement("script"); dc.type = "text/javascript"; dc.async = true;
        dc.src = ("https:" == document.location.protocol ? "https://" : "http://") + "js.ctags.cn/dc.js?163"; //此ID为系统生成的网站唯一标识
        var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(dc, s);
    })();
</script>
<!-- 百度统计pc端 -->
<script>
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = window.location.host.indexOf("etaoche.cn")>=0?"https://hm.baidu.com/hm.js?f68148618e51c0e86681df69a3d0d08d":"https://hm.baidu.com/hm.js?db7dedc48a653d8087cb460082e491b4";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>

<!-- 易鑫统计基础代码 -->
<script>
    (function () {
        var bc = document.createElement('script'); bc.type = 'text/javascript'; bc.async = true;
        bc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dt.taoche.com/bc.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(bc, s);
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
