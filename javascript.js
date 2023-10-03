function page() {
    let curSize = 16;
    let canvasSize = (curSize*15).toString() + 'px';

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
        let curSize = prompt('Select the dimensions of the grid! (Capped at 100x100)');
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
    })
}

page()