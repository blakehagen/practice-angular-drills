angular.module('app4').service('mainService', function ($http, $q) {

    this.getPlanets = function () {
        var promisesArray = [];
        var temp = [];
        var planets = [];
        var baseUrl = 'http://swapi.co/api/planets/'

        var deferred = $q.defer();

        promisesArray.push($http({ method: 'GET', url: baseUrl }));
        promisesArray.push($http({ method: 'GET', url: baseUrl + '?page=2' }));
        promisesArray.push($http({ method: 'GET', url: baseUrl + '?page=3' }));
        promisesArray.push($http({ method: 'GET', url: baseUrl + '?page=4' }));
        promisesArray.push($http({ method: 'GET', url: baseUrl + '?page=5' }));
        promisesArray.push($http({ method: 'GET', url: baseUrl + '?page=6' }));
        promisesArray.push($http({ method: 'GET', url: baseUrl + '?page=7' }));

        $q.all(promisesArray).then(function (response) {
            for (var i = 0; i < response.length; i++) {
                temp.push(response[i].data.results);
            }

            var flatData = temp.reduce(function (a, b) {
                return a.concat(b);
            });

            console.log(flatData);
            for (var i = 0; i < flatData.length; i++) {
                planets.push({
                    PlanetName: flatData[i].name,
                    Climate: flatData[i].climate,
                    Terrain: flatData[i].terrain
                })
            }
            deferred.resolve(planets)
        })
        return deferred.promise;
    }


});