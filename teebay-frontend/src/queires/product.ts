import {gql} from "@apollo/client";

export const ALL_PRODUCTS = gql`query {
  products {
    id
    title
    description
    published
    price
    rent
    categories {
      id
      name
    }
  }
}`
export const PRODUCT = (_id: number) => gql`query {
  product(id: ${_id}) {
    id
    title
    description
    published
    price
    rent
    categories {
      id
      name
    }
  }
}
`
export const CREATE_PRODUCT = gql`
  mutation AddProduct($title: String!, $description: String!, $price: Float, $rent: Float, $categoryIds: [ID!]!) {
    createProduct(
      title: $title,
      description: $description,
      price: $price,
      rent: $rent,
      categoryIds: $categoryIds
    ) {
      id
      title
    }
  }
`

export const USER_OWN_PRODUCTS = gql`query {
  userProducts {
    id
    title
    price
    rent
    description
    published
    categories {
      id
      name
    }
  } 
}`