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
    <%--<meta charset=utf-8"utf-8"/>--%>
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

    <%--<script>
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
    <![endif lt IE 9]-->--%>

    <link href="../../statics/css/index.css" rel="stylesheet" type="text/css"/>
    <%--<script>
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
    </style>--%>
</head>
<body>
<jsp:include page="top2.jsp"/>

<!-- -----------------------头结束--------------------------- -->
<!-- header -->
<input type='hidden' name='__RequestVerificationToken' id='__RequestVerificationToken'
       data-id='OEsD0-BIWo_2sLUBgVsN8yV1NTJ94W2fOWDTwe8UBefdXZ4_Q_dymVDJHhdaYlds8LgsgFxJg0lRcek_GhqzWRbwjMM1'
       value='OEsD0-BIWo_2sLUBgVsN8yV1NTJ94W2fOWDTwe8UBefdXZ4_Q_dymVDJHhdaYlds8LgsgFxJg0lRcek_GhqzWRbwjMM1'>

<!--Content-->


<div class="login" style="background-image: url(../../statics/image/sign.jpg)">
    <article class="content clrfix">
        <blockquote class="login-form">
            <div class="form clrfix">
                <header class="tab-box clrfix">
                    <aside id="choose2" class="fl tab cur-p cur">手机快捷登录</aside>
                    <aside id="choose1" class="fl tab cur-p">账号密码登录</aside>
                </header>
                <article class="login-con">
                    <blockquote id="form">
                        <!-- 账号密码登录 -->
                        <blockquote id="tab1" class="hide">
                            <form id="sigin1" method="post" action="/userController/signIn">
                            <div class="pad10B pad30RL">
                                <div class="input-item clrfix">
                                    <div class="input-box"><input id="inputNumber1" name="uphone" type="text" maxlength="11" class="inputNumber AppCheck nocheck data border1" autocomplete="off" placeholder="请输入手机号"></div>
                                </div>
                            </div>
                            <div class="jyts-box"><span class="jyts jyts-mobile1"id="mobileFalse1">请输入正确的手机号</span></div>
                            <div class="jyts-box"><span class="jyts"id="mobileNotExist1">请先注册</span></div>
                            <div class="pad10B pad30RL">
                                <div class="input-item clrfix">
                                    <div class="input-box"><input autocomplete="new-password" id="password" name="password" type="password" minlength="6" maxlength="20" class="AppCheck nocheck data border1" placeholder="请输入密码"></div>
                                </div>
                            </div>
                            <div class="jyts-box"><span class="jyts jyts-password" id="pwdFalse">请输入正确的密码</span></div>
                            <%--图片验证码--%>
                            <%--<div class="pad10B pad30RL clrfix">
                                <div class="input-item fl clrfix w-180">
                                    <div class="input-box"><input id="ImgValidateCode1" name="imgValidateCode" type="text" maxlength="4" class="inputNumber AppCheck nocheck data w-120 border1" autocomplete="off" placeholder="请输入右侧验证码"></div>
                                </div>
                                <div id="GetImgValidateCode1" class="GetImgValidateCode fr"><img src="./登录_files/GetImageValidateCode"></div>
                            </div>
                            <div class="jyts-box">
                                <span class="jyts jyts-imgValidateCode">请输入正确的验证码</span>
                            </div>--%>
                                <div>
                                <a class="apart fr hide" href="/userController/goResetPwd">忘记密码</a>
                            </div>
            </form>
                        </blockquote>

                        <!-- 动态密码登录 -->
                        <blockquote id="tab2" class="">
                            <form action="/userController/signIn" method="post">
                            <div class="pad10B pad30RL">
                                <div class="input-item clrfix">
                                    <div class="input-box"><input id="inputNumber2" name="uphone" type="text" maxlength="11" class="inputNumber AppCheck nocheck data border1" autocomplete="off" placeholder="请输入手机号"></div>
                                </div>
                            </div>
                            <div class="jyts-box"><span class="jyts jyts-mobile" id="mobileFalse2">请输入正确的手机号</span></div>
                                <div class="jyts-box"><span class="jyts" id="mobileNotExist2">请先注册</span></div>

                            <div class="pad10B pad30RL clrfix border1 nocheck">
                                <div class="input-item fl clrfix w-180">
                                    <div class="input-box"><input id="ValidateCode" autocomplete="off" name="mobileValidateCode" maxlength="4" type="text" class="inputNumber AppCheck data w-120" placeholder="请输入验证码"></div>
                                </div>
                                <div id="GetValidateCode" class="fr btn code-btn disable">获取动态密码</div>
                            </div>
                            <div class="jyts-box"><span class="jyts jyts-mobileValidateCode" id="codeFalse">请输入正确的验证码</span></div>
                            <%--<div class="clrfix tools-box">
                                <div class="fl"><input id="rememberMe2" name="rememberMe" class="data" type="checkbox" value="false"> 自动登录</div>
                            </div>--%>
                            </form>
                        </blockquote>

                        <div id="user-btn1" class="btn user-btn disabled hide">立即登录</div>
                        <div id="user-btn2" class="btn user-btn disabled">立即登录</div>

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



