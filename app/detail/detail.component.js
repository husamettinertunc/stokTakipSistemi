(function () {
    'use strict';

    function DetailController($scope,$http) {
        
    }

    angular.module('app')
        .component('detail', {
            templateUrl: 'app/detail/detail.template.html',
            controller: ['$scope','$http', DetailController]
        })
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('detail', {
                url: '/detail?tourId?adultCount?childCount?infantCount',
                template: '<detail></detail>'
            });
        }]);
})();