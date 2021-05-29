import { gql } from '@apollo/client';

export const PIRATE_WITH_FRUIT = gql`
    fragment PirateWithFruit on Pirate {
        id
        name
        fruit {
            id
            name
        }
    }
`;

export default PIRATE_WITH_FRUIT