function main() {
	$("img").not("img.current").hide();
	
	$("#right-button").on("click",function moveRight() {
		$("img.current").next().addClass("current");
		$("img.current").prev().removeClass("current");
		$("img").not("img.current").hide();
		$("img.current").show();
	})
	$("#left-button").on("click",function moveLeft() {
		$("img.current").prev().addClass("current");
		$("img.current").next().removeClass("current");
		$("img").not("img.current").hide();
		$("img.current").show();
	})
}


$(document).ready(main);