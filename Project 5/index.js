console.log('This is Drag and Drop');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e) => {
    console.log('start');
    e.target.className += ' hold';
    setTimeout(() => { e.target.className = 'hide'; }, 0);

});

imgBox.addEventListener('dragend', (e) => {
    console.log('end');
    e.target.className = 'imgBox';
});

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('over');
    });
    whiteBox.addEventListener('dragenter', () => {
        console.log('enter');
    });
    whiteBox.addEventListener('dragleave', () => {
        console.log('leave');
    });
    whiteBox.addEventListener('drop', (e) => {
        console.log('drop');
        e.target.append(imgBox);
    });
}