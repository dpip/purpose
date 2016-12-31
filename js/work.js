purpose.controller('WorkController', [ '$http', '$location', '$scope', function($http, $location, $scope){

 $scope.slides = [
    {id: 1,
      image: 'assets/images/devices/ccl laptop.png',
      imageTwo: 'assets/images/work/CCL cover image.png',
        title: "CCL Compass",
          bullietOne: "Product Definition Workshop",
            bullietTwo: "Web Application",
              bullietThree: "User interface Design",
                href: "#/CCL",
                  dotOne: "fa fa-circle"},
    {id: 2,
      image: 'assets/images/devices/contract hound laptop.png',
      imageTwo: 'assets/images/work/Contract Hound cover image.png',
        title: "Contract Hound",
          bullietOne: "Contract Managment App",
            bullietTwo: "Single Page Web App",
              bullietThree: "User Interface Design",
                href: "#/CH",
                  dotTwo: "fa fa-circle"},
    {id: 3,
      image: 'assets/images/devices/noteables phone.png',
      imageTwo: 'assets/images/work/Noteables cover image.png',
        title: "Notables",
          bullietOne: "Negativity Free Social Media",
            bullietTwo: "Mobile First Web App",
              bullietThree: "User Interface Design",
                href: "#/N",
                  dotThree: "fa fa-circle"}
  ];
      var interval = 2000;
      var mobileOne = $scope.slides[2].image;
      var mobileTwo = $scope.slides[2].imageTwo;

      $scope.direction = 'left';
      $scope.currentIndex = 0;

      $scope.setCurrentSlideIndex = function (index) {
        $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
        $scope.currentIndex = index;
      };

      $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
      };

      $scope.prevSlide = function () {
        $scope.direction = 'left';
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length -1) ? ++$scope.currentIndex : 0;
      };
      $scope.nextSlide = function () {
        $scope.direction = 'right';
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length -1;
      };
      $scope.set_HeightOne = function (slide) {
         if (slide.id > 2) {
             return {
                 height: "700px",
                 width: "400px",
                 top: "0px",
                 left: "198px"
             }
         }
       };
      //  $scope.set_HeightTwo = function (slide) {
      //     if (slide.id > 2) {
      //         return {
      //             // height: "276px",
      //             // width: "176.5px",
      //             left: "100.5px",
      //             top: "161px",
      //         }
      //     }
      //   };

        $scope.colorDot = function(index){
        $scope.dot = index;
        console.log("clicked dot" + $scope.dot);

    };




  }]);
