data = [
    {
        "title":"Big Screen Gaming",
        "description":"Come enjoy your game on our BIG screen! T&C apply",
        "image":"https://gsc-statics.s3-ap-southeast-1.amazonaws.com/cms/507c9244-45a1-4a7a-b5dd-7c1f1daf23f2.jpg",
        "card_type":"events"
    },
    {
        "title":"4 designs for RM60!",
        "description":"Don't wait, collect all 4 Mickey & Friends designs today!",
        "image":"https://gsc-statics.s3-ap-southeast-1.amazonaws.com/cms/26990535-d871-4b78-b929-c9de183aa035.jpg",
        "card_type":"food"
    },
    {
        "title":"Get your Star Wars Tumbler at ONLY RM15!",
        "description":"Light side or Dark Side? Why not both!",
        "image":"https://gsc-statics.s3-ap-southeast-1.amazonaws.com/cms/e855cb6e-dded-4e8d-8293-67139ce66db4.jpg",
        "card_type":"food"
    },
    {
        "title":"Get Poppy Tumbler at ONLY RM10!",
        "description":"For a limited time only, experience AURUM THEATRE at a special price. Terms and conditions apply.",
        "image":"https://gsc-statics.s3-ap-southeast-1.amazonaws.com/cms/247cb8aa-07f8-40e9-b1cf-835bc2c251ea.jpg",
        "card_type":"food"
    },
    {
        "title":"Special Pricing for Aurum Theatre",
        "description":"Come enjoy your game on our BIG screen! T&C apply",
        "image":"https://gsc-statics.s3-ap-southeast-1.amazonaws.com/cms/62346ad6-fc7d-4466-9afb-2a82f8680ff9.jpg",
        "card_type":"movie"
    },
    {
        "title":"At GSC, we craft powerful, integrated campaigns for all seasons.",
        "description":"Discover a powerhouse of solutions for every story.",
        "image":"https://gsc-statics.s3-ap-southeast-1.amazonaws.com/cms/130a401d-3e3d-4f6f-b9fe-42cf333f3b59.jpg",
        "card_type":"movie"
    },
    {
        "title":"New GSC Hong Leong Bank RM6 Off & Concession Discount!",
        "description":"Enjoy RM6 off on ALL Adult tickets!",
        "image":"https://gsc-statics.s3-ap-southeast-1.amazonaws.com/cms/66ebc33c-f00e-49b1-9d2c-ed2575bc1601.jpg",
        "card_type":"bank"
    },
    {
        "title":"Hot & Spicy Goldie Horn",
        "description":"Hot, crunchy, and very hard to put down after the first bite!",
        "image":"https://gsc-statics.s3-ap-southeast-1.amazonaws.com/cms/56634a1b-65f8-4d44-9416-4461fa5aaba3.jpg",
        "card_type":"food"
    },
    {
        "title":"Standard Chartered Buy 1 Free 1 Every Friday, Saturday & Sunday",
        "description":"Buy 1 Free 1 Every Friday, Saturday & Sunday",
        "image":"https://gsc-statics.s3-ap-southeast-1.amazonaws.com/cms/90b3051a-44bc-44a2-af1e-995849e81fe7.jpg",
        "card_type":"bank"
    },
    {
        "title":"Cheesy Chicken Strips",
        "description":"Bite Me Now! ",
        "image":"https://gsc-statics.s3-ap-southeast-1.amazonaws.com/cms/b743336f-a3ca-418d-828f-a63a874e3f3b.jpg",
        "card_type":"food"
    },
    {
        "title":"1-for-1 Gold Class Tickets for Citi Prestige Card Members",
        "description":"Immerse in the latest films with your loved ones on Saturdays, Sundays & Public Holidays! Valid for normal seats purchased. T&C applies.",
        "image":"https://gsc-statics.s3-ap-southeast-1.amazonaws.com/cms/0fd2ecd7-fe4a-43fe-9e20-f25e34b25deb.jpg",
        "card_type":"bank"
    },
    {
        "title":"1-for-1 Movie Tickets for Citi Clear Card Members",
        "description":"Buy 1 FREE 1 GSC movie tickets with any Citibank Clear Card on Friday. Terms & conditions apply.",
        "image":"https://gsc-statics.s3-ap-southeast-1.amazonaws.com/cms/29d0b561-3d97-42eb-bbb5-a472cd492f8b.jpg",
        "card_type":"bank"
    },
    {
        "title":"Flat 10 Movies *EVERYDAY",
        "description":"Flat RM10 for ONE (1) Normal Adult ticket for showtimes after 1.00PM",
        "image":"https://gsc-statics.s3-ap-southeast-1.amazonaws.com/cms/61d8c69b-55ab-4ee0-970a-650875219926.jpg",
        "card_type":"bank"
    }
]

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

