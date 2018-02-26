myApp.controller('CareerCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal, $state) {
    $scope.template = TemplateService.getHTML("content/career/career.html");
    TemplateService.title = "Career"; //This is the Title of the Website
    TemplateService.logoNone = ""; 
    $scope.navigation = NavigationService.getNavigation();
    $scope.title = "careers";
    $scope.test = {}
    $scope.test.img = "";
    // $scope.formData = {};
    $scope.submitForm = function (form) {
        if (!form.jobCategory) {
            $scope.errMsg = "Job Category Required"
        }
        if (!form.resume) {
            $scope.errMsgResume = "please upload resume"
        }
        if (form.resume) {
            var exet = form.resume.split(".");
            if (exet[1] != "pdf") {
                $scope.errMsgResume = "please upload pdf"
            } else {
                if (form.jobCategory) {
                    NavigationService.saveCareer(form, function (data) {
                        console.log("in save career", data.data);
                        if (data.data.value) {
                            NavigationService.sendCareerApplication(data.data.data, function (data) {
                                console.log("send email ", data.data);
                            });

                            $scope.thankyou = $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/thankyou.html',
                                scope: $scope,
                                size: 'md',
                            });
                            $timeout(function () {
                                $scope.thankyou.close();
                                $state.reload();
                            }, 3000);
                        }
                    });
                }
            }
        }

    };
    $scope.reset = function (formData) {

        $scope.formData.career.position = "";
        // $scope.formData.position = "";
        // $scope.formData.career = "";

    }
    //for date picker
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    function disabled(data) { //To open the modal after submitting the form

        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function () {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [{
        date: tomorrow,
        status: 'full'
    }, {
        date: afterTomorrow,
        status: 'partially'
    }];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }
});