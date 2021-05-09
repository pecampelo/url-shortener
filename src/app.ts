import express = require('express');
import config = require('config');
import routes from './routes';
import pool from 'pg';

const app = express();
const port = config.get('port');

// function sum(a: number, b: number) {
//   return a + b;
// };

app.listen(port, () => {
    console.log(`Application listening at http://localhost:${port}`);
    routes(app);
});

// export default sum;
