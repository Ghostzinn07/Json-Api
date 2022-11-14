const express = require("express");
const app = express();
const path = require('path');
app.listen(3000, (res) => {
console.log(`📚 GitHub/Ghostzinn07`)
});
require('./src/rq.js')(app);
app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, './src/index.html'));
});
