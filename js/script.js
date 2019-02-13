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