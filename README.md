# URL Shortener

Greetings, traveler. This will be a one-page-only URL shortener made out
as a back-end project, being not only responsible for shortening it, but also redirectioning a user towards the original page. It is primarily composed as a component to be used in other large services.

## Technologies used

- TypeScript (converted to Javascript).
- NodeJS;
- Express + Jest;
- PostgreSQL;
- Postman;
- Docker;

## How to Install

// npm i encurtador // not currently functional

## Development Steps

1. [X] Install and save these packages for development purposes:
- ts-node-dev for simultaneous alterations;
- config + @types/config;
- express + @types/express;
- jest + ts-jest + @types/jest;
- typescript + @types/node;
- ejs for user interface;
- body-parser to store data as JSON;
- pg (postgres module);

2. [X] Set up an Express app for the server.

3. [X] Create a test file that will at first fail the test, as there is
no code written. After, a mock test in order to test importing of node_modules from the app to the test file will be done.

4. [X] If passed, all possibilities that should be accounted for in a test
will be written down so there is Test-Driven Development;

5. Connect to the database;

6. Use Postman to check the output of the endpoints;

7. Write down the HTTP request methods;

8. Create a static front-end file with forms.

9. Refactor code more if possible.

10. Package using Dockerfile.

11. Deploy to Heroku.

## How does it work?

1. User ask for the server to shorten a link. That does 2 things:

- It sends a POST request method consisted of the original URL (URL in test was http://wisereducacao.com) to the server, with a route named "http://localhost:8001/encurtador".

2. Then, the server creates the shortened URL called as a "newUrl" attribute in a JSON file with an index number and stored in the database.

3. Server returns the shortUrl to the user.

4. When the user makes use of the shortened URL, the user is by consequence issuing a GET request for the original URL as well, which is saved in the database. It can either redirect the user towards the original URL, or return a HTTP 404 response.
