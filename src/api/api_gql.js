import { gql } from '@apollo/client';
import { PIRATE_WITH_FRUIT } from './fragments/PirateWithFruit';

const GET_NONE = gql`
    query {
        piratesWithoutFruit {
            id
            name
        }
    }
`;

const GET_ZOAN = gql`
    ${ PIRATE_WITH_FRUIT }
    query {
        piratesWithZoan {
            ...PirateWithFruit
        }
    }
`;

const GET_LOGIA = gql`
    ${ PIRATE_WITH_FRUIT }
    query {
        piratesWithLogia {
            ...PirateWithFruit
        }
    }
`;

const GET_PARA = gql`
    ${ PIRATE_WITH_FRUIT }
    query {
        piratesWithParamecia {
            ...PirateWithFruit
        }
    }
`;

const GET_FRUITS = gql`
    query {
        fruits {
            id
            name
        }
    }
`;

const UPDATE_FRUIT = gql`
    mutation {
        updateFruitForPirate (input: {fruitId: $fruitId, pirateId: $pirateId}) {
            pirate {
                id
                name
            }
        }
    }
`;

export {
    GET_NONE,
    GET_PARA,
    GET_ZOAN,
    GET_LOGIA,
    GET_FRUITS,
    UPDATE_FRUIT
}