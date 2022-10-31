const item = document.querySelector('.item');
///console.log(item);
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

for (const placeholder of placeholders) {
    //console.log(placeholder);
    placeholder.addEventListener('dragover', dragOver);
    placeholder.addEventListener('dragenter', dragEnter)
    placeholder.addEventListener('dragleave', dragLeave)
    placeholder.addEventListener('drop', dragDrop)
}

function dragStart(event) {
    //console.log('start')
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragEnd(event) {
    //console.log('end')
    //event.target.classList.remove('hold','hide');
    event.target.className = 'item';
}

function dragOver(event) {
    //console.log('dragOver');
    event.preventDefault();
}

function dragEnter(event) {
    //console.log('dragEnter');
    event.target.classList.add('hovered');
}

function dragLeave(event) {
    //console.log('dragLeave');
    event.target.classList.remove('hovered');
}

function dragDrop(event) {
    // console.log('dragDrop');
    event.target.classList.remove('hovered');
    event.target.append(item);
}