<script src="../../statics/js/common.js"></script>
<script src="../../statics/js/index.js"></script>
<script src="../../statics/js/header_common.js"></script>
<script src="../../statics/js/jquery-3.3.1.js"></script>
<script type="text/javascript">
   $(document).ready(function () {
        /*判断手机号*/
        function isPoneAvailable(pone) {
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(pone)) {
                return false;
            } else {
                return true;
            }
        };

        /*判断密码*/
        function isPwd(pwd) {
            var myreg2 = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
            if (myreg2.test(pwd)) {
                return true;
            } else {
                return false;
            }
        }

        /*60s重新发送验证码*/
        var countdown = 8;
        function countDown60(val) {
            if (countdown == 0) {
                $(val).removeClass("disable");
                $(val).text("获取验证码");
                countdown = 8;
                return;
            } else {
                $(val).addClass("disable");
                $(val).text("重新发送(" + countdown + ")");
                countdown--;
                setTimeout(function () {
                    countDown60(val);
                }, 1000);
            }
        }

        /*选择登录方式*/

        $("#choose1").on("click",function () {
            $("#choose1").addClass("cur");
            $("#tab1").removeClass("hide");
            $("#user-btn1").removeClass("hide");
            $("#choose2").removeClass("cur");
            $("#tab2").addClass("hide");
            $("#user-btn2").addClass("hide");
        });
        $("#choose2").click(function () {
            $("#choose1").removeClass("cur");
            $("#tab1").addClass("hide");
            $("#user-btn1").addClass("hide");
            $("#choose2").addClass("cur");
            $("#tab2").removeClass("hide");
            $("#user-btn2").removeClass("hide");
        });

        /*判断是否是手机号码*/
        var phone;
        $("#inputNumber2").blur(function () {
            phone ==$("#inputNumber2").val();
            if (!isPoneAvailable(phone)) {
                $("#mobileFalse2").removeClass("jyts");
                $("#GetValidateCode").addClass("disable");
            } else {
                alert("正在查询号码是否已注册")
                /*判断手机号码是否注册*/
                $.ajax({
                    url: "${pageContext.request.contextPath}/userController/checkPhoneNum",
                    async: true,
                    data: {"phoneInput": phone},
                    type: "POST",
                    success: function (data) {
                        var isExist = data
                        alert(isExist);
                        if (!isExist) {
                            alert("号码没注册");
                            $("#mobileNotExist2").removeClass("jyts");
                        } else {
                            alert("可以发送验证码");
                            $("#GetValidateCode").removeClass("disable");
                        }
                    },
                    dataType: "json"
                })
            }
        });
        $("#inputMobile2").focus(function () {
            $("#mobileFalse1").addClass("jyts");
            $("#mobileNotExist1").addClass("jyts");
            $("#mobileFalse2").addClass("jyts");
            $("#mobileNotExist2").addClass("jyts");
        });
       $("#inputMobile1").focus(function () {
           $("#mobileFalse1").addClass("jyts");
           $("#mobileNotExist1").addClass("jyts");
           $("#mobileFalse2").addClass("jyts");
           $("#mobileNotExist2").addClass("jyts");
       });

        /!*发送验证码*!/
        var code;
        $("#GetValidateCode").click(function () {
            if (isPoneAvailable(phone) && !$(this).hasClass("disable")) {
                $.ajax({
                    url: "/userController/sendCode",
                    async: true,
                    data: {"phoneInput": phone},
                    type: "POST",
                    success: function (data) {
                        code = data;
                        alert(code);
                    },
                    dataType: "json"
                });
                $("#codeFalse").addClass("jyts");
                countDown60(this);
            }
        });

        /*判断输入的验证码*/
        $("#ValidateCode").blur(function () {
            var codeInput = $(this).val();
            if (codeInput == code) {
                $("#codeFalse").addClass("jyts");
                $("#user-btn2").removeClass("disabled");
            } else {
                $("#codeFalse").removeClass("jyts");
            }
        });
        $("#ValidateCode").focus(function () {
            $("#codeFalse").addClass("jyts");
        });
       $("#user-btn2").click(function () {
           if(!$(this).hasClass("disabled")){
               $("#login2").submit();
           }
       });

        /*账号密码登录*/
       $("#inputNumber1").blur(function () {
           phone ==$("#inputNumber1").val();
           if (!isPoneAvailable(phone)) {
               $("#mobileFalse1").removeClass("jyts");
           } else {
               /*判断手机号码是否注册*/
               $.ajax({
                   url: "${pageContext.request.contextPath}/userController/checkPhoneNum",
                   async: true,
                   data: {"phoneInput": phone},
                   type: "POST",
                   success: function (data) {
                       var isExist = data;
                       if (!isExist) {
                           $("#mobileNotExist1").removeClass("jyts");
                       }
                   },
                   dataType: "json"
               })
           }
       });

        /*密码验证*/
        $("#password").focus(function () {
            $("#pwdFalse").addClass("jyts");
        })
        $("#password").blur(function () {
            var pwd = $("#password").val();
            $.ajax({
                url: "/userController/checkPwd",
                async: true,
                data: {"phoneInput": phone, "pwd": pwd},
                type: "POST",
                success: function (data) {
                    var isRight = data;
                    if (!isRight) {
                        $("#pwdFalse").removeClass("jyts");
                    } else {
                        $("#user-btn1").removeClass("disabled");
                    }
                },
                dataType: "json"
            });
            $("#user-btn1").click(function () {
                if(!$(this).hasClass("disabled")){
                    $("#login1").submit();
                }
            });

        });
    })
</script>

<!-- -----------------------尾开始--------------------------- -->
<jsp:include page="bottom.jsp"/>

<!-- -----------------------尾结束--------------------------- -->

</body>


</html>
