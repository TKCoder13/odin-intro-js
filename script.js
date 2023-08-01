/* -- Initializing HTML Elements -- */
const body = document.body;
const p = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const p2 = document.createElement('p');

// Step 1
p.style.cssText = "color: red";
p.innerText = "Hey I'm red!";
body.append(p);

// Step 2
h3.style.cssText = "color: blue";
h3.innerText = "Hey I'm blue h3!";
body.append(h3);

// Step 3
div.style.cssText = 
    "background: pink;" +
    "border: black solid;";
h1.innerText = "I'm in a div";
p2.innerText = "ME TOO!";
div.appendChild(h1);
div.appendChild(p2);
body.append(div);