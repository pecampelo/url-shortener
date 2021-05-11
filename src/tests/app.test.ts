import controller = require('..controller/url.controller');

test('server should receive a url from the user', () => {

  expect(urlReceived).toBe(true);
});


// test('should store url as JSON with an id', () => {
//   expect(databaseStoredUrl).toBe(true);
// });
//
//
// test('should shorten link', () => {
//   expect(newUrl).toBe(true);
// });
//
//
// test('should return to the user a usable short url', () => {
//   expect(newUrlWasReturned).toBe(true);
// });
//
//
// test('should redirect user to original page when the short url is used', () => {
//   expect(linkWasRedirected).toBe(true);
// });
