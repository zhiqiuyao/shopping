angular.module('MyApp')
  .controller('ItemCreateCtrl', function($scope, Items) {
    $scope.submitItem = function () {
      console.log($scope.item);
      Items.push($scope.item);

      /*
      Item.createItem($scope.item)
        .then(function(response) {
          $scope.messages = {
            success: [response.data]
          };
        })
        .catch(function(response) {
          $scope.messages = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
        */
    }
  })
  .controller('ItemModifyCtrl', function($scope) {
    $scope.item = {
      name: "3",
      price: "30",
      content: "32"
    };

    $scope.submitItem = function () {
      console.log($scope.item);
    }
  })
;