function makeGrid(height, width) {
  const table = document.getElementById("pixelCanvas");
  grid = '';

  for (h = 0; h < height; h++) {
      grid += '<tr class="row-' + h + '">';
      for (w = 0; w < width; w++) {
          grid += '<td class="cell" id="row-' + h + '_cell-' + w + '"></td>';
      }
      grid += '</tr>';
  }
  table.innerHTML = grid;

  colorClick();
}

function colorClick() {
  const colorPicker = document.getElementById("colorPicker");
  const cell = document.getElementsByClassName('cell');
  for (l = 0; l < cell.length; l++) {
      cell[l].addEventListener("click", function (evt) {
          coloredCell = evt.target;
          coloredCell.style.backgroundColor = colorPicker.value;
      });
  }
}

function submitForm() {
  event.preventDefault();
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
}

document.getElementById('sizePicker').onsubmit = function () {
  submitForm();
};