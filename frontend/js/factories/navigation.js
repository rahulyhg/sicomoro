    var imgurl = adminurl + "upload/";

    var imgpath = imgurl + "readFile";
    var uploadurl = imgurl;

    myApp.factory('NavigationService', function ($http) {
        var navigation = [{
            name: "Home",
            classis: "active",
            anchor: "home",
            subnav: []
        }, {
            name: "Team",
            classis: "active",
            anchor: "team",
            subnav: []
        }, {
            name: "Mission and Vision",
            classis: "active",
            anchor: "mission-vision",
            subnav: []
        }, {
            name: "About Us",
            classis: "active",
            anchor: "about",
            subnav: []
        }, {
            name: "Career",
            classis: "active",
            anchor: "career",
            subnav: []
        }, {
            name: "Contact Us",
            classis: "active",
            anchor: "contact",
            subnav: []
        }, {
            name: "product",
            classis: "active",
            anchor: "product",
            subnav: []
        }];

        return {
            getNavigation: function () {
                return navigation;
            },
            saveCareer: function (data, callback) {
                $http({
                    url: adminurl + 'Career/save',
                    method: 'POST',
                    data: data,
                    withCredentials: false
                }).then(callback);
            },
            sendCareerApplication: function (data, callback) {
                $http({
                    url: adminurl + 'Career/careerFormEmail',
                    method: 'POST',
                    data: data,
                    withCredentials: false
                }).then(callback);
            },
        };
    });