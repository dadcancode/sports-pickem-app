import { useEffect } from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_SEASON } from '../../graphql';
import LoadScreen from "../LoadScreen/LoadScreen";
import { getUniqueRandoms } from "./GameLogic";
import PickCard from './PickCard/PickCard';
import './Game.css';

const Game = (props) => {

    const { loading, error, data } = useQuery(GET_SEASON, {
        variables: { year: props.chosenSeason }
    });

    useEffect(() => {
        if(data) props.setEvents(data.season.events)
    }, [data])

    useEffect(() => {
        if(props.events) {
            let picks = getUniqueRandoms(props.events, 4);
            props.setRandomPicks(picks);
        }
    }, [props.events])

    if(!props.randomPicks) return <LoadScreen />
    else {
        return (
            <div className='container-fluid'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-12 mt-4'>
                        {props.randomPicks.map((val, ind) => {
                            return <PickCard pickQuestion={val.strEvent} choiceA={val.strHomeTeam} choiceB={val.strAwayTeam} date={val.dateEvent} setResults={props.setResults} results={props.results} ind={ind}/>
                        })}
                    </div>
                    <div className='fixed-bottom btn btn-dark text-light submit-button'>SUBMIT</div>
                </div>
            </div>
        )
    }
}

export default Game;