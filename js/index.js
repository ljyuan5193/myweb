"use strict";
 var testtext= 0;
function finish() {
  var nametext = document.getElementById("name");
  var emailtext= document.getElementById("email");
  var messagetext = document.getElementById("message");

if (nametext.value.length  == 0 || emailtext.value.length  == 0 || messagetext.value.length  == 0){
alert("你有未填寫的地方，請輸入文字");
return;
}

  for( var i = 0; i < nametext.value.length; i++)
{
 if(nametext.value.charCodeAt(i) != 32)
 {
 testtext +=1;
 break;
 }
}

for( var i = 0; i < emailtext.value.length; i++)
{
if(emailtext.value.charCodeAt(i) != 32)
{
testtext +=1;
break;
}
}

for( var i = 0; i < messagetext.value.length; i++)
{
if(messagetext.value.charCodeAt(i) != 32)
{
testtext +=1;
break;
}
}

  if (testtext < 3){
  alert("你有未填寫的地方，請輸入文字");
  testtext = 0;
  return;
  }
else{
  alert("提交完成！");
  reset();
}
}

function reset() {
var namereset = document.getElementById("name");
var emailreset = document.getElementById("email");
var messagereset = document.getElementById("message");
namereset.value="";
emailreset.value="";
messagereset.value="";
 testtext = 0;
  return;
  }
