import React from "react";
import { useProductComparisonQuery } from "./generated/graphql";

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
