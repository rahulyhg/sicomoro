myApp.factory('NavigationService', function () {
    var navigation = [{
        name: "Home",
        classis: "active",
        anchor: "home",
        subnav: []
    }, {
        name: "The Team",
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
        name: "Careers",
        classis: "active",
        anchor: "career",
        subnav: []
    }, {
        name: "Contact Us",
        classis: "active",
        anchor: "contact",
        subnav: []
    }, {
        name: "Products and Offerings",
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