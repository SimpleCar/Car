<%--
  Created by IntelliJ IDEA.
  User: hjh
  Date: 2018/3/14
  Time: 11:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>分期</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width" />
    <meta property="wb:webmaster" content="14dba3c44bd1a68e" />
    <meta property="qc:admins" content="23517766776411351663757">
    <meta name="keywords" content="淘车,新车,二手车,分期" />
    <meta name="description" content="淘车分期栏目，为用户提供线上新车二手车分期购车相关金融产品，低门槛，速度快，总有一款适合你！" />
    <meta name="renderer" content="webkit">
    <meta name="applicable-device" content="pc">
    <meta http-equiv="Cache-Control" content="no-transform" />
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <meta name="location" content="province=广东;city=广州;coord=113.30765,23.120049" />
    <link rel="dns-prefetch" href="//www.daikuan.com" />
    <link rel="dns-prefetch" href="//img1.yixinfinance.com" />
    <link rel="dns-prefetch" href="//img2.yixinfinance.com" />
    <link rel="dns-prefetch" href="//img3.yixinfinance.com" />
    <link rel="dns-prefetch" href="//img4.yixinfinance.com" />
    <link rel="icon" type="image/x-icon" href="http://cache.taoche.com/favicon.ico">

    <link rel="canonical" href="//fenqi.taoche.com/topic/" />
    <link rel="alternate" media="only screen and(max-width: 640px)" href="//fenqi.m.taoche.com/topic/" />
    <meta name="mobile-agent" content="format=html5; url=//fenqi.m.taoche.com/topic/" />

    <link href="../../statics/css/stages/common.css" rel="stylesheet" type="text/css" />
    <script>
        //导航url
        var TAOCHEURL = "http://www.taoche.com" + "/";//首页
        var XINCHEURL = "//xin.taoche.com" + "/";//新车
        var FENQIURL = "//fenqi.taoche.com" + "/";//分期
        var USERCENTERURL = "//home.taoche.com" + "/";//用户中心
        var SQURL = "//sq.taoche.com";//申请
        var TIYANDIANURL = "//tiyandian.taoche.com" + "/";//体验店
        var ZHIHUANURL = "//zhihuan.taoche.com" + "/";//置换
        var BANGMAIURL = "//bangmai.taoche.com" + "/";//帮买
        var MAICHEURL = "//maiche.taoche.com" + "/";//卖车
        var PINGGUURL = "http://www.taoche.com/pinggu/";//评估
        var ERSHOUCHEURL = "//guangzhou.taoche.com/all/";//二手车
        var RESURL = "//img1.yixinfinance.com/taoche" + "/"; //静态资源\
        var FENQITOPICURL = "//fenqi.taoche.com" + "/topic/"; //分期专题页

        //api url
        var APIURL = "//webapi.taoche.com" + "/";
        var ADVISERAPIURL = "//adviserapi.daikuan.com" + "/";

        //city
        var city = {"CityId":501,"RegionId":440100,"CityName":"广州","CitySpell":"guangzhou","LocateResultType":3,"ClientIp":"61.140.24.164","ProvinceId":5,"ProvinceName":"广东","Longitude":"113.30765","Latitude":"23.120049"};

        var BusinessLine = 550;

        //广告城市变量
        window.BitautoCityForAd = "广州";
    </script>
    <!--[if lt IE 9]>
    <script src="../../statics/js/stages/shim.dll.js"></script>
    <![endif lt IE 9]-->

    <link href="../../statics/css/stages/index.css" rel="stylesheet" type="text/css" />

    <script>
        //埋点标识
        var BEACON_INIT = {
            data: {
                pid: 88
            }
        }
    </script>
    <style>
        .page-banner {
            background: url(../../statics/image/stages/banner.dec361.png) no-repeat 50%;
            width: 100%;
            height: 340px;
        }
        .page-container section.block-1 dt {
            background: url(../../statics/image/stages/1.de4d6a.png) no-repeat 50%;
        }
        .page-container section.block-2 dt {
            background: url(../../statics/image/stages/2.448009.png) no-repeat 50%;
        }
        .page-container section.block-3 dt {
            background: url(../../statics/image/stages/3.9bf83a.png) no-repeat 50%;
        }
        .page-container section.block-4 dt {
            background: url(../../statics/image/stages/4.34545c.png) no-repeat 50%;
        }
        .page-container section.block-5 dt {
            background: url(../../statics/image/stages/5.d3d12d.png) no-repeat 50%;
        }
    </style>
</head>
<body>
<%--!--二手车公共头判断tab定位-->--%>
<input type="hidden" id="hidMenuFocus" value="fenqi" />
<jsp:include page="top2.jsp"/>






<div class="page-banner"></div>

