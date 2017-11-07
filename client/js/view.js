class ClockUI {
  constructor() {
    this.clock = new Clock();
    this.clock.addProcesses(
      this.logTime,
      this.renderHours,
      this.renderMinutes,
      this.renderSeconds
    );
  }
  logTime(time) {
    console.log(time);
  }
  renderHours(time) {
    document.getElementById("hours").textContent = time.getHours() + ": ";
  }
  renderMinutes(time) {
    document.getElementById("minutes").textContent = time.getMinutes();
  }
  renderSeconds(time) {
    document.getElementById("seconds").textContent = time.getSeconds();
  }
}

window.onload = function() {
  new ClockUI();
};
