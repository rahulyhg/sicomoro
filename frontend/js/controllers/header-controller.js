myApp.controller('headerCtrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
    $scope.getslide = "menu-out";
    $scope.getnav = function () {
        if ($scope.getslide == "menu-in") {
            $scope.getslide = "menu-out";
            $scope.onebar = "";
            $scope.secondbar = "";
            $scope.thirdbar = "";
        } else {
            $scope.getslide = "menu-in";
            $scope.onebar = "firstbar";
            $scope.secondbar = "secondbar";
            $scope.thirdbar = "thirdbar";
        }
    };
      $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $(".navbar-color-change").css("background", 'rgba(0, 0, 0, 0.34)');
        } else {
            $(".navbar-color-change").css("background", 'transparent');
        }
    });

});