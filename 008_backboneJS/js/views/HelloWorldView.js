require(['backbone'], function(backbone) {
    //index.html上のエレメントに新たにタグを埋め込む
    var HelloWorldView = backbone.View.extend({
        tagName:"div",
        className:"puge"
    })

    var helloWorldView = new HelloWorldView();
    $('.hoge').append(helloWorldView.el);//.html('<strong>Hello world Backbone!!</strong>');
    $('.puge').html('<h2>Hello world Backbone!!</h2>');
});
