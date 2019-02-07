$(window).on("scroll", function(){
    let positionY = $(this).scrollTop();
    console.log(positionY);


     //$(window).height( )    --> hauteur de la page

 //afficher arrowtotop une fois en bas de la page
 if(positionY > 400){
    $("#scrolltotop").css("opacity", 1);
 }
 if(positionY < 1){
     $("#scrolltotop").css("opacity", 0);
 }

});