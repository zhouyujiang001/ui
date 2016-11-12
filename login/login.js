/**
 * Created by Administrator on 2016/11/6.
 */



//二维码登陆

var ewming = document.getElementById("centre_right_bak_ewmimg");
var right_bak1 = document.getElementById("centre_right_bak1");

var ewm3 = document.getElementById("centre_right_bak1_ewm3");
var right_bak = document.getElementById("centre_right_bak");

var ewmd = document.getElementById("centre_right_bak1_ewmd");


ewming.onclick=function(){
    right_bak.style.display="none"
    right_bak1.style.display="block"
    ewmd.style.display="block"
}
ewm3.onclick=function(){
    right_bak.style.display="block"
    right_bak1.style.display="none"
    ewming.style.display="block"
}