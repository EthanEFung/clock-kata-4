const Clock = require("../client/js/models");
const ClockUI = require("../client/js/view.js");

// beforEach(test => {
//   const testModel = new Clock();
//   const testUI = new ClockUI();
// });

test("clock model should have a execute processes fn", () => {
  const testModel = new Clock();
  expect(testModel).toHaveProperty("executeProcesses");
});
