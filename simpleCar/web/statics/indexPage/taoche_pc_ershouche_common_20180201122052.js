!function(o){function e(){if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject){if("string"!=typeof arguments.callee.activeXString){var o,e,t=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"];for(o=0,e=t.length;o<e;o++)try{new ActiveXObject(t[o]),arguments.callee.activeXString=t[o];break}catch(o){throw new Error("No ActiveXObject object available.")}}return new ActiveXObject(arguments.callee.activeXString)}throw new Error("No XHR object available.")}function t(o){var t=function(o){var e="";for(var t in o)e+=t,e+="=",e+=o[t],e+="&";return e}(o.postData),a=e();a.onreadystatechange=function(){4==a.readyState&&(a.status>=200&&a.status<300||304==a.status||console.log("Request was unsuccessful: "+a.status))},a.open("POST",o.url,!0),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.send(t)}o.onerror=function(o,e,a,i,r){var n={msg:escape(o),url:escape(e),row:a,col:i};t({postData:n,url:"http://ajax.taoche.cn/log/errorlog.ashx"})};var a={msg:""},i=function(e){a.msg=e?escape(e):"no msg",a.url=o.location.href,t({postData:a,url:"http://ajax.taoche.cn/log/customlog.ashx"})};o.Taoche=o.Taoche?o.Taoche:{},o.Taoche.log=i}(window),function(){var o=window.Taoche||{};window.Taoche=o,o.bangMaiCityIds=[201,2601,2401,3101,2501,501,502,504,1101,1701,1708,2301,1301,1501,2201,1001,901,3001,1502,2101,1201,518,3003,2901,2801,2513,2502,2202,1901,1802,1801,1607,1508,1505,1503,1401,1207,515,906,1203,1002,1005,1103,701,603,1308,1601,602,601,2512,520,507,505,503,101,1903,2308,1808,2305,401,411,2506,1511,1515,514,307,511,801,535,516,524,1711,1716,1703,1803,1210,1204,1010,1014,1023,1208,1304,3011,2914,608,610,702],o.isBangMaiCity=function(e){for(var t=0,a=o.bangMaiCityIds;t<a.length;t++)if(a[t]==e)return!0;return!1},o.ttpcCityIds=[201,501,502,2401,2501,1501,1201,504,1502,2601,3001,3101,518,3002,101,2102,1301,2301,1001,601,116,503,505,520,3016,1515,906,2201,3003,1601,302,1503,1701,2901,1002,1505,1511,1607,1708,2101,2502,2513,3005,3006],o.isttpcCity=function(e){for(var t=0,a=o.ttpcCityIds;t<a.length;t++)if(a[t]==e)return!0;return!1},o.authCarCityIds=[2301,901,1001,1101,1201,1401,1701,1801,1901,2201,2501,2801,3101,201,501,502,504,518,701,101,307,401,503,505,513,601,602,1301,1501,1502,1607,1708,2101,2102,2502,2401,2601,2901,515,520,1505,2001,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,26,28,29,31],o.isAuthCarCity=function(e){for(var t=0,a=o.authCarCityIds;t<a.length;t++)if(a[t]==e)return!0;return!1},o.c2cCityIds=[201,1401,2501,1101,1201],o.isC2CCity=function(e){for(var t=0,a=o.c2cCityIds;t<a.length;t++)if(a[t]==e)return!0;return!1}}(),function(){var o=window.Taoche||{};window.Taoche=o,o.ThirdFromSource={kvs:{"114la.com":"dh_114la","hao123.com":"dh_hao123","3456.cc":"dh_3456","114la.cn":"dh_114la","uc123.com":"dh_uc123","360.cn":"dh_360","toutiao.com":"zx_toutiao","7654.com":"dh_7654","2345.com":"dh_2345","9973.com":"dh_9973","6789.com":"dh_6789","baidu.com":"ss_baidu","baiducontent.com":"ss_baidu","sogou.com":"ss_sougou","so.com":"ss_so"},isUrlFromDomain:function(o,e){var t=new RegExp("://([^/]+.)?"+e+"(/|$)","i");return t.test(o)},init:function(){var e=o.getQuery("ref"),t=o.getQuery("WT.mc_id"),a=o.getQuery("WT_KW"),i=$("#pagetag"),r=i.length>0,n=!1,c=o.getQuery("from"),s=o.getQuery("semcode"),d=o.getQuery("fpath");c&&o.Storage.setCookie("from",c,24,"/",o.domain.cookie),s&&o.Storage.setCookie("semcode",s,24,"/",o.domain.cookie),d&&o.Storage.setCookie("fpath",d,6,"/",o.domain.cookie),t&&o.Storage.setCookie("wtparam",t,6,"/",o.domain.cookie),a&&o.Storage.setCookie("WT_KW",a,6,"/",o.domain.cookie),e&&(o.Storage.setCookie("refparam",e,6,"/",o.domain.cookie),n=!0);var u=document.referrer;if(u){if(!t&&!e&&!c)for(var l in this.kvs)if(this.isUrlFromDomain(u,l)){o.Storage.setCookie("wtparam",this.kvs[l],6,"/",o.domain.cookie),o.Storage.setCookie("_dcref",this.kvs[l],0,"/",o.domain.cookie);break}r&&!n&&(this.isUrlFromDomain(u,"bitauto.com")||this.isUrlFromDomain(u,"yiche.com"))&&(n=!0)}r&&!n&&o.getQuery("rfpa_source")&&(n=!0),r&&n&&$(window).scrollTop(i.offset().top),window.location.host.toLowerCase().indexOf("etaoche.cn")>0&&$.getScript("//www.taoche.com/ajax/yida.ashx?from="+c+"&semcode="+s+"&wtparam="+t+"&WTKW="+a+"&refparam="+e)}},Taoche.ThirdFromSource.init(),$(function(){var e=Taoche.Storage.getCookie("YIDAID");e||$.getScript("//"+o.domain.taochePC+"/ajax/yida.ashx?v=20141231")})}(),function(){var o=window.Taoche||{};window.Taoche=o,o.Ad={loadAd:function(o,e){var t=document.getElementById(e);null!=t&&(t.innerHTML='<ins id="div_'+o+'" type="ad_play" adplay_IP="" adplay_AreaName="" adplay_CityName="" adplay_BrandID="" adplay_BrandName="" adplay_BrandType="" adplay_BlockCode="'+o+'"></ins>')},loadHeadAd:function(o){this.loadAd(o,"divHeadPic")},loadFullScreenAd:function(o){this.loadAd(o,"divFullPic")}}}();