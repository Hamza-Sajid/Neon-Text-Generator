//Gloval Variables

var input=document.getElementById("input");

var color=document.getElementById("color");

var show=document.getElementById("showMsg");


var top=document.getElementById("top");


//**********************
//  OnType Function
//(To capture user_input)
//**********************


function showText()
{
  var input=document.getElementById("input");
var showMsg=document.getElementById("showMsg").innerHTML=input.value;
//****************
//  Button Code
//****************

//Button 01
  var fonts1=document.getElementById("fonts1").addEventListener("click",() =>
{
  var showMsg=document.getElementById("showMsg");
  showMsg.style.fontFamily = "'Style Script', cursive";
})

//Button 02

var fonts2=document.getElementById("fonts2").addEventListener("click",() =>
{
var showMsg=document.getElementById("showMsg");
showMsg.style.fontFamily = " 'Palette Mosaic', cursive";
})

//Button 03

var fonts3=document.getElementById("fonts3").addEventListener("click",() =>
{
var showMsg=document.getElementById("showMsg");
showMsg.style.fontFamily = "'Comfortaa', cursive";
})

//Button 04

var fonts4=document.getElementById("fonts4").addEventListener("click",() =>
{
var showMsg=document.getElementById("showMsg");
showMsg.style.fontFamily = "'Shadows Into Light', cursive";
})
}

//**********************
//Button Get's End Here
//**********************


//**************************
// :) ->  Color 01 Start :-)

var favcolor1=document.getElementById("favcolor1").addEventListener("click",() =>
{
var showMsg=document.getElementById("showMsg");
 showMsg.style.color = "#E62E2D";
})

// :) ->  Color 02

var favcolor2=document.getElementById("favcolor2").addEventListener("click",() =>
{
var showMsg=document.getElementById("showMsg");
 showMsg.style.color = "#567DA7";

})

// :) ->  Color 03

var favcolor3=document.getElementById("favcolor3").addEventListener("click",() =>
{
var showMsg=document.getElementById("showMsg");
 showMsg.style.color = "#E7DB57";

})

// :) ->  Color 04

var favcolor4=document.getElementById("favcolor4").addEventListener("click",() =>
{
var showMsg=document.getElementById("showMsg");
 showMsg.style.color = "#E72EE9";
})

//**********************
//Color's Code End Here
//**********************
