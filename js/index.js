var purpose = angular.module('purpose', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);


purpose.config(function($routeProvider) {
  $routeProvider


    .when('/home', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    .when('/work', {
      templateUrl: 'work.html',
      controller: 'WorkController'
    })
        .when('/CCL', {
          templateUrl: 'CCL.html',
          controller: 'CCLController'
        })
          .when('/CH', {
            templateUrl: 'ContractHound.html',
            controller: 'HoundController'
          })
            .when('/N', {
              templateUrl: 'Notables.html',
              controller: 'NotablesController'
            })
    .when('/services', {
      templateUrl: 'services.html',
      controller: 'ServicesController'
    })
    .when('/us', {
    templateUrl: 'us.html',
    controller: 'UsController'
          })
    .otherwise({
      redirectTo: '/home'
    });


});

$(document).ready(function(){

  $(function() {
    //  $('body').scrollTop(0);
   });
  if(window.location.href=== "http://localhost:3000/#/home") {
    $('.home-text').addClass("active");
   }
   if(window.location.href=== "http://localhost:3000/#/work") {
     $('.work-text').addClass("active");
    }
    if(window.location.href=== "http://localhost:3000/#/services") {
      $('.services-text').addClass("active");
     }
     if(window.location.href=== "http://localhost:3000/#/us") {
       $('.us-text').addClass("active");
      }
  $('.container a div').click(function(){
    $('a div').removeClass("active");
    $(this).addClass("active");
  });



  var $form = $('#mc-embedded-subscribe-form');


  $(function () {

    $('#mc-embedded-subscribe').on('click', function(event) {
      if(event) event.preventDefault();
      register($form);
    });
  });

  function register($form) {
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    cache       : false,
    dataType    : 'json',
    contentType: "application/json; charset=utf-8",
    error       : function(err) { $('#notification_container').html('<span class="alert">Could not connect to server. Please try again later.</span>'); },
    success     : function(data) {

      if (data.result != "success") {
        var message = data.msg.substring(4);
        $('#notification_container').html('<span class="alert">'+message+'</span>');
      }

      else {
        var message = data.msg;
        $('#notification_container').html('<span class="success">'+message+'</span>');
      }
    }
  });
}


  // $(window).scroll(function() {
  //   if ($(window).scrollTop() > 500) {
  //       $('.container-right').fadeIn('slow');
  //   }
  //   else {
  //     $('.container-right').fadeOut('fast');
  //
  //   }
  // });

  var mobile = $("#sidebar");

  $("#image").click(function(){

    mobile.css("display", mobile.css("display") === 'block' ? '' : 'block');

  });

  $(".container-text").click(function(){

    mobile.css("display", mobile.css("display") === 'none' ? '' : 'none');


  });

  $(document).mouseup(function (e)
{
    var container = $(mobile);

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});



// variable to hold request
var request;
// bind to the submit event of our form




});
