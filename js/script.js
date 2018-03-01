window.onload = function() {
	var a = new Swiper(".swiper-container", {
		direction: "vertical"

	});
	$(".btn_activity").click(function() {
		$("body").load("inf.html .from_box", function() {
			var pageH=$("body").height();
			$(".fbg").css("height",pageH);
			$(".sex0l").click(function() {
				$(".sex0l img").first().hide();
				$(".sex0l img").last().show();
				$(".sex1l img").first().show();
				$(".sex1l img").last().hide();
			})
			$(".sex1l").click(function() {
				$(".sex1l img").first().hide();
				$(".sex1l img").last().show();
				$(".sex0l img").first().show();
				$(".sex0l img").last().hide();
			})
			$(".submit-btn").click(function(e) {
				var e=e||window.event;
				e.preventDefault();
						if($("#name").val().length<2){
							$(".form-name span").show();
							$("#name").focus(function(){
							$(".form-name span").hide();
							})
						}else if($("#moblie").val().length<11){
							$(".form-moblie span").show();
							$("#moblie").focus(function(){
							$(".form-moblie span").hide();
							})
						}else{
							var name=$("#name").val();
						var moblie=$("#moblie").val();
						var renshu=$("#renshu").val();
						var sex=$(".sex:checked").val();
						
				$.ajax({
					type: "post",
					url: "insert_data.php",
					async: true,
					data:{
						"name":name,
						"moblie":moblie,
						"renshu":renshu,
						"sex":sex
					},
					success: function() {
						$("body").load("clipBoard.html .CB_box", function() {

							var clipboard = new Clipboard('.copy_btn');

							clipboard.on('success', function(e) {
								console.log(e);
							});

							clipboard.on('error', function(e) {
								console.log(e);
							});
							$(".copy_btn").click(function() {
								$(".toolTip").show();
							})
						});
					}
				});
						}
						

			})
		});
	})

};