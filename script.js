/* Introductory text */
// Get URL 
const currentUrl = window.location.href;

// Check if URL is index.html
if (currentUrl.includes("index.html")) { 
    // Nodes
    const listItems = document.querySelectorAll("#text ul li");

    // Variables
    let currentIndex = 0;

    // Switches introductory text that is being displayed 
    function changeListItem() {
        // Hide current li element, then increment index
        listItems[currentIndex++].style.display = "none";

        // Ensure index remains within range of list elements
        currentIndex %= listItems.length;
        
        // Unhide next li element
        listItems[currentIndex].style.display = "list-item";
    }

    // Call changeListItems() function every 30 seconds
    setInterval(changeListItem, 3000);
}


/* Form Validation */
// Checks if input is valid
function validateForm() {
    // Get input fields
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Initalize both fields to have a 1.5px thick solid black border
    email.style.border = "1.5px solid black";
    message.style.border = "1.5px solid black";
    
    // Checks if email field is left empty
    if (email.value == "") {
        // Give field a 3px thick solid red border
        email.style.border = "3px solid red";

        // Alert user of the problem
        alert("I need your email so I can get back to you!");
            
        return false;
    }
    
    // Checks if message field is left empty
    if (message.value == "") {
        // Give field a 3px thick solid red border
        message.style.border = "3px solid red";

        // Alert user of the problem
        alert("You should probably type something!");
        
        return false;
    }
}

/* Hamburger Menu */
function toggleMenu() {
    document.getElementById('all').classList.toggle('hide');
    document.getElementById('menu').classList.toggle('hide');
}

document.getElementById('hamburger-button').addEventListener('click', toggleMenu);

/* Colour Palette Changer */
linkPalettes = ["#1E98D7", "#F2C94C", "#FF9900"];
backgroundPalettes = ["#FFFFFF", "#353735", "#000000"];
textPalettes = ["#000000", "#FFFFFF", "#00FF00"];
let paletteIndex = 0;

function toggleColours() {
    // Get new colours
    let link = linkPalettes[paletteIndex];
    let background = backgroundPalettes[paletteIndex];
    let text = textPalettes[paletteIndex++];

    // <html> element
    const htmlElement = document.documentElement;

    // Change CSS variables 
    htmlElement.style.setProperty("--link-color", link);
    htmlElement.style.setProperty("--background-color", background);
    htmlElement.style.setProperty("--text-color", text);
    
    // Ensure paletteIndex is within range 0, 1, 2
    paletteIndex %= 3;
}

let samePage = document.getElementsByClassName('same');

for (let i=0; i<samePage.length; i++) {
    samePage[i].addEventListener("click", function(event) {
        event.preventDefault(); // Stop link from refreshing page
        toggleColours();        // Call function to change colour palettes
    });
}