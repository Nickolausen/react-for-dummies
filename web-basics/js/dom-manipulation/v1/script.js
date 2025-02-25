document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("addBoxButton").addEventListener("click", function () {
        const container = document.getElementById("container");
        const box = document.createElement("div");
        box.classList.add("box");
    
        // Assign a random color
        box.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    
        // Assign a number to each box
        box.textContent = container.children.length + 1;
    
        container.appendChild(box);
    
        // Trigger animation
        setTimeout(() => {
            box.classList.add("show");
        }, 10);
    
        // Remove box on click
        box.addEventListener("click", function () {
            box.style.opacity = "0";
            box.style.transform = "scale(0.5)";
            setTimeout(() => box.remove(), 300);
        });
    });
})