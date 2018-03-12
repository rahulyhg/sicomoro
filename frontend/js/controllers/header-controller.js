myApp.controller('headerCtrl', function ($scope, TemplateService, $state) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });

    //code for backdrop
    $scope.isBackdropActive = false;
    console.log(" $scope.isBackdropActive  $scope.isBackdropActive  $scope.isBackdropActive  $scope.isBackdropActive ", $scope.isBackdropActive);
    //end of backdrop
    $.fancybox.close(true);
    $scope.getslide = "menu-out";
    $scope.getnav = function () {
        if ($scope.getslide == "menu-in") {
            $scope.getslide = "menu-out";
            $scope.onebar = "";
            $scope.secondbar = "";
            $scope.thirdbar = "";
            $scope.isBackdropActive = false;

        } else {
            $scope.getslide = "menu-in";
            $scope.onebar = "firstbar";
            $scope.secondbar = "secondbar";
            $scope.thirdbar = "thirdbar";
            $scope.isBackdropActive = !$scope.isBackdropActive;
        }
    };
    $scope.closeSideNav = function () {
            if ($scope.getslide == "menu-in") {
                $scope.getslide = "menu-out";
                $scope.onebar = "";
                $scope.secondbar = "";
                $scope.thirdbar = "";
                $scope.isBackdropActive = false;
            }
        }
        //   $(window).scroll(function () {
        //     if ($(document).scrollTop() > 100) {
        //         $(".navbar-color-change").css("background", 'rgba(0, 0, 0, 0.34)');
        //     } else {
        //         $(".navbar-color-change").css("background", 'transparent');
        //     }
        // });
    $scope.logoHome = $state.current.name;
    // console.log($state.current.name);

});