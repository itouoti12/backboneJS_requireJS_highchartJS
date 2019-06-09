require(['backbone', 'model/HelloWorldModel'], function(backbone, helloWorldModel) {

    var model = new helloWorldModel();

    var HelloWorldView = backbone.View.extend({
        el: $('.hoge'),
        initialize: function() {
            model.read();
            this.listenToOnce( model, 'sync', this.render);
        },
        render: function() {
            var text = model.get("text");
            $(this.el).html(_.template($('#hello-template').text())({ "text": text }));
        }
    });
    new HelloWorldView();
});
