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
    <meta charset="utf-8" />
    <title>修改密码</title>
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
    
    <link href="../../statics/changePassword//common.css?v=201801301002" rel="stylesheet" type="text/css" />

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
    var city = {"CityId":501,"RegionId":440100,"CityName":"广州","CitySpell":"guangzhou","SelectCityLevel":0,"SelectCityName":null,"LocateResultType":1};
    var getSlideVerifyApi = '/Login/initialsign'
        var CheckSign = '/Login/checksign'
    </script>

    <!--[if lt IE 9]>
        <script src="//img4.yixinfinance.com/taoche/dll/shim.dll.js?v=201706081140?v=201801301002"></script>
    <![endif lt IE 9]-->
    
<link rel="stylesheet" href="//img1.yixinfinance.com/taoche/usercenter/myorders/changepwd.css?v=201801301002" />
    <script type="text/javascript">
    var xincheUrl = 'https://home.taoche.com/ + "/login/index"';
    </script>

    <style>
        #tc_top_divCurrentCityName {
            display: none;
        }
    </style>
</head>
<body>
    <!-- -----------------------头开始--------------------------- -->

<link rel="stylesheet" type="text/css" href="../../statics/changePassword/2018_pc_headfoot_style-20180305102257-1506.css" media="all" />
    <jsp:include page="top.jsp"/>
    <!-- header -->
    <input type='hidden' name='__RequestVerificationToken' id='__RequestVerificationToken' data-id='U-V4L2YFVx9UxgMOKx9anRnkZZeZNeOhVGD3Xa8hisUV3vn-qWs6USegJyHG4w42jwqwkG7HNeO76-Ur8EqdHwWHzSA1' value='U-V4L2YFVx9UxgMOKx9anRnkZZeZNeOhVGD3Xa8hisUV3vn-qWs6USegJyHG4w42jwqwkG7HNeO76-Ur8EqdHwWHzSA1'>

    <!--Content-->
    


<div class="bg_col">
    <article class="user_warp">
        
<script>
    var arrImg = ['../../statics/changePassword/car-001.png?v=201801301002',
      '../../statics/changePassword///images/car-002.png?v=201801301002',
          '../../statics/changePassword/car-003.png?v=201801301002',
          '../../statics/changePassword/car-004.png?v=201801301002',
          '../../statics/changePassword//images/car-005.png?v=201801301002',
          '../../statics/changePassword/car-006.png?v=201801301002',
          '../../statics/changePassword/car-007.png?v=201801301002',
          '../../statics/changePassword//images/car-008.png?v=201801301002'];
