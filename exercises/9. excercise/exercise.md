## Excercise

1. Add a hardcoded token to every user. Add the token the client and authenticate the user with it in the backend. Meaning the context should contain the user in the resolver once the autorization token is provided to identify the user.

```js
const client = new ApolloClient({
  uri: "https://api.example.com",
  cache: new InMemoryCache(),
  headers: {
    authorization: "abc",
  },
});
```

2. Change the `createProduct` to only be available if the user is logged in.
3. Change the creator of a product to be the currently logged in user.

Hint: you can either use GraphQL Shield or handle it in the resolver directly.
Bonus: Try out and compare handling authorization using GraphQL Shield and resolver based version.
