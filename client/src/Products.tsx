import React from "react";
import { useProductsQuery } from "./generated/graphql";

function Products() {
  const { loading, error, data } = useProductsQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{`Error! ${error.message}`}</div>;

  return (
    <ul>
      {data?.products?.map((product) => (
        <li key={product?.id}>
          {product?.name}
          <div>{product?.description || "No desc"}</div>
        </li>
      ))}
    </ul>
  );
}

export default Products;
