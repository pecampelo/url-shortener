import express = require('express');
import routes from './routes';
import bodyParser = require('body-parser');
// import database = require('./database/index');

const app = express();
const port = process.env.PORT || 8001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

app.use(routes);
// needs to come after the body-parser, otherwise it will be undefined;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.listen(process.env.PORT || port, () => {
      console.log(`Application listening in on port ${port}`);
});
