import gql from 'graphql-tag';

export const GET_SEASONS = gql `
    {
        baseseasons {
            strSeason
        }
    }
`;

export const GET_SEASON = gql `
    query Season($year: String!){
        season(year: $year) {
            events {
                strEvent
                strHomeTeam
                strAwayTeam
                intHomeScore
                intAwayScore
                dateEvent
            }
        }
    }
`;