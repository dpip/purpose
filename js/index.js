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

  $(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
        $('.container-right').fadeIn('slow');
    }
    else {
      $('.container-right').fadeOut('fast');

    }
  });

  var mobile = $("#sidebar");

$("#image").click(function(){

  mobile.css("display", mobile.css("display") === 'block' ? '' : 'block');

  // var w = $('#sidebar').width();
  // var pos = $('#sidebar').offset().left;
  // if(pos == 0){
  // $("sidebar").addClass('sidebar-width-add');
  // $("#sidebar").animate({"left": -w}, "slow");
  // }
  // else
  // {
  // $("#sidebar").animate({"left": "0"}, "slow");
  // }

});

$(".container-text").click(function(){

  mobile.css("display", mobile.css("display") === 'none' ? '' : 'none');


});






//
$('#lets-talk').click(function () {
    window.location.href = 'http://localhost:3000/#/home';
    $('body').animate({scrollTop:$(document).height() - 400}, 'slow');
    return false;
});

// variable to hold request
var request;
// bind to the submit event of our form


});