<div class="page-container">
    <section class="block-1">
        <dl>
            <dt>
                <h3>新车专享</h3>
            </dt>
            <dd>
                <div class="con-top">
                    <div class="col col-left">
                        <h6><em>10</em><span>%</span></h6>
                        <p>最低首付比例</p>
                    </div>
                    <div class="col col-mid">
                        <h6><em>999</em><span>元</span></h6>
                        <p>最低月租</p>
                    </div>
                    <div class="col col-right">
                        <h5>一年后可选方案<span>(二选一)</span></h5>
                        <ul>
                            <li>
                                <em>尾款分期：</em><span>36期</span>
                            </li>
                            <li>
                                <em>尾款付清：</em><span>付清剩余车款</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="con-bottom">
                    <h6>所需材料</h6>
                    <p>身份证、驾照</p>
                    <a href="#" target="_blank">全部车源</a>
                </div>
            </dd>
        </dl>
    </section>

    <section class="block-2">
        <dl>
            <dt>
                <h3>新车·鑫动融</h3>
            </dt>
            <dd>
                <div class="con-top">
                    <div class="col col-left">
                        <h6><em>0</em><span>%</span></h6>
                        <p>最低首付比例</p>
                    </div>
                    <div class="col col-default">
                        <h6><em>0.42</em><span>%</span></h6>
                        <p>月费率</p>
                    </div>
                    <div class="col col-default">
                        <h6><em>2-20万</em></h6>
                        <p>分期额度</p>
                    </div>
                    <div class="col col-right">
                        <h6><em>12/24/36期</em></h6>
                        <p>还款期限</p>
                    </div>
                </div>
                <div class="con-bottom">
                    <h6>所需材料</h6>
                    <p>身份证、银行流水(可覆盖月供金额）/房产证/职业资格证书（3选1）</p>
                    <a href="javascript:void(0)" class="do-supply" data-order-type="3" data-title="新车·鑫动融">立即申请</a>
                </div>
            </dd>
        </dl>
    </section>

    <section class="block-3">
        <dl>
            <dt>
                <h3>新车·一证贷</h3>
            </dt>
            <dd>
                <div class="con-top">
                    <div class="col col-left">
                        <h6><em>20</em><span>%</span></h6>
                        <p>最低首付比例</p>
                    </div>
                    <div class="col col-default">
                        <h6><em>0.49</em><span>%</span></h6>
                        <p>月费率</p>
                    </div>
                    <div class="col col-default">
                        <h6><em>2-12万</em></h6>
                        <p>分期额度</p>
                    </div>
                    <div class="col col-right">
                        <h6><em>12/24/36期</em></h6>
                        <p>还款期限</p>
                    </div>
                </div>
                <div class="con-bottom">
                    <h6>所需材料</h6>
                    <p>身份证</p>
                    <a href="javascript:void(0)" class="do-supply" data-order-type="1" data-title="新车·一证贷">立即申请</a>
                </div>
            </dd>
        </dl>
    </section>

    <section class="block-4">
        <dl>
            <dt>
                <h3>新车·两证通</h3>
            </dt>
            <dd>
                <div class="con-top">
                    <div class="col col-left">
                        <h6><em>20</em><span>%</span></h6>
                        <p>最低首付比例</p>
                    </div>
                    <div class="col col-default">
                        <h6><em>0.49</em><span>%</span></h6>
                        <p>月费率</p>
                    </div>
                    <div class="col col-default">
                        <h6><em>7-20万</em></h6>
                        <p>分期额度</p>
                    </div>
                    <div class="col col-right">
                        <h6><em>12/24/36期</em></h6>
                        <p>还款期限</p>
                    </div>
                </div>
                <div class="con-bottom">
                    <h6>所需材料</h6>
                    <p>身份证、银行流水（可覆盖月供金额）／房贷在还且还款良好/信用卡贷款单笔授信2万以上（3选1）</p>
                    <a href="javascript:void(0)" class="do-supply" data-order-type="2" data-title="新车·两证通">立即申请</a>
                </div>
            </dd>
        </dl>
    </section>

    <section class="block-5">
        <dl>
            <dt>
                <h3>二手车·一证通</h3>
            </dt>
            <dd>
                <div class="con-top">
                    <div class="col col-left">
                        <h6><em>30</em><span>%</span></h6>
                        <p>最低首付比例</p>
                    </div>
                    <div class="col col-default">
                        <h6><em>3.89</em><span>%</span></h6>
                        <p>月费率</p>
                    </div>
                    <div class="col col-default">
                        <h6><em>10-20万</em></h6>
                        <p>分期额度</p>
                    </div>
                    <div class="col col-right">
                        <h6><em>12/24/36期</em></h6>
                        <p>还款期限</p>
                    </div>
                </div>
                <div class="con-bottom">
                    <h6>所需材料</h6>
                    <p>身份证</p>
                    <a href="javascript:void(0)" class="do-supply" data-order-type="0" data-title="二手车·一证通">立即申请</a>
                </div>
            </dd>
        </dl>
    </section>

    <ins id="div_dd96b0c8-8d6e-4315-982b-c610b65d1981" data-type="ad_play" data-adplay_IP="" data-adplay_AreaName="" data-adplay_CityName="" data-adplay_BrandID="" data-adplay_BrandName="" data-adplay_BrandType="" data-adplay_BlockCode="dd96b0c8-8d6e-4315-982b-c610b65d1981"></ins>
</div>

<div id="modal"
     getcode-url="/checkcode"
     login-url="//home.taoche.com/user/CreateAccount"
     service-url="//sq.taoche.com/Home/InformationUseAuthorization"
     get-slide-url="/Code/InitialSign"
     check-slide-url="/Code/CheckSign"
     ershouche-url="/Topic/SetErShouCheClue"
     get-orderinfo-url="//webapi.taoche.com/taoche/Package/GetPackageInfo"
></div>

<!-- 立即申请表单start -->
<form action="" method="post" id="submit-form">
    <input type="hidden" name="PageTitle" value="">
    <input type="hidden" name="SourceUrl" value="">
    <input type="hidden" name="SourceType" value="">
    <input name="Orders" type="hidden" value="">
    <input name="CarId" type="hidden" value="">
    <input name="CityId" type="hidden" value="501">
    <input name="CarPrice" type="hidden" value="">
    <input name="Source" type="hidden" value="1141">
    <input name="Channel" type="hidden" value="1138">
    <input name="DealerId" type="hidden" value="">
    <input name="DealerName" type="hidden" value="">
    <input name="Line" type="hidden" value="">
    <input name="DealerTelphone" type="hidden">
    <input name="SourceDicName" type="hidden" value="">
    <input name="From" type="hidden" value="">

    <input name="DownPayment" type="hidden" value="">
    <input name="LoanAmount" type="hidden" value="">
    <input name="AdviserId" type="hidden" value="">
    <input name="Shop" type="hidden" value="">
    <input name="OrderType" type="hidden" value="1">
</form>
<!-- 立即申请表单end -->



<!--整屏蒙层start-->
<div id="maskLayer"></div>
<!--整屏蒙层end-->
<!--右侧浮动start-->
<ul class="ui-sidebar">
    <li class="app">
        <a href="javascript:void(0)"><i></i></a>
    </li>
    <!-- 普通的打电话start -->
    <li class="feedback">
        <a href="javascript:void(0)"><i></i></a>
    </li>
    <li id="backTop" class="backtop gohover">
        <a href="javascript:void(0)"></a>
        <span>返回顶部</span>
    </li>
    <!-- 普通的打电话end -->
</ul>
<div class="right-nav-line"></div>
<!--右侧浮动end-->

<div id="FooterSEO">

</div>
<!-- 页尾 start-->
<p class="ft-copy"><span>经营许可证编号：京ICP备15006372号-5&nbsp;&nbsp;公安备案号码：京公网安备&nbsp;11010802020005号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CopyRight&nbsp;©&nbsp;2015-2018 taoche.com版权所有&nbsp;北京易鑫信息科技有限公司</span><img class="ft-rc3" src="picture/adv-group.png" alt="广告" /></p>
<!-- 页尾 end-->
<script src="../../statics/js/stages/common.js"></script>
<script src="../../statics/js/stages/react.dll.js"></script>

<!-- 2018 Taoche PC改版新车和二手车公共头部所需JS引用 -->
<script src="../../statics/js/stages/taoche_pc_header_common.js"></script>

<!--艾瑞统计-->
<script>
    (function (G, D, s, c, p) {
        c = {
            UA: "UA-taoche-000001",
            NO_FLS: 0,
            WITH_REF: 1,
            URL: '//st1.taoche.cn/tongji/iwtstatictis/iwt-min.js'
        };
        G._iwt ? G._iwt.track(c, p) : (G._iwtTQ = G._iwtTQ || []).push([c, p]), !G._iwtLoading && lo();
        function lo(t) {
            G._iwtLoading = 1; s = D.createElement("script"); s.src = c.URL;
            t = D.getElementsByTagName("script"); t = t[t.length - 1];
            t.parentNode.insertBefore(s, t);
        }
    })(this, document);
</script>
<!-- 广告代码 -->
<script src="../../statics/js/stages/sensenew.js"></script>

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
<script type="text/javascript" src="../../statics/js/stages/dcs_ucar.js"></script>
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
            bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
        }
        else {
            bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    })();
</script>



<script src="../../statics/js/stages/index.js"></script>
</body>
</html>
