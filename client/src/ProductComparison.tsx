import React from "react";
import { gql } from "@apollo/client";
import { useProductComparisonQuery } from "./generated/graphql";

gql`
  query productComparison {
    productA: product(id: "aaaaa") {
      name
    }
    productB: product(id: "bbbbb") {
      name
    }
  }
`;

function ProductComparison() {
  const { loading, error, data } = useProductComparisonQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{`Error! ${error.message}`}</div>;

  return (
    <>
      <div>{data?.productA?.name}</div>
      <div>{data?.productB?.name}</div>
    </>
  );
}

export default ProductComparison;
