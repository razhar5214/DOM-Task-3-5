// 1) Select the section with an id of container without using querySelector.

function getContainerWithoutQuery() {
  const container = document.getElementById("container");
  console.log(container);
  return container;
}

// 2) Select the section with an id of container using querySelector.

function getContainerWithQuery() {
  const container = document.querySelector("#container");
  console.log(container);
}

// 3) Select all of the list items with a class of "second".

function getListItemsWithClassSecond() {
  const secondClassElements = document.getElementsByClassName("second");
  console.log(secondClassElements);
}

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.

function getListItemWithClassThirdInOl() {
  const thirdClassElements = document.getElementsByClassName("third");
  const thirdOlElement = thirdClassElements.length
    ? thirdClassElements[0]
    : "there is no such element";
  console.log(thirdOlElement);
}

// 5) Give the section with an id of container the text "Hello!".

function updateContainerTextWithHello() {
  const container = getContainerWithoutQuery();
  container.textContent = "Hello!";
}

// 6) Add the class main to the div with a class of footer.

function addClassMainToFooterElement() {
  const footerDiv = document.querySelector(".footer");
  footerDiv.className += " main";
  console.log(footerDiv);
}

// 7) Remove the class main on the div with a class of footer.

function removeClassMainFromFooterElement() {
  const footerDiv = document.querySelector(".footer");
  footerDiv.className = "footer";
  console.log(footerDiv);
}

// 8) Create a new li element.

function createNewLiElement() {
  const liElement = document.createElement("li");
  console.log(liElement);
  return liElement;
}

// 9) Give the li the text "four".

function getUpdatedLiTextWithFour() {
  const liElement = createNewLiElement();
  liElement.textContent = "four";
  return liElement;
}

// 10) Append the li to the ul element.

function appendLiElementToUl() {
  const ulElement = document.querySelector("ul");
  ulElement.appendChild(getUpdatedLiTextWithFour());
  console.log(ulElement);
}

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".

function updateListItemsInOlWithBackgroundGreen() {
  const olElement = document.getElementsByTagName("ol");
  console.log(olElement.length);
  for (let i = 0; i < olElement.length; i++) {
    const li = olElement[i];
    li.style.backgroundColor = "green";
  }
  console.log(olElement);
}

// 13) Remove the div with a class of footer.

function removeElementWithClassFooter() {
  const footer = document.querySelector(".footer");
  footer.remove();
}

// getContainerWithoutQuery();
// getContainerWithQuery();
// updateContainerTextWithHello();

// createNewLiElement();
// getUpdatedLiTextWithFour();
// appendLiElementToUl();
// updateListItemsInOlWithBackgroundGreen();

// getListItemsWithClassSecond();
// getListItemWithClassThirdInOl();

// addClassMainToFooterElement();
// removeClassMainFromFooterElement();
// removeElementWithClassFooter();
