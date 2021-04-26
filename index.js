const { request } = require('express')
const express = require('express')
const app = express()
const showdata = require('./showdata')

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('index', { showdata })
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1339, () => {
  console.log('Listening on 1339...')
})