// Scroll animation trigger
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('in-view');
        }
    });
});
