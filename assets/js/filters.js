function filterSkills(category) {
    const cards = document.querySelectorAll('.skill-card');
    const buttons = document.querySelectorAll('.skill-tab-btn');

    buttons.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.className = 'skill-tab-btn active px-4 py-2 bg-cyber-cyan text-black font-bold cyber-clip transition-all';
        } else {
            btn.className = 'skill-tab-btn px-4 py-2 bg-cyber-panel border border-cyber-border text-cyber-text hover:text-cyber-cyan cyber-clip transition-all';
        }
    });

    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    if (typeof playBeep === 'function') playBeep(900, 'triangle', 0.05);
}

function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.proj-tab-btn');

    buttons.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.className = 'proj-tab-btn active px-4 py-2 bg-cyber-amber text-black font-bold cyber-clip transition-all';
        } else {
            btn.className = 'proj-tab-btn px-4 py-2 bg-cyber-panel border border-cyber-border text-cyber-text hover:text-cyber-amber cyber-clip transition-all';
        }
    });

    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
    if (typeof playBeep === 'function') playBeep(900, 'triangle', 0.05);
}

function openProjectModal(title, desc, tags, link) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('modalLink').href = link;

    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';
    tags.forEach(t => {
        const badge = document.createElement('span');
        badge.className = 'px-2 py-0.5 bg-cyber-bg border border-cyber-cyan text-cyber-cyan text-[10px]';
        badge.textContent = t;
        tagsContainer.appendChild(badge);
    });

    const modal = document.getElementById('projectModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (typeof playBeep === 'function') playBeep(1200, 'square', 0.08);
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}
