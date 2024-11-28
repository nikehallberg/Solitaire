
function generateSolitaireDeck() {
    const suits = ['H', 'K', 'R', 'S'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
    const deck = [];

    suits.forEach(suits => {
        ranks.forEach(ranks => {
            deck.push({
                suits,
                ranks,
                card: `C:\\Users\\nikeh\\Desktop\\Spelkort\\${suits}${ranks}.png`
            });
        });
    });

    return deck;
}

const cardList = [
    {name: 'A', value: 1},
    {name: 'T', value: 10},
    {name: 'J' , value: 11},
    {name: 'Q', value: 12 },
    { name: 'K', value: 13 },
    { name: '2', value: 2 },
    { name: '3', value: 3 },
    { name: '4', value: 4 },
    { name: '5', value: 5 },
    { name: '6', value: 6 },
    { name: '7', value: 7 },
    { name: '8', value: 8 },
    { name: '9', value: 9 }

]

const card = () => `C:\Users\nikeh\Desktop\Spelkort\\${suits}${ranks}.png`

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; 
    }
    return deck;
}
const solitaireDeck = generateSolitaireDeck();
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

let solitaireDeck = generateSolitaireDeck();
displayDeck(solitaireDeck, "deckContainer");

document.getElementById("shuffleButton").addEventListener("click", () => {
    solitaireDeck = shuffleDeck(solitaireDeck);
    displayDeck(solitaireDeck, "deckContainer");
})