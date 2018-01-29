myApp.controller('TeamCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http,$uibModal) {
    $scope.template = TemplateService.getHTML("content/team/team.html");
    TemplateService.title = "Team"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.title = "the Team";
    $scope.submitForm = function (data) {
        console.log("This is it");
        return new Promise(function (callback) {
            $timeout(function () {
                callback();
            }, 5000);
        });
    };
 $scope.teamOpen = function (data) {
        if (data == "shreenivas") {
            $scope.team = "In his last role as Investment Strategist at HSBC Private Banking, he managed the individual portfolio allocations of some of the firm’s largest clients, and created and managed model portfolios across investor categories, which consistently outperformed benchmarks.His involvement with the credit, treasury and equity teams within the banking sector has lent to his holistic, multi-dimensional perspective of the financial market."
        }
        if (data == "neha") {
            $scope.team = "A large part of her career was spent in ING Investment Management where she was a part of fund management team conducting fundamental equity research and recommending stocks for ING’s different funds. In her last assignment with Credit Suisse’s international wealth management division, she was involved in identifying and studying major trends in the global markets to provide investment insights for private banking clients.Neha has strong understanding of various asset classes and products, expertise in financial sector (banks and NBFCs) investing with special interest in macroeconomics and in identifying major themes used in portfolio construction and recommendations. "
        }
        if (data == "radhika") {
            $scope.team = " Prior to her graduation she has interned and worked  at some prestigious brands such as McGill Wealth Management (associate partner practice of St. James’s Place Wealth Management), KPMG, Kotak Mahindra Bank and Electronics Bazaar. Having just started her professional career, she intends to gain work experience and at the same time finish her further studies."
        }
        $scope.teamModal = $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/team-modal.html',
            scope: $scope,
            size: 'lg'
        });

    };


});