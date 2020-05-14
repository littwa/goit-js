class CountdownTimer {
 constructor({ selector, targetDate }) {
  this.selector = selector;
  this.targetDate = targetDate.getTime();
  this.daysDisolay = document.querySelector('[data-value="days"]');
  this.hoursDisolay = document.querySelector('[data-value="hours"]');
  this.minsDisolay = document.querySelector('[data-value="mins"]');
  this.secsDisolay = document.querySelector('[data-value="secs"]');
  this.timeString = targetDate.toDateString();
  this.container = document.querySelector(this.selector);
  this.container.insertAdjacentText("afterbegin", `Until  ${this.timeString} :`);
 }

 timerCount() {
  this.curentDate = new Date().getTime();
  this.time = this.targetDate - this.curentDate;
  this.days = Math.floor(this.time / (1000 * 60 * 60 * 24));
  this.hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  this.mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
  this.secs = Math.floor((this.time % (1000 * 60)) / 1000);
  this.daysDisolay.textContent = this.days;
  this.hoursDisolay.textContent = this.hours;
  this.minsDisolay.textContent = this.mins;
  this.secsDisolay.textContent = this.secs;
 }

 startTimer() {
  this.timerCount();

  if (this.time <= 0) {
   document.querySelectorAll("span").forEach(el => (el.textContent = ""));
   this.container.textContent = `It's time! ${this.timeString}`;
   return;
  } else {
   setInterval(() => {
    this.timerCount();
   }, 1000);
  }
 }
}

let timer = new CountdownTimer({
 selector: "#timer-1",
 targetDate: new Date("Jul 17, 2020")
});

timer.startTimer();
