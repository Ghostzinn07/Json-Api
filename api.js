const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.status(200).send(`📚 GitHub/Ghostzinn07`);
    });
app.listen(PORT, () => console.log("⬆️"));
