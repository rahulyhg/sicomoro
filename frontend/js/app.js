// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'imageupload',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'angular-flexslider',
    'ui.swiper',
    'angularPromiseButtons',
    'toastr',
    'angular-loading-bar'
    // 'highcharts-ng'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider,cfpLoadingBarProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL
 //for loader
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar = true;
    // cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
    cfpLoadingBarProvider.spinnerTemplate = '<div class="spinner-overlay"><img class="spinner" src="frontend/img/fancybox_loading.gif"/></div>';
    //End of loader
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
        })
        .state('demo', {
            url: "/demo",
            templateUrl: "views/demo.html",
            controller: 'DemoCtrl'
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

myApp.controller('DemoCtrl', function ($scope, $http) {
    $scope.val = "Praju!!!!";
    $scope.test = {};
    $scope.test.img = "";

    $scope.showImage = function () {
        console.log($scope.image);
        console.log(" In image ====================");
    };
    var attrs = ""
    $scope.check = true;
    $scope.type = "img";
    $scope.isMultiple = false;
    $scope.inObject = false;
    // if (attrs.multiple || attrs.multiple === "") {
    //     $scope.isMultiple = true;
    //     $("#inputImage").attr("multiple", "ADD");
    // }
    // if (attrs.noView || attrs.noView === "") {
    //     $scope.noShow = true;
    // }

    $scope.$watch("image", function (newVal, oldVal) {
        console.log(" In $scope.$watch ====================");
        isArr = _.isArray(newVal);
        if (!isArr && newVal && newVal.file) {
            console.log("Files == ", newVal.file)
            console.log("attrs == ", attrs)
            if (attrs.png == "") {
                if (newVal.file.type == 'image/png') {
                    $scope.uploadNow(newVal);
                } else {
                    toastr.error("Only PNG file allow");
                }
            } else {
                console.log('**** in else ****');
                $scope.uploadNow(newVal);
            }
        } else if (isArr && newVal.length > 0 && newVal[0].file) {

            $timeout(function () {
                _.each(newVal, function (newV, key) {
                    if (newV && newV.file) {
                        console.log('newV = =', newV);
                        $scope.uploadNow(newV);
                    }
                });
            }, 100);

        }
    });

    if ($scope.model) {
        if (_.isArray($scope.model)) {
            $scope.image = [];
            _.each($scope.model, function (n) {
                $scope.image.push({
                    url: n
                });
            });
        } else {
            if (_.endsWith($scope.model, ".pdf")) {
                $scope.type = "pdf";
            }
        }

    }

    if (attrs.inobj || attrs.inobj === "") {
        $scope.inObject = true;
    }
    $scope.clearOld = function () {
        $scope.model = [];
    };
    $scope.uploadNow = function (image) {
        $scope.uploadStatus = "uploading";

        var Template = this;
        image.hide = true;
        var formData = new FormData();
        formData.append('file', image.file, image.name);
        $http.post(uploadurl, formData, {
            headers: {
                'Content-Type': undefined
            },
            transformRequest: angular.identity
        }).success(function (data) {
            if (data.value) {
                $scope.uploadStatus = "uploaded";
                if ($scope.isMultiple) {
                    toastr.success("Upload Succeeded");
                    if ($scope.inObject) {
                        $scope.model.push({
                            "image": data.data[0]
                        });
                    } else {
                        if (!$scope.model) {
                            $scope.clearOld();
                        }
                        $scope.model.push(data.data[0]);
                    }
                } else {
                    toastr.success("Upload Succeeded");
                    if (_.endsWith(data.data, ".pdf")) {
                        $scope.type = "pdf";
                    } else {
                        $scope.type = "img";
                    }
                    $scope.model = data.data;
                }
                $timeout(function () {
                    $scope.callback();
                }, 100);
            } else {
                toastr.error("Max file size allowed: 1 MB", "Upload Failed");
                $scope.uploadStatus = "failed";
            }
        });
    };
});