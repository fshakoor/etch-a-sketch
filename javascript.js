function page() {
    let curSize = 16;
    let canvasSize = (curSize*15).toString() + 'px';
    const selectBody = document.querySelector('body');

    const container = document.querySelector('.container')
    container.style.maxWidth = canvasSize;
    for (let i = 0; i < curSize*curSize; i++) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('content')
        container.appendChild(newDiv)
        newDiv.addEventListener('mouseover', () => {
            newDiv.style.backgroundColor = 'black';
        });
    }
    const btn = document.querySelector('button')

    btn.addEventListener('click', () => {
        const blocks = document.querySelectorAll('.content')
        let curSize = prompt('Type an integer to select the dimensions of your canvas! (For example type "10" for a 10x10 canvas)');
        if (curSize == '') {curSize = 16};
        if (curSize > 90) {curSize = 90};
        let canvasSize = (curSize*15).toString() + 'px';
        Array.prototype.forEach.call(blocks, function( node ) {
            node.parentNode.removeChild( node );
        });
        container.style.maxWidth = canvasSize;
        for (let i = 0; i < curSize*curSize; i++) {
            const newDiv = document.createElement('div')
            newDiv.classList.add('content')
            container.appendChild(newDiv)
            newDiv.addEventListener('mouseover', () => {
                newDiv.style.backgroundColor = 'black';
            });
        }
        displayDimensions.textContent = 'Current Canvas Dimensions: ' + curSize + ' x ' + curSize 
    })
    const displayDimensions = document.createElement('h3')
    displayDimensions.classList.add('displayDim')
    displayDimensions.textContent = 'Current Canvas Dimensions: ' + curSize + ' x ' + curSize 
    selectBody.appendChild(displayDimensions)
}

page()