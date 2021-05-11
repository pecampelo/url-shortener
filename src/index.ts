import express = require('express');
import routes from './routes';
import db = require('./models/url.model');

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(routes);
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.listen(process.env.PORT || port, () => {
      console.log(`Application listening at port ${port}`);
});
