var Overstats;
(function (Overstats) {
    var PlayerService = (function () {
        function PlayerService($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.api = 'https://api.lootbox.eu/pc/us/';
        }
        PlayerService.prototype.getProfile = function (battleTag) {
            return this.$http.get(battleTag + '/profile');
        };
        PlayerService.$inject = ['$http', '$q'];
        return PlayerService;
    }());
    Overstats.PlayerService = PlayerService;
    Overstats.app.service('PlayerService', PlayerService);
})(Overstats || (Overstats = {}));
//# sourceMappingURL=player.service.js.map