import express from 'express';
const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World'});
});

// function CompareUrl(url: string, newUrl: string): boolean  {
//   if (url === newUrl) { return: true }
//   else { return: false };
// };

app.listen(8001);
