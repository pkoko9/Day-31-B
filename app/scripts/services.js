angular.module('basic.services', [])

.factory('RandomValue', function() {
	return function (array) {
		var randomSelect = Math.floor(Math.random() * array.length);
		return array[randomSelect];
	}

})

.factory('StudentNames', function() {
	var twoStudents = function(array) {

		var firstRandom = Math.floor(Math.random() * array.length);


		var secondRandom = Math.floor(Math.random() * array.length);


			while(firstRandom === secondRandom) {
				firstRandom++;
			}

		var studentOneArray = array[firstRandom];
		var studentTwoArray = array[secondRandom];
		
		return studentOneArray + ", " + studentTwoArray
	}
	return twoStudents;
})

.factory('Dash', function() {
	var noSpace = function(string) {

	var spaceFill = string.replace(/ /g, "-");
	return spaceFill
	}
	return noSpace;
})






// angular.module('basic.services', [])

// .factory('RandomValue', function(){
// 	return function (array) {
// 		var randomSelect=Math.floor(Math.random() * array.length);
// 		return array[randomSelect];
// 	}
// }

// .factory('StudentNames', function(){
// 	var twoStudents = function(array) {

// 		var firstRandom = Math.floor(Math.random() * array.length);


// 		var secondRandom = Math.floor(Math.random() * array.length);

// 			while(firstRandom === secondRandom) {
// 				firstRandom++;
// 			}

// 		var studentOneArray = array[firstRandom];
// 		var studentTwoArray = array[secondRandom];
		
// 		return studentOneArray + ", " + studentTwoArray
// 	}
// 	return twoStudents;
// })

// .factory('Dash', function() {
// 	var noSpace = function(dashSymbol) {

// 	var spaceFill = string.replace(/ /g, "-");
// 	return spaceFill
// 	}
// 	return noSpace;
// })


