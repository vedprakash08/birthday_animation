document.getElementById('celebrateButton').addEventListener('click', function() {
    const confettiContainer = document.getElementById('confetti');
    launchConfetti();
});

function launchConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const confettiColors = ['#ff6f61', '#ffcc00', '#66cc99', '#66ccff'];
    const confettiCount = 200;


    for (let i = 0; i < confettiCount; i++) {
        const confetto = document.createElement('div');
        confetto.style.position = 'absolute';
        confetto.style.width = '10px';
        confetto.style.height = '10px';
        confetto.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetto.style.top = Math.random() * 100 + 'vh';
        confetto.style.left = Math.random() * 100 + 'vw';
        confetto.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
        confettiContainer.appendChild(confetto);
    }
}

const styles = document.createElement('style');
styles.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(100vh);
    }
}`;
document.head.appendChild(styles);
