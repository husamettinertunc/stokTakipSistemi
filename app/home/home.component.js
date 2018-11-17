(function () {
    'use strict';

    function HomeController($scope, $http, $parse,$state,$translate) {

        
        $translate.use("tr");
        
        if(!localStorage.getItem('token'))
            $state.go("login");  
        
        /*var todayDate = moment().format('YYYY-MM-DD');
        console.log(todayDate);*/

        
    }
    angular.module('app')
        .component('home', {
            templateUrl: 'app/home/home.template.html',
            controller: ['$scope', '$http', '$parse','$state','$translate', HomeController]
        })
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                template: '<home></home>'
            });
        }]);
})();
