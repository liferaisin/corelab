// prints "hi" in the browser's dev tools console
console.log('the quiz is actually random');

// document.querySelector('.question').scrollIntoView({ 
//   behavior: 'smooth' 
// });


let selector;


$(".firstbutton").click(function() {
  document.querySelector('#q1').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

$(".a1").click(function() {
  document.querySelector('#q2').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

$(".a2").click(function() {
  document.querySelector('#q3').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

$(".a3").click(function() {
  document.querySelector('#q4').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

$(".a4").click(function() {
  document.querySelector('#q5').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

$(".a5").click(function() {
  document.querySelector('#q6').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

$(".a6").click(function() {
  document.querySelector('#q7').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

// without delay last button
// $(".lastbutton").click(function() {
//   selector = Math.floor((Math.random()*5)+1);
//   if (selector == 1) {
//     document.querySelector('#one').scrollIntoView({ 
//       behavior: 'smooth' 
//     });
//   } else if (selector == 2) {
//     document.querySelector('#two').scrollIntoView({ 
//       behavior: 'smooth' 
//     });
//   } else if (selector == 3) {
//     document.querySelector('#three').scrollIntoView({ 
//       behavior: 'smooth' 
//     });
//   } else if (selector == 4) {
//     document.querySelector('#four').scrollIntoView({ 
//       behavior: 'smooth' 
//     });
//   } else {
//     document.querySelector('#five').scrollIntoView({ 
//       behavior: 'smooth' 
//     });
//   }
// });

$(".lastbutton").click(function() {
  $('body').css('cursor', 'wait');
  setTimeout(function(){
    selector = Math.floor((Math.random()*5)+1);
    if (selector == 1) {
      // document.querySelector('#one').scrollIntoView({ 
      //   behavior: 'smooth' 
      // });
      document.querySelector('.empty').scrollIntoView({ 
        behavior: 'smooth' 
      });
      $('#one').fadeIn('slow', function(){$(this).toggleClass('show')});
      $('.dim').fadeIn('slow', function(){$(this).toggleClass('show')});
    } else if (selector == 2) {
      document.querySelector('.empty').scrollIntoView({ 
        behavior: 'smooth' 
      });
      $('#two').fadeIn('slow', function(){$(this).toggleClass('show')});
      $('.dim').fadeIn('slow', function(){$(this).toggleClass('show')});
    } else if (selector == 3) {
      document.querySelector('.empty').scrollIntoView({ 
        behavior: 'smooth' 
      });
      $('#three').fadeIn('slow', function(){$(this).toggleClass('show')});
      $('.dim').fadeIn('slow', function(){$(this).toggleClass('show')});
    } else if (selector == 4) {
      document.querySelector('.empty').scrollIntoView({ 
        behavior: 'smooth' 
      });
      $('#four').fadeIn('slow', function(){$(this).toggleClass('show')});
      $('.dim').fadeIn('slow', function(){$(this).toggleClass('show')});
    } else {
      document.querySelector('.empty').scrollIntoView({ 
        behavior: 'smooth' 
      });
      $('#five').fadeIn('slow', function(){$(this).toggleClass('show')});
      $('.dim').fadeIn('slow', function(){$(this).toggleClass('show')});
    }
    $('body').css('cursor', 'auto');
  },2000);
});

$('.dim').click(function() {
  document.querySelector('.title').scrollIntoView({ 
    behavior: 'smooth' 
  });
  $('.answer').each(function() {
    $(this).removeClass('show');
  });
  $('.dim').toggleClass('show');
});

// code for delay ref
// setTimeout(function(){
// },5000);

$(".home").click(function() {
  $('.answer').each(function() {
      $(this).removeClass('show');
    });
    $('.dim').toggleClass('show');
  
  document.querySelector('.title').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

$('.button').each(function() {
  $(this).click(function() {
    $(this).toggleClass('btn-selected');
  });
});

$('.lastbutton').each(function() {
  $(this).click(function() {
    document.querySelector('.button').toggleClass('btn-selected');
  });
});