import gql from 'graphql-tag';

export const GET_SEASONS = gql `
    {
        baseseasons {
            strSeason
        }
    }
`;