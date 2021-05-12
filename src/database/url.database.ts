import { Client } from 'pg';

const client = new Client({
    connectionString: process.env.DATABASE_URL || 5432,
    ssl: {
      rejectUnauthorized: false
    }
});

client.connect();

client.query('SELECT table_schema, table_name FROM information_schema.tables;', err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client.end();
});


const a = 1;
