<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/3/16
  Time: 13:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>

<article class="user_nav_box" id="userLeft">
    <div class="user_photo_box">
        <div class="user_photo">
            <img src="../../statics/credit/images/user_photo_bg.html.png" class="user_photo_bg" />
            <span class="bg_txt">点我换一个</span>
            <img src="../../statics/credit/car-008.png" class="photo" />
        </div>
        <div class="user_name">132****6334</div>
    </div>
    <script src="../../statics/js/jquery-3.3.1.js">

    </script>
    <script>
        $(document).ready(function () {
   var tag= $("list").getElementsByTagName("li");
   tag.onclick.addClass("cur");
        })
    </script>
    <nav class="user_nav">
        <ul class="user_ul" name="list">
            <li class=""><a href="/goTo/order">分期订单<i class="tip_r"></i></a></li>
            <li class=""><a href="/orderController/goSingle">个人资料<i class="tip_r"></i></a></li>
            <li class=""><a href="/orderController/goCredit">信用信息<i class="tip_r"></i></a></li>
            <li class=""><a href="/orderController/goTrueName">实名认证<i class="tip_r"></i></a></li>
            <li class=""><a href="/orderController/goChange">修改密码<i class="tip_r"></i></a></li>
        </ul>
    </nav>

    <!-- 二维码弹层 -->
    <div class="QRCode_box clrfix box-sizing hide">
        <aside class="fl QRCode">
            <img src="../../statics/credit/qrcode.png">
        </aside>
        <aside class="fl share_r">
            <div class="close closeEvent"></div>
            <div class="QRCode_title">手机扫码来晒单 赢取缤纷好礼</div>
            <div class="clrfix">
                <div class="fl scanning"></div>
                <div class="fl share_txt">
                    <div>开启扫描工具</div>
                    <div>扫一扫立即秀车</div>
                </div>
            </div>
        </aside>
    </div>
</article>

</body>
</html>
