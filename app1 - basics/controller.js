angular.module('app1').controller('mainCtrl', function ($scope, mainService) {


    $scope.bananaInfo = mainService.returnData();

    $scope.submit = function () {
        mainService.addData($scope.someText);
        $scope.someText = '';
    }














});