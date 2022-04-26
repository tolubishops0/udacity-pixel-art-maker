
// Select form, table and color
console.log("im woriking");
const errorElement = document.querySelector("#errorMessage");
const colorInput = document.querySelector("#colorPicker");
const form = document.querySelector("#sizePicker");
const table = document.querySelector("#pixelCanvas");

var i;
var j;
var drawAGrid;

form.addEventListener("submit", function (event) {
  event.preventDefault(); //prevent submission

  i = validInput(form.elements["inputWidth"]); //collect and assigning i and j inputed
  j = validInput(form.elements["inputHeight"]);

  if (drawAGrid) {
    if (table.hasChildNodes()) {
      table.removeChild(table.firstChild); //checks, confirm and clear exixting grids 
      //and also do a reset 
    }
    makeGrid();
  }
});

function validInput(input) {
  //function to validate and confirm proper input values
  var inputValue = input.value;
  var convertInputToValue = Number(inputValue);

  if (convertInputToValue > 50 || convertInputToValue < 2) {
    input.setAttribute("style", "border: 1px green;");
    errorElement.textContent = "incorrect input, try again";
    drawAGrid = false;
  } else {
    input.setAttribute("style", "border: 1px solid black;");
    errorElement.textContent = "";
    drawAGrid = true;
  }
  return input.value;
}

/* When size is submitted by the user, call the makeGrid function
the function draws the grid by callling the assigned input on both the row and the column
*/
function makeGrid() {
  const tableBody = document.createElement("tableBody");
  table.appendChild(tableBody);

  for (row = 0; row < i; row++) {
    //create new rows to carry the columns
    var nRow = document.createElement("tr");

    for (col = 0; col < j; col++) {
      var nCol = document.createElement("td");
      nRow.appendChild(nCol);
    }
    tableBody.appendChild(nRow);
  }

  table.addEventListener("click", function (event) {
    var color = colorInput.value;

    if (event.target.localName === "td") {
      event.target.style.backgroundColor = color;
    }
  });
}
