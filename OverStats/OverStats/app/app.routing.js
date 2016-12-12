var Overstats;
(function (Overstats) {
    Overstats.app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix();
            $routeProvider
                .when('/', {
                templateUrl: 'templates/home.tpl.html',
                controller: Overstats.HomeController,
                controllerAs: 'vm'
            })
                .when('/stats/:id', {
                templateUrl: 'templates/stats.tpl.html',
                controller: Overstats.StatsController,
                controllerAs: 'vm'
            })
                .otherwise({ redirectTo: '/' });
        }]);
})(Overstats || (Overstats = {}));
//# sourceMappingURL=app.routing.js.map