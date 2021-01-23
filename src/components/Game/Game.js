import { useEffect } from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_SEASON } from '../../graphql';
import LoadScreen from "../LoadScreen/LoadScreen";
import { getUniqueRandoms } from "./GameLogic";
import PickCard from './PickCard/PickCard'

const Game = (props) => {

    const { loading, error, data } = useQuery(GET_SEASON, {
        variables: { year: props.chosenSeason }
    });

    useEffect(() => {
        if(data) props.setEvents(data.season.events)
    }, [data])

    useEffect(() => {
        if(props.events) {
            let picks = getUniqueRandoms(props.events, 5);
            props.setRandomPicks(picks);
        }
    }, [props.events])

    if(!props.randomPicks) return <LoadScreen />
    else {
        return (
            <div>
                {props.randomPicks.map((val) => {
                    return <PickCard pickQuestion={val.strEvent} choiceA={val.strHomeTeam} choiceB={val.strAwayTeam}/>
                })}
            </div>
        )
    }
}

export default Game;