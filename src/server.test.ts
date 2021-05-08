import { CompareUrl } from " ./server.ts";

test('system returns a proper shortened link', () => {
  expect(CompareUrl).toBe(true)
})

// user gives out a longer link
// system is supposed to shorten the link and store the long and the short.
// system returns a shortened version.
// user uses the shortened link
// system redirects him to the longer link.
