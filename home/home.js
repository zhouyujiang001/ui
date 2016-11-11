/**
 * Created by Administrator on 2016/11/10.
 */


var bbfl = document.getElementById("centre_top_centre_g_id");
var superior = document.getElementById("centre_top_centre_1");

var caidan =document.getElementById("centre_top_centre_1_cd");




bbfl.onmousemove=function(){
    var xlcd = caidan.getElementsByTagName("ul")[0];
    xlcd.style.display="block";

    var j = caidan;
    j.style.display="block";
}
bbfl.onmouseout=function(){
    var xlcd = caidan.getElementsByTagName("ul")[0];
    xlcd.style.display="none";

    var j = caidan;
    j.style.display="none";
}

superior.onmousemove=function(){
    var xlcd = caidan.getElementsByTagName("ul")[0];
    xlcd.style.display="block";

    var j = caidan;
    j.style.display="block";
}
superior.onmouseout=function(){
    var xlcd = caidan.getElementsByTagName("ul")[0];
    xlcd.style.display="none";

    var j = caidan;
    j.style.display="none";
}


