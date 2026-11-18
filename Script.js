// Simple Portfolio Interactive Script

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Copyright Year
    const year = document.getElementById('year');
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Smooth Active Link State on Click
    const navLinks = document.querySelectorAll('.navbar nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.style.color = '');
            link.style.color = '#38bdf8';
        });
    });
});
