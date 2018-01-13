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
        name: "Links",
        classis: "active",
        anchor: "links",
        subnav: []
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