const express = require("express");
const app = express();
const path = require('path');
const log = console.log;
app.listen(3000, (res) => {
console.log(`> [🟢] Api Online`)
});
require('./src/rq.js')(app);
app.get("/", async (req, res) => {
  log('> [🛃] New Request')
  res.sendFile(path.join(__dirname, './src/index.html'));
});
