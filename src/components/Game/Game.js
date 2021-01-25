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
        console.log(allAnswered);
    }, [allAnswered]);
    

    useEffect(() => {
        if(data && props.newGame) {
            props.setEvents(data.season.events);
            props.setNewGame(!props.newGame);
        }
    }, [data]);

    useEffect(() => {
        if(props.events) {
            let picks = getUniqueRandoms(props.events, 4);
            props.setRandomPicks(picks);
        }
    }, [props.events]);

    useEffect(() => {

        if(props.events) {
            if(props.events.length >= 4) {
                for(let x in props.picks) {
                    if(!props.picks[x]) {
                        return;
                    }
                }
                setAllAnswered(true);
            } else {
                props.events.map((val, ind) => {
                    if(!props.picks[ind]) {
                        return;
                    }
                })
                setAllAnswered(true);
            }
        }

    }, [props.picks, props.events]);

    



    if(!props.randomPicks) return <LoadScreen />
    else {
        return (
            <div className='container-fluid'>
                <div className='row justify-content-around align-items-center pt-4 pick-card-row'>
                        {props.randomPicks.map((val, ind) => {
                            return <PickCard pickQuestion={val.strEvent} choiceA={val.strHomeTeam} choiceB={val.strAwayTeam} date={val.dateEvent} setPicks={props.setPicks} picks={props.picks} ind={ind}/>
                        })}
                    <button type='button' className={`btn-dark text-light submit-button ${allAnswered ? 'fixed-bottom d-flex justify-content-center align-items-center' : 'd-none'}`} onClick={() => navigate('/results')}>SUBMIT</button>
                </div>
            </div>
        )
    }
}

export default Game;