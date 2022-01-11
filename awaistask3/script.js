function initialize(){

	//1) Select the section with an id of container without using querySelector.
	document.getElementById("container")

	//2) Select the section with an id of container using querySelector.
	document.querySelector("container")

	//3) Select all of the list items with a class of "second".
	document.getElementsByClassName("second");
	
	//4) Select a list item with a class of third, but only the list item inside of the ol tag.
	document.getElementById("oList").getElementsByClassName("third");

	//5) Give the section with an id of container the text "Hello!".
	document.getElementById("container").innerHTML = "Hello!";

	//6) Add the class main to the div with a class of footer.
	//document.querySelectorAll("div.footer").classList.add("main");
	document.querySelector(".footer").className += " main";

	//7) Remove the class main on the div with a class of footer.
	//document.getElementsByClassName("footer").classList.remove("main");
	document.querySelector(".footer").className = "footer";

	//8) Create a new li element.
	let newLI = document.createElement("li")

	//9) Give the li the text "four".
	newLI.textContent = "four";

	//10) Append the li to the ul element.
	document.getElementById("uList").append(newLI);

	//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
	
	let oList = document.getElementById("oList").getElementsByTagName("li");
	for(let i=0; i<oList.length;i++){
		oList[i].style.backgroundColor="green";
	}
	
	//13) Remove the div with a class of footer.
	document.querySelector(".footer").remove();

	
}