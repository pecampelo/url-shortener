import express = require('express');
import routes from './routes';
import bodyParser = require('body-parser');
import db = require('../models/index');

const app = express();
const port = process.env.PORT || 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

app.use(routes);
// needs to come after the body-parser, otherwise it will be undefined;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.listen(process.env.PORT || port, () => {
      console.log(`Server is currently live on port ${port}`);
});
