$(document).ready(function() {
	var i,j,sizeOfSquare=0;
	var width,height,firstCell;
	$("body").append("<main></main>");
	$("main").append("<button class='btn'>Push me</button>");
	$("main").append("<div id='swapper'></div>");
	$(".btn").click(function() {
		$("#swapper").html("");
		sizeOfSquare=prompt("Введите размер", "");
		for (i=0; i<sizeOfSquare; i++) {
			for (j=0; j<sizeOfSquare; j++) {
				$("#swapper").append("<div class='square'></div>");
			}
		}
		width=height=600/sizeOfSquare+"px";
		$(".square").css("width", width).css("height", height);
		firstCell=".square:nth-child("+sizeOfSquare+"n+1)"
		$(firstCell).css("clear", "left");
		$(".square").hover(function() {
  			$( this ).css("background-color", get_random_color());
  		});
	});
});

function get_random_color() {
    return "#"+((1<<24)*Math.random()|0).toString(16);
}