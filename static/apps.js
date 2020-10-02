{
  //Get the button:
  topButton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }

// When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}

{
  $(function() {
    $('#overmijKnop').click(function(){
      $('html, body').animate({
          scrollTop: $("#aboutme").offset().top
      }, 1200);
  });
    
   })

   $(function() {
    $('#werkervaringKnop').click(function(){
      $('html, body').animate({
          scrollTop: $("#werkervaring").offset().top
      }, 1000);
  });
    
   })
   $(function() {
    $('#vaardighedenKnop').click(function(){
      $('html, body').animate({
          scrollTop: $("#vaardigheden").offset().top
      }, 800);
  });
    
   })
   $(function() {
    $('#meerovermijknop').click(function(){
      $('html, body').animate({
          scrollTop: $("#werkervaring").offset().top
      }, 1200);
  });
    
   })
}
