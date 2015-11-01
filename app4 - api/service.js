angular.module('pokemonApp').service('mainService', function ($http, $q) {

    this.getData = function () {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: 'http://pokeapi.co/api/v1/pokedex/1/'
        }).then(function (response) {

            var pokemon = response.data.pokemon;
           
            console.log(pokemon);
            deferred.resolve(pokemon)
        })
        return deferred.promise;
    };







});