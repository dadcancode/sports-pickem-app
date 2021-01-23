import { useEffect, useState } from "react";
import { useQuery, useSubscription } from '@apollo/react-hooks';
import { GET_SEASON } from '../../graphql';
import LoadScreen from "../LoadScreen/LoadScreen";
import { getUniqueRandoms } from "./GameLogic";
import PickCard from './PickCard/PickCard';
import './Game.css';

const Game = (props) => {

    const { loading, error, data } = useQuery(GET_SEASON, {
        variables: { year: props.chosenSeason }
    });
    const [allAnswered, setAllAnswered] = useState(false);

    useEffect(() => {
        if(data) props.setEvents(data.season.events)
    }, [data]);

    useEffect(() => {
        if(props.events) {
            let picks = getUniqueRandoms(props.events, 4);
            props.setRandomPicks(picks);
        }
    }, [props.events]);

    useEffect(() => {
        for(let x in props.results) {
            if(!props.results[x]) {
                return null;
            }
        }

        setAllAnswered(true)
    }, [props.results]);

    if(!props.randomPicks) return <LoadScreen />
    else {
        return (
            <div className='container-fluid'>
                <div className='row justify-content-center align-items-center'>
                    <div className='display-1'>{props.chosenSeason}</div>
                        {props.randomPicks.map((val, ind) => {
                            return <PickCard pickQuestion={val.strEvent} choiceA={val.strHomeTeam} choiceB={val.strAwayTeam} date={val.dateEvent} setResults={props.setResults} results={props.results} ind={ind}/>
                        })}
                    <div className={`btn btn-dark text-light submit-button ${allAnswered ? null : 'd-none'}`} >SUBMIT</div>
                </div>
            </div>
        )
    }
}

export default Game;