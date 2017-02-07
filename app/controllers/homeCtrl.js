angular.module('MyApp')
  .controller('HomeCtrl', function($scope, Items) {
    $scope.items = Items.all();
  });