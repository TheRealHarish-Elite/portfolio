document.addEventListener('DOMContentLoaded', () => {

    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    const saved = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme:light)').matches?'light':'dark');
    html.setAttribute('data-theme',saved);

    toggle.addEventListener('click',() => {
        const next = html.getAttribute('data-theme') === 'dark'?'light':'dark';
        html.setAttribute('data-theme',next);
        localStorage.setItem('theme',next);
    });

    const items = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if(e.isIntersecting) {
                e.target.classList.add('is-visible');
                io.unobserve(e.target);
            }
        });
    },{ threshold: 0.12 });

    items.forEach(el => io.observe(el));
})