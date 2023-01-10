

function shownav2(){
	let navbar2_container = document.getElementById("navbar2_container");
	let navbar2 = document.getElementById("navbar2");
	let navbar2_2 = document.getElementById("navbar2_2");

	if(navbar2.className=="navbar2"){
		navbar2.className+=" resp-navbar2";
	}
	else{
		navbar2.className="navbar2";
	}

	if(navbar2_2.className=="navbar2_2"){
		navbar2_2.className+=" resp-navbar2";
	}
	else{
		navbar2_2.className="navbar2_2";
	}

}


function showsidebar(){
	let sidebar = document.getElementById("sidebar");

	let section1 = document.getElementById("section1");

	let section1_2 = document.getElementById("section1_2");

	if(sidebar.className=="sidebar"){
		sidebar.className+=" resp-sidebar";
	}
	else{
		sidebar.className="sidebar";
	}

	if(section1.className=="section1"){
		section1.className+=" resp-sidebar";
	}
	else{
		section1.className="section1";
	}

	if(section1_2.className=="section1_2"){
		section1_2.className+=" resp-sidebar";
	}
	else{
		section1_2.className="section1_2";
	}
}


function shownav1(){
	let navbar1 = document.getElementById("navbar1");

	let navbar1_2 = document.getElementById("navbar1_2");

	if(navbar1.className=="navbar1"){
		navbar1.className+=" resp-navbar1";
	}
	else{
		navbar1.className="navbar1";
	}

	if(navbar1_2.className=="navbar1_2"){
		navbar1_2.className+=" resp-navbar1";
	}
	else{
		navbar1_2.className="navbar1_2";
	}

}