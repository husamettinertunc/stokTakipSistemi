(function () {
    'use strict';

    function UsersController($scope,$state,$http) {
        console.log("Users");
    }

    angular.module('app')
        .component('users', {
            templateUrl: 'app/users/users.template.html',
            controller: ['$scope','$state','$http', UsersController]
        })
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('users', {
                url: '/users',
                template: '<users></users>'
            });
        }]);
})();