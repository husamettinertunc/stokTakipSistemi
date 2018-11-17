(function () {
    'use strict';

    function NavbarController($scope,$translate,$state,$location,$modal) {
        
        $scope.navbarLoginControl=true;


    }
    angular.module('app')
        .component('navbar', {
            templateUrl: 'app/components/navbar/navbar.template.html',
            controller: ['$scope','$translate','$state','$location','$modal', NavbarController]
        });
})();