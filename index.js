class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = new Date(targetDate);
    this.daysSpan = document.querySelector(
      `${selector} .value[data-value="days"]`
    );
    this.hoursSpan = document.querySelector(
      `${selector} .value[data-value="hours"]`
    );
    this.minutesSpan = document.querySelector(
      `${selector} .value[data-value="mins"]`
    );
    this.secondsSpan = document.querySelector(
      `${selector} .value[data-value="secs"]`
    );
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
  countDowm() {
    const currentTime = new Date();
    this.createSpanValue(currentTime);
  }

  showTime() {
    setInterval(() => this.countDowm(), 1000);
  }

  createSpanValue(currentTime) {
    const time = this.targetDate - currentTime;
    this.daysSpan.textContent = this.pad(
      Math.floor(time / (1000 * 60 * 60 * 24))
    );
    this.hoursSpan.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    this.minutesSpan.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    this.secondsSpan.textContent = this.pad(
      Math.floor((time % (1000 * 60)) / 1000)
    );
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: "2022,1,1",
});

document.body.onload = startTimer;

function startTimer() {
  timer.showTime();
}
