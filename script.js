const redButton = document.querySelector('.no');
const yesButton = document.querySelector('.yes');
const changingText = document.querySelector('.changing-text');
const heading = document.querySelector('h1');
const gifContainer = document.querySelector('.center-gif');
const buttonContainer = document.querySelector('.button-container');

const texts = [
    "eto bocchor hoye geche",
    "are yawr!",
    "keno korchis erom",
    "yes bole de na maaa",
    "ebar kende dbo"
];

function moveRedButton() {
    const body = document.body;

    const maxX = body.clientWidth - redButton.offsetWidth;
    const maxY = body.clientHeight - redButton.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    redButton.style.position = "absolute";
    redButton.style.left = randomX + "px";
    redButton.style.top = randomY + "px";

    // Change text randomly
    const randomIndex = Math.floor(Math.random() * texts.length);
    changingText.textContent = texts[randomIndex];
}

/* Move red button (Desktop + Mobile) */
redButton.addEventListener('mouseover', moveRedButton);
redButton.addEventListener('touchstart', moveRedButton);

/* YES button click */
yesButton.addEventListener('click', () => {
    heading.textContent = "Yess I know you love me";

    gifContainer.innerHTML =
        '<img src="My Love Flower GIF by cintascotch.gif" alt="Flower GIF">';

    buttonContainer.style.display = "none";

    changingText.textContent = "I love you too my cutiee";

    document.body.style.backgroundColor = "purple";
});