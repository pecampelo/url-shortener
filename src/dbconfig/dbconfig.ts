import {Pool} from 'pg';

export default new Pool ({
  max: 20,
  connectionString: 'postgres::/postgres:postgres@localhost:8001/url_shortener',
  idleTimeoutMillis: 300000
});
