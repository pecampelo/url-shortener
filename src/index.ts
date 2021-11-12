import express = require('express');
import routes from './routes';

const app = express();
const port = process.env.PORT || 8081;

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(routes);


app.set('view engine', 'ejs');
app.set('views', './src/views');

app.listen(process.env.PORT || port, () => {
      console.log(`Server is currently live on port ${port}`);
});
