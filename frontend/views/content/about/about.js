myApp.controller('AboutCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/about/about.html");
    TemplateService.title = "Aboutus"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.title = "About us";
    $scope.submitForm = function (data) {
        console.log("This is it");
        return new Promise(function (callback) {
            $timeout(function () {
                callback();
            }, 5000);
        });
    };



});