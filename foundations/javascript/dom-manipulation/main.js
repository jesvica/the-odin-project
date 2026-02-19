const container = document.querySelector('#container');

// Create a red paragraph inside the container
const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.color = 'red';
container.appendChild(para);

// Create a blue h3 inside the container
const heading = document.createElement('h3');
heading.textContent = "Hey I'm a blue h3!";
heading.style.color = "blue";
container.appendChild(heading);

// Create a div with a black border, pink background and a h1 and p inside it
const innerContainer = document.createElement('div');
innerContainer.style.border = '5px solid black';
innerContainer.style.backgroundColor = 'pink';

// Create a h1 with text inside and append to the div
const innerHeading = document.createElement('h1');
innerHeading.textContent = "I'm in a div!";
innerContainer.appendChild(innerHeading);

// Create a paragraph with text inside and append to the div
const innerPara = document.createElement('p');
innerPara.textContent = "ME TOO!"
innerContainer.appendChild(innerPara);

// Append the div to the webpage
container.appendChild(innerContainer);