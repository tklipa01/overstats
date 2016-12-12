var Overstats;
(function (Overstats) {
    var StatsController = (function () {
        function StatsController($location, playerService, $routeParams) {
            var _this = this;
            this.$location = $location;
            this.playerService = playerService;
            this.$routeParams = $routeParams;
            this.nav = {
                overview: false,
                heroes: true
            };
            this.heroArray = [];
            this.gettingHero = false;
            this.heroesSelectList = new Array();
            this.playerService.getProfile(this.$routeParams.id).then(function (data) {
                _this.profile = data.data.data;
            });
            this.getAllHeroes(this.$routeParams.id, 'quickplay');
            this.getHeroes(this.$routeParams.id, 'quickplay');
        }
        //api call doesnt allow CORS :(
        StatsController.prototype.getAllHeroes = function (btag, mode) {
            var _this = this;
            this.playerService.getAllHeroes(btag, mode).then(function (data) {
                _this.careerStats = data.data;
            });
        };
        StatsController.prototype.getHeroes = function (btag, mode) {
            var _this = this;
            this.playerService.getHeroes(btag, mode).then(function (data) {
                _this.heroes = data.data;
                for (var i = 0; i < _this.heroes.length; i++) {
                    if (_this.heroes[i].name == 'L&#xFA;cio') {
                        _this.heroes[i].name = 'Lucio';
                    }
                    else if (_this.heroes[i].name == 'Torbj&#xF6;rn') {
                        _this.heroes[i].name = 'Torbjorn';
                    }
                }
                _this.setHeroColor(_this.heroes);
                _this.getHeroesSelectList(_this.heroes);
                console.log(_this.heroes);
            });
        };
        StatsController.prototype.getHeroesSelectList = function (heros) {
            for (var i = 0; i < heros.length; i++) {
                if (heros[i].name == 'Solider: 76') {
                    this.heroesSelectList.push({ name: heros[i].name, id: 'Solider76' });
                }
                else if (heros[i].name == 'McCree') {
                    this.heroesSelectList.push({ name: heros[i].name, id: 'Mccree' });
                }
                else if (heros[i].name == 'D.Va') {
                    this.heroesSelectList.push({ name: heros[i].name, id: 'DVa' });
                }
                else {
                    this.heroesSelectList.push({ name: heros[i].name, id: heros[i].name });
                }
            }
        };
        StatsController.prototype.unCamelCase = function (str) {
            return str
                .replace(/([a-z])([A-Z])/g, '$1 $2')
                .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
                .replace(/^./, function (str) { return str.toUpperCase(); });
        };
        StatsController.prototype.getHero = function (mode, hero) {
            var _this = this;
            this.gettingHero = true;
            this.currentHero = hero;
            this.playerService.getHero(this.$routeParams.id, mode, hero).then(function (data) {
                _this.hero = data.data;
                _this.gettingHero = false;
                var s = _this.hero[_this.currentHero];
                //map to array
                _this.heroArray = Object.keys(s).map(function (data) {
                    return [data, s[data]];
                });
                //split camel case of first value
                for (var i = 0; i < _this.heroArray.length; i++) {
                    _this.heroArray[i][0] = _this.unCamelCase(_this.heroArray[i][0]);
                }
            });
        };
        StatsController.prototype.openHero = function (hero) {
            this.nav.overview = false;
            this.nav.heroes = true;
            this.getHero('quickplay', hero);
        };
        StatsController.prototype.setHeroColor = function (heros) {
            for (var i = 0; i < heros.length; i++) {
                if (heros[i].name == 'Roadhog') {
                    heros[i].color = '#C19477';
                }
                else if (heros[i].name == 'Hanzo') {
                    heros[i].color = '#938848';
                }
                else if (heros[i].name == 'Pharah') {
                    heros[i].color = '#1B65C6';
                }
                else if (heros[i].name == 'Junkrat') {
                    heros[i].color = '#8D3939';
                }
                else if (heros[i].name == 'Mei') {
                    heros[i].color = '#9ADBF4';
                }
                else if (heros[i].name == 'McCree') {
                    heros[i].color = '#8D3939';
                }
                else if (heros[i].name == 'Soldier: 76') {
                    heros[i].color = '#5870B6';
                }
                else if (heros[i].name == 'Reaper') {
                    heros[i].color = '#888888';
                }
                else if (heros[i].name == 'Tracer') {
                    heros[i].color = '#212121';
                }
                else if (heros[i].name == 'Ana') {
                    heros[i].color = '#F8911B';
                }
                else if (heros[i].name == 'Widowmaker') {
                    heros[i].color = '#6F6FAE';
                }
                else if (heros[i].name == 'Mercy') {
                    heros[i].color = '#D9A93E';
                }
                else if (heros[i].name == 'Zarya') {
                    heros[i].color = '#F571A8';
                }
                else if (heros[i].name == 'Lucio') {
                    heros[i].color = '#61A718';
                }
                else if (heros[i].name == 'Bastion') {
                    heros[i].color = '#6E994D';
                }
                else if (heros[i].name == 'Reinhardt') {
                    heros[i].color = '#AA958E';
                }
                else if (heros[i].name == 'Genji') {
                    heros[i].color = '#5E8C2B';
                }
                else if (heros[i].name == 'Torbjorn') {
                    heros[i].color = '#FF6200';
                }
                else if (heros[i].name == 'Zenyatta') {
                    heros[i].color = '#C79C00';
                }
                else if (heros[i].name == 'Sombra') {
                    heros[i].color = '#8E5AB5';
                }
                else if (heros[i].name == 'Symmetra') {
                    heros[i].color = '#44B2C3';
                }
                else if (heros[i].name == 'D.Va') {
                    heros[i].color = '#FF7FD1';
                }
                else {
                    heros[i].color == '#4C505C';
                }
            }
        };
        StatsController.$inject = ['$location', 'PlayerService', '$routeParams'];
        return StatsController;
    }());
    Overstats.StatsController = StatsController;
    Overstats.app.controller('StatsController', StatsController);
})(Overstats || (Overstats = {}));
//# sourceMappingURL=stats.controller.js.map