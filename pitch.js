function rand() {
    return Math.random();
}
pitch = document.getElementById('pitch');
var time = new Date();
var layout = {

    autosize: false,

    width: 400,

    height: 300,

    // margin: {

    //     l: 50,

    //     r: 50,

    //     b: 100,

    //     t: 100,

    //     pad: 4

    // },
};
var data = [{
    x: [time], 
    y: [rand],
    mode: 'lines',
    line: {color: '#80CAF6'}
}]

Plotly.newPlot(pitch, data, layout);  

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
    
    Plotly.relayout(pitch, minuteView);
    Plotly.extendTraces(pitch, update, [0])
    
}, 1000);