import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Image {
    url: String
    title: String
  }

  type User {
    id: ID!
    name: String
    avatar: Image
    createdProducts: [Product!]
  }

  type Product {
    id: ID!
    name: String
    description: String
    image: Image
    creator: User!
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
    user(id: ID!): User
  }
`;

export default typeDefs;
