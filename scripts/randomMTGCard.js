function main(){
    const image = document.querySelector(".card_portrait");
    const card = $.getJSON("https://api.scryfall.com/cards/random");
    //const card = JSON.parse(cardJSON);
    image.src=card.image_uris.png;
}