function navbar() {
	document.getElementById('navbar-collapse').style.marginLeft = "0px";
	document.getElementById('navbar_background').style.width = "100%";
	document.getElementById('navbar_background').style.height = "100vh";
}

function mouseDown(){
	document.getElementById('navbar-collapse').style.marginLeft = "-260px";
	document.getElementById('navbar_background').style.width = "0%";
	document.getElementById('navbar_background').style.height = "0vh";
	document.getElementById('reponsive').style.display = "none";
}

function movies(){
	var x = document.getElementById('movie_info');
	if (x.style.display === "block") {
		x.style.display = "none";
		document.getElementById('arrow-right').style.transform = "rotate(0deg)";
	} else {
		x.style.display = "block";
		document.getElementById('arrow-right').style.transform = "rotate(90deg)";
	}
}

function Promotions(){
	var x = document.getElementById('promotions_info');
	if (x.style.display === "block") {
		x.style.display = "none";
		document.getElementById('promotions-arrow-right').style.transform = "rotate(0deg)";
	} else {
		x.style.display = "block";
		document.getElementById('promotions-arrow-right').style.transform = "rotate(90deg)";
	}
}

function Cinemas(){
	var x = document.getElementById('cinemas_info');
	if (x.style.display === "block") {
		x.style.display = "none";
		document.getElementById('cinemas-arrow-right').style.transform = "rotate(0deg)";
	} else {
		x.style.display = "block";
		document.getElementById('cinemas-arrow-right').style.transform = "rotate(90deg)";
	}
}

function Food(){
	var x = document.getElementById('food_info');
	if (x.style.display === "block") {
		x.style.display = "none";
		document.getElementById('food-arrow-right').style.transform = "rotate(0deg)";
	} else {
		x.style.display = "block";
		document.getElementById('food-arrow-right').style.transform = "rotate(90deg)";
	}
}

function Help(){
	var x = document.getElementById('help_info');
	if (x.style.display === "block") {
		x.style.display = "none";
		document.getElementById('help-arrow-right').style.transform = "rotate(0deg)";
	} else {
		x.style.display = "block";
		document.getElementById('help-arrow-right').style.transform = "rotate(90deg)";
	}
}

function search() {
	var x = document.getElementById('nav-search');
	var y = document.getElementById('navbar-search');
	var z = document.getElementById('search-close');
	if ((screen.width>1024)) {
		x.style.display = "flex";
		y.style.display = "none";
		z.style.display = "block";
	} else {
		document.getElementById('reponsive').style.display = "block ";
		document.getElementById('navbar_background').style.width = "100%";
		document.getElementById('navbar_background').style.height = "100vh";
	}
}

function close_seacrh() {
	var x = document.getElementById('nav-search');
	var y = document.getElementById('navbar-search');
	var z = document.getElementById('search-close');
		x.style.display = "none";
		y.style.display = "block";
		z.style.display = "none";
}

function promotions() {
	document.getElementById("promotions").style.color = "yellow";
	document.getElementById("contests").style.color = "white";
	document.getElementById("announcements").style.color = "white";
	var x = document.getElementById('tab-line');
		x.style.transform = "translate3d(0px, 0px, 0px)";
		x.style.width = "115px"

	document.getElementById("page_1").style.display = "block"
	document.getElementById("page_2").style.display = "none"
}

function contests() {
	document.getElementById("promotions").style.color = "white";
	document.getElementById("contests").style.color = "yellow";
	document.getElementById("announcements").style.color = "white";
	var x = document.getElementById('tab-line');
		x.style.transform = "translate3d(135px, 0px, 0px)";
		x.style.width = "115px"
	document.getElementById("page_1").style.display = "none"
	document.getElementById("page_2").style.display = "none"
}

function announcements() {
	document.getElementById("promotions").style.color = "white";
	document.getElementById("contests").style.color = "white";
	document.getElementById("announcements").style.color = "yellow";

	var x = document.getElementById('tab-line');
		x.style.transform = "translate3d(270px, 0px, 0px)";
		x.style.width = "150px"
	document.getElementById("page_1").style.display = "none"
	document.getElementById("page_2").style.display = "block"
}

function All() {
	document.getElementById("all").style.filter = "grayscale(0%)"
	document.getElementById("movie_perks").style.filter = "grayscale(100%)"
	document.getElementById("bank_promos").style.filter = "grayscale(100%)"
	document.getElementById("food_beverages").style.filter = "grayscale(100%)"
	document.getElementById("events").style.filter = "grayscale(100%)"
	promotions_banner5 = document.querySelectorAll(".promotions-banner5")
	for (i = 0; i < promotions_banner5.length; i++) {
	    promotions_banner5[i].style.display ="block"
	  }
	promotions_banner4 = document.querySelectorAll(".promotions-banner4")
	for (i = 0; i < promotions_banner4.length; i++) {
	    promotions_banner4[i].style.display ="block"
	  }
	promotions_banner3 = document.querySelectorAll(".promotions-banner3")
	for (i = 0; i < promotions_banner3.length; i++) {
	    promotions_banner3[i].style.display ="block"
	  }
	promotions_banner2 = document.querySelectorAll(".promotions-banner2")
	for (i = 0; i < promotions_banner2.length; i++) {
	    promotions_banner2[i].style.display ="block"
	  }
	promotions_banner1 = document.querySelectorAll(".promotions-banner1")
	for (i = 0; i < promotions_banner1.length; i++) {
	    promotions_banner1[i].style.display ="block"
	  }
}

