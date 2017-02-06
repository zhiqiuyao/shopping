angular.module('MyApp')
  .controller('ItemsCtrl', function($scope) {
    $scope.items = [
      {name: "aaaa", price: '10'},
      {name: "bbbb", price: '10'},
      {name: "cccc", price: '10'},
      {name: "dddd", price: '10'},
      {name: "eeee", price: '10'}
    ]
  })
;