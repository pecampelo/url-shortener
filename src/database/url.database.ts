import { Client } from 'pg';

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
});

client.connect();

client.query('SELECT table_schema, table_name FROM information_schema.tables;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client.end();
});


const a = 1;

// let exampleLongUrl = 'http://www.google.com';
// let exampleNewUrl = 'asdoivrajj';

// class Link {
//     constructor(longUrlReceived: string, newUrlCreated: string){
//           this.clientData = {
//               id : null,
//               longUrlReceived: undefined,
//               newUrlCreated: undefined
//           }
//           this.ServerData = {
//               createdAt : undefined,
//               updatedAt : undefined,
//               tokenAccess : null
//           }
//       }
// };
