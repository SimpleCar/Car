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
    <title>商家注册申请</title>
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
            margin-left: 420px;
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
    <script>

        // 创建一个二维数组 第一个位置的元素值必须和当前第一个下拉框的可选项的value值一致
        var arr = new Array(3);
        arr[0] = ["广东省","广州市","深圳市","东莞市","佛山市","中山市"];
        arr[1] = ["福建省","福州市","厦门市"];
        arr[2] = ["贵州省","贵阳市","遵义市","六盘水市"];

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
        function yanzhengquyu(){
            var citys=document.getElementById("city");
            var city=citys.value;
            var quyu=document.getElementById("quyu");
            if(city==0){
                quyu.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请选择所在省份和城市";
                quyu.style.color="red";
                return false;
            }else{
                quyu.innerHTML="&nbsp;";
                return true;
            }
        }
        function yanzhengmingzi(){
            var mingzi=document.getElementById("shangjiamingzi");
            var mingzizhi=mingzi.value;
            var mingzicuowu=document.getElementById("mingzicuowu");
            if(mingzizhi==""||mingzizhi==null){
                mingzicuowu.innerHTML="商家名字不能为空";
                mingzicuowu.style.color="red";
                return false;
            }else if(mingzizhi!=mingzizhi.replace(/(^\s*)|(\s*$)/g,"")){
                mingzicuowu.innerHTML="不能输出空格等非法字符";
                mingzicuowu.style.color="red";
                return false;
            }else{
                mingzicuowu.innerHTML="&nbsp;";
                return true;
            }
        }
        function yanzhengshouji(){
            var shouji=document.getElementById("shangjiashouji");
            var shoujihao=shouji.value;
            var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
            var shoujicuowu=document.getElementById("shoujicuowu");
            if(shoujihao==""){
                shoujicuowu.innerHTML="手机号不能为空";
                shoujicuowu.style.color="red";
                return false;
            }else if (!myreg.test(shoujihao)) {
                shoujicuowu.innerHTML="无效的手机号码";
                shoujicuowu.style.color="red";
                return false;
            } else {
                shoujicuowu.innerHTML="&nbsp;";
                shoujicuowu.style.color="green";
                return true;
            }
        }
        function quanpanduan(){
            if(yanzhengmingzi()==true&&yanzhengshouji()==true&&yanzhengquyu()){
                return true;
            }else{
                return false;
            }
        }
    </script>
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
                <span>商家类型</span>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="4S店" name="shangjialeixing">4S店&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="个人" name="shangjialeixing" checked="checked">个人<br/>
                <br/>
                <br/>
                <span>商家地址</span>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;
                <select name="bShengFen" id="province" onchange="choose(this.value)"  style="width: 120px;height: 30px;border: 1px limegreen solid">
                    <option value="0">--请选择省份--</option>
                    <option value="广东省">广东省</option>
                    <option value="福建省">福建省</option>
                    <option value="贵州省">贵州省</option>
                </select>
                &nbsp;
                <select name="bQuYu" id="city" onblur="yanzhengquyu()" disabled="disabled" style="width: 120px;height: 30px;border: 1px limegreen solid ;">
                    <option value="0">--请选择区域--</option>
                </select>
                <br/>
                <br/>
                <span id="quyu">&nbsp;</span>
                <br/>
                <br/>
                <span>商家名字</span>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<input onblur="yanzhengmingzi()" style="height: 30px;border: 1px limegreen solid;" type="text" name="shangjiamingzi" id="shangjiamingzi" placeholder="请输入商家名字"/>&nbsp;&nbsp;<span id="mingzicuowu">&nbsp;</span>
                <br/>
                <br/>
                <br/>
                <span>手机号码</span>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<input onblur="yanzhengshouji()" style="height: 30px;border: 1px limegreen solid;" type="text" name="shangjiashouji" id="shangjiashouji" placeholder="请输入商家手机号码"/>&nbsp;&nbsp;<span id="shoujicuowu">&nbsp;</span>
                <br/>
                <br/>
                <br/>
                <span>营业执照</span>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<input type="file" name="yingyezhizhao" multiple>
                <br/>
                <br/>
                <br/>
                <input id="shenqinganniu" type="submit" onclick="return quanpanduan()" value="申请审核">
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
