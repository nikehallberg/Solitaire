const pile1 = document.getElementById('pile1');
const pile2 = document.getElementById('pile2');
const pile3 = document.getElementById('pile3');
const pile4 = document.getElementById('pile4');
const pile5 = document.getElementById('pile5');
const pile6 = document.getElementById('pile6');
const pile7 = document.getElementById('pile7');

const hearts = document.getElementById('hearts');
const diamonds = document.getElementById('diamonds');
const clubs = document.getElementById('clubs');
const spades = document.getElementById('spades');

const discard = document.getElementById('discardpile');

function generateSolitaireDeck() {
    const suits = ['H', 'K', 'R', 'S'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
    const cardValues = {
        'A': 1, '2': 2, '3': 3, '4': 4, '5': 5,
        '6': 6, '7': 7, '8': 8, '9': 9, 'T': 10,
        'J': 11, 'Q': 12, 'K': 13
    };

    return suits.flatMap(suit =>
        ranks.map(rank => ({
            suit,
            rank,
            value: cardValues[rank],
            card: `C:/Users/nikeh/Desktop/Spelkort/${suit}${rank}.png`
        }))
    );
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function displayDeck(deck, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";  

    container.style.display = "flex";
    container.style.flexWrap = "nowrap";  
    container.style.overflowX = "auto";  
    deck.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        const img = document.createElement("img");
        img.src = card.card;
        img.alt = `Card ${card.rank} of ${card.suit}`;  
        img.style.marginRight = "5px"; 
        cardElement.appendChild(img);
        container.appendChild(cardElement); 
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const solitaireDeck = generateSolitaireDeck(); 

    const deckContainer = document.getElementById("deckContainer");
    const shuffleButton = document.getElementById("shuffleButton");
    const startButton = document.querySelector(".start");

    
    if (startButton) {
        startButton.addEventListener("click", () => {
            displayDeck(solitaireDeck, "deckContainer"); 
        });
    }

    if (shuffleButton) {
        shuffleButton.addEventListener("click", () => {
            const shuffledDeck = shuffleDeck([...solitaireDeck]); 
            displayDeck(shuffledDeck, "deckContainer");
        });
    }
});
