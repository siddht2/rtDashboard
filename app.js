// create angular app
	var rApp = angular.module('registerApp', []);
	// create angular controller
	rApp.controller('registerCtrl', function($scope) {

		// function to submit the form after all validation has occurred			
		$scope.submitForm = function() {

			// check to make sure the form is completely valid
			if ($scope.userForm.$valid) {
				alert('our form is amazing');
			}

		};
			});

var app = angular.module('loginApp', []);



app.controller('loginCtrl', ['$scope','$location', function($scope,$location) {
      // function to submit the form after all validation has occurred      
    $scope.submitForm = function() {

      // check to make sure the form is completely valid
     if ($scope.loginForm.$valid) {
       alert('our form is amazing');
var path = "/hello.html";
 $window.location.href ='http://www.google.com';
  // $location.absUrl() = 'http://www.google.com';

      } 
    };
}]);


   angular.element(document).ready(function() {
      angular.bootstrap(document.getElementById('registerApp'), ['registerApp']);
    }); 



