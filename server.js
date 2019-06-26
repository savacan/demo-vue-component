const express = require('express')
const path = require('path')

const app = express()

app.use('/', express.static(path.resolve(__dirname, './dist')))

/**
 * integrationLayerと同様の理由につき要変更
 */
app.get('/', (req, res) => {
  console.log('just get')
  res.status(200).sendFile(path.resolve(__dirname, './dist/index.html'))
})

app.listen('8003', () => {
  console.log('start vue component layer. open http://localhost:8003/')
})
