import { compareUrl } from " ./server";

// user gives out a longer link
test('server should receive the link', () => {
  expect(linkReceived).toBe(true);
});

// test('should return a message saying the link does not work', () => {
//   expect(urlCheck).tobe(true);
// });

// system is supposed to shorten the link and store it as JSON data
// made available to be accessed via API request.
test('should shorten link', () => {
  expect(newUrlWorking).toBe(true);
});

 // and store the long, the short and link them to an id.
 test('should store url, newUrl and link them to id', () => {
   expect(databaseStoring).toBe(true);
 });

// system is supposed to shorten the link
test('should return a proper shortened link', () => {
  expect(newUrlGotten).toBe(true);
});


test('should return a message saying the link does not work', () => {
  expect(linkWorking).tobe(false);
});

test('should return a message saying the link works', () => {
  expect(linkWorking).tobe(false);
});


test('should redirect the user to original page', () => {
  expect(linkRedirectioning).tobe(true);
});
