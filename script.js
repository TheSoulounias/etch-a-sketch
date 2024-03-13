const container = document.querySelector('.container');
function createGrid(rows, columns) {
  for (let i = 0; i < rows+1; i++){
    const flexContainer = document.createElement('div');
    container.appendChild(flexContainer);
    flexContainer.classList.add('flex-container');
    
    for(let j = 0; j < columns+1; j++){
      const flexItem = document.createElement('div');
      flexContainer.appendChild(flexItem);
      flexItem.classList.add('flex-item');
    }
  }
}
createGrid(4,4);
