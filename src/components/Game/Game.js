import { useEffect, useState } from "react";
import { useQuery, useSubscription } from '@apollo/react-hooks';
import { GET_SEASON } from '../../graphql';
import LoadScreen from "../LoadScreen/LoadScreen";
import { getUniqueRandoms } from "./GameLogic";
import PickCard from './PickCard/PickCard';
import './Game.css';
import { navigate } from "hookrouter";
import Banner from "./Banner/Banner";

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
        navigate('/')
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
            <>
                <Banner year={props.chosenSeason} />
                <div className='container-fluid'>
                    <div className='row justify-content-center align-items-center'>
                            {props.randomPicks.map((val, ind) => {
                                return <PickCard pickQuestion={val.strEvent} choiceA={val.strHomeTeam} choiceB={val.strAwayTeam} date={val.dateEvent} setPicks={props.setPicks} picks={props.picks} ind={ind}/>
                            })}
                        <div type='button' className={`btn-dark text-light submit-button ${allAnswered ? null : 'd-none'}`} onClick={() => {navigate('/gameResults')}}>SUBMIT</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Game;