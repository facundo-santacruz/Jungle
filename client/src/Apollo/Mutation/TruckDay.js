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
    }
`