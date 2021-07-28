class CountdownTimer {
  constructor({ selector, targetDate } = {}) {
    this.timeId = null;
    this.selector = selector;
    this.targetDate = targetDate;
  }

  createTime() {
    const currentTime = Date.now();
    const diff = this.targetDate - currentTime;
    const timeForCount = this.receiveTime(diff);    
    this.clockFace(timeForCount);

    if (difference < 0) {
      clearInterval(this.timeId);
      document.querySelector("#timer-1").textContent =
        "Happy New Year";
      return;
    }
  }

  startCounting() {
    this.createTime();

    this.timeId = setInterval(() => {
      this.createTime();
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  clockFace({ days, hours, mins, secs }) {
   // refs.frontSide.textContent = `${days}:${hours}:${mins}:${secs}`;
    document.querySelector('[data-value="days"]').textContent = `${days}`;
    document.querySelector('[data-value="hours"]').textContent = `${hours}`;
    document.querySelector('[data-value="mins"]').textContent = `${mins}`;
    document.querySelector('[data-value="secs"]').textContent = `${secs}`;
  }

  receiveTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
}

const forTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 1, 2022"),
});

forTimer.startCounting();
