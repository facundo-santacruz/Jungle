import { gql } from '@apollo/client';


export const GET_ALLTRUCKS = gql`
query Truck {
    truck {
      _id
      name
      letter
      date
      patent
      image
    }
}`;

export const GET_ALLDRIVERS = gql `
  query Driver {
    driver {
      _id
      firstName
      lastName
      birthday
      dni
      image
    }
  }
`