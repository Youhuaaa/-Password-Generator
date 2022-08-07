const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(`<h1>密碼產生器專案</h1>`)
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})