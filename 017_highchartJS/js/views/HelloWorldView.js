require(['backbone', 'model/HelloWorldModel', 'highcharts'], function(backbone, helloWorldModel, hi) {
    var HelloWorldView = backbone.View.extend({
        el: $('.hoge'),
        initialize: function() {
            this.render();
        },
        render: function() {
            this.graph();
            var text = helloWorldModel.get("text");
            $(this.el).html(_.template($('#hello-template').text())({ "text": text}));
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
          	         data: [1, 2]
                }]
            });
        }
    });
    new HelloWorldView();
});
