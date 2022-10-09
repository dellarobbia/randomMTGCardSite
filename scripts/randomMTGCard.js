function main(){
    const image = document.querySelector(".card_portrait");
    
    jQuery.ajax({
        url: "https://api.scryfall.com/cards/random",
        type: "GET",
        dataType: "json",
        async: false,
        success: function(card){
            image.src=card.image_uris.png;
        }
    });
}