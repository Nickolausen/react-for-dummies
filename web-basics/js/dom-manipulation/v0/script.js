document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("changeButton").addEventListener("click", function() {
        let textElement = document.getElementById("text");
        textElement.textContent = "The text has been changed!";
        textElement.style.color = "blue";
    });
})