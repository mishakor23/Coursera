(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.lunch = "";
  $scope.message;

  $scope.checkLunch = function() {
    if($scope.lunch.split(',')[0] === "") {
      $scope.message = "Please enter data first";
    } else if ($scope.lunch.split(',').length <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  };
}

})();
