module Overstats {
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider: ng.route.IRouteProvider, $locationProvider) {
        $locationProvider.hashPrefix();
        //$locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.tpl.html',
                controller: HomeController,
                controllerAs: 'vm'
            })
            .when('/stats/:id', {
                templateUrl: 'templates/stats.tpl.html',
                controller: StatsController,
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });
    }]);
}