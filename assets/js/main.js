document.addEventListener('DOMContentLoaded', () => {
    // Render Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Attach Audio SFX to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (typeof playBeep === 'function') playBeep(600, 'sine', 0.03);
        });
        el.addEventListener('click', () => {
            if (typeof playBeep === 'function') playBeep(1000, 'triangle', 0.06);
        });
    });
});

function toggleMobileMenu() {
    const nav = document.getElementById('mobileNav');
    if (nav) {
        nav.classList.toggle('hidden');
        if (typeof playBeep === 'function') playBeep(800, 'sine', 0.05);
    }
}

function handleContactSubmit(e) {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    status.classList.remove('hidden');
    if (typeof playBeep === 'function') playBeep(1600, 'sine', 0.2);

    setTimeout(() => {
        status.textContent = '> [TRANSMISSION SUCCESSFUL] Signal received by Gimoy. Acknowledgment incoming.';
        status.className = 'p-3 bg-emerald-500/10 border border-emerald-400 text-emerald-400 text-xs';
        document.getElementById('contactForm').reset();
    }, 1500);
}
