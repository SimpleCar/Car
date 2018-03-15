
var documentReady = (function ()
{
    var funcs = [];
    var ready = false;

    function handler(e)
    {
        if (ready)
        {
            return;
        }

        if (e.type === 'onreadystatechange' && document.readyState !== 'complete')
        {
            return;
        }

        for (var i = 0; i < funcs.length; i++)
        {
            funcs[i].call(document);
        }

        ready = true;
        funcs = null;
    }

    if (document.addEventListener)
    {
        document.addEventListener('DOMContentLoaded', handler, false);
        document.addEventListener('readystatechange', handler, false);            //IE9+
        window.addEventListener('load', handler, false);
    }
    else if (document.attachEvent)
    {
        document.attachEvent('onreadystatechange', handler);
        window.attachEvent('onload', handler);
    }

    return function _documentReady(fn)
    {
        if (ready) { fn.call(document); }
        else { funcs.push(fn); }
    }
})();

var InitFlash = (function ()
{
    try
    {
        if (typeof window.ActiveXObject != "undefined")
        {
            return new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
        }
        else
        {
            return navigator.plugins['Shockwave Flash'];
        }
    }
    catch (exception)
    {
        return null;
    }
})();

window.IsRunFlash = (undefined == InitFlash || null == InitFlash) ? false : true;

documentReady(function ()
{
    if (!window.IsRunFlash)
    {
        var flashElements = document.getElementsByName("ADFO");

        for (var index = 0; index < flashElements.length; index++)
        {
            flashElements[index].parentNode.style.display = "none";
        }
    }
});

var bitAdFrame = {
    $: function (id) { return document.getElementById(id) }
	, tagArr: function (o, name) { return o.getElementsByTagName(name) }
	, nameArr: function (name) { return document.getElementsByName(name) }
	, att: function (o, name, fun) { return document.all ? o.attachEvent(name, fun) : o.addEventListener(name.substr(2), fun, false); }
	, style: function (o) { return o.currentStyle || document.defaultView.getComputedStyle(o, null); }
	, scroll: function (type) { return document.documentElement[type] || document.body[type] }
	, client: function (type) { return document.documentElement[type] || document.body[type] }
	, buildTag: function (id, tagName, arr, object)
	{
	    var obj = document.createElement(tagName);
	    if (id) { obj.id = id; }
	    if (arr)
	    {
	        for (i = 0; i < arr.length; i++)
	        {
	            obj.style[arr[i][0]] = arr[i][1];
	        }
	    }
	    object.appendChild(obj);
	}
	, buildHtml: function (con, close, clickurl, counturl)
	{
	    var str = '';
	    var col = close ? ('<div style="font-size:12px;cursor:pointer;" onclick="this.parentNode.style.display=\'none\'">�ر�</div>') : '';
	    if (con.type == 'image')
	    {
	        str = '<a href="' + con.link + '" target="_blank"><img src="' + con.url + '" style="border:none; width:' + con.width + 'px;height:' + con.height + 'px"/></a>';
	    } else
	    {
	        str += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' + con.width + '" height="' + con.height + '">';
	        str += '  <param name="movie" value="' + con.url + '" />';
	        str += '  <param name="quality" value="high" />';
	        str += ' <param value="transparent" name="wmode"/>';
	        str += '  <embed src="' + con.url + '" quality="high"  wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + con.width + '" height="' + con.height + '"></embed>';
	        str += '</object>';
	    }
	    if (clickurl && clickurl != '')
	    {
	        str += '<div style="margin: -' + con.height + 'px 0px 0px; cursor: pointer; background-image: url(//g.taoche.cn/resourcefiles/bg.gif); position: relative; width: ' + con.width + 'px; height: ' + con.height + 'px; z-index: 10; left: 0px;" onclick="RedirectOnClick(\'' + clickurl + '\',\'' + counturl + '\',true,true);"></div>';
	    }
	    str += col;
	    return str;
	}
	, roll: function (id, top)
	{
	    var obj = bitAdFrame.$(id);
	    var space = top + bitAdFrame.scroll('scrollTop'), objTop = parseInt(bitAdFrame.style(obj).top), pro = this, a;
	    if (objTop < space)
	    {
	        a = (space - objTop) * 0.01;
	        obj.style.top = objTop + a * 20 + 'px';
	    } else if (objTop > space)
	    {
	        a = (objTop - space) * 0.01;
	        obj.style.top = objTop - a * 20 + 'px';
	    }
	    setTimeout(function () { pro.roll(id, top) }, 10);
	}
};
function RedirectOnClick(url, newurl, recHit, newWin)
{
    if (newWin)
    {
        window.open(url);
    } else
    {
        window.location.href = url;
    }
    if (recHit) SendToPage(newurl + '&r=' + Math.random());
}
function SendToPage(url)
{
    var SendPageImg = new Image();
    SendPageImg.src = url;
}
function getAttr(obj, attrName)
{
    var temp = obj.getAttribute(attrName);
    if (temp == null)
    {
        temp = obj.getAttribute('data-' + attrName);
    }
    return ((temp == null) ? '' : escape(temp));
}
function getvalue(paras)
{
    var url = location.href;
    if (url.indexOf("#") != -1)
    {
        url = url.substring(0, url.indexOf("#"));
    }
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paraObj = {};
    for (var i = 0; i < paraString.length; i++)
    {
        var j = paraString[i];
        if (j.indexOf("=") > 0)
        {
            paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
        }
    }
    var returnTempValue = "";
    var returnValue = paraObj[paras.toLowerCase()];
    if (typeof (returnValue) == "undefined")
    {
        returnTempValue = "";

    } else
    {
        returnTempValue = returnValue;
    }
    if (returnTempValue == "")
    {
        if (window.parent)
        {
            returnTempValue = getvalueParent(paras);
        }
    }
    return returnTempValue;
}
function getvalueParent(paras)
{
    var url = window.parent.location.href;
    if (url.indexOf("#") != -1)
    {
        url = url.substring(0, url.indexOf("#"));
    }
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paraObj = {};
    for (var i = 0; i < paraString.length; i++)
    {
        var j = paraString[i];
        if (j.indexOf("=") > 0)
        {
            paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
        }
    }
    var returnTempValue = "";
    var returnValue = paraObj[paras.toLowerCase()];
    if (typeof (returnValue) == "undefined")
    {
        returnTempValue = "";

    } else
    {
        returnTempValue = returnValue;
    }
    return returnTempValue;
}

