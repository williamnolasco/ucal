$('#slides').superslides();

var slider_father = $('.slider-father');
var circle_one = $('.circle-one');
var circle_two = $('.circle-two');
var circle_three = $('.circle-three');

circle_one.on('click', function(){
	circle_one.css('background-color', '#0fb49f');
	circle_two.css('background-color', '#c3c3c3');
	circle_three.css('background-color', '#c3c3c3');
});
circle_two.on('click', function(){
	circle_two.css('background-color', '#0fb49f');
	circle_one.css('background-color', '#c3c3c3');
	circle_three.css('background-color', '#c3c3c3');
});
circle_three.on('click', function(){
	circle_three.css('background-color', '#0fb49f');
	circle_two.css('background-color', '#c3c3c3');
	circle_one.css('background-color', '#c3c3c3');
});



function move_right() {
    slider_father.animate({
        left: '-100%'
    }, 1000, function() {
        $('.slider-child:first').insertAfter('.slider-child:last');
        slider_father.css('left', '0%');
    });
}

function autoplay() {
    var autoscrolling = setInterval(function() {
        move_right();
    }, 3000);
}

autoplay();

//CUando le haceos hover a una imagen
var news = document.querySelectorAll('.news');
var news_footer = document.querySelectorAll('.news-footer');

function newsHover(x){
	return function(){
		news_footer[x].style.opacity = '1';
	};
}
function newsNotHover(x){
	return function(){
		news_footer[x].style.opacity = '0';
	};
}

for(var i=0; i<news.length; i++){
	news[i].addEventListener('mouseover', newsHover(i));
	news[i].addEventListener('mouseout', newsNotHover(i));
}