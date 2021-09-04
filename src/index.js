import "./styles/styles.scss";

const template = document.getElementById('font-template').content;
const main = document.getElementById('main');
const font = document.getElementById('font-name');
const custom = document.getElementById('custom-text');
let children = [];

custom.addEventListener('focusout', (e) => {
    if (!e.target.textContent.trim()) {
        e.target.textContent = "";
    }
});

const updateBody = (e) => children.forEach(child => child.textContent = custom.textContent);
custom.oninput = updateBody;

document.getElementById('add').addEventListener('click', (e) => {
    e.preventDefault();

    const clone = template.cloneNode(true);
    const article = clone.querySelector('.font-demo');
    article.setAttribute('style',`font-family: "${font.value}"`);

    clone.querySelector('.font-demo__header__title').textContent = font.value;
    // clone.querySelector('.font-demo__subtitle').textContent = custom.textContent;

    const body = clone.querySelector('.font-demo__body');
    body.textContent = custom.textContent;
    children = [...children, body];
    
    clone.querySelector('.font-demo__header__remove').onclick = (e) => article.remove();

    main.appendChild(article);
});

document.getElementById('clear').addEventListener('click', (e) => {
    e.preventDefault();
    custom.textContent = "";
    updateBody();
});