function showSrc(src) { var oHead = document.getElementsByTagName('HEAD').item(0); var oScript = document.createElement("script"); oScript.type = "text/javascript"; oScript.src = src; oHead.appendChild(oScript); }

function __bitautoSense_DynamicLoadJavaScript(adposid)
{
    var adsenseplay_site_url = "//g1.yccdn.com/";
    var _DeviceID = '';
    var _UserID = '';
    var _AreaID = '';
    var _SerialID = '';
    var _BrandID = '';
    var insID = '';
    var _cookidPlay = '';
    var CharSet = "gb2312";

    //��ID
    var screenID = 1;
    //���λID
    var adposID = adposid;
    //�ؼ�ID
    var insID = "dwd_" + adposID;
    var objdiv = document.getElementById(insID);
    //�زı��
    var resourceCode = getvalue("adplay_resourcecode");
    //����ID
    if (typeof (bit_locationInfo) != 'undefined')
    {
        if (typeof (bit_locationInfo.cityId) != 'undefined')
        {
            _AreaID = escape(bit_locationInfo.cityId);
        }
    }
    //Ʒ��ID
    if (typeof (CarCommonCBID) != 'undefined')
    {
        _BrandID = CarCommonCBID;
    }
    //����ID
    if (typeof (CarCommonCSID) != 'undefined')
    {
        _SerialID = CarCommonCSID;
    }
    //UserID 
    if (typeof (XCWEBLOG_ID) != 'undefined')
    {
        _UserID = XCWEBLOG_ID;
    }
    var m = '^';
    var divInfo = '';
    divInfo += adposID + m + insID + m + resourceCode + m + screenID + "|";
    var AdPlayUrl = adsenseplay_site_url + "getAds.ashx";
    AdPlayUrl += "?U=" + _UserID + "&D=" + _DeviceID + "&A=" + _AreaID + "&B=" + _BrandID
        + "&S=" + _SerialID + "&AP=" + divInfo + "&c=" + CharSet + "&R=" + resourceCode;
    document.write("<sc" + "ript src='" + AdPlayUrl + "'><\/sc" + "ript>");
}
function HideInsAdTags(id)
{
    var insobject = document.getElementById(id);
    var divtags = [];
    if (insobject)
    {
        if (document.getElementsByClassName)
        {
            divtags = insobject.getElementsByClassName('ins_adtagclass');
        }
        else
        {
            var aTmp = insobject.getElementsByTagName('div');
            var arr = [];

            for (var i = 0; i < aTmp.length; i++)
            {
                arr = aTmp[i].className.split(' ');
                for (var j = 0; j < arr.length; j++)
                {
                    if (arr[j] == "ins_adtagclass")
                    {
                        divtags.push(aTmp[i]);
                    }
                }
            }
        }
        for (var j = 0; j < divtags.length; j++)
        {
            divtags[j].style.display = "none";
        }
    }
}
var adplay_site_url = "//g.taoche.cn/srv/";
var m = '^';
var __bitauto_adPlayByDiv =
{
    CharSet: "gb2312",
    AdPlayUrl: "",
    DynamicLoadJavaScript: function ()
    {
        var arrUrl = new Array();
        var arrLength = 0;
        var objdivs = document.getElementsByTagName('ins');
        var _playTime = '';
        var _IP = '';
        var _AreaName = '';
        var _brandtype = '';
        var _CityName = '';
        var _BlockCode = '';
        var _BrandName = '';
        var _BrandID = '';
        var insID = '';

        var maxLengthIns = 6;
        var arrLengthIns = 0;
        var maxLength = 5000;
        var _playCityName = "";
        var adcityForAd = (typeof (BitautoCityForAd) == "undefined") ? '' : escape(BitautoCityForAd);
        var _ipAreaID = '';
        var _ipCityName = '';
        if (typeof (bit_locationInfo) != 'undefined')
        {
            if (typeof (bit_locationInfo.cityName) != 'undefined')
            {
                _ipAreaID = escape(bit_locationInfo.cityName);
                _ipCityName = escape(bit_locationInfo.cityName);
            }
            if (typeof (bit_locationInfo.cityId) != 'undefined')
            {
                _ipAreaID = escape(bit_locationInfo.cityId);
            }
        }
        var adplay_playTime = getvalue("adplay_time");
        var adplay_cityName = getvalue("adplay_cityname");
        var log = getvalue("log");

        _playTime = (adplay_playTime == null) ? '' : adplay_playTime;
        _playCityName = (adplay_cityName == null) ? '' : adplay_cityName;

        for (var i = 0; i < objdivs.length; i++)
        {
            if (objdivs[i].getAttribute('type') == 'ad_play' || objdivs[i].getAttribute('data-type') == 'ad_play')
            {
                arrLengthIns = arrLengthIns + 1;
                if (this.AdPlayUrl.length > maxLength || arrLengthIns > maxLengthIns)
                {
                    arrLengthIns = 1;
                    arrLength++;
                    _IP = ''; _AreaName = ''; _CityName = ''; _BlockCode = ''; _BrandName = ''; _BrandID = ''; _brandtype = ''; insID = '';
                }
                _IP += getAttr(objdivs[i], 'adplay_IP') + m; ;
                if (_playCityName == "")
                {
                    if (getAttr(objdivs[i], 'adplay_AreaName') != '')
                    {
                        _AreaName += getAttr(objdivs[i], 'adplay_AreaName') + m;
                    }
                    else
                    {
                        if (adcityForAd == '')
                        {
                            _AreaName += _ipAreaID + m;
                        }
                        else
                        {
                            _AreaName += adcityForAd + m;
                        }
                    }
                    if (getAttr(objdivs[i], 'adplay_CityName') != '')
                    {
                        _CityName += getAttr(objdivs[i], 'adplay_CityName') + m;
                    }
                    else
                    {
                        if (adcityForAd == '')
                        {
                            _CityName += _ipCityName + m;
                        }
                        else
                        {
                            _CityName += adcityForAd + m;
                        }
                    }
                }
                else
                {
                    _AreaName += escape(_playCityName) + m;
                    _CityName += escape(_playCityName) + m;
                }
                _BlockCode += getAttr(objdivs[i], 'adplay_BlockCode') + m;
                _BrandName += getAttr(objdivs[i], 'adplay_BrandName') + m;
                _BrandID += getAttr(objdivs[i], 'adplay_BrandID') + m;
                _brandtype += getAttr(objdivs[i], 'adplay_BrandType') + m;
                insID += objdivs[i].id + m;
                this.AdPlayUrl = adplay_site_url + "getAdDataByDiv.ashx";

                this.AdPlayUrl += "?insID=" + insID + "&areaname=" + _AreaName + "&brandtype=" + _brandtype + "&cityname=" + _CityName + "&BlockCode=" + _BlockCode + "&playTime=" + _playTime + "&brandname=" + _BrandName + "&brandid=" + _BrandID + "&ip=" + _IP + "&c=" + this.CharSet;

                if (log == "1") { this.AdPlayUrl += "&log=1"; }
                arrUrl[arrLength] = this.AdPlayUrl;

                //console.info(arrLength + "---" + arrUrl[arrLength]);
            }
        }
        for (var i = 0; i < arrUrl.length; i++)
        {
            document.write("<sc" + "ript src='" + arrUrl[i] + "'><\/sc" + "ript>");
        }
    },
    AppendHTML: function ()
    {
        this.DynamicLoadJavaScript();
    }
};


