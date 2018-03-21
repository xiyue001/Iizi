$(".commodity_buy .close").mousemove(function(e){
	var e = e || event;
	var left = e.pageX - $(this).offset().left - $(".commodity_buy .move_box").width()/2;
	var top = e.pageY - $(this).offset().top - $(".commodity_buy .move_box").height()/2;
	if(left<0){
		left = 0;
	}else if(left > $(".commodity_buy .close").width()-$(".commodity_buy .move_box").width()){
		left = $(".commodity_buy .close").width()-$(".commodity_buy .move_box").width();
	}
	
	if(top<0){
		top = 0;
	}else if(top > $(".commodity_buy .close").height()-$(".commodity_buy .move_box").height()){
		top = $(".commodity_buy .close").height()-$(".commodity_buy .move_box").height();
	}
	
	var big_left = left / ($(".commodity_buy .close").width()-$(".commodity_buy .move_box").width()) * -($(".commodity_buy .big_img img").width()-$(".commodity_buy .big_img").width());
	console.log(big_left);
	
	var big_top = top / ($(".commodity_buy .close").height()-$(".commodity_buy .move_box").height()) * -($(".commodity_buy .big_img img").height()-$(".commodity_buy .big_img").height())
	
	
	$(".commodity_buy .move_box").css({"left":left,"top":top});
	$(".commodity_buy .big_img img").css({"left":big_left,"top":big_top});
})


$("#shop .xiangqing ol li").click(function(){
	$(this).addClass("xianshi").siblings().removeClass("xianshi");
})



