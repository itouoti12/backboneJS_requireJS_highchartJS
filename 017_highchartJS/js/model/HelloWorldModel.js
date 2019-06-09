define(['backbone'], function(backbone) {

    var HelloWorldModel = backbone.Model.extend({
        defaults: {
            "text":"Hello World Backbone!!"
        }
    });

    return new HelloWorldModel();
});
