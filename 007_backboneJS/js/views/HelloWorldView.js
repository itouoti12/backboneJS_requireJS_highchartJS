require(['backbone'], function(backbone) {
    //index.html上のエレメント内に挿入する
    var HelloWorldView = backbone.View.extend({
        el: $('.hoge'),

    })

    var helloWorldView = new HelloWorldView();
    $(helloWorldView.el).html('<h2>Hello world Backbone!!</h2>');


});
