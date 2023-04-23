let minElm = document.querySelector(".min");
let secElm = document.querySelector(".sec");
let msecElm = document.querySelector(".msec");
let min = 0;
let sec = 0;
let msec = 0;
let interval;
const start = () => {
    interval = setInterval(() => {
        msec++;
        if (msec >= 100) {
            sec++;
            msec = 0;
        }
        if (sec >= 60) {
            min++;
            sec = 0;
        }
        msecElm.innerText = `:${msec}`;
        secElm.innerText = `:${sec}`;
        minElm.innerText = min;
    }, 10);
    document.querySelector(".start_btn").disabled = true;
}

const pause = () => {
    clearInterval(interval);
    document.querySelector(".start_btn").disabled = false;

}

const reset = () => {
    min = 0;
    sec = 0;
    msec = 0;
    msecElm.innerText = `:${msec}`;
    secElm.innerText = `:${sec}`;
    minElm.innerText = min;
}
