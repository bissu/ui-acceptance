'use strict';

angular.module('tshirtStoreApp')
	.service('globalCart', function () {
        var quantity = 0;
        var size = null;
        var product_id = null;
        var temptives = 0;

        return {
            getQuantity: function () {
                return quantity;
            },
            setQuantity: function(value) {
                quantity = value;
            },
            getSize: function () {
                return size;
            },
            setSize: function(value) {
                size = value;
            },
            getProduct: function () {
                return product_id;
            },
            setProduct: function(value) {
                product_id = value;
            },
            getTemptives: function () {
                return temptives;
            },
            setTemptives: function(value) {
                temptives = value;
            }
        };
    })

	.controller('MainCtrl', function ($scope) {

		var role = Math.floor(Math.random() * 2) + 1;
		if(role == 1) {
			console.log(role);
			$scope.testeUrl = '#/busca1';
		}
		else {
			console.log(role);
			$scope.testeUrl = '#/busca2';
		}
	})

	// Main Controller for search template
	.controller('BuscaCtrl1', function ($scope, $http) {

		_kmq.push(['record', 'Viewed Busca1']);

		$http.get('tshirts/tshirts.json').success(function(data) {
			$scope.tshirts = data;
		});

	})

	// TShirt page Controller
	.controller('BlusaCtrl1', function ($scope, $http, $routeParams, $location, globalCart) {

		_kmq.push(['record', 'Viewed Blusa1']);

		$http.get('tshirts/' + $routeParams.tshirtId + '.json').success(function(data) {
			$scope.tshirt = data;
		});

		$scope.getCart = function(cart) {
			globalCart.setProduct($routeParams.tshirtId);
			globalCart.setQuantity(cart.quantity);
			globalCart.setSize(cart.size);

			$location.path( "/pagamento1" );
		}

	})

	// Gateway
	.controller('PagamentoCtrl1', function ($scope, $http, $location, $window, globalCart) {

		_kmq.push(['record', 'Viewed Pagamento1']);

		$http.get('tshirts/' + globalCart.getProduct() + '.json').success(function(data) {
			$scope.tshirt = data;
		});

		$scope.getPayment = function() {

			_kmq.push(['record', 'Clicked Pagamento1 Pagamento']);

			if(globalCart.getTemptives() == 0) {
				$window.alert('Quantidade de estoque insuficiente. Por favor, compre apenas uma camisa.');
				_kmq.push(['record', 'Clicked Pagamento1 Pagar', {'temptives':'1'}]);
				globalCart.setTemptives(1);
			} else {
				_kmq.push(['record', 'Clicked Pagamento1 Pagar', {'temptives':'2'}]);
				$location.path( "/fim/1");
			}
		}

	})

	.controller('FimCtrl', function ($scope, $routeParams) {
		// Hehe
		_kmq.push(['record', 'Viewed Fim ' +  $routeParams.version]);

		$scope.version = $routeParams.version;
	})

	// Main Controller for search template
	.controller('BuscaCtrl2', function ($scope, $http) {

		_kmq.push(['record', 'Viewed Busca2']);

		$http.get('tshirts/tshirts.json').success(function(data) {
			$scope.tshirts = data;
		});

	})

	// TShirt page Controller
	.controller('BlusaCtrl2', function ($scope, $http, $routeParams, $location, globalCart) {

		_kmq.push(['record', 'Viewed Blusa2']);

		$http.get('tshirts/' + $routeParams.tshirtId + '.json').success(function(data) {
			$scope.tshirt = data;
		});

		$scope.getCart = function(cart) {
			globalCart.setProduct($routeParams.tshirtId);
			globalCart.setQuantity(cart.quantity);
			globalCart.setSize(cart.size);

			_kmq.push(['record', 'Clicked Blusa2 Comprar']);

			$location.path( "/pagamento2" );
		}

	})

	// Gateway
	.controller('PagamentoCtrl2', function ($scope, $http, $location, $window, globalCart) {

		_kmq.push(['record', 'Viewed Pagamento2']);

		$http.get('tshirts/' + globalCart.getProduct() + '.json').success(function(data) {
			$scope.tshirt = data;
		});

		$scope.getPayment = function() {

			_kmq.push(['record', 'Clicked Pagamento2 Pagamento']);

			if(globalCart.getTemptives() == 0) {
				$window.alert('Quantidade de estoque insuficiente. Por favor, compre apenas uma camisa.');
				globalCart.setTemptives(1);
				_kmq.push(['record', 'Clicked Pagamento2 Pagar', {'temptives':'1'}]);
			} else {
				_kmq.push(['record', 'Clicked Pagamento2 Pagar', {'temptives':'2'}]);
				$location.path( "/fim/2");
			}
		}

	})