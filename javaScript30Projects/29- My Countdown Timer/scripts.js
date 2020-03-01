let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const timerButtons = document.querySelectorAll('[data-time]');

timerButtons.forEach(timerButton => timerButton.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
    /*This is to prevent the default action of submitting the form*/
    e.preventDefault();
    const minutes = this.minutes.value;
    // Reset the form value
    this.reset();
    const seconds = minutes * 60;
    timer(seconds);
})

function startTimer() {
   // console.log(this.dataset.time);
    timer(parseInt(this.dataset.time));
}

function timer(seconds) {
    clearInterval(countDown);
    const now = Date.now();
    //Now is in ms- convert  seconds to ms
    const then = now + seconds * 1000;
    // console.log({ now, then });
    displayTimeLeft(seconds);
    displayEndTime(then);


    countDown= setInterval(() => {
        /*We cannot use now here, because that would only be the time then. We need
         * to consider the exact current time. Hence we use Date.now().
         * Dividing the answer by 1000 to convert it to seconds from ms.
         * Rounding up the answer to show the number of seconds as a whole number*/
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countDown);
            return;
        }
        displayTimeLeft(secondsLeft);
        //console.log(secondsLeft);
    }, 1000);
} 

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    // To display the seconds less than 10 as 0 +seconds
    const displayTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    timerDisplay.textContent = displayTime;
    //To display the timer in the document's title itself
    document.title = displayTime;
    console.log({ minutes, remainingSeconds});
}

function displayEndTime(timeStamp) {
    const end = new Date(timeStamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    
    /*To display the hours as 12-hour clock instead of 24 hour clock 
     * and minutes as 0 + minutes*/
    endTime.textContent = `Be back in ${hour > 12 ? hour-12 : hour}:${minutes < 10?'0':''}${minutes}`;

}




