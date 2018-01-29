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

    $scope.section = {
        one: "/views/content/home/sections/main.html",
        two: "/views/content/home/sections/mission-vision.html",
        three: "/views/content/home/sections/team.html",
        four: "/views/content/home/sections/product-offering.html",
    };

    $timeout(function () {
        particlesJS.load('particles-js', '../../js/json/particles.json', function () {
            console.log('callback - particles.js config loaded');
        });
    }, 80);
    $scope.scrollDown = function () {
        $('html,body').animate({
                scrollTop: $(".section-two").offset().top
            },
            'slow');
    };
})