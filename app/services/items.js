angular.module('MyApp')
  .factory('Items', function() {
    var allItems = [
      {name: "aaaa", price: '10', content: '这是一条商品信息'},
      {name: "bbbb", price: '20', content: '这是一条商品信息'},
      {name: "cccc", price: '30', content: '这是一条商品信息'},
      {name: "dddd", price: '40', content: '这是一条商品信息'},
      {name: "eeee", price: '50', content: '这是一条商品信息'}
    ];
    return {
      all: function () {
        return  allItems;
      },
      push: function (data) {
        return allItems.push(data);
      }
    };
  });