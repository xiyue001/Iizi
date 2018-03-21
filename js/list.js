
$("#nav .naver").mouseenter(function(){
		$(this).children("div").slideToggle(300);
});
$("#nav .naver").mouseleave(function(){
	
		$(this).children("div").slideToggle(300);
});

$("#broadside").css("height",$(window).height())


$("#highest ul li").eq(2).hover(function(){
		$(this).children(".guanzhu_box").css({"display":"block"}).animate({"opacity":1,"top":27},300)
	},function(){
		$(this).children(".guanzhu_box").animate({"opacity":0,"top":37},300,function(){
			$(this).css("display","none");
		})
	})


$("#broadside li").hover(function(){
		$(this).children(".broadside_div").css("display","block").animate({"left":-74,"opacity":1},300);
	},function(){
		$(this).children(".broadside_div").animate({"left":-80,"opacity":0},300,function(){
			$(this).css("display","none")
		});
	})
	
	$("#broadside li").hover(function(){
		$(this).children(".erwei").css("display","block").animate({"left":-140,"opacity":1},300);
	},function(){
		$(this).children(".erwei").animate({"left":-160,"opacity":0},300,function(){
			$(this).css("display","none");
		});
	})


//ajax加载页面

var href = location.href.split("?")[1];
var ajax = new XMLHttpRequest();
ajax.open("get","../json/list.json");
ajax.send();
ajax.onreadystatechange = function(){
	if(ajax.readyState == 4 && ajax.status == 200){
		var str = JSON.parse(ajax.responseText);
		var html = "";
		var ULhtml = "";
		for(var attr in str){
			if(href == attr){
				console.log(str[attr])
				html += `
					<p>首页 >全部 ><i>${str[attr].name}<a href = "Javascript:;">X</a></i></p>
					<ol class = "type">
				<li>
					<h2>功效：</h2>
					<i>${str[attr].effect[0]}</i>
					<b>${str[attr].effect[1]}</b>
					<span>${str[attr].effect[2]}</span>
					<em>${str[attr].effect[3]}</em>
				</li>
				<li>
					<h2>品牌：</h2>
					<i>${str[attr].path[0]}</i>
					<b>${str[attr].path[1]}</b>
					<span>${str[attr].path[2]}</span>
					<em>${str[attr].path[3]}</em>
				</li>
				<li>
					<h2>价格：</h2>
					<i><a href = "Javascript:;">99元以内</a></i>
					<b><a href = "Javascript:;">100-199</a></b>
					<span><a href = "Javascript:;">200-299</a></span>
					<em><a href = "Javascript:;">300元以上</a></em>
				</li>
					</ol>
				<ol class = "clearfix sortord">
					<li><a href = "Javascript:;">销量</a></li>
					<li><a href = "Javascript:;">人气</a></li>
					<li><a href = "Javascript:;">价格</a></li>
					<li><a href = "Javascript:;">新品</a></li>
				</ol>
				<ul class = "clearfix"></ul>
				`;
				for(var i = 0 ; i < str[attr].list.length; i ++){
					var pro = str[attr].list[i];
					ULhtml += `
						<li>
					<a href="detailnew.html?${pro.id}&${attr}">
						<div><img src="../img/${pro.img}" alt="" /></div>
						<div>
							<p>${pro.word}</p>
							<span>${pro.price}</span>
							<i>已售25件</i>
						</div>
					</a>
				</li>
					`
				}
			}
		}
		$("#center").html(html);
		$("#center ul").html(ULhtml);
	}
}














