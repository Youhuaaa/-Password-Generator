const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./public/javascripts/generate_password.js')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('get from POST request', req.body)
  let password = generatePassword(req.body)
  res.render('index', { password: password })
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})