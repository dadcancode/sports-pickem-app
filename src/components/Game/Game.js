import { useEffect, useState } from "react";
import { useQuery, useSubscription } from '@apollo/react-hooks';
import { GET_SEASON } from '../../graphql';
import LoadScreen from "../LoadScreen/LoadScreen";
import { getUniqueRandoms } from "./GameLogic";
import PickCard from './PickCard/PickCard';
import './Game.css';
import { navigate } from "hookrouter";


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
        for(let x in props.picks) {
            if(!props.picks[x]) {
                return null;
            }
        }

        setAllAnswered(true)
    }, [props.picks]);

    const resetGame = (picks) => {
        resetPicks(picks);
        navigate('/');
    }

    const resetPicks = (picks) => {
        let clone = picks;
        for(let x in clone) {
            clone[x] = null;
        }
        props.setPicks([...props.picks, ...clone]);
    }


    if(!props.randomPicks) return <LoadScreen />
    else {
        return (
            <div className='container-fluid'>
                <div className='row pt-4'>
                        {props.randomPicks.map((val, ind) => {
                            return <PickCard pickQuestion={val.strEvent} choiceA={val.strHomeTeam} choiceB={val.strAwayTeam} date={val.dateEvent} setPicks={props.setPicks} picks={props.picks} ind={ind}/>
                        })}
                    <div className={`btn-dark text-light submit-button ${allAnswered ? 'fixed-bottom d-flex justify-content-center align-items-center' : 'd-none'}`} onClick={() => {
                        navigate('/results')
                    }}>SUBMIT</div>
                </div>
            </div>
        )
    }
}

export default Game;