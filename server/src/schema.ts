import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Image {
    url: String
    title: String
  }

  type Product {
    name: String
    description: String
    image: Image
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }
`;

export default typeDefs;
