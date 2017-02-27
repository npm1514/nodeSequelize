var express     = require('express'),
    bodyParser  = require('body-parser'),
    cors        = require('cors');

var animalCtrl = require('./animalCtrl');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post('/animal', animalCtrl.create);
app.get('/animal', animalCtrl.read);
app.put('/animal/:id', animalCtrl.update);
app.delete('/animal/:id', animalCtrl.delete);

app.listen(8000, function(){
  console.log("listening to port 8000");
});
