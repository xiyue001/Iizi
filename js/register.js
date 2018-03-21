var iphone = /\d{11}/g;
var psw = /^[a-zA-Z\d_\.]{8,}$/;

$(".success_btn").click(function(){
	var flag = true;
	var iphone_val = $("#iphone").val();
	var psw_val = $("#psw").val()
	console.log($("#iphone").val());
	console.log($("#psw").val());
	if(!iphone.test(iphone_val)){
		flag = false;
		alert("手机号输入错误");
	}else if(!psw.test(psw_val)){
		flag = false;
		alert("输入的密码不符合要求");
	}else if(psw_val != $("#psw_2").val()){
		flag = false;
		alert("两次输入的密码不一致");
	}
	if(flag){
		var index = 4;
		var date = new Date();
		date.setDate(date.getDate() + 3);
		document.cookie = "iphone=" + iphone_val + ";expires=" + date + ";path=/";
		document.cookie = "psw=" + psw_val + ";expires=" + date + ";path=/";
		var timer = setInterval(function(){
			index -- ;
			var str = `
			<h3>注册成功</h3>
			<p>距离页面跳转还有<i>${index}</i>秒</p>`
			$("#center").html(str);
			if(index == 0){
				clearInterval(timer);
				location.href = "../index.html";
				
			}
		},1000)
	}
})
