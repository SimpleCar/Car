<%--
  Created by IntelliJ IDEA.
  User: hjh
  Date: 2018/3/14
  Time: 9:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>商家登录</title>
    <style>
        #businessNameId{
            width: 220px;
            height: 30px;
            border: 2px lightgray solid;
        }
        #businessPwdId{
            width: 220px;
            height: 30px;
            border: 2px lightgray solid;
        }
        #sub{
            width: 280px;
            height:50px;
            background-color: dodgerblue;
            color: white;
            text-align: center;
            border-radius: 7px;
            font-size: 20px;
            text-decoration: 50px;
        }
        a{
            text-decoration: none;
            color: dodgerblue;
            font-size: 15px;
        }
    </style>

    <script type="text/javascript">
        function yanzheng(){
            var n=document.getElementById("businessNameId");
            var nn= n.value;
            var m=document.getElementById("mc");

            var p=document.getElementById("businessPwdId");
            var pp= p.value;
            var mp=document.getElementById("mp");

            var flag=false;
            var flag1=false;
            var flag2=false;

            if(nn==""||nn==null){
                m.innerHTML="名字不能为空";
                return false;
            }else if(nn!=nn.replace(/(^\s*)|(\s*$)/g,"")){
                m.innerHTML="不能输入空格等非法字符";
                return false;
            }else{
                m.innerHTML="&nbsp;";
                flag1=true;
            }

            if(pp==""||pp==null){
                mp.innerHTML="密码不能为空";
                return false;
            }else if(pp!=pp.replace(/(^\s*)|(\s*$)/g,"")){
                mp.innerHTML="不能输入空格等非法字符";
                return false;
            } else{
                mp.innerHTML="&nbsp;";
                flag2=true
            }
            if(flag1==true&&flag2==true){
                return true
            }
        }
    </script>
</head>
<body>

<div style="height: 70px;">
    <div style="position: relative;display: inline-block;margin-top: 10px;margin-left: 80px">
        <img src="../../statics/image/logo.png">
    </div>
    <div style="display: inline-block;position: absolute;margin-top: 30px;">
        <span style="font-size: 12px;color: gray;">服务热线：400-179-2205</span>
    </div>

    <div style="display: inline-block;position: absolute;margin-left: 650px;margin-top: 30px;">
        <a href="#" style="text-decoration: none;font-size: 18px;color: dodgerblue;">首页</a>&nbsp;&nbsp;&nbsp;
        <a href="#" style="text-decoration: none;font-size: 18px;color: black;">商家申请</a>&nbsp;&nbsp;&nbsp;
        <a href="#" style="text-decoration: none;font-size: 18px;color: black;">合作产商</a>&nbsp;&nbsp;&nbsp;
        <a href="#" style="text-decoration: none;font-size: 18px;color: black;">帮助中心</a>&nbsp;&nbsp;&nbsp;
        <a href="#" style="text-decoration: none;font-size: 18px;color: black;">淘车通app</a>
    </div>

</div>


<div style="display: inline-block;position: absolute">
    <img src="../../statics/image/login1.png">
</div>

<div style="background-color: white;width: 350px;height: 430px;display: inline-block;position: relative;margin-left: 925px;margin-top: 110px">
    <form method="post" action="test.html">
        <div style="display: inline-block;position: relative;margin-left: 100px">
            <h1>商家登录</h1>
        </div>
        <div style="display: inline-block;position: relative;margin-top: 20px;margin-left: 20px">
            <span style="font-size: 20px;color: dodgerblue;font-family: 新宋体 "><strong>用户名</strong></span>
            &nbsp;&nbsp;
            <input type="text" name="businessName" id="businessNameId" placeholder="请输入商家名字" onblur="yanzheng()"/>
        </div>

        <div id="mc" style="color: red;font-size:10px;width: 200px;height: 20px;position: relative;margin-left:100px; "></div>

        <div style="display: inline-block;position: relative;margin-top: 10px;margin-left: 18px">
            &nbsp;&nbsp;<span style="font-size: 20px;color: dodgerblue;font-family: 新宋体 "><strong>密码</strong></span>
            &nbsp;&nbsp;&nbsp;
            <input type="password" name="businessPwd" id="businessPwdId" placeholder="请输入商家密码" onblur="yanzheng()"/>
        </div>

        <div id="mp" style="color: red;font-size:10px;width: 200px;height: 20px;position: relative;margin-left:100px; "></div>

        <div style="position: relative;margin-top: 20px;margin-left: 35px">
            <input onclick="return yanzheng()" id="sub" type="submit" value="登录淘车通"/>
        </div>

        <div style="position: relative;margin-top: 10px;margin-left: 170px">
            <a href="#">忘记密码</a>&nbsp;|&nbsp;
            <a href="#">商家申请</a>
        </div>
    </form>
</div>
<img src="../../statics/image/login2.png">
<img src="../../statics/image/login3.png">
<img src="../../statics/image/login4.png">
<img src="../../statics/image/login5.png">
<img src="../../statics/image/login6.png">
</div>
</body>
</html>
