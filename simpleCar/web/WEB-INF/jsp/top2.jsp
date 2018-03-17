<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/3/14
  Time: 14:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>top</title>
</head>


<body>
<!-- 页头 start-->

<link rel="stylesheet" type="text/css" href="../../statics/css/headfoot_style.css"
      media="all">

<!-- 顶部 s -->
<div class="shortcut">
    <div class="w1200 clearfix">
        <!-- left -->
        <div class="back-home float-l">
            <a href="${pageContext.request.contextPath}/goTo/indexPage" title="淘车-腾讯京东百度易车共同投资的互联网汽车交易平台" class="back-link"
               logwt="navigation_header_taoche">淘车首页</a>
        </div>
        <!-- right -->
        <ul class="clearfix shortcut_info float-r">
            <li>
                <span>欢迎来到淘车</span>
                <a href="${pageContext.request.contextPath}/goTo/signIn" class="active" id="tc_top_myNickName">登录</a>
            </li>
            <li id="tc_top_liMyTaoche" class="my-tc">
                <a href="javascript:;" class="info-link" logwt="navigation_header_login_C" id="tc_top_myTaoche">我的淘车
                    <i></i>
                </a>
                <div class="my-tc-menu" id="tc_top_myTaocheList">
                    <a href="#" target="_blank">新车订单</a>
                    <a href="#" target="_blank">二手车订单</a>
                    <a href="#" target="_blank">二手车服务</a>
                    <a href="#" target="_blank" logwt="navigation_header_Cadmin">免费发车</a>
                </div>
            </li>
            <li id="tc_top_liMyDealer" class="my-sj">
                <a href="${pageContext.request.contextPath}/goTo/businessLogin" class="info-link" id="tc_top_myDealer">我是商家
                    <i></i>
                </a>
                <div class="my-seller-menu" id="tc_top_myDealerList">
                    <a href="${pageContext.request.contextPath}/goTo/businessLogin
" target="_blank" logwt="navigation_header_login_B">商家登录</a>

                </div>
            </li>
            <li id="tc_top_liAppDownload" class="app-down">
                <a href="javascript:;" class="info-link" id="tc_top_appDownload">App
                    <i></i>
                </a>
                <div class="my-app-down" id="tc_top_appDownloadList">
                    <a href="#" target="_blank" rel="nofollow"
                       logwt="navigation_header_app_ersc">
                        淘车
                        <div class="scan-code">
                            <img src="../../statics/image/scan-code.png" alt="">
                        </div>
                    </a>
                    <a href="#" target="_blank" rel="nofollow">淘车新车</a>
                    <a href="#" target="_blank" rel="nofollow"
                       logwt="navigation_header_app_ersc">淘车二手车</a>
                    <a href="#" target="_blank" rel="nofollow">易鑫车贷</a>
                </div>
            </li>
            <li class="yx-zp">
                <a rel="nofollow" target="_blank" href="#" title="易鑫招聘" class="info-link">易鑫招聘</a>
            </li>
        </ul>
    </div>
</div>
<!-- 顶部 e -->
<!--全屏广告-->
<div id="divFullPic" class="add-adv1"></div>
<!--头部广告 star -->
<div id="divHeadPic" class="add-adv1"></div>
<!--头部广告 end -->
<!-- 头部 s -->
<div class="tc-header">
    <div class="w1200">
        <div class="logo">
            <a href="#" title="淘车网">
                <!--[if IE]>
                <img src="//image.bitautoimg.cimage/om/taoche/2018_pc_usedcar/taoche-logo.png" width="102" height="76"
                     alt="淘车"/>
                <![endif]-->
                <!--[if !IE]><!-->
                <img src="../../statics/image/taoche-logo.svg" width="102" height="76" alt="淘车">
                <!--<![endif]-->
            </a>
        </div>
        <!-- city-hover -->
        <div id="tc_top_divCurrentCityName" class="city-name">
            <a id="tc_top_currentCityName" href="javascript:;" class="city-name-link">广州<em></em></a>
        </div>
        <div class="search clearfix">
            <div class="search-tab">
                <a href="javascript:" class="current" id="tc_search_newcarTab">新车</a>
                <a href="javascript:" id="tc_search_ershoucheTab">二手车</a>
            </div>
            <span class="sel-car-wrapper"><input type="text" id="tc_search_txtNewcar" name="tc_search_txtNewcar"
                                                 autocomplete="off" placeholder="请输入心仪的品牌或车型"><div
                    class="sel-car-brands drop-layer" style="top: 14px;"><div class="sel-car-loading"></div><div
                    class="brand_letters" id="master-index_letters"></div><div class="brand_name_bg"><div
                    class="brand_name" id="masterIndexList"></div></div></div><div class="sel-car-type drop-layer"
                                                                                   style="top: 14px;"><div
                    class="sel-car-loading"></div></div><div class="sel-car-menu drop-layer" style="top: 14px;"></div><div
                    class="empty-search"></div></span>
            <a class="search-btn" id="tc_search_btnNewcar" href="javascript:;">搜索</a>
            <input type="text" id="tc_search_txtErshouche" name="tc_search_txtErshouche" autocomplete="off"
                   placeholder="搜“5万 捷达”试试" style="display:none;">
            <a class="search-btn" href="javascript:;" id="tc_search_btnErshouche" style="display:none;">搜索</a>
            <!-- 搜索历史记录 -->
            <div id="divList" class="search-layer" style="display:none;"></div>
        </div>
    </div>
