let images = [
    "https://www.voyage.fr/sites/default/files/inline-images/01-l-altai.jpg",
    "https://www.voyage.fr/sites/default/files/inline-images/02-volcan-kamchatka.jpg",
    "https://www.voyage.fr/sites/default/files/inline-images/03-peninsule-de-kola.jpg",
    "https://www.voyage.fr/sites/default/files/inline-images/04-lac-ladoga.jpg",
    "https://www.voyage.fr/sites/default/files/inline-images/05-curonian-spit.jpg",
]
 
// slideshow:
// on a un indexe a 0
// next -> on ajoute 1 a l'indexe
// prev -> on enleve 1 a l'indexe
// on met l'url qui correspond a l'indexe dans l'img
let index = 0;

$(document).ready(function() {
    $("#prev").click(function() {
        if (index > 0) {
            index--
        } else {
            index = images.length - 1
        }
        $("#slideshow").attr("src",images[index]);
    })
    $("#next").click(function() {
        if (index < images.length - 1) {
            index++
        } else {
            index = 0;
        }
        $("#slideshow").attr("src",images[index]);
    })
    $("#slideshow").attr("src",images[index])
    setInterval(function() {
        if (index < images.length - 1) {
            index++
        } else {
            index = 0;
        }
        $("#slideshow").attr("src",images[index]);
    },5000)
})
