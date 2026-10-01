// Live Clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clockDisplay').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// Fluctuating Telemetry
setInterval(() => {
    const cpu = Math.floor(Math.random() * 20) + 10;
    const ping = Math.floor(Math.random() * 8) + 10;
    document.getElementById('cpuDisplay').textContent = `${cpu}%`;
    document.getElementById('pingDisplay').textContent = `${ping}ms`;
}, 3000);

// Typewriter Effect
const roles = [
    "FULL-STACK WEB DEVELOPER",
    "3D INTERACTIVE CREATOR",
    "EMBEDDED SYSTEMS / IOT",
    "ROBOTIC UI DESIGNER"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const typewriterEl = document.getElementById('typewriterText');
    if (!typewriterEl) return;
    
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => isDeleting = true, 1800);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    const speed = isDeleting ? 40 : 80;
    setTimeout(typeEffect, speed);
}

document.addEventListener('DOMContentLoaded', typeEffect);
