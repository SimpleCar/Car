


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
    <title>信用信息</title>
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
    
    <link href="../../statics/credit/common.css" rel="stylesheet" type="text/css" />

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
        <script src="../../statics/credit/shim.dll.js"></script>
    <![endif lt IE 9]-->
    
    <link rel="stylesheet" href="../../statics/credit/qualification.css" />

    <style>
        #tc_top_divCurrentCityName {
            display: none;
        }
    </style>
</head>
<body>
    <!-- -----------------------头开始--------------------------- -->

<link rel="stylesheet" type="text/css" href="../../statics/credit/2018_pc_headfoot_style-20180305102257-1506.css" media="all" />

    <jsp:include page="top.jsp"/>
    <!-- header -->
    <input type='hidden' name='__RequestVerificationToken' id='__RequestVerificationToken' data-id='L-I8UHk5gt4jGwC3o1YH6Iy3g0s7XC5b7DZrwhJ8fZyPd1aii2Ap-NU7pfIN3PKVFDcZv2bPZsGG1t5jUC8wwCjwcns1' value='L-I8UHk5gt4jGwC3o1YH6Iy3g0s7XC5b7DZrwhJ8fZyPd1aii2Ap-NU7pfIN3PKVFDcZv2bPZsGG1t5jUC8wwCjwcns1'>

    <!--Content-->
    
<div class="bg_col">
    <article class="user_warp">
        
<script>
    var arrImg = ['../../statics/credit/car-001.png',
      '../../statics/credit//images/car-002.png',
          '../../statics/credit/car-003.png',
          '../../statics/credit/car-004.png',
          '../../statics/credit/images/car-005.png',
          '../../statics/credit/car-006.png',
          '../../statics/credit/car-007.png',
          '../../statics/credit/images/car-008.png'];