</div>
<!-- 头部 e -->

<!--头部城市浮层 end -->
<!-- 菜单导航 s -->
<div class="nav_menu">
    <ul id="ul_menu" class="area clearfix">
        <li data-menu="home" class="home">
            <a logwt="navigation_home" class="link" href="/goTo/indexPage" _islog="1">
                <span>首页</span>
            </a>
            <em class="spacer"></em>
        </li>
        <li data-menu="xinche">
            <a logwt="navigation_newcar" class="link" href="/goTo/newCar" _islog="1">
                <span>新车</span>
            </a>
            <em class="spacer"></em>
        </li>

        <li data-menu="fenqi">
            <a logwt="navigation_insurance" class="link" href="/goTo/carInsurance" _islog="1">
                <span>车险</span>
            </a>
            <em class="spacer"></em>
        </li>

        <li data-menu="fenqi">
            <a logwt="navigation_installment" class="link" href="/goTo/stages" _islog="1">
                <span>分期</span>
            </a>
            <em class="spacer"></em>
        </li>

        <li data-menu="tiyandian">
            <a logwt="navigation_store" class="link" href="/goTo/try" _islog="1">
                <span>体验店</span>
            </a>
        </li>
    </ul>
</div>
<!-- 菜单导航 e -->


<div class="city-list-wrapper">
    <!--头部城市浮层 star -->
    <div id="tc_top_divCityList" class="header-city-layer hide">

        <dl class="header-city-hot">
            <dt class="header-city-hot-tit">
                热门
            </dt>
            <dd class="header-city-hot-text">
                <a title="北京" href="#" attr-cityid="201"
                   logwt="citystation_hot_beijing">北京</a>
                <a title="广州" href="#" attr-cityid="501"
                   logwt="citystation_hot_guangzhou">广州</a>
                <a title="上海" href="#" attr-cityid="2401"
                   logwt="citystation_hot_shanghai">上海</a>
                <a title="深圳" href="#" attr-ci
                   tyid="502" logwt="citystation_hot_shenzhen">深圳</a>
                <a title="成都" href="#" attr-cityid="2501" logwt="citystation_hot_chengdu">成都</a>
                <a title="东莞" href="#" attr-cityid="504" logwt="citystation_hot_dongguan">东莞</a>
                <a title="重庆" href="#" attr-cityid="3101"
                   logwt="citystation_hot_chongqing">重庆</a>
                <a title="西安" href="#" attr-cityid="2301" logwt="citystation_hot_xian">西安</a>
                <a title="武汉" href="#" attr-cityid="1201"
                   logwt="citystation_hot_wuhan">武汉</a>
                <a title="郑州" href="#" attr-cityid="1001"
                   logwt="citystation_hot_zhengzhou">郑州</a>
                <a title="佛山" href="#" attr-cityid="518"
                   logwt="citystation_hot_foshan">佛山</a>
                <a title="苏州" href="#" attr-cityid="1502"
                   logwt="citystation_hot_suzhou">苏州</a>
            </dd>
        </dl>

        <div class="header-city-province">
            <h5>省份</h5>
            <div class="header-city-province-tit clearfix">

                <a data-code="A" href="javascript:void(0);" class="current" logwt="citystation_alphabet_A">A</a>
                <a data-code="B" href="javascript:void(0);" class="" logwt="citystation_alphabet_B">B</a>
                <a data-code="C" href="javascript:void(0);" class="" logwt="citystation_alphabet_C">C</a>
                <a data-code="F" href="javascript:void(0);" class="" logwt="citystation_alphabet_F">F</a>
                <a data-code="G" href="javascript:void(0);" class="" logwt="citystation_alphabet_G">G</a>
                <a data-code="H" href="javascript:void(0);" class="" logwt="citystation_alphabet_H">H</a>
                <a data-code="J" href="javascript:void(0);" class="" logwt="citystation_alphabet_J">J</a>
                <a data-code="L" href="javascript:void(0);" class="" logwt="citystation_alphabet_L">L</a>
                <a data-code="N" href="javascript:void(0);" class="" logwt="citystation_alphabet_N">N</a>
                <a data-code="Q" href="javascript:void(0);" class="" logwt="citystation_alphabet_Q">Q</a>
                <a data-code="S" href="javascript:void(0);" class="" logwt="citystation_alphabet_S">S</a>
                <a data-code="T" href="javascript:void(0);" class="" logwt="citystation_alphabet_T">T</a>
                <a data-code="X" href="javascript:void(0);" class="" logwt="citystation_alphabet_X">X</a>
                <a data-code="Y" href="javascript:void(0);" class="" logwt="citystation_alphabet_Y">Y</a>
                <a data-code="Z" href="javascript:void(0);" class="" logwt="citystation_alphabet_Z">Z</a>

            </div>
            <div class="clear"></div>
            <div class="header-city-province-mian clearfix">
                <ul class="clearfix">
                    <li>
                        <i id="iCity_A">A</i>

                        <strong><a href="javascript:void(0)">安徽</a></strong>
                        <div class="header-city-province-text">
                            <a href="#" attr-cityid="101">合肥</a>
                            <a href="#" attr-cityid="102">安庆</a>
                            <a href="#" attr-cityid="103">蚌埠</a>
                            <a href="#" attr-cityid="105">池州</a>
                            <a href="#" attr-cityid="106">阜阳</a>
                            <a href="#" attr-cityid="107">淮北</a>
                            <a href="#" attr-cityid="108">淮南</a>
                            <a href="#" attr-cityid="109">六安</a>
                            <a href="#" attr-cityid="110">马鞍山</a>
                            <a href="#" attr-cityid="113">铜陵</a>
                            <a href="#" attr-cityid="114">芜湖</a>
                            <a href="#" attr-cityid="115">宣城</a>
                            <a href="#" attr-cityid="116">滁州</a>
                            <a href="#" attr-cityid="118">黄山</a>
                            <a href="#" attr-cityid="120">宿州</a>
                            <a href="#" attr-cityid="125">亳州</a>
                        </div>
                    </li>
                    <li>
                        <i id="iCity_B">B</i>

                        <strong><a href="javascript:void(0)">北京市</a></strong>
                        <div class="header-city-province-text">
                            <a href="#" attr-cityid="201">北京</a>
                        </div>
                    </li>
                    <li>
                        <i id="iCity_C">C</i>

                        <strong><a href="javascript:void(0)">重庆市</a></strong>
                        <div class="header-city-province-text">
                            <a href="#" attr-cityid="3101">重庆</a>
                        </div>
                    </li>
                    <li>
                        <i id="iCity_F">F</i>

                        <strong><a href="javascript:void(0)">福建</a></strong>
                        <div class="header-city-province-text">
                            <a href="#" attr-cityid="301">福州</a>
                            <a href="#" attr-cityid="302">厦门</a>
                            <a href="#" attr-cityid="303">龙岩</a>
                            <a href="#" attr-cityid="305">漳州</a>
                            <a href="#" attr-cityid="306">莆田</a>
                            <a href="#" attr-cityid="307">泉州</a>
                            <a href="#" attr-cityid="314">南平</a>
                            <a href="#" attr-cityid="315">宁德</a>
                            <a href="#" attr-cityid="318">三明</a>
                        </div>
                    </li>
                    <li>
                        <i id="iCity_G">G</i>

                        <strong><a href="javascript:void(0)">广东</a></strong>
                        <div class="header-city-province-text">
                            <a href="#" attr-cityid="501">广州</a>
                            <a href="#" attr-cityid="502">深圳</a>
                            <a href="#" attr-cityid="503">珠海</a>
                            <a href="#" attr-cityid="504">东莞</a>
                            <a href="#" attr-cityid="505">中山</a>
                            <a href="#" attr-cityid="507">汕头</a>
                            <a href="#" attr-cityid="510">潮州</a>
                            <a href="#" attr-cityid="511">韶关</a>
                            <a href="#" attr-cityid="513">湛江</a>
                            <a href="#" attr-cityid="514">肇庆</a>
                            <a href="#" attr-cityid="515">茂名</a>
                            <a href="#" attr-cityid="516">梅州</a>
                            <a href="#" attr-cityid="518">佛山</a>
                            <a href="#" attr-cityid="520">惠州</a>
                            <a href="#" attr-cityid="521">江门</a>
                            <a href="#" attr-cityid="522">揭阳</a>
                            <a href="#" attr-cityid="524">清远</a>
                            <a href="#" attr-cityid="528">云浮</a>
                            <a href="#" attr-cityid="532">阳江</a>
                            <a href="#" attr-cityid="535">河源</a>
                            <a href="#" attr-cityid="552">汕尾</a>
                        </div>
                    </li>
                    <li>

                        <strong><a href="javascript:void(0)">广西</a></strong>
                        <div class="header-city-province-text">
                            <a href="#" attr-cityid="601">南宁</a>
                            <a href="#" attr-cityid="602">柳州</a>
                            <a href="#" attr-cityid="603">桂林</a>
                            <a href="#" attr-cityid="604">北海</a>
                            <a href="#" attr-cityid="605">百色</a>
                            <a href="#" attr-cityid="606">贺州</a>
                            <a href="#" attr-cityid="607">河池</a>
                            <a href="#" attr-cityid="608">贵港</a>
                            <a href="#" attr-cityid="610">玉林</a>
                            <a href="#" attr-cityid="612">钦州</a>
                            <a href="#" attr-cityid="613">梧州</a>
                            <a href="#" attr-cityid="615">防城港</a>
                            <a href="#" attr-cityid="619">来宾</a>
                            <a href="#" attr-cityid="621">崇左</a>
                        </div>
                    </li>
                    <li>

                        <strong><a href="javascript:void(0)">贵州</a></strong>
                        <div class="header-city-province-text">
                            <a href="#" attr-cityid="701">贵阳</a>
                            <a href="#" attr-cityid="702">遵义</a>
                            <a href="#/anshun/" attr-cityid="705">安顺</a>
                            <a href="#/bijie/" attr-cityid="706">毕节</a>
                            <a href="#/liupanshui/" attr-cityid="708">六盘水</a>
                            <a href="#/tongren/" attr-cityid="710">铜仁</a>
                            <a href="#/qiandongnanmiaozudongzuzizhizhou/" attr-cityid="714">黔东南</a>
                            <a href="#/qiannanbuyizumiaozuzizhizhou/" attr-cityid="715">黔南</a>
                            <a href="#/qianxinanbuyizumiaozuzizhizhou/" attr-cityid="718">黔西南</a>
                        </div>
                    </li>
                    <li>

                        <strong><a href="javascript:void(0)">甘肃</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/lanzhou/" attr-cityid="401">兰州</a>
                            <a href="#/dingxi/" attr-cityid="402">定西</a>
                            <a href="#/pingliang/" attr-cityid="405">平凉</a>
                            <a href="#/linxia/" attr-cityid="407">临夏</a>
                            <a href="#/jiuquan/" attr-cityid="409">酒泉</a>
                            <a href="#/zhangye/" attr-cityid="410">张掖</a>
                            <a href="#/qingyang/" attr-cityid="411">庆阳</a>
                            <a href="#/wuwei/" attr-cityid="412">武威</a>
                            <a href="#/tianshui/" attr-cityid="415">天水</a>
                            <a href="#/jiayuguan/" attr-cityid="416">嘉峪关</a>
                            <a href="#/jc/" attr-cityid="417">金昌</a>
                            <a href="#/baiyin/" attr-cityid="418">白银</a>
                            <a href="#/longnan/" attr-cityid="421">陇南</a>
                            <a href="#/gannanzangzuzizhizhou/" attr-cityid="422">甘南</a>
                        </div>
                    </li>
                    <li>
                        <i id="iCity_H">H</i>

                        <strong><a href="javascript:void(0)">河北</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/shijiazhuang/" attr-cityid="901">石家庄</a>
                            <a href="#/tangshan/" attr-cityid="902">唐山</a>
                            <a href="#/xingtai/" attr-cityid="903">邢台</a>
                            <a href="#/qinhuangdao/" attr-cityid="905">秦皇岛</a>
                            <a href="#/langfang/" attr-cityid="906">廊坊</a>
                            <a href="#/handan/" attr-cityid="907">邯郸</a>
                            <a href="#/hengshui/" attr-cityid="908">衡水</a>
                            <a href="#/cangzhou/" attr-cityid="909">沧州</a>
                            <a href="#/baoding/" attr-cityid="910">保定</a>
                            <a href="#/zhangjiakou/" attr-cityid="911">张家口</a>
                            <a href="#/chengde/" attr-cityid="912">承德</a>
                        </div>
                    </li>
                    <li>

                        <strong><a href="javascript:void(0)">黑龙江</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/haerbin/" attr-cityid="1101">哈尔滨</a>
                            <a href="#/daqing/" attr-cityid="1102">大庆</a>
                            <a href="#/qiqihaer/" attr-cityid="1103">齐齐哈尔</a>
                            <a href="#/hegang/" attr-cityid="1104">鹤岗</a>
                            <a href="#/jiamusi/" attr-cityid="1106">佳木斯</a>
                            <a href="#/jixi/" attr-cityid="1107">鸡西</a>
                            <a href="#/mudanjiang/" attr-cityid="1108">牡丹江</a>
                            <a href="#/qitaihe/" attr-cityid="1109">七台河</a>
                            <a href="#/yc/" attr-cityid="1112">伊春</a>
                            <a href="#/heihe/" attr-cityid="1113">黑河</a>
                            <a href="#/shuangyashan/" attr-cityid="1123">双鸭山</a>
                            <a href="#/suihua/" attr-cityid="1131">绥化</a>
                            <a href="#/daxinganlingdiqu/" attr-cityid="1136">大兴安岭</a>
                        </div>
                    </li>
                    <li>

                        <strong><a href="javascript:void(0)">河南</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/zhengzhou/" attr-cityid="1001">郑州</a>
                            <a href="#/luoyang/" attr-cityid="1002">洛阳</a>
                            <a href="#/zhoukou/" attr-cityid="1003">周口</a>
                            <a href="#/xinyang/" attr-cityid="1004">信阳</a>
                            <a href="#/xinxiang/" attr-cityid="1005">新乡</a>
                            <a href="#/shangqiu/" attr-cityid="1006">商丘</a>
                            <a href="#/sanmenxia/" attr-cityid="1007">三门峡</a>
                            <a href="#/puyang/" attr-cityid="1008">濮阳</a>
                            <a href="#/nanyang/" attr-cityid="1009">南阳</a>
                            <a href="#/luohe/" attr-cityid="1010">漯河</a>
                            <a href="#/jiaozuo/" attr-cityid="1011">焦作</a>
                            <a href="#/kaifeng/" attr-cityid="1013">开封</a>
                            <a href="#/anyang/" attr-cityid="1014">安阳</a>
                            <a href="#/hebi/" attr-cityid="1016">鹤壁</a>
                            <a href="#/pingdingshan/" attr-cityid="1018">平顶山</a>
                            <a href="#/zhumadian/" attr-cityid="1021">驻马店</a>
                            <a href="#/xuchang/" attr-cityid="1023">许昌</a>
                            <a href="#/jiyuan/" attr-cityid="419000">济源</a>
                        </div>
                    </li>
                    <li>

                        <strong><a href="javascript:void(0)">湖北</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/wuhan/" attr-cityid="1201">武汉</a>
                            <a href="#/shiyan/" attr-cityid="1202">十堰</a>
                            <a href="#/xiangyangshi/" attr-cityid="1203">襄阳</a>
                            <a href="#/suizhou/" attr-cityid="1204">随州</a>
                            <a href="#/xiantao/" attr-cityid="1205">仙桃</a>
                            <a href="#/yichang/" attr-cityid="1207">宜昌</a>
                            <a href="#/huangshi/" attr-cityid="1208">黄石</a>
                            <a href="#/jingmen/" attr-cityid="1209">荆门</a>
                            <a href="#/jingzhou/" attr-cityid="1210">荆州</a>
                            <a href="#/enshi/" attr-cityid="1215">恩施</a>
                            <a href="#/ezhou/" attr-cityid="1216">鄂州</a>
                            <a href="#/xianning/" attr-cityid="1217">咸宁</a>
                            <a href="#/qianjiang/" attr-cityid="1219">潜江</a>
                            <a href="#/xiaogan/" attr-cityid="1229">孝感</a>
                            <a href="#/huanggang/" attr-cityid="1236">黄冈</a>
                            <a href="#/tianmen/" attr-cityid="429000">天门</a>
                        </div>
                    </li>
                    <li>

                        <strong><a href="javascript:void(0)">湖南</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/changsha/" attr-cityid="1301">长沙</a>
                            <a href="#/chenzhou/" attr-cityid="1302">郴州</a>
                            <a href="#/changde/" attr-cityid="1303">常德</a>
                            <a href="#/hengyang/" attr-cityid="1304">衡阳</a>
                            <a href="#/huaihua/" attr-cityid="1305">怀化</a>
                            <a href="#/loudi/" attr-cityid="1306">娄底</a>
                            <a href="#/zhuzhou/" attr-cityid="1307">株洲</a>
                            <a href="#/yueyang/" attr-cityid="1308">岳阳</a>
                            <a href="#/xiangtan/" attr-cityid="1309">湘潭</a>
                            <a href="#/shaoyang/" attr-cityid="1310">邵阳</a>
                            <a href="#/yongzhou/" attr-cityid="1312">永州</a>
                            <a href="#/yiyang/" attr-cityid="1313">益阳</a>
                            <a href="#/zhangjiajie/" attr-cityid="1315">张家界</a>
                            <a href="#/xiangxitujiazumiaozuzizhizhou/" attr-cityid="1333">湘西</a>
                        </div>
                    </li>
                    <li>

                        <strong><a href="javascript:void(0)">海南</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/haikou/" attr-cityid="801">海口</a>
                            <a href="#/sanya/" attr-cityid="803">三亚</a>
                            <a href="#/sanshashi/" attr-cityid="460300">三沙市</a>
                            <a href="#/qionghai/" attr-cityid="469000">琼海</a>
                        </div>
                    </li>
                    <li>
                        <i id="iCity_J">J</i>

                        <strong><a href="javascript:void(0)">吉林</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/changchun/" attr-cityid="1401">长春</a>
                            <a href="#/jilin/" attr-cityid="1402">吉林</a>
                            <a href="#/tonghua/" attr-cityid="1403">通化</a>
                            <a href="#/liaoyuan/" attr-cityid="1405">辽源</a>
                            <a href="#/baishan/" attr-cityid="1406">白山</a>
                            <a href="#/baicheng/" attr-cityid="1412">白城</a>
                            <a href="#/songyuan/" attr-cityid="1425">松原</a>
                            <a href="#/yanbianchaoxianzuzizhizhou/" attr-cityid="1428">延边</a>
                            <a href="#/siping/" attr-cityid="1616">四平</a>
                        </div>
                    </li>
                    <li>

                        <strong><a href="javascript:void(0)">江苏</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/nanjing/" attr-cityid="1501">南京</a>
                            <a href="#/suzhou/" attr-cityid="1502">苏州</a>
                            <a href="#/wuxi/" attr-cityid="1503">无锡</a>
                            <a href="#/changzhou/" attr-cityid="1505">常州</a>
                            <a href="#/huaian/" attr-cityid="1507">淮安</a>
                            <a href="#/lianyungang/" attr-cityid="1510">连云港</a>
                            <a href="#/nantong/" attr-cityid="1511">南通</a>
                            <a href="#/yancheng/" attr-cityid="1512">盐城</a>
                            <a href="#/yangzhou/" attr-cityid="1513">扬州</a>
                            <a href="#/zhenjiang/" attr-cityid="1515">镇江</a>
                            <a href="#/taizhou/" attr-cityid="1517">泰州</a>
                            <a href="#/xuzhou/" attr-cityid="1518">徐州</a>
                            <a href="#/suqian/" attr-cityid="1520">宿迁</a>
                        </div>
                    </li>
                    <li>

                        <strong><a href="javascript:void(0)">江西</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/nanchang/" attr-cityid="1601">南昌</a>
                            <a href="#/shangrao/" attr-cityid="1602">上饶</a>
                            <a href="#/pingxiang/" attr-cityid="1603">萍乡</a>
                            <a href="#/xinyu/" attr-cityid="1604">新余</a>
                            <a href="#/yichun/" attr-cityid="1605">宜春</a>
                            <a href="#/jiujiang/" attr-cityid="1606">九江</a>
                            <a href="#/ganzhou/" attr-cityid="1607">赣州</a>
                            <a href="#/jian/" attr-cityid="1609">吉安</a>
                            <a href="#/jingdezhen/" attr-cityid="1612">景德镇</a>
                            <a href="#/jxfuzhou/" attr-cityid="1613">抚州</a>
                            <a href="#/yingtan/" attr-cityid="1615">鹰潭</a>
                        </div>
                    </li>
                    <li>
                        <i id="iCity_L">L</i>

                        <strong><a href="javascript:void(0)">辽宁</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/shenyang/" attr-cityid="1701">沈阳</a>
                            <a href="#/dandong/" attr-cityid="1702">丹东</a>
                            <a href="#/fushun/" attr-cityid="1703">抚顺</a>
                            <a href="#/fuxin/" attr-cityid="1704">阜新</a>
                            <a href="#/huludao/" attr-cityid="1705">葫芦岛</a>
                            <a href="#/chaoyang/" attr-cityid="1707">朝阳</a>
                            <a href="#/dalian/" attr-cityid="1708">大连</a>
                            <a href="#/benxi/" attr-cityid="1709">本溪</a>
                            <a href="#/anshan/" attr-cityid="1710">鞍山</a>
                            <a href="#/jz/" attr-cityid="1711">锦州</a>
                            <a href="#/liaoyang/" attr-cityid="1713">辽阳</a>
                            <a href="#/yingkou/" attr-cityid="1714">营口</a>
                            <a href="#/panjin/" attr-cityid="1716">盘锦</a>
                            <a href="#/tieling/" attr-cityid="1717">铁岭</a>
                        </div>
                    </li>
                    <li>
                        <i id="iCity_N">N</i>

                        <strong><a href="javascript:void(0)">内蒙古</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/huhehaote/" attr-cityid="1801">呼和浩特</a>
                            <a href="#/baotou/" attr-cityid="1802">包头</a>
                            <a href="#/chifeng/" attr-cityid="1803">赤峰</a>
                            <a href="#/tongliao/" attr-cityid="1804">通辽</a>
                            <a href="#/wuhai/" attr-cityid="1805">乌海</a>
                            <a href="#/eerduosi/" attr-cityid="1808">鄂尔多斯</a>
                            <a href="#/hulunbeier/" attr-cityid="1812">呼伦贝尔</a>
                            <a href="#/xinganmeng/" attr-cityid="1814">兴安盟</a>
                            <a href="#/bayannaoer/" attr-cityid="1824">巴彦淖尔</a>
                            <a href="#/wulanchabu/" attr-cityid="1825">乌兰察布</a>
                            <a href="#/xilinguolemeng/" attr-cityid="1829">锡林郭勒</a>
                            <a href="#/alashanmeng/" attr-cityid="1830">阿拉善盟</a>
                        </div>
                    </li>
                    <li>

                        <strong><a href="javascript:void(0)">宁夏</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/yinchuan/" attr-cityid="1901">银川</a>
                            <a href="#/wuzhong/" attr-cityid="1902">吴忠</a>
                            <a href="#/guyuan/" attr-cityid="1903">固原</a>
                            <a href="#/shizuishan/" attr-cityid="1905">石嘴山</a>
                            <a href="#/zhongwei/" attr-cityid="1907">中卫</a>
                        </div>
                    </li>
                    <li>
                        <i id="iCity_Q">Q</i>

                        <strong><a href="javascript:void(0)">青海</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/xining/" attr-cityid="2001">西宁</a>
                            <a href="#/haibeizangzuzizhizhou/" attr-cityid="2023">海北</a>
                            <a href="#/huangnanzangzuzizhizhou/" attr-cityid="2024">黄南</a>
                            <a href="#/guoluozangzuzizhizhou/" attr-cityid="2025">果洛</a>
                            <a href="#/yushuzangzuzizhizhou/" attr-cityid="2026">玉树</a>
                            <a href="#/haiximengguzuzangzuzizhizhou/" attr-cityid="2027">海西</a>
                            <a href="#/haidongdiqu/" attr-cityid="2029">海东</a>
                            <a href="#/hainanzangzuzizhizhou/" attr-cityid="2030">海南</a>
                        </div>
                    </li>
                    <li>
                        <i id="iCity_S">S</i>

                        <strong><a href="javascript:void(0)">山西</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/taiyuan/" attr-cityid="2201">太原</a>
                            <a href="#/datong/" attr-cityid="2202">大同</a>
                            <a href="#/jincheng/" attr-cityid="2203">晋城</a>
                            <a href="#/jinzhong/" attr-cityid="2204">晋中</a>
                            <a href="#/linfen/" attr-cityid="2205">临汾</a>
                            <a href="#/changzhi/" attr-cityid="2206">长治</a>
                            <a href="#/yuncheng/" attr-cityid="2207">运城</a>
                            <a href="#/xinzhou/" attr-cityid="2210">忻州</a>
                            <a href="#/yangquan/" attr-cityid="2218">阳泉</a>
                            <a href="#/shuozhou/" attr-cityid="2219">朔州</a>
                            <a href="#/lvliang/" attr-cityid="2227">吕梁</a>
                        </div>
                    </li>
                    <li>

                        <strong><a href="javascript:void(0)">上海市</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/shanghai/" attr-cityid="2401">上海</a>
                        </div>
                    </li>
                    <li>

                        <strong><a href="javascript:void(0)">山东</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/dezhou/" attr-cityid="1015">德州</a>
                            <a href="#/jinan/" attr-cityid="2101">济南</a>
                            <a href="#/qingdao/" attr-cityid="2102">青岛</a>
                            <a href="#/yantai/" attr-cityid="2103">烟台</a>
                            <a href="#/weihai/" attr-cityid="2104">威海</a>
                            <a href="#/weifang/" attr-cityid="2105">潍坊</a>
                            <a href="#/taian/" attr-cityid="2106">泰安</a>
                            <a href="#/zaozhuang/" attr-cityid="2107">枣庄</a>
                            <a href="#/zibo/" attr-cityid="2109">淄博</a>
                            <a href="#/dongying/" attr-cityid="2110">东营</a>
                            <a href="#/heze/" attr-cityid="2112">菏泽</a>
                            <a href="#/binzhou/" attr-cityid="2113">滨州</a>
                            <a href="#/liaocheng/" attr-cityid="2114">聊城</a>
                            <a href="#/linyi/" attr-cityid="2117">临沂</a>
                            <a href="#/jining/" attr-cityid="2118">济宁</a>
                            <a href="#/rizhao/" attr-cityid="2120">日照</a>
                            <a href="#/laiwu/" attr-cityid="2132">莱芜</a>
                        </div>
                    </li>
                    <li>

                        <strong><a href="javascript:void(0)">四川</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/chengdu/" attr-cityid="2501">成都</a>
                            <a href="#/mianyang/" attr-cityid="2502">绵阳</a>
                            <a href="#/suining/" attr-cityid="2503">遂宁</a>
                            <a href="#/panzhihua/" attr-cityid="2504">攀枝花</a>
                            <a href="#/yibin/" attr-cityid="2506">宜宾</a>
                            <a href="#/yaan/" attr-cityid="2507">雅安</a>
                            <a href="#/zigong/" attr-cityid="2508">自贡</a>
                            <a href="#/ziyang/" attr-cityid="2509">资阳</a>
                            <a href="#/guangyuan/" attr-cityid="2510">广元</a>
                            <a href="#/deyang/" attr-cityid="2511">德阳</a>
                            <a href="#/leshan/" attr-cityid="2512">乐山</a>
                            <a href="#/nanchong/" attr-cityid="2513">南充</a>
                            <a href="#/meishan/" attr-cityid="2514">眉山</a>
                            <a href="#/bazhong/" attr-cityid="2516">巴中</a>
                            <a href="#/luzhou/" attr-cityid="2517">泸州</a>
                            <a href="#/neijiang/" attr-cityid="2519">内江</a>
                            <a href="#/guangan/" attr-cityid="2530">广安</a>
                            <a href="#/dazhou/" attr-cityid="2532">达州</a>
                            <a href="#/abazangzuqiangzuzizhizhou/" attr-cityid="2535">阿坝</a>
                            <a href="#/ganzizangzuzizhizhou/" attr-cityid="2536">甘孜</a>
                            <a href="#/liangshanyizuzizhizhou/" attr-cityid="2537">凉山</a>
                        </div>
                    </li>
                    <li>

                        <strong><a href="javascript:void(0)">陕西</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/xian/" attr-cityid="2301">西安</a>
                            <a href="#/xianyang/" attr-cityid="2302">咸阳</a>
                            <a href="#/weinan/" attr-cityid="2303">渭南</a>
                            <a href="#/yl/" attr-cityid="2304">榆林</a>
                            <a href="#/baoji/" attr-cityid="2305">宝鸡</a>
                            <a href="#/ankang/" attr-cityid="2306">安康</a>
                            <a href="#/hanzhong/" attr-cityid="2307">汉中</a>
                            <a href="#/yanan/" attr-cityid="2308">延安</a>
                            <a href="#/tongchuan/" attr-cityid="2310">铜川</a>
                            <a href="#/shangluo/" attr-cityid="2313">商洛</a>
                        </div>
                    </li>
                    <li>
                        <i id="iCity_T">T</i>

                        <strong><a href="javascript:void(0)">天津市</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/tianjin/" attr-cityid="2601">天津</a>
                        </div>
                    </li>
                    <li>
                        <i id="iCity_X">X</i>

                        <strong><a href="javascript:void(0)">西藏</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/lasa/" attr-cityid="2701">拉萨</a>
                            <a href="#/rikaze/" attr-cityid="2703">日喀则</a>
                            <a href="#/shannan/" attr-cityid="2704">山南</a>
                            <a href="#/naqudiqu/" attr-cityid="2705">那曲</a>
                            <a href="#/alidiqu/" attr-cityid="2707">阿里</a>
                            <a href="#/changdu/" attr-cityid="2709">昌都</a>
                            <a href="#/linzhidiqu/" attr-cityid="2710">林芝</a>
                        </div>
                    </li>
                    <li>

                        <strong><a href="javascript:void(0)">新疆</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/wulumuqi/" attr-cityid="2801">乌鲁木齐</a>
                            <a href="#/kashi/" attr-cityid="2802">喀什</a>
                            <a href="#/kelamayi/" attr-cityid="2803">克拉玛依</a>
                            <a href="#/hami/" attr-cityid="2806">哈密</a>
                            <a href="#/tulufan/" attr-cityid="2807">吐鲁番</a>
                            <a href="#/tacheng/" attr-cityid="2812">塔城</a>
                            <a href="#/changji/" attr-cityid="2813">昌吉</a>
                            <a href="#/aletai/" attr-cityid="2815">阿勒泰</a>
                            <a href="#/hetian/" attr-cityid="2818">和田</a>
                            <a href="#/boertalamengguzizhizhou/" attr-cityid="2821">博尔塔拉</a>
                            <a href="#/bayinguolengmengguzizhizhou/" attr-cityid="2822">巴音郭楞</a>
                            <a href="#/yilihasakezizhizhou/" attr-cityid="2823">伊犁</a>
                            <a href="#/akesu/" attr-cityid="2829">阿克苏</a>
                            <a href="#/xinjiangkezhou/" attr-cityid="2835">新疆克州</a>
                            <a href="#/zizhiquzhixiaxianjixingzhengquhua/"
                               attr-cityid="659000">石河子</a>
                        </div>
                    </li>
                    <li>
                        <i id="iCity_Y">Y</i>

                        <strong><a href="javascript:void(0)">云南</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/kunming/" attr-cityid="2901">昆明</a>
                            <a href="#/yuxi/" attr-cityid="2902">玉溪</a>
                            <a href="#/qujing/" attr-cityid="2903">曲靖</a>
                            <a href="#/dali/" attr-cityid="2904">大理</a>
                            <a href="#/baoshan/" attr-cityid="2907">保山</a>
                            <a href="#/chuxiong/" attr-cityid="2908">楚雄</a>
                            <a href="#/lincang/" attr-cityid="2911">临沧</a>
                            <a href="#/wenshan/" attr-cityid="2914">文山</a>
                            <a href="#/xishuangbanna/" attr-cityid="2915">西双版纳</a>
                            <a href="#/zhaotong/" attr-cityid="2918">昭通</a>
                            <a href="#/lijiang/" attr-cityid="2922">丽江</a>
                            <a href="#/honghehanizuyizuzizhizhou/" attr-cityid="2923">红河</a>
                            <a href="#/dehongdaizujingpozuzizhizhou/" attr-cityid="2925">德宏</a>
                            <a href="#/nujianglisuzuzizhizhou/" attr-cityid="2927">怒江</a>
                            <a href="#/diqingzangzuzizhizhou/" attr-cityid="2928">迪庆</a>
                            <a href="#/puer/" attr-cityid="2929">普洱</a>
                        </div>
                    </li>
                    <li>
                        <i id="iCity_Z">Z</i>

                        <strong><a href="javascript:void(0)">浙江</a></strong>
                        <div class="header-city-province-text">
                            <a href="#/hangzhou/" attr-cityid="3001">杭州</a>
                            <a href="#/ningbo/" attr-cityid="3002">宁波</a>
                            <a href="#/wenzhou/" attr-cityid="3003">温州</a>
                            <a href="#/jiaxing/" attr-cityid="3005">嘉兴</a>
                            <a href="#/jinhua/" attr-cityid="3006">金华</a>
                            <a href="#/lishui/" attr-cityid="3009">丽水</a>
                            <a href="#/huzhou/" attr-cityid="3011">湖州</a>
                            <a href="#/quzhou/" attr-cityid="3012">衢州</a>
                            <a href="#/tz/" attr-cityid="3015">台州</a>
                            <a href="#/shaoxing/" attr-cityid="3016">绍兴</a>
                            <a href="#/zhoushan/" attr-cityid="3020">舟山</a>
                        </div>
                    </li>


                </ul>
            </div>
        </div>
    </div>
    <!--头部城市浮层 end -->
</div>
<!-- 页头 end-->
</body>
</html>
