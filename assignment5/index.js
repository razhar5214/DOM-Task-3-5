// get the grid element
const gridContainer = document.getElementById("grid-container");

// get the button element
const addRowBtn = document.getElementById("add-row-btn");
addRowBtn.addEventListener("click", addRowOnClick);

// get the button element
const addColBtn = document.getElementById("add-col-btn");
addColBtn.addEventListener("click", addColOnClick);

let rowStart = 1;
let colStart = 1;


// =================================================================== //

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

function deleteRowOnClick(event) {}

function deleteColOnClick(event) {}


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
  newDiv.textContent = text;
  newDiv.style.gridColumn = column;
  newDiv.style.gridRow = row;
  newDiv.className = "cell";
  return newDiv;
}
