require.config({
    packages: [{
        name: 'highcharts',
        main: 'highcharts'
    }],
    baseUrl: "js",
    paths: {
        "backbone" : "lib/backbone",
        "jquery" : "lib/jquery",
        "underscore" : "lib/underscore",
        //'highcharts': 'https://code.highcharts.com'
        "highcharts": "lib"
    },
    shim: {
        'backbone' : {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});
