const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.status(200).send(`📚 GitHub/Ghostzinn07`);
    });
app.listen(3000, () => console.log("⬆️"));

require('./src/rq.js')(app);
