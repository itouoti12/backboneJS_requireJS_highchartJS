require(['backbone'], function(backbone) {
    //viewとして適切な分解をする

    var HelloWorldView = backbone.View.extend({
        el: $('.hoge'),
        initialize: function() {
            this.render();
        },
        render: function() {
            $(this.el).html(_.template($('#hello-template')
            .text())({ "text": "Hello World Backbone!!"}));
        }
    });
    new HelloWorldView();
});
