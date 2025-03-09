const playAudio = id => {
    let audio = document.getElementById(id);
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}

document.getElementById('navbar-toggle').addEventListener('click', () => {
    document.getElementById('navbar-menu').classList.toggle('active');
});

document.querySelectorAll('.navbar-menu a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 260;

        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        document.getElementById('navbar-menu').classList.remove('active');
    });
});
