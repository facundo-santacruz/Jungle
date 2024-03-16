import { gql } from "@apollo/client";

export const ADD_TRUCKDAY = gql `
mutation Mutation($truck: ID) {
    addTruckDay(truck: $truck) {
      _id
      truck {
        _id
        name
        letter
      }
      date
      arrival {
        _id
        driver {
          _id
          firstName
          lastName
        }
        hour
        quantity
      }
      departure {
        _id
        driver {
          _id
          firstName
          lastName
        }
        hour
        quantity
      }
    }
  }`