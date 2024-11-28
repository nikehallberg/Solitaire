
function generateSolitaireDeck() {
    const suits = ['H', 'K', 'R', 'S'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
    const cardList = {
        A: 1, T: 10, J: 11, Q: 12, K: 13,
        2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9
    };
    const deck = [];
    suits.forEach(suit => {
        ranks.forEach(rank => {
            deck.push({
                suit,
                rank,
                value: cardList[rank],
                card: `images/${suit}${rank}.png` 
            });
        });
    });
    return deck;
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
    container.innerHTML = "";
    deck.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        const img = document.createElement("img");
        img.src = card.card;
        img.alt = `Card ${card.rank} of ${card.suit}`;
        cardElement.appendChild(img);
        container.appendChild(cardElement);
    });
}


const solitaireDeck = generateSolitaireDeck();
document.querySelector(".start").addEventListener("click", () => {
    displayDeck(solitaireDeck, "deckContainer");
});
document.getElementById("shuffleButton").addEventListener("click", () => {
    const shuffledDeck = shuffleDeck(solitaireDeck);
    displayDeck(shuffledDeck, "deckContainer");
});

const shuffledDeck = shuffleDeck(solitaireDeck);

function displayDeck(deck, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; 

    deck.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        const img = document.createElement("img");
        img.src = card.card; 
        cardElement.appendChild(img);
        container.appendChild(cardElement);
    });
}

displayDeck(solitaireDeck, "deckContainer");

document.getElementById("shuffleButton").addEventListener("click", () => {
    solitaireDeck = shuffleDeck(solitaireDeck);
    displayDeck(solitaireDeck, "deckContainer");
})