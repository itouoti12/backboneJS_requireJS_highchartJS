require(['backbone', 'model/HelloWorldModel'], function(backbone, helloWorldModel) {
    //viewとして適切な分解をする

    var HelloWorldView = backbone.View.extend({
        el: $('.hoge'),
        initialize: function() {
            this.render();
        },
        render: function() {
            var text = helloWorldModel.get("text");
            $(this.el).html(_.template($('#hello-template').text())({ "text": text}));
        }
    });
    new HelloWorldView();
});
