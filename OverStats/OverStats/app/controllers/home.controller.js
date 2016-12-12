var Overstats;
(function (Overstats) {
    var HomeController = (function () {
        function HomeController($cookies, $location, playerService) {
            this.$cookies = $cookies;
            this.$location = $location;
            this.playerService = playerService;
            this.isFetching = false;
        }
        HomeController.prototype.getProfile = function (btag) {
            var _this = this;
            this.isFetching = true;
            this.playerService.getProfile(btag).then(function (data) {
                _this.isFetching = false;
                _this.profile = data.data;
                if (_this.profile.statusCode == 404) {
                    alert(_this.profile.error);
                }
                else {
                    console.log(_this.profile);
                    _this.$location.path('/stats/' + btag);
                }
            });
        };
        HomeController.$inject = ['$cookies', '$location', 'PlayerService'];
        return HomeController;
    }());
    Overstats.HomeController = HomeController;
    Overstats.app.controller('HomeController', HomeController);
})(Overstats || (Overstats = {}));
//# sourceMappingURL=home.controller.js.map