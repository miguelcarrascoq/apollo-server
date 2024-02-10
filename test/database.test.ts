import books from '../src/database';

test('verify type', () => {
  const db = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];
  expect(books).toEqual(db);
});
