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

## Planning the Development Steps

1. Install npm packages to set up the environment.
  - typescript;
  - express;
  - nodemon for simultaneous alterations;
  - postgres;
  - jest for test driven development;
2. Create a test file that will at first fail the test, as there is
no code written. After, the code will be written so the test
will succeed.
3. Set up an Express app for the server.
4. Create a static front-end file with forms.
5. Create a unit testing component.
6. Write down the HTTP request methods;
7. Connect the database;
8. Use Postman to develop API;
9. Refactor code more if possible.
10. Package through Docker.

## How does it work?

1. User ask for the server to shorten a link:
It then sends a POST request method consisted of the original URL (URL in test was http://wisereducacao.com) to the server, with a route named "http://localhost:8081/encurtador".
2. It also makes a GET request method that is an asynchronous function, waiting for the newUrl attribute to be available.
3. Then, a POST request method is received by the server and it creates the shortened URL called as a "newUrl" attribute in a JSON file; therefore, now the user is able to receive the shortened version as mentioned above.
4. When the user makes use of the shortened URL, the user is by consequence issuing a GET request for the original URL as well, which is saved in the database.
5. Then, the server can either redirect the user towards the original URL, or return a HTTP 404 response.

## How to Install

npm i encurtador (not currently functional)
