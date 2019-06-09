require(['highcharts'],function(hi){
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
});