function movie_perks() {
	document.getElementById("all").style.filter = "grayscale(100%)"
	document.getElementById("movie_perks").style.filter = "grayscale(0%)"
	document.getElementById("bank_promos").style.filter = "grayscale(100%)"
	document.getElementById("food_beverages").style.filter = "grayscale(100%)"
	document.getElementById("events").style.filter = "grayscale(100%)"
	promotions_banner5 = document.querySelectorAll(".promotions-banner5")
	for (i = 0; i < promotions_banner5.length; i++) {
	    promotions_banner5[i].style.display ="none"
	  }
	promotions_banner4 = document.querySelectorAll(".promotions-banner4")
	for (i = 0; i < promotions_banner4.length; i++) {
	    promotions_banner4[i].style.display ="none"
	  }
	promotions_banner3 = document.querySelectorAll(".promotions-banner3")
	for (i = 0; i < promotions_banner3.length; i++) {
	    promotions_banner3[i].style.display ="none"
	  }
	promotions_banner2 = document.querySelectorAll(".promotions-banner2")
	for (i = 0; i < promotions_banner2.length; i++) {
	    promotions_banner2[i].style.display ="inline-block"
	  }
	promotions_banner1 = document.querySelectorAll(".promotions-banner1")
	for (i = 0; i < promotions_banner1.length; i++) {
	    promotions_banner1[i].style.display ="none"
	  }
}

function bank_promos() {
	document.getElementById("all").style.filter = "grayscale(100%)"
	document.getElementById("movie_perks").style.filter = "grayscale(100%)"
	document.getElementById("bank_promos").style.filter = "grayscale(0%)"
	document.getElementById("food_beverages").style.filter = "grayscale(100%)"
	document.getElementById("events").style.filter = "grayscale(100%)"
	promotions_banner5 = document.querySelectorAll(".promotions-banner5")
	for (i = 0; i < promotions_banner5.length; i++) {
	    promotions_banner5[i].style.display ="none"
	  }
	promotions_banner4 = document.querySelectorAll(".promotions-banner4")
	for (i = 0; i < promotions_banner4.length; i++) {
	    promotions_banner4[i].style.display ="none"
	  }
	promotions_banner3 = document.querySelectorAll(".promotions-banner3")
	for (i = 0; i < promotions_banner3.length; i++) {
	    promotions_banner3[i].style.display ="block"
	  }
	promotions_banner2 = document.querySelectorAll(".promotions-banner2")
	for (i = 0; i < promotions_banner2.length; i++) {
	    promotions_banner2[i].style.display ="none"
	  }
	promotions_banner1 = document.querySelectorAll(".promotions-banner1")
	for (i = 0; i < promotions_banner1.length; i++) {
	    promotions_banner1[i].style.display ="none"
	  }
}

function food_beverages() {
	document.getElementById("all").style.filter = "grayscale(100%)"
	document.getElementById("movie_perks").style.filter = "grayscale(100%)"
	document.getElementById("bank_promos").style.filter = "grayscale(100%)"
	document.getElementById("food_beverages").style.filter = "grayscale(0%)"
	document.getElementById("events").style.filter = "grayscale(100%)"
	promotions_banner5 = document.querySelectorAll(".promotions-banner5")
	for (i = 0; i < promotions_banner5.length; i++) {
	    promotions_banner5[i].style.display ="none"
	  }
	promotions_banner4 = document.querySelectorAll(".promotions-banner4")
	for (i = 0; i < promotions_banner4.length; i++) {
	    promotions_banner4[i].style.display ="inline-block"
	  }
	promotions_banner3 = document.querySelectorAll(".promotions-banner3")
	for (i = 0; i < promotions_banner3.length; i++) {
	    promotions_banner3[i].style.display ="none"
	  }
	promotions_banner2 = document.querySelectorAll(".promotions-banner2")
	for (i = 0; i < promotions_banner2.length; i++) {
	    promotions_banner2[i].style.display ="none"
	  }
	promotions_banner1 = document.querySelectorAll(".promotions-banner1")
	for (i = 0; i < promotions_banner1.length; i++) {
	    promotions_banner1[i].style.display ="none"
	  }
}

function events() {
	document.getElementById("all").style.filter = "grayscale(100%)"
	document.getElementById("movie_perks").style.filter = "grayscale(100%)"
	document.getElementById("bank_promos").style.filter = "grayscale(100%)"
	document.getElementById("food_beverages").style.filter = "grayscale(100%)"
	document.getElementById("events").style.filter = "grayscale(0%)"
	promotions_banner5 = document.querySelectorAll(".promotions-banner5")
	for (i = 0; i < promotions_banner5.length; i++) {
	    promotions_banner5[i].style.display ="block"
	  }
	promotions_banner4 = document.querySelectorAll(".promotions-banner4")
	for (i = 0; i < promotions_banner4.length; i++) {
	    promotions_banner4[i].style.display ="none"
	  }
	promotions_banner3 = document.querySelectorAll(".promotions-banner3")
	for (i = 0; i < promotions_banner3.length; i++) {
	    promotions_banner3[i].style.display ="none"
	  }
	promotions_banner2 = document.querySelectorAll(".promotions-banner2")
	for (i = 0; i < promotions_banner2.length; i++) {
	    promotions_banner2[i].style.display ="none"
	  }
	promotions_banner1 = document.querySelectorAll(".promotions-banner1")
	for (i = 0; i < promotions_banner1.length; i++) {
	    promotions_banner1[i].style.display ="none"
	  }
}

function reponsive_close_seacrh() {
	document.getElementById('reponsive').style.display = "none";
	document.getElementById('navbar_background').style.width = "0%";
	document.getElementById('navbar_background').style.height = "0vh";
}

