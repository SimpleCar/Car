<%--
  Created by IntelliJ IDEA.
  User: kgc
  Date: 2018/3/16
  Time: 13:33
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>发布车信息</title>
    <style>
        option{
            font-size: 20px;
            color: dodgerblue;
            text-align: center;
        }
        span{
            font-size: 25px;
            font-family: 宋体 ;
        }
        .mesg{
            width: 700px;
            height: 80px;
            position:relative;
            margin-top: 30px;
            margin-left: 70px;
        }
        #puton{
            width: 280px;
            height:50px;
            border:2px limegreen solid;
            text-align: center;
            border-radius: 7px;
            font-size: 20px;
        }
    </style>
</head>
<body style="background-color:lightgray">
<div style="width: 700px;height: 800px;border: 5px limegreen solid;
         background-color:white;position:absolute;left: 30%">
    <form action="doAddCar" method="post" enctype="multipart/form-data">
        <div style="width: 700px;height: 80px;position: relative;margin-top: 30px">
            <h1 style="color: limegreen;font-size: 40px;text-align: center">填写车辆信息</h1>
        </div>

        <div class="mesg">
            <span>车型</span>&nbsp;&nbsp;&nbsp;
            <select name="cname" style="width: 500px;height: 50px;border: 1px limegreen solid">
                <option value="ft86">丰田86</option>
                <option value="madMX-5">马自达MX-5</option>
                <option value="bsj718">保时捷718</option>
                <option value="bmZ4">宝马Z4</option>
                <option value="adTT">奥迪TT</option>
            </select>
        </div>

        <div class="mesg">
            <span>品种</span>&nbsp;&nbsp;&nbsp;
            <select name="cvariety" style="width: 500px;height: 50px;border: 1px limegreen solid">
                <option value="ft">丰田</option>
                <option value="mad">马自达</option>
                <option value="bsj">保时捷</option>
                <option value="bm">宝马</option>
                <option value="ad">奥迪</option>
            </select>
        </div>

        <div class="mesg">
            <span>原价</span>&nbsp;&nbsp;&nbsp;
            <input type="number" name="cprice" value="请输入汽车原价" style="width:300px;height: 40px">
        </div>

        <div class="mesg">
            <span>级别</span>&nbsp;&nbsp;&nbsp;
            <input type="radio" name="cleavel" value="0">跑车
            <input type="radio" name="cleavel" value="1">豪车
        </div>

        <div class="mesg">
            <span>上传图片</span>
            <input type="file" name="cimage" multiple style="width: 150px;height: 30px;font-size: 15px">
        </div>

        <div style="position: relative;margin-left: 200px">
            <input type="submit" value="提交" id="puton">
        </div>
    </form>
</div>
</body>
</html>
