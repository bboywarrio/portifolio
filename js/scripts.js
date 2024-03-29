$(document).ready(function() {

    // Progress bar
    let containerA = document.getElementById("circleA");
  
    let circleA = new ProgressBar.Circle(containerA, {
  
      color: '#FFFF',
      strokeWidth: 8,
      duration: 1400,
      from: { color: '#aaa'},
      to: { color: '#00000'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 6);
        circle.setText(value);
  
      }
  
    });
  
    let containerB = document.getElementById("circleB");
  
    let circleB = new ProgressBar.Circle(containerB, {
  
      color: '#FFFF',
      strokeWidth: 8,
      duration: 1600,
      from: { color: '#aaa'},
      to: { color: '#00000'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 17);
        circle.setText(value);
  
      }
  
    });
  
    let containerC = document.getElementById("circleC");
  
    let circleC = new ProgressBar.Circle(containerC, {
  
      color: '#FFFF',
      strokeWidth: 8,
      duration: 1800,
      from: { color: '#aaa'},
      to: { color: '#00000'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 3);
        circle.setText(value);
  
      }
  
    });
  
    let containerD = document.getElementById("circleD");
  
    let circleD = new ProgressBar.Circle(containerD, {
  
      color: '#FFFF',
      strokeWidth: 8,
      duration: 2000,
      from: { color: '#aaa'},
      to: { color: '#00000'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 5);
        circle.setText(value);
  
      }
  
    });
  
    // Iniciando loaders quando o usuário chegar no elemento
    let dataAreaOffset = $('#data-area').offset();
    // 'stop' serve para a animação não carregar mais que uma vez
    let stop = 0;
  
    $(window).scroll(function(e) {
  
      let scroll = $(window).scrollTop();
  
      if (scroll > (dataAreaOffset.top - 500) && stop == 0) {
        circleA.animate(1.0);
        circleB.animate(1.0);
        circleC.animate(1.0);
        circleD.animate(1.0);
  
        stop = 1;
      }
  
    });
  // Cod Parallax
  
  setTimeout(function(){
    
    
    $('#data-area').parallax({imageSrc:'img/iot.jpg'});
    
    $('#apply-area').parallax({imageSrc:'img/check.jpg'});
  },250);
    
  //filtro dos btn 

  $('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'eletr-btn') {
      eachBoxes('eletr', boxes);
    } else if(type == 'dev-btn') {
      eachBoxes('dev', boxes);
    } else if(type == 'iot-btn') {
      eachBoxes('iot', boxes);
    } else {
      eachBoxes('all', boxes);
    }

  });
  function eachBoxes(type, boxes) {

    if(type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }

  // scroll para as seções

  // Definindo as seções de destino
  let bannerSection = $('#mainSlider');
  let aboutSection = $('#about-area');
  let servicesSection = $('#services-area');
  let portfolioSection = $('#portfolio-area');
  let contactSection = $('#contact-area');

  // Associando os botões de navegação às seções correspondentes
  $('.nav-item').click(function() {
      let btnId = $(this).attr('id');
      let scrollTo;

      // Determinando a seção de destino com base no ID do botão
      switch(btnId) {
          case 'about-menu':
              scrollTo = aboutSection;
              break;
          case 'services-menu':
              scrollTo = servicesSection;
              break;
          case 'portfolio-menu':
              scrollTo = portfolioSection;
              break;
          case 'contact-menu':
              scrollTo = contactSection;
              break;
          default:
              scrollTo = bannerSection;
      }

      // Animação de rolagem suave para a seção de destino
      $('html, body').animate({
          scrollTop: scrollTo.offset().top - 70
      }, 500);
  });

});