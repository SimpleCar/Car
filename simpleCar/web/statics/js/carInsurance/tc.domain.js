/* Taoche对象扩展域名模块，提供各个站点的域名配置。
 * 依赖脚本：无
 * 特别注意：此文件比较特殊，因为域名配置属于可变量，所以不把此文件压缩到页面脚本中，目前的方案为：
 *          将此文件压缩到 ip 脚本中，在引用 cominclude 公用头部文件或 ip 公用脚本的页面中自动包含此代码；
 *          在未引用公用头部文件或ip脚本的页面中，使用统一的includejs文件引用 /includejs/common/domainnames.shtml  
 * by：zhanglg */
; (function () {
    var tc = window.Taoche || {};
    window.Taoche = tc;

    //根据淘车域名获取主域
    tc.getMainDomain = function (host) {
        var hostArray = ['taoche.com', 'taoche.cn', 'etaoche.cn'];
        for (var i = 0; i < hostArray.length; i++) {
            if (host.indexOf('.' + hostArray[i]) <= -1) {
                continue;
            }
            return hostArray[i];
        }
        return 'taoche.com';
    };
    //当前URL主域名
    tc.mainDomain = tc.getMainDomain(window.location.host.toLowerCase()) || 'taoche.com';
    //淘车站点域集合
    tc.domain = {
        //获取URLHOST
        getURLHost: function (subName) {
            if (subName == null || subName == '')
                return tc.mainDomain;
            if (subName.charAt(subName.length - 1) == '.')
                return subName + tc.mainDomain;
            else
                return subName + '.' + tc.mainDomain;
        },
        //全局cookie域
        cookie: tc.mainDomain,
        cache: 'cache.taoche.cn',
        ajax: 'ajax.taoche.cn',
        taochePCHome: 'home.' + tc.mainDomain,
        taochePC: 'www.' + tc.mainDomain,
        taocheM: 'm.' + tc.mainDomain,
        taocheCooperM: 'cooper.m.' + tc.mainDomain,
        bangmaiPC: 'bangmai.' + tc.mainDomain,
        bangmaiM: 'bangmai.m.' + tc.mainDomain,
        jinrongPC: 'jinrong.' + tc.mainDomain,
        jinrongM: 'jinrong.m.' + tc.mainDomain,
        zhihuanPC: 'zhihuan.' + tc.mainDomain,
        zhihuanM: 'zhihuan.m.' + tc.mainDomain,
        maichePC: 'maiche.' + tc.mainDomain,
        newsPC: 'news.' + tc.mainDomain,
        xinchePC: 'xin.' + tc.mainDomain,
        xincheM: 'xin.m.' + tc.mainDomain,
        mfenqiM: 'fenqi.m.' + tc.mainDomain,
        fenqiPC: 'fenqi.' + tc.mainDomain,
        searchPC: 'search.taoche.com',
        taocheMHome: 'home.m.' + tc.mainDomain
    };
})();
