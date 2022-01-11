// 1) Select the section with an id of container without using querySelector.
document.getElementById("container");


// 2) Select the section with an id of container using querySelector.

console.log(document.querySelector('container'));


// 3) Select all of the list items with a class of "second".

console.log(document.getElementsByClassName('second'));


// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
document.getElementsByClassName("ol.third")


// 5) Give the section with an id of container the text "Hello!".
document.getElementById('container').innerText="Hello.";


// 6) Add the class main to the div with a class of footer.

document.getElementsByClassName("footer").classname = "main";

// 7) Remove the class main on the div with a class of footer.
document.querySelector(".footer").classList.remove("main")


// 8) Create a new li element.
let el = document.createElement("li");

// 9) Give the li the text "four".
el.innerText = "four";

// 10) Append the li to the ul element.
let uel = document.querySelector("ul");
uel.appendChild(el);

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
for (var x = 0; x < document.querySelectorAll().length; x++) {
    document.querySelectorAll()[x].style.backgroundColor = "green";
}


// 13) Remove the div with a class of footer.
document.getElementsByClassName("footer")[0].remove();
