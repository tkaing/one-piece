import { gql } from '@apollo/client';

const GET_GVT = gql`
    query {
        governments {
            id
            name
        }
    }
`;

const GET_NAVIES = gql`
    query {
        navies {
            id
            name
        }
    }
`;

const GET_PIRATES = gql`
    query {
        pirates {
            id
            name
        }
    }
`;

export {
    GET_GVT,
    GET_NAVIES,
    GET_PIRATES
}