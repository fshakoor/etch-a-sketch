let curSize = 16;

const container = document.querySelector('.container')
for (let i = 0; i < curSize*curSize; i++) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('content')
    container.appendChild(newDiv)
    newDiv.addEventListener('mouseover', () => {
        newDiv.style.backgroundColor = 'black';
    });
}