window.onload = function() {
	var a = new Swiper(".swiper-container", {
		direction: "vertical"
		
	});
	$(".btn_activity").click(function(){
		$("body").load("actPage.html .from_box",function(){
	});
	})
};