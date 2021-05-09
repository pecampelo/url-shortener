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

1. [DONE]
Install and save these packages for development purposes:
- ts-node-dev for simultaneous alterations;
- jest for test driven development + @types/jest;
- typescript;
- express + @types/express;
- postgres;

2. Set up an Express app for the server. [DONE]
3. Create a test file that will at first fail the test, as there is
no code written. After, a mock test in order to test importing of node_modules from the app to the test file will be done. [DONE]
4. If passed, all possibilities that should be accounted for in a test
will be written down so there is Test-Driven Development; [DONE]
5. Create a static front-end file with forms.
6. Write down the HTTP request methods;
7. Connect to the database;
8. Use Postman to develop API;
9. Refactor code more if possible.
10. Package using Dockerfile.
11. Deploy to Heroku

## How does it work?

1. User ask for the server to shorten a link:
It then sends a POST request method consisted of the original URL (URL in test was http://wisereducacao.com) to the server, with a route named "http://localhost:8081/encurtador".
2. It also makes a GET request method that is an asynchronous function, waiting for the newUrl attribute to be available.
3. Then, a POST request method is received by the server and it creates the shortened URL called as a "newUrl" attribute in a JSON file; therefore, now the user is able to receive the shortened version as mentioned above.
4. When the user makes use of the shortened URL, the user is by consequence issuing a GET request for the original URL as well, which is saved in the database.
5. Then, the server can either redirect the user towards the original URL, or return a HTTP 404 response.
