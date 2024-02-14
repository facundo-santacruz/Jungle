import { gql } from "@apollo/client";

export const ADD_DRIVER = gql `
    mutation AddDriver($firstName: String, $lastName: String, $birthday: String, $dni: String) {
        addDriver(firstName: $firstName, lastName: $lastName, birthday: $birthday, dni: $dni) {
            _id
            firstName
            lastName
            birthday
            dni
        }
    }
`