let sfxEnabled = true;
let audioCtx = null;

function initAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playBeep(freq = 800, type = 'sine', duration = 0.05) {
    if (!sfxEnabled) return;
    try {
        initAudioContext();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
        console.log('Audio init pending user click.');
    }
}

function toggleAudioSynth() {
    sfxEnabled = !sfxEnabled;
    const statusEl = document.getElementById('audioStatus');
    const iconEl = document.getElementById('audioIcon');
    
    if (sfxEnabled) {
        statusEl.textContent = 'SFX: ON';
        iconEl.classList.remove('text-slate-500');
        iconEl.classList.add('text-cyber-cyan');
        playBeep(1200, 'square', 0.1);
    } else {
        statusEl.textContent = 'SFX: OFF';
        iconEl.classList.remove('text-cyber-cyan');
        iconEl.classList.add('text-slate-500');
    }
}
