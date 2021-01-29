$(document).ready(function() {

    $("#design").click(function(){
      $("#design-description").toggle();
      $(".hide-design-image").toggle();
    })
  
    $("#development").click(function(){
      $("#development-description").toggle();
      $(".hide-development-image").toggle();
    })
  
    $("#productManagement").click(function(){
      $("#product-description").toggle();
      $(".hide-product-image").toggle();
    })
  
    $(".hover").hover(function(){
      $(this).animate({opacity:'1'});
    },
    function(){
      $(this).animate({opacity:'0'});
    })
  $('.submit').click(function () {
          var Name = $('#fname').val();
          var Email = $('#email').val();
          var Message = $('message');
          var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
          if (Name == '' || Email == '' || Message == '') {
              alert('Please fill in the missing information!');
          } else {
              alert(' Hello ' + Name + ', we have received your message. Thank you for reaching out to us.');
          }
    });
  });