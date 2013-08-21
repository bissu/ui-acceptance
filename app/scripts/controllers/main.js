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
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	})

	// Main Controller for search template
	.controller('BuscaCtrl1', function ($scope, $http) {

		$http.get('tshirts/tshirts.json').success(function(data) {
			$scope.tshirts = data;
		});

	})

	// TShirt page Controller
	.controller('BlusaCtrl1', function ($scope, $http, $routeParams, $location, globalCart) {

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

		$http.get('tshirts/' + globalCart.getProduct() + '.json').success(function(data) {
			$scope.tshirt = data;
		});

		$scope.getPayment = function() {
			if(globalCart.getTemptives() == 0) {
				$window.alert('Quantidade de estoque insuficiente. Por favor, compre apenas uma camisa.');
				globalCart.setTemptives(1);
				$location.path( "/blusa1/" + globalCart.getProduct());
			} else {
				$location.path( "/fim1");
			}
		}

	})

	.controller('FimCtrl1', function ($scope) {
		// Hehe
	})

	// Main Controller for search template
	.controller('BuscaCtrl2', function ($scope, $http) {

		$http.get('tshirts/tshirts.json').success(function(data) {
			$scope.tshirts = data;
		});

	})

	// TShirt page Controller
	.controller('BlusaCtrl2', function ($scope, $http, $routeParams, $location, globalCart) {

		$http.get('tshirts/' + $routeParams.tshirtId + '.json').success(function(data) {
			$scope.tshirt = data;
		});

		$scope.getCart = function(cart) {
			globalCart.setProduct($routeParams.tshirtId);
			globalCart.setQuantity(cart.quantity);
			globalCart.setSize(cart.size);

			$location.path( "/pagamento2" );
		}

	})

	// Gateway
	.controller('PagamentoCtrl2', function ($scope, $http, $location, $window, globalCart) {

		$http.get('tshirts/' + globalCart.getProduct() + '.json').success(function(data) {
			$scope.tshirt = data;
		});

		$scope.getPayment = function() {
			if(globalCart.getTemptives() == 0) {
				$window.alert('Quantidade de estoque insuficiente. Por favor, compre apenas uma camisa.');
				globalCart.setTemptives(1);
				$location.path( "/blusa2/" + globalCart.getProduct());
			} else {
				$location.path( "/fim2");
			}
		}

	})

	.controller('FimCtrl2', function ($scope) {
		// Hehe
	});