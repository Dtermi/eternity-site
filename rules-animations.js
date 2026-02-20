function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-loaded');

    document.querySelectorAll('a.nav-link[href]').forEach(link => {
        link.addEventListener('click', event => {
            const target = link.getAttribute('href');
            const isLocalPage = target && !target.startsWith('http') && !target.startsWith('#');

            if (!isLocalPage || link.classList.contains('active')) {
                return;
            }

            event.preventDefault();
            document.body.classList.remove('page-loaded');
            document.body.classList.add('page-leaving');

            setTimeout(() => {
                window.location.href = target;
            }, 320);
        });
    });
});

// 3D Tilt Effect
const tiltCards = document.querySelectorAll('.tilt');
if (tiltCards.length > 0) {
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
        });
    });
}
