'use strict';

angular.module('tshirtStoreApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/busca1', {
        templateUrl: 'views/busca_01.html',
        controller: 'BuscaCtrl1'
      })
      .when('/blusa1/:tshirtId', {
        templateUrl: 'views/blusa_01.html',
        controller: 'BlusaCtrl1'
      })
      .when('/pagamento1', {
        templateUrl: 'views/pagamento_01.html',
        controller: 'PagamentoCtrl1'
      })
      .when('/fim1', {
        templateUrl: 'views/fim_01.html',
        controller: 'FimCtrl1'
      })

      .when('/busca2', {
        templateUrl: 'views/busca_02.html',
        controller: 'BuscaCtrl2'
      })
      .when('/blusa2/:tshirtId', {
        templateUrl: 'views/blusa_02.html',
        controller: 'BlusaCtrl2'
      })
      .when('/pagamento2', {
        templateUrl: 'views/pagamento_02.html',
        controller: 'PagamentoCtrl2'
      })
      .when('/fim2', {
        templateUrl: 'views/fim_02.html',
        controller: 'FimCtrl2'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
