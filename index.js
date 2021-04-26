const express = require('express')
const app = express()
const showdata = require('./showdata')

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index', { showdata })
})

app.get('/singleSeason/:id', (request, response) => {
  const { id } = request.params
  const season = showdata.seasons.find((season) => season.number === parseInt(id))

  return response.render('singleSeason', { season })
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1339, () => {
  console.log('Listening on 1339...')
})