angular.module('MyApp')
  .controller('ItemsCtrl', function($scope, Items) {
    $scope.items = Items.all();
  })
;