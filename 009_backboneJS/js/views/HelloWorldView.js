require(['backbone'], function(backbone) {
    //viewとして適切な分解をする

    var HelloWorldView = backbone.View.extend({
        el: $('.hoge'),
        initialize: function() {
            this.render();
        },
        render: function() {
            $(this.el).html('<h2>Hello world Backbone!!</h2>');
        }
    });
    new HelloWorldView();
});
