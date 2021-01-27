import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Product = {
  __typename?: 'Product';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  products?: Maybe<Array<Maybe<Product>>>;
  product?: Maybe<Product>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type ProductComparisonQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductComparisonQuery = (
  { __typename?: 'Query' }
  & { productA?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'name'>
  )>, productB?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'name'>
  )> }
);

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'name'>
  )>>> }
);


export const ProductComparisonDocument = gql`
    query productComparison {
  productA: product(id: "aaaaa") {
    name
  }
  productB: product(id: "bbbbb") {
    name
  }
}
    `;

/**
 * __useProductComparisonQuery__
 *
 * To run a query within a React component, call `useProductComparisonQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductComparisonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductComparisonQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductComparisonQuery(baseOptions?: Apollo.QueryHookOptions<ProductComparisonQuery, ProductComparisonQueryVariables>) {
        return Apollo.useQuery<ProductComparisonQuery, ProductComparisonQueryVariables>(ProductComparisonDocument, baseOptions);
      }
export function useProductComparisonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductComparisonQuery, ProductComparisonQueryVariables>) {
          return Apollo.useLazyQuery<ProductComparisonQuery, ProductComparisonQueryVariables>(ProductComparisonDocument, baseOptions);
        }
export type ProductComparisonQueryHookResult = ReturnType<typeof useProductComparisonQuery>;
export type ProductComparisonLazyQueryHookResult = ReturnType<typeof useProductComparisonLazyQuery>;
export type ProductComparisonQueryResult = Apollo.QueryResult<ProductComparisonQuery, ProductComparisonQueryVariables>;
export const ProductsDocument = gql`
    query products {
  products {
    name
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;