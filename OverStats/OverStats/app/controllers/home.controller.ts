module Overstats {
    export class HomeController {

        private battleTag: string;
        private isFetching: boolean;

        private profile;

        public static $inject = ['$cookies', '$location', 'PlayerService'];

        constructor(private $cookies: ng.cookies.ICookiesService, private $location: ng.ILocationService, private playerService: PlayerService) {
            this.isFetching = false;
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

    }

    app.controller('HomeController', HomeController);
}