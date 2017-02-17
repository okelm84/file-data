var express = require('express');
var multer  = require('multer');
var app = express();
var upload = multer();
app.set('port', (process.env.PORT || 8080));



app.use('/', express.static('form'));

app.post('/upload', upload.single('filetocheck'), function (req, res, next) {
  res.send({"size": req.file.size});
  res.end;
})






app.listen(app.get('port'));