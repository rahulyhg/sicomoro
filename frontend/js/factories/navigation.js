myApp.factory('NavigationService', function () {
    var navigation = [{
        name: "Home",
        classis: "active",
        anchor: "home",
        subnav: [{
            name: "Subnav1",
            classis: "active",
            anchor: "home"
        }]
    }, {
        name: "Team",
        classis: "active",
        anchor: "team",
        subnav: []
    }, {
        name: "Mission and Vission",
        classis: "active",
        anchor: "missionandvission",
        subnav: []
    }, {
        name: "About Us",
        classis: "active",
        anchor: "aboutus",
        subnav: []
    }, {
        name: "Career",
        classis: "active",
        anchor: "career",
        subnav: []
    }, {
        name: "Contact Us",
        classis: "active",
        anchor: "contactus",
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
    };
});