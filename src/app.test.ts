// import sum from "./app";
// // 0. Test to see if modules are being imported. PASSED.
// test('should output sum', () => {
//   expect(sum(1,5)).toBe(6);
// });


test('server should receive a url from the user', () => {
  expect(linkReceived).toBe(true);
});

test('should try to connect to the site and move ahead if it does', () => {
  expect(urlConnect).toBe(true);
});

test('should return an error message if the url does not work', () => {
  expect(urlError).toBe(false);
});


test('should store url as JSON with an id', () => {
  expect(databaseStoreUrl).toBe(true);
});


test('should shorten link', () => {
  expect(shortening).toBe(true);
});

test('should add newUrl to the id', () => {
  expect(databaseStoreNewUrl).toBe(true);
});

test('should return to the user a usable short url', () => {
  expect(newUrlGotten).toBe(true);
});


test('should redirect user to original page when the short url is used', () => {
  expect(linkRedirectioning).toBe(true);
});

// import/create these functions in order to fulfill tests
// linkReceived
// urlCheck
// urlError
// databaseStoreUrl
// shortening
// databaseStoreNewUrl
// newUrlGotten
// linkRedirectioning
