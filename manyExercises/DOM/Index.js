const container = document.querySelector('#container');
const content = document.createElement('p');
content.style.color = 'red';
content.textContent = 'Hey I\'m red!';
container.appendChild(content);
const content2 = document.createElement('h3');
content2.textContent = 'I\'m a blue h3!';
content2.style.color = 'blue';
container.appendChild(content2);
const outerdiv = document.createElement('div');
outerdiv.classList.add('container-div');
outerdiv.setAttribute('style', 'border: 1px solid black; background-color: pink;')
const another = document.createElement('h1');
const para = document.createElement('p');
outerdiv.appendChild(another);
outerdiv.appendChild(para);
container.appendChild(outerdiv);
another.textContent = 'I\'m in a div!';
para.textContent = 'Me too!';

