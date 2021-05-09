import sum from "./app";


// // 0. Test to see if modules are being imported. PASSED.
// test('should output sum', () => {
//   expect(sum(1,5)).toBe(6);
// });


// 1. user gives out a longer link
test('server should receive the link', () => {
  expect(linkReceived).toBe(true);
});

test('should return a message saying the link does not work', () => {
  expect(urlCheck).toBe(true);
});

// 2. system is supposed to shorten the link and store it as JSON data
//  made available to be accessed via API request.
test('should shorten link', () => {
  expect(newUrlWorking).toBe(true);
});

 // 3. and store the long, the short and link them to an id.
 test('should store url & newUrl and link them to id', () => {
   expect(databaseStoring).toBe(true);
 });

// 4. system is supposed to shorten the link
test('should return a proper shortened link', () => {
  expect(newUrlGotten).toBe(true);
});

// 5. Use the HTTP 404 to return a message to the user;
test('should return a message saying the link does not work', () => {
  expect(linkWorking).toBe(false);
});

// 6. In this case, do nothing and move on to the shortening.
test('should return a message saying the link works', () => {
  expect(linkWorking).toBe(false);
});

// 7. Redirect
test('should redirect the user to original page', () => {
  expect(linkRedirectioning).toBe(true);
});
