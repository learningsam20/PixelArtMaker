function makeGrid(w,h) {
// Create the grid with height h cells and width w cells
	var strCanvas = "";
	for(var i=0;i<w;i++){
		strCanvas+="<tr>";
		for(var j=0;j<h;j++){
			strCanvas+="<td></td>";
		}
		strCanvas+="</tr>";
	}
	$("#pixelCanvas").empty().append(strCanvas);
}

//Paint the canvas with the color set in the colorpicker
function paintCanvas(col){
	$.each($("#pixelCanvas td"),function(cid,e){
		//Assuming "rgba(0, 0, 0, 0)" to be the default color of all the pixels that are not colored
		$(e).css("background-color",$(e).css("background-color")=="rgba(0, 0, 0, 0)"?"rgba(0, 0, 0, 0)":col);
	})
}
