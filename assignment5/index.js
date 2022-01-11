// get the grid element
const gridContainer = document.getElementById("grid-container");

// get all grid cell elements
const listOfCells = document.getElementsByClassName("cell");

/* 
  USER STORY #5 
  get the color selected by the user 
*/
const colorPicker = document.getElementById("colorpicker");
let colorVal = colorPicker.value;
colorPicker.addEventListener("input", () => {
  colorVal = colorPicker.value;
});

// user button controls
const addRowBtn = document.getElementById("add-row-btn");
addRowBtn.addEventListener("click", addRowOnClick);

const addColumnBtn = document.getElementById("add-col-btn");
addColumnBtn.addEventListener("click", addColOnClick);

const deleteRowBtn = document.getElementById("dlt-row-btn");
deleteRowBtn.addEventListener("click", deleteRowOnClick);

const deleteColumnBtn = document.getElementById("dlt-col-btn");
deleteColumnBtn.addEventListener("click", deleteColOnClick);

const fillUnColoredBtn = document.getElementById("fill-uncolored-btn");
fillUnColoredBtn.addEventListener("click", fillUncoloredCells);

const fillAllBtn = document.getElementById("fill-all-btn");
fillAllBtn.addEventListener("click", () => {
  fillAllCells(colorVal);
});

const unfillAllBtn = document.getElementById("unfill-all-btn");
unfillAllBtn.addEventListener("click", () => {
  fillAllCells(""); // make background-color blank
});

// check for mouse hold event on grid cells
let isMouseDown = false;

// track the next row and column number
let rowStart = 1;
let columnStart = 1;

// =================================================================== //

/* 
  USER STORY #1
  method to add row to grid 
*/
function addRowOnClick() {
  if (columnStart === 1) {
    rowStart = 1;
    columnStart++;
  }

  fillRow();
  rowStart++;
}

/* 
  USER STORY #2 
  method to add column to grid 
*/
function addColOnClick() {
  if (rowStart === 1) {
    columnStart = 1;
    rowStart++;
  }

  fillCol();
  columnStart++;
}

/* 
  USER STORY #3 
  method to remove row from grid 
*/
function deleteRowOnClick(event) {
  // get the last row that was added
  const rowToDelete = document.getElementsByClassName(`row-${--rowStart}`);
  removeElements(rowToDelete);
}

/* 
  USER STORY #4
  method to remove column from grid 
*/
function deleteColOnClick() {
  // get the last column that was added
  const columnToDelete = document.getElementsByClassName(`col-${--columnStart}`);
  removeElements(columnToDelete);
}

/*
  depending on parameter passed in:
  USER STORY #8
  method to fill all cells with user-selected color passed as parameter 
  USER STORY #9
  method to unfill all cells when parameter "" is passed to function 
*/
function fillAllCells(color) {
  for (let i = 0; i < listOfCells.length; i++) {
    listOfCells[i].style.backgroundColor = color;
  }
}

/* USER STORY #7 - method to fill uncolored cells with user-selected color */
function fillUncoloredCells() {
  console.log(listOfCells);
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
  for (let i = 1; i < columnStart; i++) {
    const newDiv = createGridCell(rowStart, i);
    newDiv.className += ` col-${i} row-${rowStart}`; // location of cell in grid
    gridContainer.appendChild(newDiv);
  }
}

// helper function - fills rest of cells when new column created
function fillCol() {
  for (let i = 1; i < rowStart; i++) {
    const newDiv = createGridCell(i, columnStart);
    newDiv.className += ` col-${columnStart} row-${i}`; // location of cell in grid
    gridContainer.appendChild(newDiv);
  }
}

// helper function - create one grid cell
function createGridCell(row, column) {
  const newDiv = document.createElement("div");
  newDiv.style.gridColumn = column;
  newDiv.style.gridRow = row;
  newDiv.className = "cell";
  addEventListenersToCell(newDiv);
  return newDiv;
}

// helper function - add mouse event listeners to grid cell
function addEventListenersToCell(gridCell) {
  /* 
    USER STORY #6 - 
    click a single cell to change the cell's color 
  */
  gridCell.addEventListener("mousedown", function () {
    gridCell.style.backgroundColor = colorVal;
    isMouseDown = true;
  });

  /* 
    USER STORY #10 
    click and drag to over multiple cells to change their colors 
  */
  gridCell.addEventListener("mouseover", function () {
    // only change color when mouse click is held
    if (isMouseDown) {
      gridCell.style.backgroundColor = colorVal;
    }
  });

  gridCell.addEventListener("mouseup", function () {
    isMouseDown = false;
  });
}

// helper function - remove elements in an HTMLCollection
function removeElements(elementList) {
  // loop backwards to avoid bugs when removing elements from list
  for (let i = elementList.length - 1; i >= 0; i--) {
    elementList[i].remove();
  }
}
