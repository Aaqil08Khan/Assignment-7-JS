// Part 2: DOM Manipulation

// Task 3: DOM Element Creation and Manipulation
// Write a program that creates, modifies, and appends DOM elements dynamically using JavaScript. Perform the following tasks:
// 1. Create an HTML page with a container element.
// 2. Use JavaScript to create new elements, modify their attributes and content, and append them to the container element.
// 3. Style the elements using CSS classes and apply event listeners for interactivity.

// Select the container element
let container = document.getElementById("container");

// Create a new div element
let newDiv = document.createElement("div");



// Modify attribute
newDiv.classList.add("dynamic-div");
newDiv.id = "Student_Card";
newDiv.setAttribute("title", "student_info");


// Add intro text (use a paragraph instead of textContent)
let intro = document.createElement("p");
intro.textContent = "This is a new div element created dynamically using JS.";
newDiv.appendChild(intro);


// Append the new div to the main container
container.appendChild(newDiv);

// Add more elements inside the new div
let heading = document.createElement("h2");
heading.textContent = "Student Profile";
newDiv.appendChild(heading);


let para = document.createElement("p");
para.textContent = "This is a paragraph inside the new div.";
newDiv.appendChild(para);



// add a button with event
let button = document.createElement("button");
button.textContent = "Click Me";
button.style.marginTop = "2rem";

button.addEventListener("click", function() { 
    let newPara = document.createElement("p");
    newPara.textContent = "Button clicked!";
    newDiv.appendChild(newPara);
});
newDiv.appendChild(button);


// Add hover effect using event listener
newDiv.addEventListener("mouseover", function() {
    newDiv.classList.add("hover");
});
newDiv.addEventListener("mouseout", function() {
    newDiv.classList.remove("hover");
}) 
newDiv.addEventListener("mouseenter", function() {
    newDiv.style.backgroundColor = "lightblue";
});
newDiv.addEventListener("mouseleave", function() {
    newDiv.style.backgroundColor = "";
});



