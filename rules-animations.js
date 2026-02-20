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

    initImageModal();
    initOldChatToggle();

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


function initImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.getElementById('modalClose');
    const imageButtons = document.querySelectorAll('.photo-tile[data-full-image]');

    if (!modal || !modalImage || !modalClose || imageButtons.length === 0) {
        return;
    }

    const closeModal = () => {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        modalImage.setAttribute('src', '');
        document.body.classList.remove('modal-open');
    };

    imageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const imageSrc = button.getAttribute('data-full-image');
            if (!imageSrc) {
                return;
            }
            modalImage.setAttribute('src', imageSrc);
            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('modal-open');
        });
    });

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', event => {
        if (event.target === modal) {
            closeModal();
        }
    });

    window.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}


function initOldChatToggle() {
    const toggle = document.getElementById('oldChatToggle');
    const list = document.getElementById('oldChatList');

    if (!toggle || !list) {
        return;
    }

    toggle.addEventListener('click', () => {
        const isHidden = list.hasAttribute('hidden');

        if (isHidden) {
            list.removeAttribute('hidden');
            toggle.textContent = 'Скрыть old chat';
            toggle.setAttribute('aria-expanded', 'true');
            return;
        }

        list.setAttribute('hidden', 'hidden');
        toggle.textContent = 'Показать old chat';
        toggle.setAttribute('aria-expanded', 'false');
    });
}
