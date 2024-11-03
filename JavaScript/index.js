const words = ["Leidenschaft", "Kreativität", "Innovation", "Qualität"]; // Array of words
let currentIndex = 0;
const wordElement = document.getElementById("changing-word");

function changeWord() {
    wordElement.classList.add("hidden"); // Start fade out
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length; // Cycle through the index
        wordElement.textContent = words[currentIndex]; // Update the text
        wordElement.classList.remove("hidden"); // Start fade in
    }, 500); // Match this time with the CSS transition duration
}

setInterval(changeWord, 3000); // Change word every 3000 ms (3 seconds)
