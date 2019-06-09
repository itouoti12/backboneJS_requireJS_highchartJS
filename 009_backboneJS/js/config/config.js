require.config({
    baseUrl: "js",
    paths: {
        "backbone" : "lib/backbone",
        "jquery" : "lib/jquery",
        "underscore" : "lib/underscore"
    },
    shim: {
        'backbone' : {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});
