myApp.controller('TeamCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http,$uibModal) {
    $scope.template = TemplateService.getHTML("content/team/team.html");
    TemplateService.title = "Team"; //This is the Title of the Website
     TemplateService.logoNone = ""; 
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
      if (data == "Pradeep") {
            $scope.team = "Mr. Pradeep Dokania has over 29 years of experience in the Indian financial industry An alumnus of the Indian Institute of Management – Ahmedabad, Mr. Dokania joined DSP Merrill Lynch Limited in 1986 as an investment banker, and on to head the Investment Banking, Fixed Income and Private Clients business functions. He has been the Chairman of India Global Wealth Management at Merrill Lynch and was part of the team that set up the India Wealth Management business at Merrill Lynch.As an Executive Committee and Board member, he has been an integral part of the evolution and exciting growth of the financial markets in India."
        }
          if (data == "Amit") {
            $scope.team = "Mr. Amit Khandelwal is a Chartered Accountant with 23 years of experience in the banking industry. Through the course of his career, he has been associated with prestigious brands such as DSP Merrill Lynch, Credit Suisse and Kotak Bank, serving as Relationship Manager, Team Leader, National Sales Head, and finally emerging as one of the most respected private bankers in the industry.He has not only managed prolific client portfolios in India, but has also successfully handled NRI accounts across the Middle East, Africa and Europe/UK. Amit brings to the table his rich experience in Market Research and Risk Management, and astute understanding of Fixed Income & Equity Operations, New Business Initiatives and Wealth Management."
        }
         if (data == "Rakesh") {
            $scope.team = "Mr. Rakesh J Bhatia is a Chartered Accountant & Company Secretary with 24 years of experience in Financial Services, IT and Consumer facing industries. He has worked with various Reputed Indian Corporate and MNC in India and abroad. Before co-founding Sicomoro he worked with Tata Capital as Business Head Rural Business. Before Joining Tata Capital in 2007, he has worked with American Express, IDBI, i-flex Solutions (Oracle), Tupperware & Yamaha. He brings with him rich experience in Financial Services, Risk Management, IT Solutions and Process Excellence."
        }
         if (data == "Nilesh") {
            $scope.team = "Mr. Nilesh Ganjwala, a Chartered Accountant and veteran with over 30 years of industry experience spearheads Innergize, a renowned strategy and management consultancy. Through the years, Mr. Ganjwala has been professionally associated with several leading players across sectors such as Banking, Finance and Investments, Biotechnology, Healthcare, Engineering, Commodities, Retail, Infrastructure and Telecom. His wealth of experience in Corporate and Capital Structuring, Valuation of Businesses and Brands, Business and Financial Due Diligence, Legal Implications, Intellectual Property and other related matters, stands testimony to his in-depth knowledge and accomplishment."
        }
        if (data == "shreenivas") {
            $scope.team = "Mr. Shreenivas Hegde brings with him 18 years of insightful experience in Private Banking Investment functions, acquired through his close-knit association with large banking firms, both local and global. In his last role as Investment Strategist at HSBC Private Banking, he managed the individual portfolio allocations of some of the firm’s largest clients, and created and managed model portfolios across investor categories, which consistently outperformed benchmarks. His involvement with the credit, treasury and equity teams within the banking sector has lent to his holistic, multi-dimensional perspective of the financial market."
        }
        if (data == "neha") {
            $scope.team = "With more than 11 years of experience in the financial markets, Neha Dave holds a Masters in Management Studies (MMS, Finance) from Mumbai University and is also a CFA charter holder from the CFA Institute, USA. A large part of her career was spent in ING Investment Management where she was a part of fund management team conducting fundamental equity research and recommending stocks for ING’s different funds. In her last assignment with Credit Suisse’s international wealth management division, she was involved in identifying and studying major trends in the global markets to provide investment insights for private banking clients. Neha has strong understanding of various asset classes and products, expertise in financial sector (banks and NBFCs) investing with special interest in macroeconomics and in identifying major themes used in portfolio construction and recommendations. "
        }
        if (data == "radhika") {
            $scope.team = "Radhika Ringshia has recently completed her Bachelor in Business Administration from the Kingston Business School, London. Prior to her graduation she has interned and worked  at some prestigious brands such as McGill Wealth Management (associate partner practice of St. James’s Place Wealth Management), KPMG, Kotak Mahindra Bank and Electronics Bazaar. Having just started her professional career, she intends to gain work experience and at the same time finish her further studies."
        }
          if (data == "varun") {
            $scope.team = "Varun hails from a business family specializing into fit outs for commercial spaces, windows and façade solutions for developers, as well as being actively involved in the trading of secondary market investments. Perhaps influenced by his family’s involvement in the financial markets over the last 25 years, Varun also pursued his keen interest in the field as a full time professional after having completed his undergraduate degree from HR College of commerce and economics, Mumbai. He also holds a post graduate degree – MSc in Entrepreneurship Management from the coveted European Business School, London."
        }
         if (data == "kiran") {
            $scope.team = "With over 14 years of experience in broking, depository and custodial services, Kiran brings with him rich process knowledge across various asset classes and handling various operating process across the gamut of client servicing. In his last stint, he played a critical role with Axis Bank, for over 10 years, as a Senior Manager in Custodial Services, where he was responsible for managing client relationships and settlements, reporting operational risks, customer queries and process optimization. Prior to Axis Bank, Kiran has also gained experience with reputed organizations like UTI Securities, Centurion Bank and Tata TD Waterhouse Securities."
        }
         if (data == "vaibhav") {
            $scope.team = "Vaibhav has recently completed his Bachelors in Commerce from HR College of Commerce and Economics, Mumbai and is currently pursuing his Masters in Commerce. Prior to joining Sicomoro, he has interned with Kotak Mahindra Bank where he was part of the Wealth Management team handling HNI clients and was responsible for managing client relationships and product analysis. He intends to follow his interests in the Wealth Management spectrum and simultaneously pursue the CFA Course of Study to become a well-versed professional in the industry."
        }
      
        $scope.teamModal = $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/team-modal.html',
            scope: $scope,
            size: 'lg'
        });

    };


});