
const greetingElement = document.querySelector('.greeting');
greetingElement.textContent = 'Hello from JavaScript! The content has been updated.';


const styleButton = document.getElementById('style-button');
const styledParagraph = document.querySelector('#style-section p');

styleButton.addEventListener('click', () => {
    styledParagraph.style.color = 'green';
    styledParagraph.style.fontStyle = 'italic';
});


const addButton = document.getElementById('add-button');
const removeButton = document.getElementById('remove-button');
const itemList = document.getElementById('item-list');

addButton.addEventListener('click', () => {
    const newListItem = document.createElement('li');
    newListItem.textContent = `New Item ${itemList.children.length + 1}`;
    itemList.appendChild(newListItem);
});

removeButton.addEventListener('click', () => {
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastElementChild);
    }
});