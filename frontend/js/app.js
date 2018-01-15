// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'angular-flexslider',
    'ui.swiper',
    'angularPromiseButtons',
    'toastr'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('product', {
            url: "/product",
            templateUrl: tempateURL,
            controller: 'ProductCtrl'
        })
        .state('team', {
            url: "/team",
            templateUrl: tempateURL,
            controller: 'TeamCtrl'
        })
        .state('mission-vision', {
            url: "/mission-vision",
            templateUrl: tempateURL,
            controller: 'MissionandVisionCtrl'
        })
        .state('about', {
            url: "/about",
            templateUrl: tempateURL,
            controller: 'AboutCtrl'
        })
        .state('career', {
            url: "/career",
            templateUrl: tempateURL,
            controller: 'CareerCtrl'
        })
        .state('contact', {
            url: "/contact",
            templateUrl: tempateURL,
            controller: 'ContactCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});