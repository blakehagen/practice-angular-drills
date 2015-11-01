angular.module('pokemonApp').controller('MainCtrl', function ($scope, mainService) {


    $scope.getPokemon = function () {
        mainService.getData().then(function (response) {
            $scope.pokemon = response;
        });
    }


    $scope.getPokemon();
    







});