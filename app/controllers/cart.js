angular.module('MyApp')
  .controller('CartCtrl', function($scope, Items) {
    $scope.items = Items.all();
  })
;