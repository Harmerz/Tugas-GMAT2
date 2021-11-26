let a;

function randyaw() {
    a = Number((Math.random() * 360 - 180).toFixed(2));
    return a;
}

yaw = document.getElementById('yaw');
var time = new Date();
    var layout = {

    autosize: false,
    width : 400,
    height : 300,

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
    y: [randyaw],
    mode: 'lines',
    line: {color: '#80CAF6'}
}]

Plotly.newPlot(yaw, data, layout);  

var cnt = 0;

var interval = setInterval(function() {
    
    var time = new Date();
    
    var update = {
    x:  [[time]],
    y: [[randyaw()]]
    }
    
    var olderTime = time.setMinutes(time.getMinutes() - 1);
    var futureTime = time.setMinutes(time.getMinutes() + 1);
    
    var minuteView = {
        xaxis: {
            type: 'date',
            range: [olderTime,futureTime]
        }
        };
    
    Plotly.relayout(yaw, minuteView);
    Plotly.extendTraces(yaw, update, [0])
    console.log(a);
}, 1000);