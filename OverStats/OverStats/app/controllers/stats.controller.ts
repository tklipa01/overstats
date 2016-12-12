﻿module Overstats {
    export class StatsController {

        private profile;
        private careerStats;
        private heroes;

        public static $inject = ['$location', 'PlayerService', '$routeParams'];

        constructor(private $location: ng.ILocationService, private playerService: PlayerService, private $routeParams) {
            this.playerService.getProfile(this.$routeParams.id).then((data): any => {
                this.profile = data.data.data;
            });

            //this.getAllHeroes(this.$routeParams.id, 'quickplay');
            this.getHeroes(this.$routeParams.id, 'quickplay');
        }

        getAllHeroes(btag, mode): void {
            this.playerService.getAllHeroes(btag, mode).then((data): any => {
                this.careerStats = data.data;
            });
        }

        getHeroes(btag, mode): void {
            this.playerService.getHeroes(btag, mode).then((data): any => {
                this.heroes = data.data;
                this.setHeroColor(this.heroes);
                console.log(this.heroes);
            });
        }

        setHeroColor(heros): void {
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
                else if (heros[i].name == 'L&#xFA;cio') {
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
                else if (heros[i].name == 'Torbj&#xF6;rn') {
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
                    heros[i].color == '#4C505C';                }
            }
        }

    }

    app.controller('StatsController', StatsController);
}