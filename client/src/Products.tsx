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
          {product?.image?.url && product?.image?.title ? (
            <img src={product.image.url} alt={product.image.title} />
          ) : (
            <img src="http://example.com" alt="Fallback Product" />
          )}
        </li>
      ))}
    </ul>
  );
}

export default Products;
