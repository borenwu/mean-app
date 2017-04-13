/**
 * Created by Administrator on 2017/4/11.
 */

const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')

const models = require('./server/models')
const api = require('./server/routes/api')
// const personApi = require('./server/routes/personApi')
// const petApi = require('./server/routes/petApi')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'dist')))

app.use('/api', api)
// app.use('/person',personApi)
// app.use('/pet', petApi)


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

const port = process.env.PORT || '3000'
app.set('port', port)

const server = http.createServer(app)

models.sequelize.sync().done(() => {
  server.listen(port, () => {
    console.log(`API running on localhost: ${port}`)
  })
})

