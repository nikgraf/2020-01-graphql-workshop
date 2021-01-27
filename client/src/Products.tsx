import React from "react";
import { gql } from "@apollo/client";
import { useProductsQuery } from "./generated/graphql";

gql`
  query products {
    products {
      name
    }
  }
`;

function Products() {
  const { loading, error, data } = useProductsQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{`Error! ${error.message}`}</div>;

  return (
    <ul>
      {data?.products?.map((product: any) => (
        <li key={product.name}>{product.name}</li>
      ))}
    </ul>
  );
}

export default Products;
