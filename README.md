URL Shortener
=======================

Greetings, traveler. This is a project for a URL shortener made out
to shorten and redirection a user towards an original previously typed-in page. It is primarily composed as a component to be used in other large services, and it was proposed as a technical challenge for a job interview.

Wanna see it? >> https://url-shortener1234567.herokuapp.com/encurtador

Want to see its documentation? There is a little story there.

https://documenter.getpostman.com/view/15716598/TzRVdRAp


## Technologies proposed

- TypeScript (compiled to Javascript).
- NodeJS;
- Express + *Jest*;
- PostgreSQL through pg;
- Postman;
- Docker;

## How to Install

### git clone https://github.com/pecampelo/url-shortener.git
not currently functional

### npm install

There are two ways you can run this server:

1. **npm run postinstall** followed by **npm start** for production purposes.
2. **npm run dev** for development and continuous debugging.

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

5. [X] Create a static front-end file with forms.

6. [X] Write HTTP request methods and create shortener function.

7. [X] Deploy to Heroku.

8. [X] Connect to a database in order to save Urls.

9. [X] Use Postman to test methods and save collection to package.

10. Redirect user to longUrl page.

11. Write functions that suffice the tests passing.

12. Package using Dockerfile.



## How does it work?

1. User ask for the server to shorten a link. That does 2 things:

- It sends a POST request method consisted of the original URL (URL in test was http://wisereducacao.com) to the server, with a route named "http://localhost:8001/encurtador".

2. Then, the server creates the shortened URL called as a "newUrl" attribute in a JSON file with an index number and stored in the database.

3. Server returns the shortUrl to the user.

4. When the user makes use of the shortened URL, the user is by consequence issuing a GET request for the original URL as well, which is saved in the database. It can either redirect the user towards the original URL, or return a HTTP 404 response.
