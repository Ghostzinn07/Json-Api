module.exports = (app) => {
app.get('/api', async (req, res) => {
var texto = req.query.text;
if(!texto) return res.status(400).send("❓ Texto?");
res.send({
"texto": texto,
"github": "GitHub/Ghostzinn07"
})
})
