module.exports = function(config) {
    config.set({

        basePath: '../',

        frameworks: [ 'jasmine', 'systemjs' ],

        systemjs: {
            configFile: 'system.config.js',

            files: [
                'tests/helpers/WebComponentHelper.js',
                'node_modules/rock-solid/languageExtensions/**/*',
                'node_modules/rock-solid/index.js',
                'app/**/*'
            ],

            config: {
                paths: {
                    'WebComponentHelper': 'tests/helpers/WebComponentHelper.js',
                    'rock-solid': 'node_modules/rock-solid/index.js'
                }
            },

            // Specify the suffix used for test suite file names.  Defaults to .test.js, .spec.js, _test.js, and _spec.js
            testFileSuffix: 'UnitTest.js'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        //reporters: [ 'spec', 'junit', 'coverage' ],

        specReporter: {
            suppressPassed: true,
            suppressSkipped: true
        },

        port: 9876,

        colors: true,

        logLevel: config.LOG_DEBUG,

        autoWatch: true,

        browsers: [ 'Chrome' ],

        captureTimeout: 30000,

        browserNoActivityTimeout: 60000,

        singleRun: false
    });
};