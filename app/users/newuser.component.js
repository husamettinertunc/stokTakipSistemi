(function () {
    'use strict';

    function NewUserController($scope,$state,$http) {
        console.log("New Users");
    }

    angular.module('app')
        .component('newuser', {
            templateUrl: 'app/users/newuser.template.html',
            controller: ['$scope','$state','$http', NewUserController]
        })
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('newuser', {
                url: '/newuser',
                template: '<newuser></newuser>'
            });
        }]);
})();