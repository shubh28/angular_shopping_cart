var myApp = angular.module('myApp', []);

myApp.controller('CartCtrl', ['$scope', function ($scope) {
	$scope.products = [
    	{"name":"Laptop", "price":40000,"quantity":1},
    	{"name":"Mobile", "price":20000,"quantity":1},
    	{"name":"Head Phones", "price":5000,"quantity":1},
    	{"name":"Tablet", "price":30000,"quantity":1}
	];
	$scope.cart = [];
	$scope.updateCart = function(data){
		$scope.cart.push(data);
		//console.log(data);
		$scope.total = $scope.total + data.quantity*data.price;
	};
	$scope.removeCart = function(data){
		$scope.cart.pop(data);
		console.log($scope.cart);
		$scope.total = $scope.total - data.quantity*data.price;
	};
	$scope.increment = function(data){
		data.quantity += 1;
		$scope.total = $scope.total + data.price;
		console.log($scope.cart);
	}
	$scope.decrement = function(data){
		if(data.quantity == 1){
			$scope.cart.pop(data);
		}
		else
			data.quantity -= 1;
			$scope.total = $scope.total - data.price;
	}
	
	$scope.total = 0;

	for(var i=0;i<$scope.cart.length;i++){
		$scope.total = $scope.total+($scope.cart[i].price*$scope.cart[i].quantity);
	}
	//console.log(cart[0].price);

}]);
