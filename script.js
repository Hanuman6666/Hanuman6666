const works = {
    "task1" : {"title" : "Project 1", "url" : "works/task1/index.html"},
    "task2" : {"title" : "Project 2", "url" : "works/task2/index.html"},
    "task3" : {"title" : "Project 3", "url" : "works/task3/index.html"},
};

// write your code here 
// you need to display the list of work titles in a navigation panel 
// if a work title is clicked, the body section should display the work without reloading the page
function generateButtons() {
    const buttonsContainer = document.getElementById("nav-btns");

    // Loop through the JSON object to create buttons
    for (const task in works) {
        if (works.hasOwnProperty(task)) {
            const button = document.createElement("button");
            button.textContent = works[task].title;
            button.onclick = function() {
                changeIframeContent(works[task].url);
            };
            buttonsContainer.appendChild(button);
        }
    }
}

// Function to change the iframe content dynamically
function changeIframeContent(url) {
    const iframe = document.getElementById("content-frame");
    iframe.src = url;
}

// Initialize the page by generating the buttons
window.onload = generateButtons;