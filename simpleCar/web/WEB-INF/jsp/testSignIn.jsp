<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/3/14
  Time: 10:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link href="../../statics/css/common.css" rel="stylesheet" type="text/css"/>
    <link href="../../statics/css/index.css" rel="stylesheet" type="text/css"/>
    <script src="../../statics/js/jquery-3.3.1.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $("#user-btn2").on("click", function () {
                alert("进入提交")
                $("#signInForm2").submit(this);
            }),$("#1").on("click",function () {
                $("#tab1").show();
                $("#1").addClass("cur");

                $("#tab2").hide();
            }),$("#2").on("click",function () {
                $("#tab2").show();
                $("#2").addClass("cur");
                $("#tab1").hide();
            })
        })
        function checkMobile(){
            var sMobile1 = document.getElementById("mobile1");
            var sMobile=sMobile1.value();
            alert(sMobile);
            if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))){
                alert("不是完整的11位手机号或者正确的手机号前七位");

                document.mobileform.mobile.focus();
                return false;
            }
        }
    </script>

</head>
<body>
<jsp:include page="top.jsp"/>

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
                        <blockquote id="tab1" >
                            <form id="signInForm1" method="post" action="/userController/signIn">
                                <%--输入手机--%>
                                <div class="pad10B pad30RL">
                                    <div class="input-item clrfix">
                                        <div class="input-box">
                                            <input id="mobile1" name="mobile" placeholder="请输入手机号"
                                                                      autocomplete="off" onblur="checkMobile()"/></div>
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
                                <div id="user-btn1" class="btn user-btn hide">立即登录</div>
                            </form>
                        </blockquote>

                        <!-- 动态密码登录 -->
                        <blockquote id="tab2" class="hide">
                            <form id="signInForm2" action="/userController/signIn" method="post">
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
                                <div class="jyts-box">
                                    <span class="jyts jyts-mobile">请输入正确的手机号</span>
                                </div>
                                <%--短信验证--%>

                                <%--自动登录--%>
                                <div class="clrfix tools-box">
                                    <div class="fl">
                                        <input id="rememberMe2" name="rememberMe" class="data"
                                               type="checkbox" value="false"> 自动登录
                                    </div>
                                </div>
                                <div id="user-btn2" class="btn user-btn ">立即登录</div>
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
</body>
</html>
