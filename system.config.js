System.config({
    'transpiler': 'babel',
    'paths': {
        'homePage': 'app/components/homepage/homePage.js',
        'babel': 'node_modules/babel-core/browser.js',
        'router': 'app/components/router/router.js',
        'app': 'app/app.js',
        'injector': 'app/components/injector/injector.js',
        'binder': 'app/components/binder/binder.js',
        'baseElement': 'app/components/baseElement/baseElement.js'
    },
    meta: {
        // meaning [baseURL]/vendor/angular.js when no other rules are present
        // path is normalized using map and paths configuration
        'injector': {
            format: 'global', // load this module as a global
            exports: 'injector' // the global property to take as the module value
        }
    }
});