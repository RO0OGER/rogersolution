const words = ["Leidenschaft", "Kreativität", "Innovation", "Qualität"]; 
let currentIndex = 0;
const wordElement = document.getElementById("changing-word");

function changeWord() {
    wordElement.classList.add("hidden"); 
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length; 
        wordElement.textContent = words[currentIndex]; 
        wordElement.classList.remove("hidden"); 
    }, 500); 
}

setInterval(changeWord, 3000); 
