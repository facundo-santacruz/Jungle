import { gql } from '@apollo/client';


export const GET_ALLTRUCKS = gql`
query Truck {
    truck {
      _id
      name
      letter
      date
      patent
    }
  }`;

  export default GET_ALLTRUCKS