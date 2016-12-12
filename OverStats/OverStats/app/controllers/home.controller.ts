module Overstats {
    export class HomeController {

        private battleTag: string;
        private isFetching: boolean;

        private profile;

        private patchNotes;

        private arrayOfColors = [
            '#C19477', '#938848', '#1B65C6', '#8D3939', '#9ADBF4',
            '#8D3939', '#5870B6', '#888888', '#212121', '#F8911B',
            '#6F6FAE', '#D9A93E', '#F571A8', '#61A718', '#6E994D', 
            '#AA958E', '#5E8C2B', '#FF6200', '#C79C00', '#8E5AB5',
            '#44B2C3', '#FF7FD1', '#4C505C'
        ];

        public static $inject = ['$cookies', '$location', 'PlayerService'];

        constructor(private $cookies: ng.cookies.ICookiesService, private $location: ng.ILocationService, private playerService: PlayerService) {
            this.isFetching = false;

            this.playerService.getPatchNotes().then((data): any => {
                this.patchNotes = data.data.patchNotes;
                this.setColors();
            });
        }

        getProfile(btag): void {
            this.isFetching = true;

            this.playerService.getProfile(btag).then((data): any => {
                this.isFetching = false;
                this.profile = data.data;

                if (this.profile.statusCode == 404) {
                    alert(this.profile.error);
                }
                else {
                    console.log(this.profile);
                    this.$location.path('/stats/' + btag);
                }
            });
        }

        setColors(): void {
            for (var i = 0; i < this.patchNotes.length; i++) {
                var randNum = Math.floor(Math.random() * (20));
                this.patchNotes[i].color = this.convertHex(this.arrayOfColors[randNum]);
            }
        }

        convertHex(hex) {
            hex = hex.replace('#', '');
            var r = parseInt(hex.substring(0, 2), 16);
            var g = parseInt(hex.substring(2, 4), 16);
            var b = parseInt(hex.substring(4, 6), 16);

            return 'rgba(' + r + ',' + g + ',' + b + ', .1)';
        }

    }

    app.controller('HomeController', HomeController);
}