myApp.controller('MissionandVissionCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/mission-vission/mission-vission.html");
    TemplateService.title = "MissionandVission"; //This is the Title of the Website
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