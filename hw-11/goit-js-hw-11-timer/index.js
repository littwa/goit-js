class CountdownTimer {
 constructor({ selector, targetDate }) {
  this.selector = selector;
  this.targetDate = targetDate.getTime();
  this.daysDisolay = document.querySelector('[data-value="days"]');
  this.hoursDisolay = document.querySelector('[data-value="hours"]');
  this.minsDisolay = document.querySelector('[data-value="mins"]');
  this.secsDisolay = document.querySelector('[data-value="secs"]');
  document
   .querySelector(this.selector)
   .insertAdjacentText("afterbegin", `Until  ${targetDate.toDateString()} :`);
 }

 startTimer() {
  setInterval(() => {
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
  }, 1000);
 }
}

let timer = new CountdownTimer({
 selector: "#timer-1",
 targetDate: new Date("Jul 17, 2020")
});

timer.startTimer();
