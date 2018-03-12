
$(function () {
    cpclickbind();    
    window.setInterval("cpclickbind()", 1000);
    //cpcviewtamer = window.setInterval("Asyncpcview()", 1000);
});
 
function cpclickbind() {
    $("[CPWT]").each(function () {
        if ($(this).attr("_iscc")) {
            return true;
        }
        else {
            $(this).attr("_iscc", "1");
        }

        var v = $(this).attr("CPWT");
        if (v) {
            $(this).click(function (e) {
                var mReferrer = document.referrer;
                var vipwts = $(this).attr("CPWT");
                var YIDAID = getCookie("YIDAID");
                //if (YIDAID == undefined || YIDAID == "") {
                //    return;
                //}
                var d = new Date();
                if (vipwts != "") {
                    jQuery.getScript("//log.taoche.cn/CcSave.ashx?mReferrer=" + mReferrer + "&vipwts=" + encodeURIComponent(vipwts) + "&YIDAID=" + YIDAID + "");
                }
            })
        }
    })
}




function Asyncpcview() {

    var mReferrer = document.referrer;
    var vipwts = cpcarviewbuild();
    if (vipwts.length <= 1) return;
    var TCID = getCookie("TCID");
    var YIDAID = getCookie("YIDAID");
    if (TCID == null) {
        var guid1 = guidGenerator();
        setCookie("TCID", guid1);
        TCID = getCookie("TCID");
    }
    var d = new Date();
    if (vipwts != "") {
        if (vipwts != "") {
            jQuery.getScript("//log.taoche.cn/CPCAJAX.ashx?mReferrer=" + encodeURIComponent(mReferrer) + "&vipwts=" + encodeURIComponent(vipwts) + "&TCID=" + TCID + "&YIDAID=" + YIDAID + "&sourceType=view&v=" + d.getMilliseconds());
        }
    }
     
     // window.clearInterval(cpcviewtamer);  
}

function cpcarviewbuild() {
    var vipwtlist = "";
    $("[CPWT]").each(function () {
        var v = $(this).attr("VIPWT");
        if (v) {
            if (vipwtlist.indexOf(v) > -1) return true;
            if (vipwtlist != "") { vipwtlist += ","; }
            vipwtlist += v;
        }
    });
    return vipwtlist;

}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}


