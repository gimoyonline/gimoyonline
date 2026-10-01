function handleTerminalCommand(e) {
    e.preventDefault();
    const input = document.getElementById('terminalInput');
    const body = document.getElementById('terminalBody');
    const cmd = input.value.trim().toLowerCase();

    if (!cmd) return;

    const userLine = document.createElement('p');
    userLine.className = 'text-cyber-cyan font-bold';
    userLine.textContent = `> ${cmd}`;
    body.appendChild(userLine);

    const responseLine = document.createElement('p');
    responseLine.className = 'text-slate-300';

    switch (cmd) {
        case 'help':
            responseLine.innerHTML = `Available commands: <br>
            - <span class="text-cyber-cyan">skills</span>: Display core stack <br>
            - <span class="text-cyber-cyan">about</span>: Show pilot summary <br>
            - <span class="text-cyber-cyan">projects</span>: Jump to database <br>
            - <span class="text-cyber-cyan">clear</span>: Flush console log`;
            break;
        case 'skills':
            responseLine.textContent = '[SYSTEM]: JavaScript, React, Tailwind, Three.js, C++, ESP32, Git.';
            break;
        case 'about':
            responseLine.textContent = '[SYSTEM]: Gimoy - Full-stack & Robotics UI developer from Malang, ID.';
            break;
        case 'projects':
            responseLine.textContent = '[SYSTEM]: Navigating to Database...';
            window.location.hash = '#projects';
            break;
        case 'clear':
            body.innerHTML = '';
            input.value = '';
            return;
        default:
            responseLine.textContent = `[ERROR]: Command '${cmd}' not recognized. Type 'help'.`;
            responseLine.className = 'text-cyber-red';
    }

    body.appendChild(responseLine);
    input.value = '';
    body.scrollTop = body.scrollHeight;
    if (typeof playBeep === 'function') playBeep(1400, 'square', 0.08);
}
