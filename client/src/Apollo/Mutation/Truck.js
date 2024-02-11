import { gql } from '@apollo/client';

export const ADD_TRUCK = gql`
    mutation Mutation($name: String, $letter: String, $date: String, $patent: String, $image: String) {
        addTruck(name: $name, letter: $letter, date: $date, patent: $patent, image: $image) {
        _id
        name
        letter
        date
        patent
        image
    }
}`