// Typing effect in footer
const terminal = document.getElementById('terminal');
const message = "Ben Atkinson (~Zero-One) @ zeta:~$ system status → all systems nominal";
let index = 0;

function typeWriter() {
    if (index < message.length) {
        terminal.innerHTML = message.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 50);
    } else {
        terminal.innerHTML += '<span class="blinking-cursor">█</span>';
    }
}

// Start on page load
window.onload = typeWriter;

// Optional: background particles or glitch effects could go here in the future