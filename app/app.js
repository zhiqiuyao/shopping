angular.module('MyApp', ['ngRoute', 'satellizer'])
  .config(function($routeProvider, $locationProvider, $authProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      })
      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'SignupCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .when('/account', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/forgot', {
        templateUrl: 'partials/forgot.html',
        controller: 'ForgotCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .when('/reset/:token', {
        templateUrl: 'partials/reset.html',
        controller: 'ResetCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .when('/items', {
        templateUrl: 'partials/items.html',
        controller: 'ItemsCtrl'
      })
      .when('/item/create', {
        templateUrl: 'partials/item.html',
        controller: 'ItemCreateCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/item/:id', {
        templateUrl: 'partials/item.html',
        controller: 'ItemModifyCtrl'
      })
      .when('/wishlist', {
        templateUrl: 'partials/wishList.html',
        controller: 'WishListCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/orderlist', {
        templateUrl: 'partials/orderList.html',
        controller: 'OrderListCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/cart', {
        templateUrl: 'partials/cart.html',
        controller: 'CartCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/order/:id', {
        templateUrl: 'partials/order.html',
        controller: 'OrderCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .otherwise({
        templateUrl: 'partials/404.html'
      });

    $authProvider.loginUrl = '/login';
    $authProvider.signupUrl = '/signup';

    function skipIfAuthenticated($location, $auth) {
      if ($auth.isAuthenticated()) {
        $location.path('/');
      }
    }

    function loginRequired($location, $auth) {
      if (!$auth.isAuthenticated()) {
        $location.path('/login');
      }
    }
  })
  .run(function($rootScope, $window) {
    if ($window.localStorage.user) {
      $rootScope.currentUser = JSON.parse($window.localStorage.user);
    }
  });
