require(['backbone'], function(backbone) {
    //viewとして適切な分解をし、外部定義されたtemplateを呼び出す。

    var HelloWorldView = backbone.View.extend({
        el: $('.hoge'),
        initialize: function() {
            this.render();
        },
        render: function() {
            var template = $('#hello-template').text();
            var compiled = _.template(template);
            var text = { "text": "Hello World Backbone!!"};
            $(this.el).html(compiled(text));
        }
    });
    new HelloWorldView();
});
