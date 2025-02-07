// get mouse position
document.addEventListener('mousemove', (e) => {
    const scrollElements = document.querySelectorAll('[class*="scroll"], [class*="works-right"]');

    scrollElements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        // Calculate relative mouse position for each element
        const relativeX = e.clientX - rect.left;
        const relativeY = e.clientY - rect.top;

        // Update CSS variables for each element
        element.style.setProperty('--mouseX', `${relativeX}px`);
        element.style.setProperty('--mouseY', `${relativeY}px`);
    });
});