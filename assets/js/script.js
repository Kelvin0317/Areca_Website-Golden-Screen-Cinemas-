function navbar() {
	document.getElementById('navbar-collapse').style.marginLeft = "0px";
	document.getElementById('navbar_background').style.width = "100%";
	document.getElementById('navbar_background').style.height = "100vh";
}

function mouseDown(){
	document.getElementById('navbar-collapse').style.marginLeft = "-260px";
	document.getElementById('navbar_background').style.width = "0%";
	document.getElementById('navbar_background').style.height = "0vh";
}

function movies(){
	var x = document.getElementById('movie_info');
	if (x.style.display === "none") {
		x.style.display = "block";
		document.getElementById('arrow-right').style.transform = "rotate(90deg)";
	} else {
		x.style.display = "none";
		document.getElementById('arrow-right').style.transform = "rotate(0deg)";
	}
}

var x = document.getElementById('movie_info');
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

function Promotions(){
	var x = document.getElementById('promotions_info');
	if (x.style.display === "none") {
		x.style.display = "block";
		document.getElementById('promotions-arrow-right').style.transform = "rotate(90deg)";
	} else {
		x.style.display = "none";
		document.getElementById('promotions-arrow-right').style.transform = "rotate(0deg)";
	}
}

function Cinemas(){
	var x = document.getElementById('cinemas_info');
	if (x.style.display === "none") {
		x.style.display = "block";
		document.getElementById('cinemas-arrow-right').style.transform = "rotate(90deg)";
	} else {
		x.style.display = "none";
		document.getElementById('cinemas-arrow-right').style.transform = "rotate(0deg)";
	}
}

function Food(){
	var x = document.getElementById('food_info');
	if (x.style.display === "none") {
		x.style.display = "block";
		document.getElementById('food-arrow-right').style.transform = "rotate(90deg)";
	} else {
		x.style.display = "none";
		document.getElementById('food-arrow-right').style.transform = "rotate(0deg)";
	}
}

function Help(){
	var x = document.getElementById('help_info');
	if (x.style.display === "none") {
		x.style.display = "block";
		document.getElementById('help-arrow-right').style.transform = "rotate(90deg)";
	} else {
		x.style.display = "none";
		document.getElementById('help-arrow-right').style.transform = "rotate(0deg)";
	}
}

function search() {
	var x = document.getElementById('search');
	var y = document.getElementById('search1');
	var z = document.getElementById('search2');
		x.style.display = "flex";
		y.style.display = "none";
		z.style.display = "block";
}

function qwe() {
	var x = document.getElementById('search');
	var y = document.getElementById('search1');
	var z = document.getElementById('search2');
		x.style.display = "none";
		y.style.display = "block";
		z.style.display = "none";
}