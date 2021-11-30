let timeStamp = document.getElementById('timestamp');
let localDate = document.getElementById('localDate');
let localTime = document.getElementById('localTime');
let diff = document.getElementById('diff');
let today = new Date();
let defaultDate = new Date();

timeStamp.innerHTML = Date.now();

localDate.innerHTML = Date();
localTime.innerHTML = defaultDate.toLocaleTimeString();

localDate.innerHTML = defaultDate.toLocaleTimeString();

newDate = today;
today.setDate(defaultDate.getDate()+2);
today.setHours(defaultDate.setHours()+6);
console.log(today);

if (defaultDate > today) {
    let intervall = today.getTime() - defaultDate.getTime();

    let day = Math.floor(intervall / 1000 /60 /60 /24);
    diff.innerHTML = day + "jours de différences et <br>";

    let hours = Math.floor(intervall / 1000 /60 /60 );
    diff.innerHTML = day + "heure de différences <br>";

}


