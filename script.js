


//TYPED
//--------------------------------------------------------------------------------------------------------
$(window).scroll(function(){
    if ($(window).scrollTop() > 1) {
        $('.menu').addClass('fixed');
        $('.menu').addClass('menu-flotante');
    }
    else {
        $('.menu').removeClass('fixed');
        $('.menu').removeClass('menu-flotante');
    }
});

var typed2 = new Typed('#tipeo', {
    strings: ['Trabajemos juntos', 'Podemos lograr lo que sea', 'Contáctame ahora', 'Cambiemos el rumbo de las cosas'],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss:true,
    typeSpeed: 80,
    backSpeed: 20,
    smartBackspace: true,
    loop: true
  });





//WOW + ANIMATE
//--------------------------------------------------------------------------------------------------------   
new WOW().init();





//GRANIM
//--------------------------------------------------------------------------------------------------------
var granimInstance = new Granim({
    element: '#canvas-interactive',
    name: 'interactive-gradient',
    elToSetClassOn: '.canvas-interactive-wrapper',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 500,
    states : {
        "default-state": {
            gradients: [
                ['#06dee1', '#79ff6c'],
                ['#79ff6c', '#06dee1'],
                ['#1A2980', '#26D0CE']
            ],
            transitionSpeed: 2000
        },
        "violet-state": {
            gradients: [
                ['#06dee1', '#4776E6'],
                ['#4776E6', '#79ff6c']
            ],
            transitionSpeed: 2000
        },
        "orange-state": {
            gradients: [ ['#FF4E50', '#F9D423'] ],
            loop: false
        }
    }
});

// With jQuery
$('#default-state-cta').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('default-state');
    setClass('#default-state-cta')
});
$('#violet-state-cta').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('violet-state');
    setClass('#violet-state-cta')
});
$('#orange-state-cta').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('orange-state');
    setClass('#orange-state-cta')
});

function setClass(element) {
    $('.canvas-interactive-wrapper a').removeClass('active');
    $(element).addClass('active');
};




//ocultar/mostrar secciones
//--------------------------------------------------------------------------------------------------------

$( ".op1" ).click(function() {
  $(".art2").hide();
  $(".art3").hide();
  $(".art1").fadeIn(600);
  
  $(".img2").hide();
  $(".img3").hide();
  $(".img1").fadeIn(500);
});

$( ".op2" ).click(function() {
  $(".art1").hide();
  $(".art3").hide();
  $(".art2").fadeIn(600);
    
  $(".img1").hide();
  $(".img3").hide();
  $(".img2").fadeIn(500);
});

$( ".op3" ).click(function() {
  $(".art1").hide();
  $(".art2").hide();
  $(".art3").fadeIn(600);
    
  $(".img1").hide();
  $(".img2").hide();
  $(".img3").fadeIn(500);
});




//menu hamburguesa
//--------------------------------------------------------------------------------------------------------
$('.menu-burger, .menu-items').on('click', function() {
  $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
  $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
});
