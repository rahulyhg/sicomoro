myApp.controller('MissionandVisionCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/mission-vision/mission-vision.html");
    TemplateService.title = "Mission-Vision"; //This is the Title of the Website
     TemplateService.logoNone = ""; 
    $scope.navigation = NavigationService.getNavigation();
    $scope.title = "Mission & Vision";
    $scope.submitForm = function (data) {
        console.log("This is it");
        return new Promise(function (callback) {
            $timeout(function () {
                callback();
            }, 5000);
        });
    };



});