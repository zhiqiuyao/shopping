angular.module('MyApp')
  .controller('OrderCtrl', function($scope, Items) {
    $scope.items = Items.all();
  })
;