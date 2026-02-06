function moveRedButton() {
    const redButton = document.querySelector('.no');
    const body = document.body;
    const maxX = body.clientWidth - redButton.offsetWidth;
    const maxY = body.clientHeight - redButton.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    redButton.style.left = randomX + 'px';
    redButton.style.top = randomY + 'px';
}

document.querySelector('.no').addEventListener('mouseover', moveRedButton);

document.querySelector('.yes').addEventListener('click', function() {
    document.querySelector('h1').textContent = 'Yess I know you love me';
    document.querySelector('.center-gif').innerHTML = '<img src="My Love Flower GIF by cintascotch.gif" alt="Flower GIF">';
    document.querySelector('.button-container').style.display = 'none';
    document.querySelector('.changing-text').textContent = 'I love you too my cutiee';
    document.body.style.backgroundColor = 'purple'; 
});

const texts = [
    "eto bocchor hoye geche",
    "are yawr!",
    "keno korchis erom",
    "yes bole de na maaa",
    "ebar kende dbo"
];

document.querySelector('.no').addEventListener('mouseover', function() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    document.querySelector('.changing-text').textContent = texts[randomIndex];
});