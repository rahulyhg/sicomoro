myApp.controller('ContactCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/contact/contact.html");
    TemplateService.title = "Contact Us"; //This is the Title of the Website
     TemplateService.logoNone = ""; 
    $scope.navigation = NavigationService.getNavigation();
    $scope.title = "Contact Us";
    $scope.submitForm = function (data) {
        console.log("This is it");
        return new Promise(function (callback) {
            $timeout(function () {
                callback();
            }, 5000);
        });
    };



});