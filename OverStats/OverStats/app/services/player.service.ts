module Overstats {
    export class PlayerService {
        private api: string = 'https://api.lootbox.eu/pc/us/';

        public static $inject = ['$http', '$q'];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

        }

        getProfile(battleTag: string): ng.IPromise<any> {
            return this.$http.get(this.api + battleTag + '/profile');
        }

        getAllHeroes(battleTag, mode): ng.IPromise<any> {
            return this.$http.get(this.api + battleTag + '/' + mode + '/allHeroes');
        }

        getHeroes(battleTag, mode): ng.IPromise<any> {
            return this.$http.get(this.api + battleTag + '/' + mode + '/heroes');
        }
    }

    app.service('PlayerService', PlayerService);
}