</script>

        <jsp:include page="orderLeft.jsp"/>
        <article class="user_con" id="userRight">
            <div class="title_box">
                <h2 class="h2">信用信息</h2>
            </div>
            <section class="user_from_box">
                <div class="tab_text_box user_from_box_qua prompt_tip" id="qualificationText">
                    <div class="user_prompt_box">
                        <div class="user_p_tit">小贴士</div>
                        <div class="user_p_info">真实的信用资质信息，将提高您的申请速度，根据您的资质信息快速、精准的为您推荐金融方案，快速申请、急速借贷！！</div>
                        <a href="http://www.taoche.com" class="user_btn_pink">点这里，去首页</a>
                    </div>
                    <ul class="user_from">
                        <li class="item">
                            <div class="txt">职业</div>
                            <div class="info">
                                <span class="i_txt" id="CareerTxt"></span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">工资收入</div>
                            <div class="info">
                                <span class="i_txt" id="IncomeTxt"></span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">社保情况</div>
                            <div class="info">
                                <span class="i_txt" id="InsuranceTxt"></span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">公积金</div>
                            <div class="info">
                                <span class="i_txt" id="FundsTxt"></span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">信用记录</div>
                            <div class="info">
                                <span class="i_txt" id="CreditTxt"></span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">住房状态</div>
                            <div class="info">
                                <span class="i_txt" id="HouseStateTxt"></span>
                            </div>
                        </li>
                    </ul>
                    <div class="user_btn_box">
                        <a href="javascript:;" class="btn_org" id="UserQuaEditBtn">编辑</a>
                    </div>
                </div>
                <div class="tab_input_box prompt_tip" id="qualificationInput">
                    <div class="user_prompt_box">
                        <div class="user_p_tit"><i></i>温馨提示</div>
                        <div class="user_p_info">完善个人真实资质信息，加入平台实名认证体系，获取易鑫优质金融方案推荐，精准匹配、快速申请，让你的申请不再繁琐！</div>
                    </div>
                    <ul class="user_from">
                        <li class="item">
                            <div class="txt">职业</div>
                            <div class="info">
                                <span class="input input_select" id="Career">
                                    <select class="select" id="">
                                                <option value="0">请选择职业身份</option>                                                <option value="73">公务员/事业单位</option>                                                <option value="74">企业主</option>                                                <option value="75">个体户</option>                                                <option value="76">上班族</option>                                                <option value="77">自由职业者</option>                                    </select>
                                </span>

                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">工资收入</div>
                            <div class="info">
                                <span class="input input_select" id="Income">
                                    <select class="select" id="">
                                                <option value="0">请选择收入情况</option>                                                 <option value="66">3000元以下</option>                                                 <option value="67">3000-5000元</option>                                                 <option value="68">5000-8000元</option>                                                 <option value="69">8000-12000元</option>                                                 <option value="108">12000-20000元</option>                                                 <option value="109">20000元以上</option>                                     </select>
                                </span>

                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">社保情况</div>
                            <div class="info">
                                <span class="input input_select" id="Insurance">
                                    <select class="select" id="v">
                                            <option value="-1" selected="selected">请选择社保情况</option>
                                            <option value="1">有社保</option>
                                            <option value="0">无社保</option>

                                    </select>
                                </span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">公积金</div>
                            <div class="info">
                                <span class="input input_select" id="Funds">
                                    <select class="select" id="">
                                            <option value="-1" selected="selected">请选择公积金情况</option>
                                            <option value="1">有公积金</option>
                                            <option value="0" >无公积金</option>
                                    </select>
                                </span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">信用记录</div>
                            <div class="info">
                                <span class="input input_select" id="Credit">
                                    <select class="select" id="">
                                                <option value="0">请选择信用记录</option>                                                 <option value="71">信用良好</option>                                                 <option value="72">少数逾期</option>                                                 <option value="70">多次逾期</option>                                                 <option value="256">无信用记录</option>                                     </select>
                                </span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">住房状态</div>
                            <div class="info">
                                <span class="input input_select" id="HouseState">
                                    <select class="select" id="">
                                                <option value="0">请选择住房状态</option>                                                 <option value="79">自有全款</option>                                                 <option value="80">自有贷款</option>                                                 <option value="81">租赁</option>                                     </select>
                                </span>
                            </div>
                        </li>
                    </ul>
                    <div class="user_btn_box">
                        <a href="javascript:;" class="btn_org" id="UserQuaSaveBtn">保存</a>
                    </div>
                </div>

            </section>
        </article>
    </article>
</div>


    <!--Content-->
    <!--整屏蒙层start-->
    <div id="maskLayer"></div>
    <!--整屏蒙层end-->


    <script src="../../statics/credit/common.js"></script>

    
    <script src="../../statics/credit/qualification.js"></script>

    <!-- -----------------------尾开始--------------------------- -->
    <p class="ft-copy"><span>经营许可证编号：京ICP备15006372号-5&nbsp;&nbsp;公安备案号码：京公网安备&nbsp;11010802020005号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CopyRight&nbsp;©&nbsp;2015-2018 taoche.com版权所有&nbsp;北京易鑫信息科技有限公司</span><img class="ft-rc3" src="//image.bitautoimg.com/taoche/2018_pc_usedcar/adv-group.png" alt="广告" /></p>
    
    <!-- -----------------------尾结束--------------------------- -->
    <!-- 2018 Taoche PC改版新车和二手车公共头部所需JS引用 -->
    <script src="../../statics/credit/taoche_pc_header_common.js"></script>
    <!-- 广告代码 -->
<script src="../../statics/credit/senseNew.js"></script>

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
<script type="text/javascript" src="../../statics/credit/dcs_ucar.js"></script>
<!--大数据-->
<script type="text/javascript">
    (function () {
        var dc = document.createElement("script"); dc.type = "text/javascript"; dc.async = true;
        dc.src = "../../statics/credit/dc.js?163"; //此ID为系统生成的网站唯一标识
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
        bc.src = '../../statics/credit/bc.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(bc, s);
    })();
</script>

<!--seo,自动推送代码-->
<script>
    (function () {
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
            bp.src = '../../statics/creditpush.js';
        }
        else {
            bp.src = '../../statics/credit/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    })();
</script>

       
</body>


</html>
