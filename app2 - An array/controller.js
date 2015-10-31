angular.module('app2').controller('mainCtrl', function ($scope, mainService) {

    $scope.theData = mainService.getData();
    console.log($scope.theData);





});