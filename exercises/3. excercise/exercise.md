## Excercise

1. Design a Graph Schema for the following screens

- Detail page (id, name, description, image, creator id, creator name, creator avatar image)
- Product list (also showing the creator avatar)

Define the Schema as GraphQL SDL in the Apollo server & turn on automocking.

2. Write example queries for these screens. To do this start the server using

```
cd server
yarn dev
```

And visit localhost:5000/graphql

- Bonus: Think about pagination for the product list
- Bonus Screen: User Profile Page (user avatar image, user name, all the products of a user with name and image)
