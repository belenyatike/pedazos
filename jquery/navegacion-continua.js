jQuery(document).ready(function(){

    // Llamamos a las funciones al hacer scroll.

    jQuery(window).scroll(function() {    
        posicionarMenu();
       // menuactivo();
        setTimeout(100, menuactivo());
    });
    
    // Fijar el menu.

    function posicionarMenu() {

        var altura_del_header = jQuery('.header').outerHeight(true);
        var altura_del_menu = jQuery('.menu_roald').outerHeight(true);

        if (jQuery(window).scrollTop() >= altura_del_header){
            jQuery('.header').css('display', 'none');
            jQuery('.menu_roald').addClass('fixed_roald');
            jQuery('.wrapper').css('margin-top', (altura_del_menu) + 'px');
            jQuery('.logo').css('display', 'none');
           
        } else {
            jQuery('.menu_roald').removeClass('fixed_roald');
            jQuery('.wrapper').css('margin-top', '0');
            jQuery('.logo').css('display', 'block');
            jQuery('.header').css('display', 'block');

        }
    }

    // Funcionamiento menu mobile

    jQuery(".btn_responsive").click(function(){ 
        if (jQuery(".menu_mobile").css('display')=='none'){
            jQuery(".menu_mobile").fadeIn();
            jQuery(".icono-btn_responsive").toggleClass("change_btn_mobile");

        }else{

            jQuery(".menu_mobile").fadeOut();
            jQuery(".icono-btn_responsive").toggleClass("change_btn_mobile");
        }
    });

    // Borramos el menu en mobile cuando vamos a alguna seccion.

        jQuery(".menu_mobile li a").click(function(){
        jQuery(".menu_mobile").fadeOut();
        jQuery(".icono-btn_responsive").toggleClass("change_btn_mobile");
    });

    // Variables para el menu scrollable

    var sections = ["lugares", "entrevista", "cine", "universo"]; // Capas a las que le vamos aplicar el scrollable.
   
    // Menu scrollable

    function menuactivo(){

        for (var i = 0; i < sections.length; i++) { // Pasamos por aquÃ­ el numero de veces de sections.
            
            var top = jQuery("#" + sections[i]).position().top - 2; // Calculamos la posicion incial de la capa
            var bottom = jQuery("#" + sections[i]).outerHeight(true) + top;  // Calculamos el final de la capa sumandole la altura a la posicion.

            if (jQuery(window).scrollTop() >= top &&  jQuery(window).scrollTop() < bottom){ // Cuando la ventana este la posicion inicial y el final

                jQuery('.menu_desktop li a').removeClass('active'); //Le quitamos a todo el menu la clase active.
                jQuery('#b_' + sections[i]).addClass('active'); // Le aÃ±adimos la clase active a la correspondiente.
            }
        }
    }

    posicionarMenu();

});