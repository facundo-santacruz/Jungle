import { gql } from "@apollo/client";

export const ADD_DETAIL = gql `
    mutation AddDetail($truckTransport: ID, $idDriver: ID, $kind: String, $quantity: Int) {
        addDetail(truckTransport: $truckTransport, id_driver: $idDriver, kind: $kind, quantity: $quantity) {
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
`