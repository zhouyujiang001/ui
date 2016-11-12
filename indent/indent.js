/**
 * Created by Administrator on 2016/11/11.
 */


//订单图片展示

var img1 = document.getElementById("indent_indent_top_left_img1");
var img5 = document.getElementById("indent_indent_top_left_img5");
var img6 = document.getElementById("indent_indent_top_left_img6");

var img2 = document.getElementById("indent_indent_top_left_img2");
var img3 = document.getElementById("indent_indent_top_left_img3");
var img4 = document.getElementById("indent_indent_top_left_img4");


img2.onclick=function(){
    img5.style.display="none";
    img1.style.display="block";
    img6.style.display="none";
}
img3.onclick=function(){
     img5.style.display="block"
    img1.style.display="none";
    img6.style.display="none";
}
img4.onclick=function(){
    img5.style.display="none"
    img1.style.display="none";
    img6.style.display="block";
}


//登录弹窗

var denglu = document.getElementById("denglu");
var xianshi = document.getElementById("indent_indent_top_denglu");

var guanbi = document.getElementById("indent_indent_top_dengluguanbi");

denglu.onclick=function(){
   xianshi.style.display="block";
}

guanbi.onclick=function(){
    xianshi.style.display="none";
}