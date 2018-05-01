var express = require('express')
var app = express()

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname+'/assignment.html');
})

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})
