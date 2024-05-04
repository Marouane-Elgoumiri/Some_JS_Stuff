const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const millisecondsLabel = document.getElementById("milliseconds");

const startButton = document.getElementById('startBtn')
const stopButton = document.getElementById('StopBtn')
const PauseButton = document.getElementById('PauseBtn')
const ResetButton = document.getElementById('ResetBtn')

const laplist = document.getElementById("laplist");

///stopwatcch vars

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startButton.addEventListener('click', startTimer);
PauseButton.addEventListener('click', PauseTimer);
ResetButton.addEventListener('click', ResetTimer);
stopButton.addEventListener('click', stopTimer);

function startTimer() {
    interval = setInterval(updateTimer, 10);
    startButton.disabled = true;
}
function PauseTimer() {
    clearInterval(interval);
    PauseButton.disabled = true;
}
function ResetTimer() {
    clearInterval(interval);
    ResetTimerData();
    ResetTimerData.disabled= true;
    startButton.disabled = false;
}
function stopTimer() {
    addtoLapList();
    startButton.disabled = false;
}
function updateTimer() {
    milliseconds++;
    if (milliseconds == 100) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }
    displaytimer();
}

function displaytimer() {
    millisecondsLabel.textContent = padTime(milliseconds);
    secondsLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);
}

function padTime(time){
    return time.toString().padStart(2,'0');
}
function ResetTimerData() {
    milliseconds=0; minutes=0; seconds=0;
    displaytimer();
}

function addtoLapList() {
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    const listItem = document.createElement('li');
    listItem.innerHTML =`<span>Lap ${laplist.childElementCount +1 }: </span> ${lapTime}`;
    laplist.appendChild(listItem);

}