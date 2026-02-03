const messages = [
    "T'es sûre?",
    "Vraiment sûre??",
    "Tu valides vraiment???",
    "Stpp ma femme????",
    "Réfléchis!",
    "Si tu recliques, je te quitte",
    "T'es sérieuse?????",
    "STPPPPPPPP",
    "Vasy c'est bon j'arrete",
    "MDRRR JAMAAAIIS CLIQUE"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    const textLength = noButton.textContent.length;
    noButton.style.fontSize = `${Math.max(0.6, 1.2 - (textLength - 9) * 0.05)}em`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}