const body = document.querySelector('body');
const button = document.querySelector('#grid-button');
const clearButton = document.querySelector('#clear-grid');
const inputX = document.querySelector('#grid-input-x');
const inputY = document.querySelector('#grid-input-y');
const container = document.createElement('container');
container.classList.add('container');
body.appendChild(container);
function createGrid(rows, columns) {
  //remove line below for stacking grids you can scroll through
  body.removeChild(document.querySelector('.container'));
  const container = document.createElement('div');
  body.appendChild(container);
  container.classList.add('container');

  for (let i = 0; i < rows; i++){
    const flexContainer = document.createElement('div');
    container.appendChild(flexContainer);
    flexContainer.classList.add('flex-container');
    
    for(let j = 0; j < columns; j++){
      const flexItem = document.createElement('div');
      flexContainer.appendChild(flexItem);
      flexItem.classList.add('flex-item');
      flexItem.onmouseout = () => flexItem.setAttribute('style', "background-color:blue");
    }
  }
}
button.onclick = () => createGrid(inputX.value,inputY.value);
clearButton.onclick = () => body.removeChild(document.querySelector('.container'));
