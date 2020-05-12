const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
app.use(bodyParser.json())
app.use(express.static('public', {
  setHeaders: function (res) {
    res.set({
      'Access-Control-Allow-Origin': '*/*',
      'x-timestamp': Date.now(),
    })
  }
}))
function contentTypeOption(input = 'js') {
  const mappingObj = {
    js: 'application/javascript',
    html: 'text/html'
  }
  return {
    root: path.join(__dirname, 'public'),
    headers: { 'Content-Type': mappingObj[input] }
  }
}
app.get('*', (req, res) => {
  res.sendFile('index.html', contentTypeOption('html'))
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Listening at ' + PORT )
  console.log('Connected at ' + `http://localhost:${PORT}`)
})