const targettimeEl = document.querySelector(".target");
const daysEl = document.querySelector(".day");
const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");

let teraz = new Date();
let zaminute = new Date(1000*21);
let wtedy = new Date(teraz.getTime() + zaminute.getTime());

function roznicaczasu() {

    teraz = new Date();
    let roznica = new Date(wtedy - teraz);

    let miliseconds = Math.floor(roznica.getTime());
    let seconds = Math.floor(miliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    let hoursleft = hours - days * 24;
    let minutesleft = minutes - days * 24 * 60 - hoursleft * 60;
    let secondsleft = seconds - days * 24 * 60 * 60 - hoursleft * 60 * 60 - minutesleft * 60;

    return {
        rDays: days,
        rHours: hoursleft,
        rMinutes: minutesleft,
        rSeconds: secondsleft
    }

}

targettimeEl.innerHTML = "Counting 20 seconds";

let showTimer = setInterval(function () {
    if (Math.floor(wtedy - teraz)/1000 < 1) {
        clearInterval(showTimer); targettimeEl.innerHTML = "PROMOTION BEGUN!";
    } else {
        daysEl.innerHTML = roznicaczasu().rDays;
        hourEl.innerHTML = roznicaczasu().rHours;
        minEl.innerHTML = roznicaczasu().rMinutes;
        secEl.innerHTML = roznicaczasu().rSeconds;
    }
}, 1000);

