<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 0015 2018年03月15日
  Time: 下午 19:32:31
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>商家注册</title>
    <style type="text/css">
        *{margin: 0;padding: 0;}
        body{

        }
        .da{
            margin: auto;;
            width: 1200px;
        }
        .zhong{
            background-color: azure;
        }
        .xiao{
            margin-left: 470px;
        }
        .h11{
            text-align: center;;
        }
        .h33{
            text-align: center;
        }
        #shenqinganniu{
            background-color: #4385f5;
            width: 255px;
            height: 40px;
            color: white;
            font-size: 20px;
        }
        span{
            font-size: 18px;
        }
    </style>
</head>
<body>
<div class="da">
    <div class="zhong">
        <h1 class="h11">免费申请</h1>
        <br/>
        <h3 class="h33">以下信息简单车将会严格保密，请您放心填写</h3>
        <br/>
        <hr/>
        <br/>
        <br/>
        <div class="xiao">
            <form action="dobusinessRegister" method="post" enctype="multipart/form-data">
                <span>商家类型</span>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="4S店" name="shangjialeixing">4S店&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="个人" name="shangjialeixing">个人<br/>
                <br/>
                <br/>
                <span>所在区域</span>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="suozaiquyu" placeholder="请输入省份区域"/><br/>
                <br/>
                <br/>
                <span>商家名字</span>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="shangjiamingzi" placeholder="请输入商家名字"/><br/>
                <br/>
                <br/>
                <span>手机号码</span>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="shangjiashouji" placeholder="请输入商家手机号码"/><br/>
                <br/>
                <br/>
                <span>营业执照</span>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<input type="file" name="yingyezhizhao" multiple>
                <br/>
                <br/>
                <br/>
                <input id="shenqinganniu" type="submit" value="申请">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </form>
        </div>
    </div>
</div>
</body>
</html>
