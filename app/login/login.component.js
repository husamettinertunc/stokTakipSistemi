(function () {
    'use strict';

    function LoginController($scope,$state,$http) {
        if(localStorage.getItem('token'))
            localStorage.clear();
        $scope.login = function () {
            var user = {
                username: $scope.username,
                password: $scope.password
            };
            debugger;
            $http({
                method: "post",
                url: "http://127.0.0.1:4000/login",
                headers: {'Content-Type': 'application/json'},             
                data: user,
                timeout: 4000
            }).then(function (response) {
                debugger;
                if (response.data.status) {
                    localStorage.setItem('token', response.data.token);
                    $state.go('home');
                } else {
                    alert(response.data.message);
                }
            }, function errorCallback(response) {
                debugger;
                alert("Veri Tabanı Hatası !");
            });
        }
    }

    angular.module('app')
        .component('login', {
            templateUrl: 'app/login/login.template.html',
            controller: ['$scope','$state','$http', LoginController]
        })
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('login', {
                url: '/login',
                template: '<login></login>'
            });
        }]);
})();