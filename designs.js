// a function to determine the height & width of the grid
function makeGrid(height, width) {
  const table = document.getElementById("pixelCanvas");
  grid = '';

  // loop to add the height of the grid
  for (h = 0; h < height; h++) {
      grid += '<tr class="row-' + h + '">';
      // loop to add the width of the gridth
      for (w = 0; w < width; w++) {
          grid += '<td class="cell" id="row-' + h + '_cell-' + w + '"></td>';
      }
      grid += '</tr>';
  }
  table.innerHTML = grid;
  colorClick();
}

// a function to determine what happens when a cell is clicked, i.e., changes the color based on the color picked in the colorPicker
function colorClick() {
  const colorPicker = document.getElementById("colorPicker");
  const cell = document.getElementsByClassName('cell');
  // a loop which includes an event listener specifically for click events
  for (l = 0; l < cell.length; l++) {
      cell[l].addEventListener("click", function (evt) {
          coloredCell = evt.target;
          coloredCell.style.backgroundColor = colorPicker.value;
      });
  }
}

// a function to determine what happens when the form is submitted
function submitForm() {
  event.preventDefault();
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
}

document.getElementById('sizePicker').onsubmit = function () {
  submitForm();
};
