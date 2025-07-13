const time = document.getElementById("date");

setInterval(function(){
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString()
}, 1000)