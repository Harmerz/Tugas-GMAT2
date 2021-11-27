let b;
function randroll() {
    b = (Math.random() * 360 - 180).toFixed(2);
    return b;
}
roll = document.getElementById('roll');
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
let isianroll;
var data = [{
    x: [time], 
    y: [randroll],
    mode: 'lines',
    line: {color: '#80CAF6'}
}]

Plotly.newPlot(roll, data, layout);  

var cnt = 0;

var interval = setInterval(function() {
    
    var time = new Date();
    isianroll = randroll();
    var update = {
    x:  [[time]],
    y: [[isianroll]]
    }
    
    var olderTime = time.setMinutes(time.getMinutes() - 1);
    var futureTime = time.setMinutes(time.getMinutes() + 1);
    
    var minuteView = {
        xaxis: {
            type: 'date',
            range: [olderTime,futureTime]
        }
        };
    
    Plotly.relayout(roll, minuteView);
    Plotly.extendTraces(roll, update, [0]);
    document.getElementById("angkaroll").innerHTML = isianroll;
    
}, 1000);