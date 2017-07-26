function main() {
	$("#hide-button").on("click", function hideImage(){
		$("img").hide();
	})
	$("#show-button").on("click", function showImage(){
		$("img").show();
	})
	$("#round-button").on("click", function roundCorners(){
		$("img").css("border-radius","1000000px");
	})
	$("#straight-button").on("click", function straightenCorners(){
		$("img").css("border-radius","0px");
	})
	$("#add-border-button").on("click", function addBorder() {
		$("img").addClass("add-red-border");
	})
	$("#remove-border-button").on("click", function removeBorder(){
		$("img").removeClass("add-red-border");
	})
	$("#move-up-button").on("click", function moveUp(){
		$("img").animate({top:"-=10px"});
	})
	$("#move-down-button").on("click", function moveDown() {
		$("img").animate({top:"+=10px"});
	})
}

$(document).ready(main);