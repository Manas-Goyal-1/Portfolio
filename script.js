function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    document.querySelectorAll("a").forEach(anchor => {
        anchor.classList.toggle("dark-mode-list");
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    toggleDarkMode();
});