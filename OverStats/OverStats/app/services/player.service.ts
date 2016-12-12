module Overstats {
    export class PlayerService {
        private api: string = 'https://api.lootbox.eu/pc/us/';

        public static $inject = ['$http', '$q'];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

        }

        getPatchNotes(): ng.IPromise<any> {
            return this.$http.get('https://api.lootbox.eu/patch_notes')
        }

        getProfile(battleTag: string): ng.IPromise<any> {
            return this.$http.get(this.api + battleTag + '/profile');
        }

        getAllHeroes(battleTag, mode): ng.IPromise<any> {
            return this.$http.get(this.api + battleTag + '/' + mode + '/allHeroes/');
        }

        getHeroes(battleTag, mode): ng.IPromise<any> {
            return this.$http.get(this.api + battleTag + '/' + mode + '/heroes');
        }

        getHero(battleTag, mode, hero): ng.IPromise<any> {
            return this.$http.get(this.api + battleTag + '/' + mode + '/hero/' + hero + '/');
        }
    }

    app.service('PlayerService', PlayerService);
}