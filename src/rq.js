module.exports = (app) => {
const config = ('./config.js');
const log = console.log;
app.get('/api', async (req, res) => {
var texto = req.query.text;
if(!texto) return res.status(400).send(`400 ERROR | [ https://${config.domain}/api[?text=(argumento)] ]`);
log(`> [🔨] ${texto}`)
res.send({
"texto": texto,
"github": "GitHub/Ghostzinn07"
})
})
}
