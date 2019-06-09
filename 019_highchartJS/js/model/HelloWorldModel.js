define(['backbone'], function(backbone) {

    var HelloWorldModel = backbone.Model.extend({
        url: "http://localhost:3000/hello",
        defaults: {
            "text":"Hello World Backbone!!"
        },
        read: function(){
            this.fetch()
        }
    });
    return HelloWorldModel;
});
