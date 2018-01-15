myApp.controller('ProductCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
            $scope.template = TemplateService.getHTML("content/product/product.html");
            TemplateService.title = "Product"; //This is the Title of the Website
            $scope.navigation = NavigationService.getNavigation();
            $scope.title = "Products and offerings";
            $scope.productOpen = function (data) {
                $uibModal.open({
                    animation: true,
                    templateUrl: 'frontend/views/modal/product-modal.html',
                    scope: $scope,
                    size: 'md',
                });
                if(data=="wealth"){
                    $scope.product="Individuals have varied financial aspirations that are often not well defined. At Sicomoro, we workwith clients in defining their financial goals and assist them to protect,grow and pass on / transfer their private wealth.We provide clients with effective wealth structures and best suited investmentsolutions."
                }if(data=="Family"){
                        $scope.product="The security of your legacy is our responsibility. Trust us with Strategic Planning and Tactical Execution of Asset Allocation,Tax Advisory on Investments,Quarterly Assessment of Tax Incidence and planning thereof.We also frame the Investment Policy and Yearly Review and evaluate the performance of advisors.We assist you on Liquidity Planning for Major Financial Events as well as on Inheritance Planning,including Preparation of Wills & Trust.Just like individuals, business families have specific needs of managing the wealth created through entrepreneurial zeal and rigor.Sicomoro is a trusted partner with whom entrepreneurs can build a strategy around their family wealth / Sicomoro is a trusted partner with dedicated investment professionals acting as advisors and gatekeepers of family wealth.We provide solutions for investment portfolio transition after a windfall, such as the sale of a business.Our services encompass wide range of family business’ s needs such as succession and estate planning, philanthropy, tax and legal services. Our holistic approach aims to enable entrepreneur remain deeply committed / focussed to their businessas we help in effective management of their family assets."
                }if(data=="Customized"){
                     $scope.product="Each client is unique and so our investment solutions are tailored to client’s needs. Our investment approach starts with identifying client’ s goals and risk tolerance,understanding their circumstances like liquidity needs,investment horizon,etc.and developing personalised asset allocations.Once the allocation is finalised,we offer investment vehicles / alternatives which are carefully selected after a proper due diligence.To align with our client’ s interest, the investment alternatives that we propose does not include any proprietary products.We offer third party products of leading market specialists.Today’ s fast changing economic and financial landscape require us to continuously monitor the investments and manage any necessary adjustments.At all times, we interact with the clients and place a lot of thrust on portfolio review and reporting. "
                }
            };
            });