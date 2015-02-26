angular.module('basic.controllers', ['basic.services'])
.controller('BasicCtrl', function($scope, RandomValue, StudentNames, Dash) {

	$scope.myValues = function() {
		$scope.values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
		console.log(RandomValue($scope.values));
	}
	$scope.myValues();

	$scope.pairs = function() {
		$scope.students = [ 'Steve', 'Barbara', 'James', 'Anna', 'Jason', 'Stephy', 'Sophia', 'Ava'];
			console.log(StudentNames($scope.students));
	}

	$scope.pairs();


	$scope.useDash = function() {
		$scope.characters = 'DON\'T BE A ZIPPERHEAD!';
			console.log(Dash($scope.characters));
	}

	$scope.useDash();

});