
window.onload = function what(){
	x = $("#section-promotions")
	all = $("#all")
	movie = $("#movie_perks")
	bank = $("#bank_promos")
	food = $("#food_beverages")
	event = $("#events")
	navbar_collapse = $("#navbar-collapse")
	navbar_background = $("#navbar_background")
	html = $("#html")
	reponsive = $("#reponsive")
	nav_search = $("#nav-search");
	navbar_search = $("#navbar-search");
	search_close = $("#search-close");
	tab_promotions = $("#promotions");
	tab_contests = $("#contests");
	tab_announcements = $("#announcements");
	tab_line = $("#tab-line")
	page1 = $("#page_1")
	page2 = $("#page_2")

	data.forEach(myFunction);
	function myFunction(item, index) {
		x.append(
		`
		<div class="romotions-div">
			<div class="promotions-div height">
				<img class="img-fluid height1 " src=`+ item.image +`>
			</div>
			<div class="promotions-word-box">
				<h3>` + item.title + `</h3>
				<p>` + item.description +`</p>
			</div>
		</div>`)

	}
};

function showing(promotion_type) {
	element = $(".romotions-div")
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
			x.attr('class', '');
			x.append(`
			<div class="romotions-div">
				<div class="promotions-div height">
					<img class="img-fluid height1 " src=`+ item.image +`>
				</div>
				<div class="promotions-word-box">
					<h3>` + item.title + `</h3>
					<p>` + item.description +`</p>
				</div>
			</div>`);

		} else if(item.card_type == text) {
			x.attr('class', '');
			x.append(`
			<div class="romotions-div">
				<div class="promotions-div height">
					<img class="img-fluid height1 " src=`+ item.image +`>
				</div>
				<div class="promotions-word-box">
					<h3>` + item.title + `</h3>
					<p>` + item.description +`</p>
				</div>
			</div>`);
		if(text == "events"){
			x.attr('class', 'col1');
		}
		}if(text == "movie"){
			x.attr('class', 'col');
		}

	}
	x.html(box)
}



function movie_perks() {
	all.css("filter", "grayscale(100%)");
	movie.css("filter", "grayscale(0%)");
	bank.css("filter", "grayscale(100%)");
	food.css("filter", "grayscale(100%)");
	event.css("filter", "grayscale(100%)");
	var promotion_type = "movie"
	showing(promotion_type)
}

function bank_promos() {
	all.css("filter", "grayscale(100%)");
	movie.css("filter", "grayscale(100%)");
	bank.css("filter", "grayscale(0%)");
	food.css("filter", "grayscale(100%)");
	event.css("filter", "grayscale(100%)");
	var promotion_type = "bank"
	showing(promotion_type)
}

function food_beverages() {
	all.css("filter", "grayscale(100%)");
	movie.css("filter", "grayscale(100%)");
	bank.css("filter", "grayscale(100%)");
	food.css("filter", "grayscale(0%)");
	event.css("filter", "grayscale(100%)");
	var promotion_type = "food"
	showing(promotion_type)
}

function events()  {
	all.css("filter", "grayscale(100%)");
	movie.css("filter", "grayscale(100%)");
	bank.css("filter", "grayscale(100%)");
	food.css("filter", "grayscale(100%)");
	event.css("filter", "grayscale(0%)");
	var promotion_type = "events"
	showing(promotion_type)
}

function All()  {
	all.css("filter", "grayscale(0%)");
	movie.css("filter", "grayscale(100%)");
	bank.css("filter", "grayscale(100%)");
	food.css("filter", "grayscale(100%)");
	event.css("filter", "grayscale(100%)");
	var promotion_type = "All"
	showing(promotion_type)
}

function navbar() {
	navbar_collapse.css("marginLeft", "0px");
	navbar_background.css("width", "100%");
	navbar_background.css("height", "100vh");
	html.css("overflow", "hidden")
}

function mouseDown(){
	navbar_collapse.css("marginLeft", "-260px");
	navbar_background.css("width", "0%");
	navbar_background.css("height", "0%");
	reponsive.css("display", "none")
	html.css("overflow", "")
}

function movies(){
	movie_info = $("#movie_info")
	arrow_right = $("#arrow-right")
	if (movie_info.css("display") == "block") {
		movie_info.css("display", "none");
		arrow_right.css("transform", "rotate(0deg)");
	} else {
		movie_info.css("display", "block");
		arrow_right.css("transform", "rotate(90deg)");
	}
}

function Promotions(){
	promotions_info = $("#promotions_info")
	promotions_arrow_right = $("#promotions-arrow-right")
	if (promotions_info.css("display") == "block") {
		promotions_info.css("display", "none");
		promotions_arrow_right.css("transform", "rotate(0deg)");
	} else {
		promotions_info.css("display", "block");
		promotions_arrow_right.css("transform", "rotate(90deg)");
	}
}

function Cinemas(){
	cinemas_info = $("#cinemas_info")
	cinemas_arrow_right = $("#cinemas-arrow-right")
	if (cinemas_info.css("display") == "block") {
		cinemas_info.css("display", "none");
		cinemas_arrow_right.css("transform", "rotate(0deg)");
	} else {
		cinemas_info.css("display", "block");
		cinemas_arrow_right.css("transform", "rotate(90deg)");
	}
}

function Food(){
	food_info = $("#food_info")
	food_arrow_right = $("#food-arrow-right")
	if (food_info.css("display") == "block") {
		food_info.css("display", "none");
		food_arrow_right.css("transform", "rotate(0deg)");
	} else {
		food_info.css("display", "block");
		food_arrow_right.css("transform", "rotate(90deg)");
	}
}

function Help(){
	help_info = $("#help_info")
	help_arrow_right = $("#help-arrow-right")
	if (help_info.css("display") == "block") {
		help_info.css("display", "none");
		help_arrow_right.css("transform", "rotate(0deg)");
	} else {
		help_info.css("display", "block");
		help_arrow_right.css("transform", "rotate(90deg)");
	}
}

function search() {
	if ((screen.width > 1024)) {
		nav_search.css("display", "flex");
		navbar_search.css("display", "none");
		search_close.css("display", "block");
	} else {
		reponsive.css("display", "block");
		navbar_background.css("width", "100%");
		navbar_background.css("height", "100vh");
	}
}

function close_seacrh() {
	nav_search.css("display", "none");
	navbar_search.css("display", "block");
	search_close.css("display", "none");
}

function promotions() {
	tab_promotions .css("color", "yellow");
	tab_contests.css("color", "white");
	tab_announcements.css("color", "white");
	tab_line.css("transform", "translate3d(0px, 0px, 0px)")
	tab_line.css("width", "115px")
	page1.css("display", "block");	
	page2.css("display", "none");	
}

function contests() {
	tab_promotions .css("color", "white");
	tab_contests.css("color", "yellow");
	tab_announcements.css("color", "white");
	tab_line.css("transform", "translate3d(135px, 0px, 0px)")
	tab_line.css("width", "115px")
	page1.css("display", "none");	
	page2.css("display", "none");
}

function announcements() {
	tab_promotions .css("color", "white");
	tab_contests.css("color", "white");
	tab_announcements.css("color", "yellow");
	tab_line.css("transform", "translate3d(270px, 0px, 0px)")
	tab_line.css("width", "150px")
	page1.css("display", "none");	
	page2.css("display", "block");
}

function reponsive_close_seacrh() {
	reponsive.css("display", "none")
	navbar_background.css("width", "0%");
	navbar_background.css("height", "0%");
	nav_search.css("display", "none")
	navbar_search.css("display", "block")
	search_close.css("display", "none")
}

