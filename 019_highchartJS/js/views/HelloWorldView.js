require(['backbone', 'model/HelloWorldModel', 'collection/HelloWorldCollection', 'highcharts'],
function(backbone, helloWorldModel, helloWorldCollection, hi) {

    var model = new helloWorldModel();
    var collection = new helloWorldCollection();

    var HelloWorldView = backbone.View.extend({
        el: $('.hoge'),
        initialize: function() {
            model.read();
            this.listenToOnce( model, 'sync', this.render);
            collection.read();
            this.listenToOnce( collection, 'sync', this.graph);
        },
        render: function() {
            $(this.el).html(_.template($('#hello-template').text())({ "text": model.get("text") }));
        },
        graph: function() {
            hi.chart('container', {
                chart: {
                    renderTo: 'chart',
                    type: 'bar'
                },
                title: {
                    text: 'Hello Highcharts'
                },
                xAxis: {
                    categories: ['Hello', 'World']
                },
                yAxis: {
                    title: 'Value'
                },
                series: [{
                    name: 'Highcharts Intro',
          	         data: [collection.at(0).get('num'), collection.at(1).get('num')]
                }]
            });
        }
    });
    new HelloWorldView();
});
