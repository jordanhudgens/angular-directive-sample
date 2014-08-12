var app = angular.module('loginApp', []);

app.directive('optIn', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'logintemplate.html',
		replace: true
	}
})