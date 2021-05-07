# URL Shortener

Greetings, traveler. This will be a one-page-only URL shortener made out
as a back-end project, being not only responsible for shortening it, but also redirectioning a user towards the original page. It is primarily composed as a component to be used in other large services.


## Technologies used

TypeScript;
NodeJS environment;
Express;
PostgreSQL;
Docker;
Postman for endpoint documenting;

## Steps

1. User sends a request to an endpoint so it shortens the URL http://wisereducacao.com
2. Server returns a JSON file with the shortened version called
"newUrl" as a subpage (e.g. "http://localhost:8081/abc123ab")
of the localhost;
3. The endpoint that saves the URL and returns the shortened URL is a POST method with a route named "http://localhost:8081/shortener" with its body composed of a JSON file with the attribute: {url: "http://wisereducacao.com"}
4. When receiving a callback to the shortened URL, the server redirects the user towards the URL saved in the database, or it is not found in the database, return a HTTP 404 response.

## How to Install

Soon.
