import client = require('pg');
import config from 'config';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'url_shortener',
  password: 'postgres',
  port: 5432,
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
});
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'url_shortener',
  password: 'postgres',
  port: 5432,
});
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
});

export default client;
