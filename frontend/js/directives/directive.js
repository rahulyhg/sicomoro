myApp.directive('img', function ($compile, $parse) {
        return {
            restrict: 'E',
            replace: false,
            link: function ($scope, element, attrs) {
                var $element = $(element);
                if (!attrs.noloading) {
                    $element.after("<img src='img/loading.gif' class='loading' />");
                    var $loading = $element.next(".loading");
                    $element.load(function () {
                        $loading.remove();
                        $(this).addClass("doneLoading");
                    });
                } else {
                    $($element).addClass("doneLoading");
                }
            }
        };
    })

    .directive('hideOnScroll', function ($document) {
        return {
            restrict: 'EA',
            replace: false,
            link: function (scope, element, attr) {
                var $element = $(element);
                var lastScrollTop = 0;
                $(window).scroll(function (event) {
                    var st = $(this).scrollTop();
                    if (st > lastScrollTop) {
                        $(element).addClass('nav-up');
                    } else {
                        $(element).removeClass('nav-up');
                    }
                    lastScrollTop = st;
                });
            }
        };
    })

    .directive('headingFirst', function ($http, $filter) {
        return {
            templateUrl: 'views/directive/first-heading.html',
            link: function ($scope, element, attrs) {}
        };
    })

    .directive('fancybox', function ($document) {
        return {
            restrict: 'EA',
            replace: false,
            link: function (scope, element, attr) {
                var $element = $(element);
                var target;
                if (attr.rel) {
                    target = $("[rel='" + attr.rel + "']");
                } else {
                    target = element;
                }

                target.fancybox({
                    openEffect: 'fade',
                    closeEffect: 'fade',
                    closeBtn: true,
                    padding: 0,
                    helpers: {
                        media: {}
                    }
                });
            }
        };
    })

    .directive('autoHeight', function ($compile, $parse) {
        return {
            restrict: 'EA',
            replace: false,
            link: function ($scope, element, attrs) {
                var $element = $(element);
                var windowHeight = $(window).height();
                $element.css("min-height", windowHeight);
            }
        };
    })


    .directive('replace', function () {
        return {
            require: 'ngModel',
            scope: {
                regex: '@replace',
                with: '@with'
            },
            link: function (scope, element, attrs, model) {
                model.$parsers.push(function (val) {
                    if (!val) {
                        return;
                    }
                    var regex = new RegExp(scope.regex);
                    var replaced = val.replace(regex, scope.with);
                    if (replaced !== val) {
                        model.$setViewValue(replaced);
                        model.$render();
                    }
                    return replaced;
                });
            }
        };
    })

    // .directive('uploadImage', function ($http, $filter, $timeout, toastr) {
    //     return {
    //         templateUrl: 'views/directive/uploadFile.html',
    //         scope: {
    //             model: '=ngModel',
    //             type: "@type",
    //             callback: "&ngCallback"
    //         },
    //         link: function ($scope, element, attrs) {
    //             console.log(" In image ====================");
    //             $scope.showImage = function () {
    //                 console.log($scope.image);
    //             };

    //             $scope.check = true;
    //             $scope.type = "img";
    //             $scope.isMultiple = false;
    //             $scope.inObject = false;
    //             if (attrs.multiple || attrs.multiple === "") {
    //                 $scope.isMultiple = true;
    //                 $("#inputImage").attr("multiple", "ADD");
    //             }
    //             if (attrs.noView || attrs.noView === "") {
    //                 $scope.noShow = true;
    //             }

    //             $scope.$watch("image", function (newVal, oldVal) {
    //                 console.log(" In $scope.$watch ====================");
    //                 isArr = _.isArray(newVal);
    //                 if (!isArr && newVal && newVal.file) {
    //                     console.log("Files == ", newVal.file)
    //                     console.log("attrs == ", attrs)
    //                     if (attrs.png == "") {
    //                         if (newVal.file.type == 'image/png') {
    //                             $scope.uploadNow(newVal);
    //                         } else {
    //                             toastr.error("Only PNG file allow");
    //                         }
    //                     } else {
    //                         console.log('**** in else ****');
    //                         $scope.uploadNow(newVal);
    //                     }
    //                 } else if (isArr && newVal.length > 0 && newVal[0].file) {

    //                     $timeout(function () {
    //                         _.each(newVal, function (newV, key) {
    //                             if (newV && newV.file) {
    //                                 console.log('newV = =', newV);
    //                                 $scope.uploadNow(newV);
    //                             }
    //                         });
    //                     }, 100);

    //                 }
    //             });

    //             if ($scope.model) {
    //                 if (_.isArray($scope.model)) {
    //                     $scope.image = [];
    //                     _.each($scope.model, function (n) {
    //                         $scope.image.push({
    //                             url: n
    //                         });
    //                     });
    //                 } else {
    //                     if (_.endsWith($scope.model, ".pdf")) {
    //                         $scope.type = "pdf";
    //                     }
    //                 }

    //             }

    //             if (attrs.inobj || attrs.inobj === "") {
    //                 $scope.inObject = true;
    //             }
    //             $scope.clearOld = function () {
    //                 $scope.model = [];
    //             };
    //             $scope.uploadNow = function (image) {
    //                 $scope.uploadStatus = "uploading";

    //                 var Template = this;
    //                 image.hide = true;
    //                 var formData = new FormData();
    //                 formData.append('file', image.file, image.name);
    //                 $http.post(uploadurl, formData, {
    //                     headers: {
    //                         'Content-Type': undefined
    //                     },
    //                     transformRequest: angular.identity
    //                 }).success(function (data) {
    //                     if (data.value) {
    //                         $scope.uploadStatus = "uploaded";
    //                         if ($scope.isMultiple) {
    //                             toastr.success("Upload Succeeded");
    //                             if ($scope.inObject) {
    //                                 $scope.model.push({
    //                                     "image": data.data[0]
    //                                 });
    //                             } else {
    //                                 if (!$scope.model) {
    //                                     $scope.clearOld();
    //                                 }
    //                                 $scope.model.push(data.data[0]);
    //                             }
    //                         } else {
    //                             toastr.success("Upload Succeeded");
    //                             if (_.endsWith(data.data, ".pdf")) {
    //                                 $scope.type = "pdf";
    //                             } else {
    //                                 $scope.type = "img";
    //                             }
    //                             $scope.model = data.data;
    //                         }
    //                         $timeout(function () {
    //                             $scope.callback();
    //                         }, 100);
    //                     } else {
    //                         toastr.error("Max file size allowed: 1 MB", "Upload Failed");
    //                         $scope.uploadStatus = "failed";
    //                     }
    //                 });
    //             };
    //         }
    //     };
    // })
    .directive('uploadImage', function ($http, $filter, $timeout) {
        return {
            templateUrl: 'views/directive/uploadFile.html',
            scope: {
                model: '=ngModel',
                type: "@type",
                callback: "&ngCallback"
            },
            link: function ($scope, element, attrs) {
                $scope.showImage = function () {};
                $scope.check = true;
                if (!$scope.type) {
                    $scope.type = "image";
                }
                $scope.isMultiple = false;
                $scope.inObject = false;
                if (attrs.multiple == "true") {
                    $scope.isMultiple = true;
                    $("#inputImage").attr("multiple", "ADD");
                }
                if (attrs.noView || attrs.noView === "") {
                    $scope.noShow = true;
                }
                if (attrs.required) {
                    $scope.required = true;
                } else {
                    $scope.required = false;
                }

                // $scope.uploadImage = function () {
                //     console.log(" imagesss ! ");
                // }
                $scope.$watch("image", function (newVal, oldVal) {
                    console.log(newVal, oldVal);
                    isArr = _.isArray(newVal);
                    if (!isArr && newVal && newVal.file) {
                        $scope.uploadNow(newVal);
                    } else if (isArr && newVal.length > 0 && newVal[0].file) {
                        $timeout(function () {
                            console.log(oldVal, newVal);
                            _.each(newVal, function (newV, key) {
                                if (newV && newV.file) {
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
                    $scope.uploadStatus = "removed";
                };
                $scope.removeImage = function (index) {
                    $scope.image = [];
                    $scope.model.splice(index, 1);
                    _.each($scope.model, function (n) {
                        $scope.image.push({
                            url: n
                        });
                    });
                }
                $scope.uploadNow = function (image) {
                    $scope.uploadStatus = "uploading";

                    var Template = this;
                    image.hide = true;
                    var formData = new FormData();
                    formData.append('file', image.file, image.file.name);
                    $http.post(uploadurl, formData, {
                        headers: {
                            'Content-Type': undefined
                        },
                        transformRequest: angular.identity
                    }).then(function (data) {
                        data = data.data;
                        $scope.uploadStatus = "uploaded";
                        if ($scope.isMultiple) {
                            if ($scope.inObject) {
                                uploadImage
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
                            if (_.endsWith(data.data[0], ".pdf")) {
                                $scope.type = "pdf";
                            } else {
                                $scope.type = "image";
                            }
                            $scope.model = data.data[0];
                            console.log($scope.model, 'model means blob')

                        }
                        $timeout(function () {
                            $scope.callback();
                        }, 100);

                    });
                };
            }
        };
    })

    .directive('uploadImageFiles', function ($http, $filter, $timeout) {
        return {
            templateUrl: 'views/directive/uploadImageFiles.html',
            scope: {
                model: '=ngModel',
                type: "@type",
                callback: "&ngCallback"
            },
            link: function ($scope, element, attrs) {
                console.log("in directive", $scope.model);
                $scope.showImage = function () {};
                $scope.check = true;
                if (!$scope.type) {
                    $scope.type = "image";
                }
                $scope.isMultiple = false;
                $scope.inObject = false;
                if (attrs.multiple == "true") {
                    $scope.isMultiple = true;
                    $("#inputImage").attr("multiple", "ADD");
                }
                if (attrs.noView || attrs.noView === "") {
                    $scope.noShow = true;
                }
                // if (attrs.required) {
                //     $scope.required = true;
                // } else {
                //     $scope.required = false;
                // }

                $scope.$watch("image", function (newVal, oldVal) {
                    console.log("#######", newVal, oldVal);
                    isArr = _.isArray(newVal);
                    if (!isArr && newVal && newVal.file) {
                        $scope.uploadNow(newVal);
                    } else if (isArr && newVal.length > 0 && newVal[0].file) {
                        console.log("new val", newVal);
                        $timeout(function () {
                            console.log(oldVal, newVal);
                            console.log(newVal.length);
                            async.eachLimit(newVal, 2, function (image, callback) {
                                // Perform operation on file here.
                                console.log('Processing file ' + image);
                                if (image && image.file) {
                                    $scope.uploadStatus = "uploading";

                                    var Template = this;
                                    image.hide = true;
                                    var formData = new FormData();
                                    formData.append('file', image.file, image.file.name);
                                    $http.post(missionFileUrl, formData, {
                                        headers: {
                                            'Content-Type': undefined
                                        },
                                        transformRequest: angular.identity
                                    }).then(function (data) {
                                        console.log("data---", data);
                                        data = data.data;
                                        $scope.uploadStatus = "uploaded";
                                        if ($scope.isMultiple) {
                                            if ($scope.inObject) {
                                                $scope.model.push({
                                                    "image": data.data[0]
                                                });
                                                callback(null, "next");
                                            } else {
                                                if (!$scope.model) {
                                                    $scope.clearOld();
                                                }
                                                var fileList = {};
                                                fileList.file = data.data[0];
                                                $scope.model.push(fileList);
                                                callback(null, "next");
                                            }
                                        } else {
                                            if (_.endsWith(data.data[0], ".pdf")) {
                                                $scope.type = "pdf";
                                            } else {
                                                $scope.type = "image";
                                            }
                                            var fileList = {};
                                            fileList.file = data.data[0];
                                            $scope.model = fileList;
                                            console.log($scope.model, 'model means blob')
                                            callback(null, "next");
                                        }
                                    });
                                } else {
                                    callback(null, "next");
                                }
                            }, function (err) {
                                // if any of the file processing produced an error, err would equal that error
                                if (err) {
                                    // One of the iterations produced an error.
                                    // All processing will now stop.
                                    console.log('A file failed to process');
                                } else {
                                    console.log('All files have been processed successfully');
                                }
                            });
                            // _.each(newVal, function (newV, key) {
                            //     if (newV && newV.file) {
                            //         $scope.uploadNow(newV);
                            //     }
                            // });
                        }, 15000);

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
                    $scope.uploadStatus = "removed";
                };
                $scope.removeImage = function (index) {
                    $scope.image = [];
                    $scope.model.splice(index, 1);
                    _.each($scope.model, function (n) {
                        $scope.image.push({
                            url: n
                        });
                    });
                }
                $scope.uploadNow = function (image) {
                    $scope.uploadStatus = "uploading";
                    var Template = this;
                    image.hide = true;
                    var formData = new FormData();
                    formData.append('file', image.file, image.file.name);
                    $http.post(missionFileUrl, formData, {
                        headers: {
                            'Content-Type': undefined
                        },
                        transformRequest: angular.identity
                    }).then(function (data) {
                        console.log("data---", data);
                        data = data.data;
                        $scope.uploadStatus = "uploaded";
                        if ($scope.isMultiple) {
                            if ($scope.inObject) {
                                $scope.model.push({
                                    "image": data.data[0]
                                });
                            } else {
                                if (!$scope.model) {
                                    $scope.clearOld();
                                }
                                var fileList = {};
                                fileList.file = data.data[0];
                                $scope.model.push(fileList);
                            }
                        } else {
                            if (_.endsWith(data.data[0], ".pdf")) {
                                $scope.type = "pdf";
                            } else {
                                $scope.type = "image";
                            }
                            var fileList = {};
                            fileList.file = data.data[0];
                            $scope.model = fileList;
                            console.log($scope.model, 'model means blob')

                        }
                        $timeout(function () {
                            $scope.callback();
                        }, 15000);
                    });
                };
            }
        };
    });