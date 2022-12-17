const express = require("express");
const app = express();
const path = require('path');
const log = console.log;
const config = ('./config.js');
app.listen(3000, (res) => {
console.log(`> [🟢] Api Online\n> [🛡] ${config.domain}`)
});
require('./src/rq.js')(app);
app.get("/", async (req, res) => {
  log('> [🛃] New Request')
  res.sendFile(path.join(__dirname, './src/index.html'));
});
