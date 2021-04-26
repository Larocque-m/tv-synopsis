const express = require('express')
const showdata = require('./showdata')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

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
