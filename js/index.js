$(function(){
	$("#nav .naver").mouseenter(function(){
		$(this).children("div").slideToggle();
	});
	$("#nav .naver").mouseleave(function(){
		$(this).children("div").slideToggle();
	});
	
	
	//轮播图图片的位置
	console.log(($("#rotatory li").width() - $("#rotatory").width()));
	$("#rotatory .rotatory_positionleft").css("left",-($("#rotatory li").width() - $("#rotatory").width())/2);
	$("#rotatoryer ol").css("left",($("#rotatoryer").width() - $("#rotatoryer ol").width())/2)
	
	
	$("#broadside").css("height",$(window).height())
	
	var index = 0;
	var timer = setInterval(autoplay,3000);
	$("#rotatoryer").mouseover(function(){
		clearInterval(timer);
	});
	$("#rotatoryer").mouseout(function(){
		timer = setInterval(autoplay,3000);
	})
	
	$("#rotatoryer").mouseenter(function(){
		$(this).children("div").animate({"opacity" : 0.6},300);
	});
	$("#rotatoryer").mouseleave(function(){
		$(this).children("div").animate({"opacity" : 0},300);
	})
	$("#rotatoryer .btn_left").click(function(){
		index -= 2;
		autoplay();
	});
	$("#rotatoryer .btn_right").click(function(){
		autoplay();
	})
	
	$("#rotatoryer ol li").mouseover(function(){
		index = $(this).index() - 1;
		autoplay();
		$(this).eq(index).addClass("pink").siblings().removeClass("pink");
	})
	
	
	
	six();
	//60秒立即买；
	function six(){
		var Itop = 0;
		var Spantop = 216;
		setInterval(function(){
			Itop -= 36;
			if(Itop < 0){
				Itop = 324;
				Spantop -= 36;
				if(Spantop < 0){
					Spantop = 216;
					Itop = 0;
				}
			}
			$(".count_down i").animate({"background-position-y":-Itop},300)
			$(".count_down span").animate({"background-position-y":-Spantop},300)
			
		},1000)
	}
	
	$(".six_shop_ul li").mouseenter(function(){
		$(this).children("em").animate({"height":130},300);
	})
	$(".six_shop_ul li").mouseleave(function(){
		$(this).children("em").animate({"height":0},300);
	})
	var six_shop_ul = 0;
	var six_shop_index = 0;
	$(".six_left_btn").click(function(){
		six_shop_index -- ;
		six_ol_auto();
		six_shop_ul += 3*($(".six_shop_ul li").width() + 20);
		if(six_shop_ul > 0){
			six_shop_ul = -($(".six_shop_ul li").length-3)*($(".six_shop_ul li").width() + 20);
		}
		$(".six_shop_ul").animate({"left":six_shop_ul},500);
	})
	$(".six_right_btn").click(function(){
		six_shop_index ++;
		six_ol_auto();
		six_shop_ul += -3*($(".six_shop_ul li").width() + 20);
		if(six_shop_ul < -($(".six_shop_ul li").length-3)*($(".six_shop_ul li").width() + 20)){
			six_shop_ul = 0;
		}
		$(".six_shop_ul").animate({"left":six_shop_ul},500);
	})
	$(".six_ol li").click(function(){
		six_shop_index = $(this).index();
		six_ol_auto();
		$(".six_shop_ul").animate({"left":-six_shop_index*(3*($(".six_shop_ul li").width() + 20))},500);
	})
	
	
	$("#footer_sousuo .bg").css("left",-($("#footer_sousuo .bg").width() - $("#footer_sousuo").width())/2)
	
	function six_ol_auto(){
		if(six_shop_index > $(".six_shop_ul").children("li").length/3 -1){
			six_shop_index = 0;
		}else if(six_shop_index < 0){
			six_shop_index = $(".six_shop_ul").children("li").length/3 -1
		}
		console.log(six_shop_index);
		$(".six_ol li").eq(six_shop_index).addClass("six_ol_click").siblings().removeClass("six_ol_click");
	}
	
	
	
	
	function autoplay(){
		index ++;
		if(index == $("#rotatory .rotatory_positionleft").length){
			index = 0; 
		}
		$("#rotatory .rotatory_positionleft").eq(index)
						  .fadeIn(1000)
						  .siblings()
						  .fadeOut(1000);
		$("#rotatoryer ol li").eq(index)
		                      .addClass("pink")
		                      .siblings()
		                      .removeClass("pink");
	}
})

