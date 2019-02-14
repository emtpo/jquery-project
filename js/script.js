$(window).on("scroll", function () {
    let positionY = $(this).scrollTop();
    console.log(positionY);


    //$(window).height( )    --> hauteur de la page

    //afficher arrowtotop une fois en bas de la page
    if (positionY > 570) {
        $("#scrolltotop").css("opacity", 1);
    }
    if (positionY < 1) {
        $("#scrolltotop").css("opacity", 0);
    }
});

$(function () {
    // On créer la variable pour la navbar fixé en haut
    var position_top_raccourci = $("#navigation").offset().top;

    //Déclenchement de la novelle fct au scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > position_top_raccourci) {

            //on ajoute la classe "fixNavigation" à <div id="navigation">
            //on ajoute la classe "fixNav" à <div id="navbar">"
            $('#navigation').addClass("fixNavigation");
            $('#navbar').addClass("fixNav");
        } else {
            //sinon on retire la classe "fixNavigation" a <div id="navigation">
            //sinon on retire la classe "fixNav" a <div id="navbar">
            $('#navigation').removeClass("fixNavigation");
            $('#navbar').removeClass("fixNav");
        }
    });
});

var slideIndex = 0;
var slides = $(".slides")

showSlide(slideIndex);

function showSlide(NumberSlide) {
    let idSlide = slides[NumberSlide].id;
    $(".slides").removeClass("active");
    $(`#${idSlide}`).addClass("active");
}

$(".arrow").on("click", function () {


    //si prev: console.log(prev)
    if ($(this).hasClass("prev")) {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        console.log(slideIndex);
        showSlide(slideIndex)
    };


    //si next: console.log(next)
    if ($(this).hasClass("next")) {
        slideIndex++;
        if (slideIndex > slides.length - 1) {
            slideIndex = 0;
        }
        showSlide(slideIndex)
    };
})

$(function () {
    var selectedClass = "";
    $(".fil-cat").click(function () {
        selectedClass = $(this).attr("data-rel");
        $("#portfolio").fadeTo(100, 0.1);
        $("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolio").fadeTo(300, 1);
        }, 300);

    });
});

var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZW10cG8iLCJhIjoiY2pzMzF4ZWRyMGNjaDN5bnhsMGs3MnY1ciJ9.dW4gM9jjO084j4D5tByI4g', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 12,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);