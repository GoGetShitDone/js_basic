const clock = document.querySelector("h2#clock");

function sayInterval() {
    console.log("Interval");
}

function sayTimeOut() {
    console.log("Time Out");
}


setInterval(sayInterval, 1000);
setTimeout(sayTimeOut, 1000);