const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./public/javascripts/generate_password.js')
const app = express()
const PORT = process.env.PORT || 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  let password = generatePassword(req.body)
  res.render('index', { password: password, response: req.body })
})

app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})
