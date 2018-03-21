var arr = document.cookie.split("; ");
var iphone = "";
var psw = "";
for(var i = 0 ; i < arr.length ; i ++){
	var cookies =  arr[i].split("=");
	if(cookies[0] == "iphone"){
		iphone = cookies[1];
	}else if(cookies[0] == "psw"){
		psw = cookies[1];
	}
}
console.log(psw);
$(".btn").click(function(){
	console.log($("#psw").val())
	if($("#iphone").val() != iphone){
		alert("手机号输入错误");
	}else if($("#psw").val() != psw){
		alert("密码错误");
	}else{
		alert("登陆成功");
		location.href = "../index.html";
	}
})

