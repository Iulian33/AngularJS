(function () {
    'use strict';

    angular.module('myFirstApp',[] )

        .controller('newController', function ($scope) {
            $scope.name = 'Julian Hook'
            $scope.sayHello = function () {
                return 'Hello Julian';
            }
        })
})();