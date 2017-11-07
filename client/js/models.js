/**
 * should have a clock model
 * should be able to keep track of now
 * should change every second
 * should be able to execute a set of processes or callbacks
 */

class Clock {
  constructor() {
    this.processes = [];
    let second = 1000; //1000 milliseconds
    window.setInterval(this.executeProcesses.bind(this), second);
  }
  addProcesses(...process) {
    this.processes.push(...process);
  }
  executeProcesses() {
    const now = new Date();
    this.processes.forEach(process => process(now));
  }
}
