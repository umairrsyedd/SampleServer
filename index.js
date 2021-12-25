var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())
app.use(express.json());
app.get('/haris', function (req, res) {
    res.send({ title: 'Haris Is Alive' })
});



app.listen(3250, function () {
    console.log('Example app listening on port 3111!');
})