import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Product {
    name: String
    description: String
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }
`;

export default typeDefs;
