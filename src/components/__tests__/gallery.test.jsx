import { genRandomNumber } from '../gallery.jsx';

test('should handle null', () => {
  expect(genRandomNumber()).toBe(Integer);
})

// write test to ensure the random number generator only generates an ID for the total number of cars in the API
