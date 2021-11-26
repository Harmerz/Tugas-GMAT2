function rand() {
    return Math.random();
}
pressure = document.getElementById('pressure');
var time = new Date();
    var layout = {

    autosize: false,

    width: 580,

    height: 400,

//     margin: {

//         l: 50,

//         r: 50,

//         b: 100,

//         t: 100,

//         pad: 4

//     },
// paper_bgcolor: '#7f7f7f',

// plot_bgcolor: '#c7c7c7'

};
var data = [{
    x: [time], 
    y: [rand],
    mode: 'lines',
    line: {color: '#80CAF6'}
}]

Plotly.newPlot(pressure, data, layout);  

var cnt = 0;

var interval = setInterval(function() {
    
    var time = new Date();
    
    var update = {
    x:  [[time]],
    y: [[rand()]]
    }
    
    var olderTime = time.setMinutes(time.getMinutes() - 1);
    var futureTime = time.setMinutes(time.getMinutes() + 1);
    
    var minuteView = {
        xaxis: {
            type: 'date',
            range: [olderTime,futureTime]
        }
        };
    
    Plotly.relayout(pressure, minuteView);
    Plotly.extendTraces(pressure, update, [0])
    
}, 1000);