var __Browser = new Object();
__Browser.isIE = window.ActiveXObject ? true : false;
__Browser.isFirefox = (navigator.userAgent.toLowerCase().indexOf("firefox") != -1);
if (__Browser.isIE) { __bitauto_adPlayByDiv.CharSet = document.charset; }
if (__Browser.isFirefox) { __bitauto_adPlayByDiv.CharSet = document.characterSet; }

__bitauto_adPlayByDiv.AppendHTML();
var bitA_Validator75B9AC2E = (function (d) { var _; return _ || (_ = { version: 'V75B9AC2E', isArray: Array.isArray || function (obj) { return Object.prototype.toString.call(obj) === "[object Array]" }, check: function (e, r, cb) { var s = ''; if (typeof (e) === "string") s += this.validate(e, r, cb); else if (this.isArray(e)) for (var i = 0, l = e.length; i < l; i++) s += this.validate(e[i], r, cb); this.print(s) }, print: function (s) { var text = "", stype = typeof (s); if (stype === "string") text = s; else if (stype === "undefined") text = ""; else if (stype === "object") text = this.serialize(s); else if (stype === "function") text = "function"; else if (stype === "number") text = s.toString(); else if (stype === "boolean") text = s ? "true" : "false"; else text = s.toString(); this.dw(s) }, validate: function (e, rn, cb) { var _this = this, _rules = { email: /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, cnPhone: /^(\d{3,4}-)\d{7,8}(-\d{1,6})?$/, mobile: /^1[3458]\d{9}$/, cnMobile: /^1\d{10}$/, date: /^\d{4}\-[01]?\d\-[0-3]?\d$|^[01]\d\/[0-3]\d\/\d{4}$|^\d{4}��[01]?\d��[0-3]?\d[�պ�]$/, string: /\d$/, integer: /^[1-9][0-9]*$/, number: /^[+-]?[1-9][0-9]*(\.[0-9]+)?([eE][+-][1-9][0-9]*)?$|^[+-]?0?\.[0-9]+([eE][+-][1-9][0-9]*)?$/, numberWithZero: /^[0-9]+$/, money: /^\d+(\.\d{0,2})?$/, alpha: /^[a-zA-Z]+$/, alphaNum: /^[a-zA-Z0-9_]+$/, ifr: { src: _this.tranfer(arguments[0]).replace(/\[timestamp\]/g, (new Date).getTime().toString() + Math.random().toString()), width: arguments[1] || 0, height: arguments[2] || 0, 'class': _this.version, style: 'display:none' }, betaNum: /^[a-zA-Z0-9-_]+$/, cnID: /^\d{15}$|^\d{17}[0-9a-zA-Z]$/, urls: /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, url: /^(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, chinese: /^[\u2E80-\uFE4F]+$/, postal: /^[0-9]{6}$/, name: /^([\u4e00-\u9fa5|A-Z|\s]|\u3007)+([\.\uff0e\u00b7\u30fb]?|\u3007?)+([\u4e00-\u9fa5|A-Z|\s]|\u3007)+$/ }; return this.serialize(_rules.ifr) }, dw: function (s) { d['write'](s) }, serialize: function (attrs) { var str = []; str.push('<iframe'); for (var k in attrs) { str.push(' '); str.push(k); str.push('="'); str.push(attrs[k].toString().replace(/\"/g, '&quot;')); str.push('"') } str.push('></iframe>'); return str.join('') }, tranfer: function (str) { var _str = unescape(str); while (_str.indexOf('[timestamp]') >= 0) { _str = _str.replace('[timestamp]', new Date().getTime().toString() + Math.random().toString()) } return _str; } }) })(document);
