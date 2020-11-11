
window.onload = function what(){
	data.forEach(myFunction);
	function myFunction(item, index) {
		document.getElementById('section-promotions').innerHTML += 
		`
		<div class="romotions-div">
			<div class="promotions-div height">
				<img class="img-fluid height1 " src=`+ item.image +`>
			</div>
			<div class="promotions-word-box">
				<h3>` + item.title + `</h3>
				<p>` + item.description +`</p>
			</div>
		</div>`

	}
};

function showing(promotion_type) {
	x = document.getElementById('section-promotions')
	element = document.querySelectorAll(".romotions-div");
	Array.prototype.forEach.call( element, function( node ) {
		 node.parentNode.removeChild( node );
	});

	switch(promotion_type) {
		case "events":
	   	text = "events";
	    break;
	    case "food":
	   	text = "food";
	    break;
	    case "bank":
	    text = "bank";
	    break;
	    case "movie":
	    text = "movie";
	    break;
	    case "All":
	    text = "all";
	    break;
	 }

	 data.forEach(myFunction);
	 function myFunction(item, index) {
	 	if(text == "all"){
			x.innerHTML += 
			`
			<div class="romotions-div">
				<div class="promotions-div height">
					<img class="img-fluid height1 " src=`+ item.image +`>
				</div>
				<div class="promotions-word-box">
					<h3>` + item.title + `</h3>
					<p>` + item.description +`</p>
				</div>
			</div>`
		} else if(item.card_type == text) {
		 	x.innerHTML += 
		 	`
		 	<div class="romotions-div">
		 		<div class="promotions-div height">
		 			<img class="img-fluid height1 " src=`+ item.image +`>
		 		</div>
		 		<div class="promotions-word-box">
		 			<h3>` + item.title + `</h3>
		 			<p>` + item.description +`</p>
		 		</div>
		 	</div>`
		}
	}
}



function movie_perks() {
	document.getElementById("all").style.filter = "grayscale(100%)"
	document.getElementById("movie_perks").style.filter = "grayscale(0%)"
	document.getElementById("bank_promos").style.filter = "grayscale(100%)"
	document.getElementById("food_beverages").style.filter = "grayscale(100%)"
	document.getElementById("events").style.filter = "grayscale(100%)"
	var promotion_type = "movie"
	showing(promotion_type)
}

function bank_promos() {
	document.getElementById("all").style.filter = "grayscale(100%)"
	document.getElementById("movie_perks").style.filter = "grayscale(100%)"
	document.getElementById("bank_promos").style.filter = "grayscale(0%)"
	document.getElementById("food_beverages").style.filter = "grayscale(100%)"
	document.getElementById("events").style.filter = "grayscale(100%)"
	var promotion_type = "bank"
	showing(promotion_type)
}

function food_beverages() {
	document.getElementById("all").style.filter = "grayscale(100%)"
	document.getElementById("movie_perks").style.filter = "grayscale(100%)"
	document.getElementById("bank_promos").style.filter = "grayscale(100%)"
	document.getElementById("food_beverages").style.filter = "grayscale(0%)"
	document.getElementById("events").style.filter = "grayscale(100%)"
	var promotion_type = "food"
	showing(promotion_type)
}

function events()  {
	document.getElementById("all").style.filter = "grayscale(100%)"
	document.getElementById("movie_perks").style.filter = "grayscale(100%)"
	document.getElementById("bank_promos").style.filter = "grayscale(100%)"
	document.getElementById("food_beverages").style.filter = "grayscale(100%)"
	document.getElementById("events").style.filter = "grayscale(0%)"
	var promotion_type = "events"
	showing(promotion_type)
}

function All()  {
	document.getElementById("all").style.filter = "grayscale(0%)"
	document.getElementById("movie_perks").style.filter = "grayscale(100%)"
	document.getElementById("bank_promos").style.filter = "grayscale(100%)"
	document.getElementById("food_beverages").style.filter = "grayscale(100%)"
	document.getElementById("events").style.filter = "grayscale(100%)"
	var promotion_type = "All"
	showing(promotion_type)
}

function navbar() {
	document.getElementById('navbar-collapse').style.marginLeft = "0px";
	document.getElementById('navbar_background').style.width = "100%";
	document.getElementById('navbar_background').style.height = "100vh";
	document.getElementById('html').style.overflow = "hidden";	
}

function mouseDown(){
	document.getElementById('navbar-collapse').style.marginLeft = "-260px";
	document.getElementById('navbar_background').style.width = "0%";
	document.getElementById('navbar_background').style.height = "0vh";
	document.getElementById('reponsive').style.display = "none";
	document.getElementById('html').style.overflow = "";
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

function reponsive_close_seacrh() {
	document.getElementById('reponsive').style.display = "none";
	document.getElementById('navbar_background').style.width = "0%";
	document.getElementById('navbar_background').style.height = "0vh";
	var x = document.getElementById('nav-search');
	var y = document.getElementById('navbar-search');
	var z = document.getElementById('search-close');
		x.style.display = "none";
		y.style.display = "block";
		z.style.display = "none";
}

