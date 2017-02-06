module.exports = function(config) {
  config.set({
    files: [
      // Third-party vendor files
      'vendor/angular.js',
      'vendor/angular-route.js',
      'vendor/angular-mocks.js',
      'vendor/satellizer.js',
      // App entry point
      'app.js',
      // App services, controllers, directives, filters, etc.
      'controllers/*.js',
      'services/*.js',
      // Unit tests
      'test/unit/**/*.test.js'
    ],

    autoWatch: true,

    frameworks: ['mocha', 'chai'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-chai',
      'karma-coverage'
    ],

    reporters: ['progress', 'coverage'],

    preprocessors: {
      'app.js': ['coverage'],
      'controllers/*.js': ['coverage'],
      'services/*.js': ['coverage']
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'test',
      subdir: 'coverage'
    }
  });
};
