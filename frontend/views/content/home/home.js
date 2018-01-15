myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $window, $http) {
    $scope.template = TemplateService.getHTML("content/home/home.html");
    TemplateService.title = "Home"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $scope.submitForm = function (data) {
        console.log("This is it");
        return new Promise(function (callback) {
            $timeout(function () {
                callback();
            }, 5000);
        });
    };

    $timeout(function () {
        particlesJS.load('particles-js', '../../js/json/particles.json', function () {
            console.log('callback - particles.js config loaded');
        });
    }, 100);

})