</script>

        <jsp:include page="orderLeft.jsp"/>

        <article class="user_con" id="userRight">
            <div class="title_box">
                <h2 class="h2">修改密码</h2>
            </div>

            <section class="user_from_box">
                <!-- 验证手机号开始 -->
                <div class="tab_input_box" id="checkTelphone">
                    <div class="tips">修改密码需要先手机验证</div>
                    <ul class="user_from">
                        <li class="item">
                            <div class="txt">手机号</div>
                            <div class="info">
                                <span class="info-txt">13250236334</span>
                                <input type="hidden" name="mobile" id="mobile" value="13250236334">
                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">验证码</div>
                            <div class="info">
                                <span class="input_line">
                                    <input type="text" name="" id="ValidateCode" class="" maxlength="4" placeholder="请输入验证码">
                                    <div class="btn" id="GetValidateCode">获取验证码</div>
                                </span>
                                <span class="alert"><i></i>请输入正确的验证码 </span>
                            </div>
                        </li>
                    </ul>

                    <div class="user_btn_box">
                        <a href="javascript:;" class="btn_org" id="checkTelText">验证</a>
                    </div>
                </div>
                <!-- 验证手机号结束 -->
                <div class="tab_input_box user_from_box_cer hide" id="ChangePwdInput">
                    <ul class="user_from">
                        <li class="item" id="LiUserNewPWD">
                            <div class="txt">新密码</div>
                            <div class="info">
                                <span class="input">
                                    <input type="password" name="name" class="input_line" value="" id="UserNewPWD" placeholder="请输入新密码" />

                                </span>
                                <span class="alert"><i></i>您输入的密码格式错误！</span>
                                <span class="tip_f12">密码不能为纯数字，8-20位</span>
                            </div>
                        </li>

                        <li class="item" id="LiUserNewPWDT">
                            <div class="txt">确认新密码</div>
                            <div class="info">
                                <span class="input"><input type="password" name="name" class="input_line" value="" id="UserNewPWDT" placeholder="请确认新密码" /></span>
                                <span class="alert"><i></i>您两次输入的密码不一致</span>
                            </div>
                        </li>

                    </ul>

                    <div class="user_btn_box">
                        <a href="javascript:;" class="btn_org" id="ChangePwdText">确认修改</a>
                    </div>
                </div>
                <div class="tab_text_box user_from_box_cer_t" id="ChangePwdTextBox">
                    <div class="u_f_b_cer_t"><i class="ok"></i><a class="user_pwd_text_b_span" href="/User/Logout?currenturl=https%3A%2F%2Fhome.taoche.com%2F%2Flogin%2Findex">修改密码成功！<br /><span class="user_pwd_text_b_f12">返回登录页面</span></a></div>
                </div>
            </section>
        </article>
    </article>
</div>

    <!--Content-->
    <!--整屏蒙层start-->
    <div id="maskLayer"></div>
    <!--整屏蒙层end-->


    <script src="../../statics/changePassword//common.js"></script>

    
    <script src="../../statics/changePassword/changepwd.js"></script>



    <!-- -----------------------尾开始--------------------------- -->
    <p class="ft-copy"><span>经营许可证编号：京ICP备15006372号-5&nbsp;&nbsp;公安备案号码：京公网安备&nbsp;11010802020005号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CopyRight&nbsp;©&nbsp;2015-2018 taoche.com版权所有&nbsp;北京易鑫信息科技有限公司</span><img class="ft-rc3" src="//image.bitautoimg.com/taoche/2018_pc_usedcar/adv-group.png" alt="广告" /></p>
    
    <!-- -----------------------尾结束--------------------------- -->
    <!-- 2018 Taoche PC改版新车和二手车公共头部所需JS引用 -->
    <script src="../../statics/changePassword/taoche_pc_header_common.js?v=201801301002"></script>
    <!-- 广告代码 -->
<script src="../../statics/changePassword/senseNew.js"></script>

<!--百度统计PC-->
<script>
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "../../statics/changePassword/hm.js?b43ce35f868b496d8c3af5108a539019";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
<!--webtrendsPC-->
<script type="text/javascript" src="../../statics/changePassword/dcs_ucar.js"></script>
<!--大数据-->
<script type="text/javascript">
    (function () {
        var dc = document.createElement("script"); dc.type = "text/javascript"; dc.async = true;
        dc.src = "../../statics/changePassword/dc.js?163"; //此ID为系统生成的网站唯一标识
        var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(dc, s);
    })();
</script>
<!-- 百度统计pc端 -->
<script>
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = window.location.host.indexOf("etaoche.cn")>=0?"../../statics/changePassword/hm.js?f68148618e51c0e86681df69a3d0d08d":"../../statics/changePassword/hm.js?db7dedc48a653d8087cb460082e491b4";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>

<!-- 易鑫统计基础代码 -->
<script>
    (function () {
        var bc = document.createElement('script'); bc.type = 'text/javascript'; bc.async = true;
        bc.src =' ../../statics/changePassword//bc.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(bc, s);
    })();
</script>

<!--seo,自动推送代码-->
<script>
    (function () {
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
            bp.src = '../../statics/changePassword/push.js';
        }
        else {
            bp.src = '../../statics/changePassword/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    })();
</script>

       
</body>


</html>
