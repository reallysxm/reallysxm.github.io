document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('.text span');
    spans.forEach(span => {
        const randomDelay = Math.random() * 1.5; // Random delay between 0 and 1.5 seconds
        span.style.animationDelay = `${randomDelay}s`;
    });
});