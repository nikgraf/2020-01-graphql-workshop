import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import path from "path";
import resolvers from "./resolvers";
import schema from "./schema";
import { createProductLoader } from "./dataloaders/product";

const app = express();
const port = process.env.PORT || 5000;

const apollo = new ApolloServer({
  typeDefs: schema,
  resolvers,
  // mocks: true,
  // mockEntireSchema: false,
  context: (_req) => ({
    // for authentication: req.headers.authorization
    productLoader: createProductLoader(),
  }),
});
apollo.applyMiddleware({ app });

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../../client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
