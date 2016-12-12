var Overstats;
(function (Overstats) {
    var HomeController = (function () {
        function HomeController($cookies, $location, playerService) {
            var _this = this;
            this.$cookies = $cookies;
            this.$location = $location;
            this.playerService = playerService;
            this.arrayOfColors = [
                '#C19477', '#938848', '#1B65C6', '#8D3939', '#9ADBF4',
                '#8D3939', '#5870B6', '#888888', '#212121', '#F8911B',
                '#6F6FAE', '#D9A93E', '#F571A8', '#61A718', '#6E994D',
                '#AA958E', '#5E8C2B', '#FF6200', '#C79C00', '#8E5AB5',
                '#44B2C3', '#FF7FD1', '#4C505C'
            ];
            this.isFetching = false;
            this.playerService.getPatchNotes().then(function (data) {
                _this.patchNotes = data.data.patchNotes;
                _this.setColors();
            });
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
        HomeController.prototype.setColors = function () {
            for (var i = 0; i < this.patchNotes.length; i++) {
                var randNum = Math.floor(Math.random() * (20));
                this.patchNotes[i].color = this.convertHex(this.arrayOfColors[randNum]);
            }
        };
        HomeController.prototype.convertHex = function (hex) {
            hex = hex.replace('#', '');
            var r = parseInt(hex.substring(0, 2), 16);
            var g = parseInt(hex.substring(2, 4), 16);
            var b = parseInt(hex.substring(4, 6), 16);
            return 'rgba(' + r + ',' + g + ',' + b + ', .1)';
        };
        HomeController.$inject = ['$cookies', '$location', 'PlayerService'];
        return HomeController;
    }());
    Overstats.HomeController = HomeController;
    Overstats.app.controller('HomeController', HomeController);
})(Overstats || (Overstats = {}));
//# sourceMappingURL=home.controller.js.map