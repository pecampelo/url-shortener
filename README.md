# URL Shortener

Greetings, traveler. This will be a one-page-only URL shortener made out
as a back-end project, being not only responsible for shortening it, but also redirectioning a user towards the original page. It is primarily composed as a component to be used in other large services.

## Technologies used

- TypeScript;
- NodeJS;
- Express
- PostgreSQL
- Postman;
- Docker

## Planning the Development Steps

1. Install npm packages to set up the environment.
  - typescript;
  - express;
  - nodemon for simultaneous alterations;
  - postgres;

2. Set up an Express app for the server.
3. Create a static front-end file with forms.
4. Create a unit testing component.
5. Write down the HTTP request methods;
6. Connect the database;
7. Use Postman to develop API
8. Package through Docker.

## How does it work?

1. User ask for the server to shorten a link:
It then sends a POST request method consisted of the original URL (URL in test was http://wisereducacao.com) to the server, with a route named "http://localhost:8081/encurtador".
2. It also makes a GET request method that is an asynchronous function, waiting for the newUrl attribute to be available.
3. Then, a POST request method is received by the server and it creates the shortened URL called as a "newUrl" attribute in a JSON file; therefore, now the user is able to receive the shortened version as mentioned above.
4. When receiving a callback to the shortened URL, the user can also issue a GET request that will make the server redirect the user towards the URL saved in the database, or it is not found in the database, return a HTTP 404 response.

## How to Install

npm i encurtador (not currently functional)
