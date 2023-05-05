function changeTab(evt, tabName, eId){
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++){
		tablinks[i].classList.remove("is-active");
	}
	document.getElementById(tabName).style.display = "block";
	document.getElementById(eId).classList.add("is-active");
				
}
