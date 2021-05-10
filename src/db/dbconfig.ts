import client = require('pg');
import config from 'config';

const connectionString = 'postgresql://postgres:postgres@localhost:3211/url_shortener'

const pool = new Pool({
  connectionString,
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
});

const client = new Client({
  connectionString,
});

client.connect();

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
});

export default client;
