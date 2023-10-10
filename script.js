var cards = document.querySelectorAll(".card");
let matchedCard = 0;
var cardOne, cardTwo;
let disableDeck = false;
function flipCard(e) {
    var clickedCard = e.target;
    if (clickedCard !== cardOne && !disableDeck) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector("img").src,
            cardTwoImg = cardTwo.querySelector("img").src;
        matchedCards(cardOneImg, cardTwoImg);
    }
}
function matchedCards(img1, img2) {
    if (img1 === img2) {
        matchedCard++;
        if(matchedCard == 8){
             setTimeout(()=>{
                shuffleCard();
             },1000)
        }
        cardOne.removeEventListener("click",flipCard);
        cardTwo.removeEventListener("click",flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);
    setTimeout(() => {
        cardOne.classList.remove("shake","flip");
        cardTwo.classList.remove("shake","flip");
        cardOne = cardTwo = null;
        disableDeck = false;
    },1200)

}

function shuffleCard(){
    matchedCard = 0;
    cardOne = cardTwo = "";
    disableDeck = false;
    let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    
    arr.sort(()=> Math.random() > 0.5 ? 1 : -1);
    console.log(arr);
    cards.forEach((card,index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = `./Memory Card Game Images/Memory Card Game Images/img-${arr[index]}.png`
        card.addEventListener("click", flipCard)
    });

}
shuffleCard();
cards.forEach(card => {
    card.addEventListener("click", flipCard)
});