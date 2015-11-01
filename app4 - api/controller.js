angular.module('app4').controller('mainCtrl', function ($scope, mainService) {


    $scope.getData = function(){
         mainService.getPlanets().then(function(response){
             $scope.planets = response;

         }) 
    };
    
    $scope.getData();



});