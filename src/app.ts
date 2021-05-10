import express = require('express');
import config = require('config');
import routes from './routes';
import client = require('./database/dbconfig');

const app = express();
const port = config.get('port');

import bodyParser = require("body-parser");
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.listen(process.env.PORT || port, () => {
    console.log(`Application listening at http://localhost:${port}`);
    routes(app);
});
