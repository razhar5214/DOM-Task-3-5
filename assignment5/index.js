// get the grid element
const gridContainer = document.getElementById("grid-container");

// get all grid cells
const listOfCells = document.getElementsByClassName("cell");

// get the color picker
const colorPicker = document.getElementById("colorpicker");
let colorVal = colorPicker.value;

// get the color selected by user
colorPicker.addEventListener("input", () => {
  colorVal = colorPicker.value;
});

/* user button controls */
const addRowBtn = document.getElementById("add-row-btn");
addRowBtn.addEventListener("click", addRowOnClick);

const addColBtn = document.getElementById("add-col-btn");
addColBtn.addEventListener("click", addColOnClick);

const deleteRowBtn = document.getElementById("dlt-row-btn");
deleteRowBtn.addEventListener("click", deleteRowOnClick);

const deleteColBtn = document.getElementById("dlt-col-btn");
deleteColBtn.addEventListener("click", deleteColOnClick);

const fillAllBtn = document.getElementById("fill-all-btn");
fillAllBtn.addEventListener("click", () => {
  fillAllCells(colorVal);
});

const unfillAllBtn = document.getElementById("unfill-all-btn");
unfillAllBtn.addEventListener("click", () => {
  fillAllCells("white");
});

const fillUnColBtn = document.getElementById("fill-uncol-btn");
fillUnColBtn.addEventListener("click", fillUncoloredCells);

let rowStart = 1;
let colStart = 1;

// =================================================================== //
/* methods to modify grid */

// method to add row to grid
function addRowOnClick() {
  if (colStart === 1) {
    rowStart = 1;
    colStart++;
  }

  const newDiv = createGridCell("new row", rowStart, 1);
  gridContainer.appendChild(newDiv);

  fillRow();
  rowStart++;
}

// method to add column to grid
function addColOnClick() {
  if (rowStart === 1) {
    colStart = 1;
    rowStart++;
  }

  const newDiv = createGridCell("new column", 1, colStart);
  gridContainer.appendChild(newDiv);

  fillCol();
  colStart++;
}

function deleteRowOnClick(event) {
  if (colStart === 1) {
    alert("ERROR!");
  }
  //removeGridCell("delete row", rowStart, 1);
  rowStart--;
}

function deleteColOnClick(event) {
  if (rowStart === 1) {
    alert("ERROR!");
  }
}

function fillAllCells(color) {
  for (let i = 0; i < listOfCells.length; i++) {
    listOfCells[i].style.backgroundColor = color;
  }
}

function fillUncoloredCells() {
  for (let i = 0; i < listOfCells.length; i++) {
    // if background color is white it will return an empty string
    if (listOfCells[i].style.backgroundColor === "") {
      listOfCells[i].style.backgroundColor = colorVal;
    }
  }
}

// ===================================================================== //

// helper function - fills rest of cells new when row created
function fillRow() {
  for (let i = 2; i < colStart; i++) {
    const newDiv = createGridCell("new", rowStart, i);
    gridContainer.appendChild(newDiv);
  }
}

// helper function - fills rest of cells when new column created
function fillCol() {
  for (let i = 2; i < rowStart; i++) {
    const newDiv = createGridCell("new", i, colStart);
    gridContainer.appendChild(newDiv);
  }
}

// helper function - create one cell and add to grid
function createGridCell(text, row, column) {
  const newDiv = document.createElement("div");
  newDiv.addEventListener("click", () => {
    newDiv.style.backgroundColor = colorVal;
  });
  newDiv.textContent = text;
  newDiv.style.gridColumn = column;
  newDiv.style.gridRow = row;
  newDiv.className = "cell";
  return newDiv;
}
