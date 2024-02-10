# apollo-server

Example from https://www.apollographql.com/docs/apollo-server/getting-started/

## Install

To run locally

```bash
npm run start
npm run compile && node --experimental-modules --es-module-specifier-resolution=node ./dist/index.js
```

For testing, you can use the following command:

```bash
npm run compile
npm run test
```

Then, open your browser to `http://localhost:4000/` to see the result.

in the operation field, you can use the following query to get the data from the server:

```graphql
query GetBooks {
  books {
    title
    author
  }
}
```

to see this result

```json
{
  "data": {
    "books": [
      {
        "title": "The Awakening",
        "author": "Kate Chopin"
      },
      {
        "title": "City of Glass",
        "author": "Paul Auster"
      }
    ]
  }
}
```
