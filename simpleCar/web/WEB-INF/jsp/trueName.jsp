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
    <title>实名认证</title>
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
    
    <link href="../../statics/trueName/common.css?v=201801301002" rel="stylesheet" type="text/css" />

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
        <script src="../../statics/trueName/shim.dll.js?v=201706081140?v=201801301002"></script>
    <![endif lt IE 9]-->
    
    
<link rel="stylesheet" href="../../statics/trueName/certificate-info.css?v=201801301002" />


    <style>
        #tc_top_divCurrentCityName {
            display: none;
        }
    </style>
</head>
<body>
    <!-- -----------------------头开始--------------------------- -->
    
<link rel="stylesheet" type="text/css" href="../../statics/trueName/2018_pc_headfoot_style-20180305102257-1506.css" media="all" />
    <jsp:include page="top.jsp"/>
    <!-- header -->
    <input type='hidden' name='__RequestVerificationToken' id='__RequestVerificationToken' data-id='mLWF8f8_LLMXvQjiQ79lgyjZlpYcpYOKnmvKwZpcl8CFScLxptH9T08IkuQMyMa895Sm4bSsol8I79Z233yXEl6aooY1' value='mLWF8f8_LLMXvQjiQ79lgyjZlpYcpYOKnmvKwZpcl8CFScLxptH9T08IkuQMyMa895Sm4bSsol8I79Z233yXEl6aooY1'>

    <!--Content-->
    
<div class="bg_col">
    <article class="user_warp">
        
<script>
    var arrImg = ['../../statics/trueName/car-001.png?v=201801301002',
      '../../statics/trueName//images/car-002.png?v=201801301002',
          '../../statics/trueName/car-003.png?v=201801301002',
          '../../statics/trueName/car-004.png?v=201801301002',
          '../../statics/trueName/images/car-005.png?v=201801301002',
          '../../statics/trueName/car-006.png?v=201801301002',
          '../../statics/trueName/car-007.png?v=201801301002',
          '../../statics/trueName/images/car-008.png?v=201801301002'];
</script>

        <jsp:include page="orderLeft.jsp"/>
        <article class="user_con" id="userRight">
            <div class="title_box">
                <h2 class="h2">实名认证</h2>
            </div>
            <div class="user_prompt_cart">
                <div class="user_p_c_left">
                    <div class="user_p_c_box">
                        <div class="user_p_c_tit">实名认证前，您需要：</div>
                        <div class="user_p_c_con">
                            <ul class="user_p_c_ul">
                                <li>提供本人有效期内身份证件信息，不得使用或冒用他人信息。</li>
                                <li>阅读并同意《易鑫实名认证服务协议》</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="user_p_c_right">
                    <div class="user_p_c_box">
                        <div class="user_p_c_tit">实名认证后，您可以：</div>
                        <div class="user_p_c_con">
                            <ul class="user_p_c_ul">
                                <li>获取精准易鑫一证贷额度</li>
                                <li>快速申请、极速审批特权</li>
                                <li>提升申请额度、提高账户安全等级</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section class="user_from_box">
                    <div class="tab_input_box user_from_box_cer" id="tabTextBoxCer" style="display:block;">
                        <ul class="user_from">
                            <li class="item">
                                <div class="txt">真实姓名</div>
                                <div class="info">
                                    <span class="input"><input type="text" name="name" class="input_line" value="" id="UserRealName" placeholder="请输入您的真实姓名" autocomplete="off" /></span>
                                    <span class="alert"><i></i>您输入的姓名有误</span>
                                </div>
                            </li>
                            <li class="item">
                                <div class="txt">证件类型</div>
                                <div class="info">
                                    <span class="input"><input type="text" name="name" class="input_line2" value="身份证" data-id="105" readonly="readonly" id="CertificateType" autocomplete="off" /></span>
                                </div>
                            </li>
                            <li class="item">
                                <div class="txt">证件号码</div>
                                <div class="info">
                                    <span class="input"><input type="text" name="name" class="input_line UsernameInput" id="IdCardCode" autocomplete="off" maxlength="18" /></span>
                                    <span class="alert"><i></i>您输入的证件号有误</span>
                                </div>
                            </li>
                            <li class="item">
                                <div class="txt"></div>
                                <div class="info">
                                    <span class="checkbox_span"><input type="checkbox" checked="checked" id="checkboxID" /></span>阅读并同意<a href="/User/CertificateXieYi" target="_blank">《易鑫实名认证服务协议》</a>
                                </div>
                            </li>
                        </ul>

                        <div class="user_btn_box">
                            <a href="javascript:;" class="btn_org" id="UserEditBtnCer">提交认证信息</a>
                        </div>
                    </div>
                    <div class="tab_text_box user_from_box_cer_t" id="tabInputBox" style="display:none;">
                        <div class="u_f_b_cer_t"><i class="ok"></i>您已通过实名认证！</div>
                        <ul class="user_from">
                            <li class="item">
                                <div class="txt">真实姓名</div>
                                <div class="info">
                                    <span class="i_txt" id="UserRealNameTxt"></span>
                                </div>
                            </li>
                            <li class="item">
                                <div class="txt">证件类型</div>
                                <div class="info">
                                    <span class="i_txt" id="CertificateTypeTxt">身份证</span>
                                </div>
                            </li>
                            <li class="item">
                                <div class="txt">证件号码</div>
                                <div class="info">
                                    <span class="i_txt" id="IdCardCodeTxt"></span>
                                </div>
                            </li>
                        </ul>

                    </div>

                

            </section>
        </article>
    </article>
