const container = document.querySelector('#container');

// Create a paragraph inside the container
const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.color = "red";
container.appendChild(para)

// Create a h3 inside the container
const heading = document.createElement('h3');
heading.textContent = "I'm a blue h3!"
heading.style.color = "blue";
container.appendChild(heading);

// Create a new div inside the container
const innerContainer = document.createElement('div');
innerContainer.style.border = "5px solid black";
innerContainer.style.backgroundColor = "pink";

// Create an h1 inside the inner container
const mainHeader = document.createElement('h1');
mainHeader.textContent = "I'm in a div"
innerContainer.appendChild(mainHeader);

// Create a paragraph inside the inner container
const innerPara = document.createElement('p');
innerPara.textContent = "ME TOO!";
innerContainer.appendChild(innerPara);

// Add the second div to the container
container.appendChild(innerContainer);


