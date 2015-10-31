angular.module('app1').service('mainService', function () {

    var arr = [
        'banana 1',
        'banana 2',
        'banana 3',
        'chimpanzee'
    ];





    this.returnData = function () {
        // for (var i = 1; i <= 100; i++) {
        //     arr.push("banana " + i);
        // }
        return arr;
    }
    
    
    this.addData = function(data){
        arr.push(data);
    }









});


