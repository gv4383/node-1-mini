const express = require('express');
const bodyParser = require('body-parser');

const bc = require('./controllers/booksCtrl');

const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(express.static(`${ __dirname}/../build`))

app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.deletes);

app.listen(port, () => {
  console.log(`Server listening on port: ${ port }`);
});