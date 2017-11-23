(function (){
'use strict';
	
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject = ['$scope'];	
	function LunchCheckController ($scope){
		$scope.checkDishes = function () {
			var sum = numDishes($scope.dishes);
			$scope.message = sendMessage(sum);
		};

	function numDishes(dishes) {
		var count = 0;
		if (dishes) {
		var array = dishes.split(",");
			for (var idx in array){
				if (array[i].trim().length !=0) {
				dishes ++;
				}
			}
	}
	return	count;
	}

	function sendMessage(sum){
		if (sum === 0){
			return 'Please enter data first';
		} 
		else if (sum <=3){
			return 'Enjoy!';
		}else{
			return 'Too much!';
		}
	}
	
})();