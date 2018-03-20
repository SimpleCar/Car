


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
    <title>个人资料</title>
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
    
    <link href="../../statics/single/common.css" rel="stylesheet" type="text/css" />

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
        <script src="//img1.yixinfinance.com/taoche/dll/shim.dll.js?v=201706081140"></script>
    <![endif lt IE 9]-->
    
    <link rel="stylesheet" href="../../statics/single/userprofile.css" />

    <style>
        #tc_top_divCurrentCityName {
            display: none;
        }
    </style>
</head>
<body>

<link rel="stylesheet" type="text/css" href="../../statics/single/2018_pc_headfoot_style-20180305102257-1506.css" media="all" />
    <jsp:include page="top2.jsp"/>
    <!-- header -->
    <input type='hidden' name='__RequestVerificationToken' id='__RequestVerificationToken' data-id='39t_hTSkVrGsEiepyvlyVQbsL-nvM8NJcZJnZKKovE9H51z2WSLzQlkaOqEsppksI87XkxNUsKEO5SIxQy89GovBAcY1' value='39t_hTSkVrGsEiepyvlyVQbsL-nvM8NJcZJnZKKovE9H51z2WSLzQlkaOqEsppksI87XkxNUsKEO5SIxQy89GovBAcY1'>

    <!--Content-->
    
<div class="bg_col">
    <article class="user_warp">
        
<script>
    var arrImg = ['../../statics/single/car-001.png',
      '../../statics/single/car-002.png',
          '../../statics/single/car-003.png',
          '../../statics/single/car-004.png',
          '../../statics/single/car-005.png',
          '../../statics/single/car-006.png',
          '../../statics/single/car-007.png',
          '../../statics/single/images/car-008.png'];
</script>

        <jsp:include page="orderLeft.jsp"/>

        <article class="user_con" id="userRight">
            <div class="user_tip_box"><i class="warning"></i>个人资料仅用于您私人使用，保证数据安全<i class="colse"></i></div>
            <div class="title_box">
                <h2 class="h2">个人资料</h2>
            </div>
            <section class="user_from_box">
                <div class="tab_text_box" id="userProfileText">
                    <ul class="user_from">
                        <li class="item">
                            <div class="txt">昵 &nbsp; &nbsp;  &nbsp; 称</div>
                            <div class="info">
                                <span class="i_txt" id="NickNameTxt">132****6334</span>
                            </div>
                        </li>
                        
                        <li class="item">
                            <div class="txt">性 &nbsp; &nbsp;  &nbsp; 别</div>
                            <div class="info">
                                <span class="i_txt" id="GenderTxt"></span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">出生年月</div>
                            <div class="info">
                                <span class="i_txt" id="BirthdayTxt"></span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">星 &nbsp; &nbsp;  &nbsp; 座</div>
                            <div class="info">
                                <span class="i_txt" id="ConstellationTxt"></span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">所&nbsp; 在 &nbsp;地</div>
                            <div class="info">
                                <span class="i_txt" id="CityIDTxt"></span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">详细地址</div>
                            <div class="info">
                                <span class="i_txt" id="AddressTxt"></span>
                            </div>
                        </li>
                    </ul>
                    <div class="user_btn_box">
                        <a href="javascript:;" class="btn_org" id="UserEditBtn">编辑</a>
                    </div>
                </div>
                <div class="tab_input_box" id="userProfileInput">
                    <ul class="user_from">
                        <li class="item">
                            <div class="txt">昵 &nbsp;  &nbsp; 称</div>
                            <div class="info">
                                <span class="input"><input type="text" name="name" class="input_line UsernameInput" value="132****6334" id="NickName" maxlength="10" /></span>
                                <span class="alert"><i></i>您输入的字符过长，请限制在十个字符以内</span>
                            </div>
                        </li>
                        
                        <li class="item">
                            <div class="txt">性 &nbsp;  &nbsp; 别</div>
                            <div class="info">
                                <span class="input input_select" id="Gender">
                                    <select class="select" id="select">
                                            <option selected="selected" value="男">男</option>
                                            <option value="女">女</option>

                                    </select>
                                </span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">出生年月</div>
                            <div class="info">
                                <span class="i_txt"><input type="text" id="Birthday" class="input_line" name="" placeholder="" readonly="" value=""></span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">星 &nbsp;  &nbsp; 座</div>
                            <div class="info">
                                <span class="input"><input type="text" id="Constellation" class="input_line3 col_grey9" name="" placeholder="" readonly="readonly"></span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">所&nbsp;在&nbsp;地</div>
                            <div class="info">
                                <span class="input"><div id="CityID" class="selCityLeft" data-id="0"></div></span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="txt">详细地址</div>
                            <div class="info">
                                <span class="textarea_span">
                                    <textarea class="user_textarea" id="Address" maxlength="100"></textarea>
                                    <span class="user_textarea_tip" id="userTextareaTip">当前已输入<i class=" col_org" id="taxtareaTotal">100</i>个字符，剩余可输入<i class=" col_org" id="taxtareaActual">0</i>个字符！</span>
                                </span>
                            </div>
                        </li>
                    </ul>
                    <div class="user_btn_box">
                        <a href="javascript:;" class="btn_org" id="UserSaveBtn">保存</a>
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


    <script src="../../statics/single/common.js"></script>

    
    <script src="../../statics/single/userprofile.js"></script>

    <!-- -----------------------尾开始--------------------------- -->
    <p class="ft-copy"><span>经营许可证编号：京ICP备15006372号-5&nbsp;&nbsp;公安备案号码：京公网安备&nbsp;11010802020005号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CopyRight&nbsp;©&nbsp;2015-2018 taoche.com版权所有&nbsp;北京易鑫信息科技有限公司</span><img class="ft-rc3" src="//image.bitautoimg.com/taoche/2018_pc_usedcar/adv-group.png" alt="广告" /></p>
    
    <!-- -----------------------尾结束--------------------------- -->
    <!-- 2018 Taoche PC改版新车和二手车公共头部所需JS引用 -->
    <script src="../../statics/single/taoche_pc_header_common.js"></script>
    <!-- 广告代码 -->
<script src="../../statics/single/senseNew.js"></script>

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
<script type="text/javascript" src="../../statics/single/dcs_ucar.js"></script>
<!--大数据-->
<script type="text/javascript">
    (function () {
        var dc = document.createElement("script"); dc.type = "text/javascript"; dc.async = true;
        dc.src = ("https:" == document.location.protocol ? "https://" : "http://") + "js.ctags.cn/dc.js?163"; //此ID为系统生成的网站唯一标识
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
        bc.src = '../../statics/single/bc.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(bc, s);
    })();
</script>

<!--seo,自动推送代码-->
<script>
    (function () {
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
            bp.src = '../../statics/single/push.js';
        }
        else {
            bp.src = '../../statics/single/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    })();
</script>

       
</body>


</html>
