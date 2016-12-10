//Lo siguiente es cuando le das clcik al icono de menu
var show_menu = document.querySelector('.show-menu');
var nav_movil = document.querySelector('.nav-movil');

show_menu.addEventListener('click', function(){
	nav_movil.style.opacity = '1';
	nav_movil.style.top = '50%';
	nav_movil.style.transform = 'translateX(0%) translateY(-50%)';
});

//Lo siguientes es cuando le das clcik al icono de cerrar
var icon_close = document.querySelector('.icon-close');

icon_close.addEventListener('click', function(){
	nav_movil.style.opacity = '0';
	nav_movil.style.top = '0%';
	nav_movil.style.transform = 'translateX(110%) translateY(-50%)';
});
