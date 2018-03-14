/* Taoche对象扩展url操作常用方法
 * 依赖脚本：无
 * by：yuhf */
; (function () {
    var tc=window.Taoche||{};
    window.Taoche=tc;

    //获取URL中的query参数；参数url不传默认为当前页面url
    tc.getQuery=function (name,url) {
        if(!name) return '';
        var query='';
        if(url) {
            var idx=url.indexOf('?');
            if(idx<0) { return ''; }
            query=url.substr(idx+1);
        } else {
            query=location.search.substr(1);
        }
        var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i"),m=query.match(reg);
        if(m!=null) return unescape(m[2]);
        return '';
    };
    //获取URL删除锚点(#tag)信息后的结果；参数url不传默认为当前页面url
    tc.getUrlNoAnchor=function (url) {
        url=url||location.href;
        var idx=url.indexOf('#');
        if(idx<0) { return url; }
        return url.substr(0,idx);
    };
    //获取URL删除Query参数后的结果；参数url不传默认为当前页面url
    tc.getUrlNoParam=function (url) {
        url=this.getUrlNoAnchor(url);
        var idx=url.indexOf('?');
        if(idx<0) { return url; }
        return url.substr(0,idx);
    };
    //获取URL中最后一个锚点(#tag)的值；参数url不传默认为当前页面url
    tc.getUrlLastTag=function (url) {
        url=url||location.href;
        var idx=url.lastIndexOf('#');
        if(idx<0) { return ''; }
        return url.substr(idx+1);
    };
    //为URL附加参数并返回新的URL，若原URL中包含此参数名，则覆盖原参数值；参数url不传默认为当前页面url
    tc.addQuery=function (name,value,url) {
        url=url||location.href;
        if(!name) return url;
        var idx=url.indexOf('#'),path='',query='',tag='';
        if(idx>=0) {
            tag=url.substr(idx);
            url=url.substr(0,idx);
        }
        idx=url.indexOf('?');
        if(idx<0) { return url+'?'+name+'='+encodeURI(value)+tag; }

        query=url.substr(idx).replace('?','&')+'&';
        path=url.substr(0,idx);

        var reg=new RegExp("&"+name+"=([^&]*)&","i"),
            query2=query.replace(reg,'##');
        if(query==query2) {//正则替换后字符串仍然相等，表示原来不包含此参数
            return path+'?'+query.substr(1)+name+'='+encodeURI(value)+tag;
        }
        //原来包含此参数，覆盖
        query=query2.replace('##','&'+name+'='+encodeURI(value)+'&');
        return path+'?'+query.substr(1,query.length-2)+tag;
    };
    //从URL中删除指定的参数并返回新的URL；参数url不传默认为当前页面url
    tc.removeQuery=function (name,url) {
        url=url||location.href;
        if(!name) return url;
        var idx=url.indexOf('#'),path='',query='',tag='';
        if(idx>=0) {
            tag=url.substr(idx);
            url=url.substr(0,idx);
        }
        idx=url.indexOf('?');
        if(idx<0) { return url+tag; }

        query=url.substr(idx).replace('?','&')+'&';
        path=url.substr(0,idx);
        if(query.length<=2) { return path+tag; }

        var reg=new RegExp("&"+name+"=([^&]*)&","i");
        query=query.replace(reg,'&');
        if(query.length<=2) { return path+tag; }
        return path+'?'+query.substr(1,query.length-2)+tag;
    };
    //从URL中获取所有参数名称及值构造的字面量数据对象，参数url不传默认为当前页面url
    //返回结果格式 {ucarid:123,name:'yuhf',phone:'18512341234'}，字符串类型值已经过url解码
    tc.getQueryNameValues=function (url) {
        url=url||location.href;
        url=tc.getUrlNoAnchor(url);
        var idx=url.indexOf('?');
        if(idx<0) return {};
        var arr=url.substr(idx+1).split('&'),res={};
        for(var i=0,len=arr.length,s; i<len; i++) {
            s=arr[i].split('=');
            if(s[0]!='') {
                res[s[0]]=decodeURIComponent(s[1]);
            }
        }
        return res;
    };
})();
