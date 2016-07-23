if (Meteor.isClient) {

  $(document).ready(function () {

    $('#your').mouseenter(function(){
      $(this).addClass('animated bounce');
      $(this).html('Your');
    });

      $('#name').mouseenter(function(){
      $(this).addClass('animated bounce');
      $(this).html('Name');
    });

      $('#is').mouseenter(function(){
      $(this).addClass('animated bounce');
      $(this).html('Is');
    });

      $('#no').mouseenter(function(){
      $(this).addClass('animated bounce');
      $(this).html('No');
    });

      $('#accident').mouseenter(function(){
      $(this).addClass('animated bounce');
      $(this).html('Accident');
    });

  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
