
define(['backbone'], function(backbone) {

    var HelloWorldCollection = backbone.Collection.extend({
        url: "http://localhost:3000/helloValue",
        defaults: {
            "text":"Hello World Backbone!!"
        },
        read: function(){
            this.fetch()
        }
    });
    return HelloWorldCollection;
});