</div>


    <!--Content-->
    <!--整屏蒙层start-->
    <div id="maskLayer"></div>
    <!--整屏蒙层end-->


    <script src="../../statics/trueName/common.js?v=201801301002"></script>

    
    <script src="../../statics/trueName/certificate-info.js?v=201801301002"></script>

    <!-- -----------------------尾开始--------------------------- -->
    <p class="ft-copy"><span>经营许可证编号：京ICP备15006372号-5&nbsp;&nbsp;公安备案号码：京公网安备&nbsp;11010802020005号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CopyRight&nbsp;©&nbsp;2015-2018 taoche.com版权所有&nbsp;北京易鑫信息科技有限公司</span><img class="ft-rc3" src="//image.bitautoimg.com/taoche/2018_pc_usedcar/adv-group.png" alt="广告" /></p>
    
    <!-- -----------------------尾结束--------------------------- -->
    <!-- 2018 Taoche PC改版新车和二手车公共头部所需JS引用 -->
    <script src="../../statics/trueName/taoche_pc_header_common.js?v=201801301002"></script>
    <!-- 广告代码 -->
<script src="../../statics/trueName/senseNew.js"></script>

<!--百度统计PC-->
<script>
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "../../statics/trueName/hm.js?b43ce35f868b496d8c3af5108a539019";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
<!--webtrendsPC-->
<script type="text/javascript" src="../../statics/trueName/dcs_ucar.js"></script>
<!--大数据-->
<script type="text/javascript">
    (function () {
        var dc = document.createElement("script"); dc.type = "text/javascript"; dc.async = true;
        dc.src = "../../statics/trueName/dc.js?163"; //此ID为系统生成的网站唯一标识
        var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(dc, s);
    })();
</script>
<!-- 百度统计pc端 -->
<script>
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = window.location.host.indexOf("etaoche.cn")>=0?"../../statics/trueName//hm.js?f68148618e51c0e86681df69a3d0d08d":"https://hm.baidu.com/hm.js?db7dedc48a653d8087cb460082e491b4";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>

<!-- 易鑫统计基础代码 -->
<script>
    (function () {
        var bc = document.createElement('script'); bc.type = 'text/javascript'; bc.async = true;
        bc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dt.taoche.com/bc.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(bc, s);
    })();
</script>

<!--seo,自动推送代码-->
<script>
    (function () {
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
            bp.src = '../../statics/trueName/push.js';
        }
        else {
            bp.src = '../../statics/trueName/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    })();
</script>

       
</body>


</html>
