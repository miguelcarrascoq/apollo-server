// Resolvers define how to fetch the types defined in your schema.

import books from './database';

// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};

export default resolvers;
