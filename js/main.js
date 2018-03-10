function badilattribute(){
		$("#img1").attr("src","rs/Ybt-MUZi.jpg")}
	function badilcss(){
		$("#p2").css({"margin":"50%","color":"red"});		 
	}
$("#div1").click(function(){
	$("#div1")
	.append("<p>this is is new</p>");
		$("#div1")
		.prepend("<p>this is new</p>");
	
});
function prompteha(){ 
	var name = 
prompt ("chismik ?","enter your name ...");
$("#P3").html(name);
alert("welcome"+name);
console.log(name);	
}

function hidih(){
	$("#div1").hide();
	
}
function showih(){
	$("#div1").toggle();
	
}function cki() {

	console.log("dghvhjghjfhjf");
	var pr =prompt("votre message","helloo");
	document.getElementById("demo").innerHTML=pr;
	}






	var imagenumber=0;
	
function carousel(){
	if(imagenumber>=2){imagenumber=0;}
	var image =["han","han1","han2"];
	$("#bbr").attr('src',"res/"+image[imagenumber]+".jpg");
	imagenumber++;
	setTimeout(carousel,2000);
}