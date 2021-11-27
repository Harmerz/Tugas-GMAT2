

var interval = setInterval(function() {
    
    let statusbattery = Math.random() <= 0.5 ? 'ON' : 'OFF';
    document.getElementById("batterai").innerHTML = statusbattery
}, 1000);
    