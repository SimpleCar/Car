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
    <script>

        // 创建一个二维数组 第一个位置的元素值必须和当前第一个下拉框的可选项的value值一致
        var arr = new Array(3);
        arr[0] = ["奔驰","GLA","GLC级","C级","E级"];
        arr[1] = ["宝马","X5","X6","Z4"];
        arr[2] = ["保时捷","卡宴","718"];

        function choose(val){
            // 获取
            var city = document.getElementById("city");
            // 获取option
            var cityOp = city.getElementsByTagName("option");
            // 设置可操作
            city.disabled = false;
            // 先删除，后添加
            for (var i = 0; i < cityOp.length; i++) {
                var op = cityOp[i];
                // 删除option
                city.removeChild(op);
                //数组长度发生变化，需处理
                i--;
            }

            // 遍历
            for (var i = 0; i < arr.length; i++) {
                //取一维数组
                var arr1 = arr[i];
                //取一维数组的第一个值
                var firstVal = arr1[0];
                //判断
                if(firstVal == val){
                    //遍历
                    for (var j = 1; j < arr1.length; j++) {
                        // 获取
                        var value = arr1[j];
                        // 创建option
                        var optionl = document.createElement("option");
                        // 创建文本
                        var textl = document.createTextNode(value);
                        // 把文本添加到标签
                        optionl.appendChild(textl);
                        //添加
                        city.appendChild(optionl);
                    }
                }
            }
        }
    </script>
</head>
<body style="background-color:lightgray">
<div style="width: 700px;height: 800px;border: 5px limegreen solid;
         background-color:white;position:absolute;left: 30%">
    <form action="doAddCar" method="post" enctype="multipart/form-data">
        <div style="width: 700px;height: 80px;position: relative;margin-top: 30px">
            <h1 style="color: limegreen;font-size: 40px;text-align: center">填写车辆信息</h1>
        </div>

        <div class="mesg" >

            <span>品牌</span>&nbsp;&nbsp;&nbsp;

            <select name="cvariety" id="province" onchange="choose(this.value)"  style="width: 500px;height: 50px;border: 1px limegreen solid">
                <option value="0">--请选择品牌--</option>
                <option value="奔驰">奔驰</option>
                <option value="宝马">宝马</option>
                <option value="保时捷">保时捷</option>
            </select>
        </div>

        <div class="mesg">
            <span>车型</span>&nbsp;&nbsp;&nbsp;
            <select name="cname" id="city" disabled="disabled" style="width: 500px;height: 50px;border: 1px limegreen solid ;">
                <option value="0">--请选择车型--</option>
            </select>

        </div>

        <div class="mesg">
            <span>原价</span>&nbsp;&nbsp;&nbsp;
            <input type="number" name="cprice" value="请输入汽车原价" style="width:300px;height: 40px">
        </div>

        <div class="mesg">
            <span>级别</span>&nbsp;&nbsp;&nbsp;
            <input type="radio" name="cleavel" value="0">跑车
            <input type="radio" name="cleavel" value="1" checked="checked">豪车
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
