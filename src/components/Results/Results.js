import { useEffect } from "react";


const Results = (props) => {

    const gradePicks = (picks, randomEvents) => {
        let grade = [];
        console.log(randomEvents);
        randomEvents.map((randomEvent, pickNumber) => {
            grade.push(analyzeOne(randomEvent, picks[pickNumber]));
        })

        return grade
    }

    const analyzeOne = (randomEvent, pick) => {
        let winner = getWinner(randomEvent);
        if(pick === winner) {
            return true;
        } else {
            return false;
        }
    }
    
    const getWinner = (randomEvent) => {
        
        if(randomEvent['intHomeScore'] >= randomEvent['intAwayScore']) {
            return randomEvent['strHomeTeam'];
        } else {
            return randomEvent['strAwayTeam'];
        }

    }

    useEffect(() => {
        console.log(props)
        if(props.randomEvents.length) {
            console.log(props.randomEvents)
            let grade = gradePicks(props.picks, props.randomEvents);
            console.log(grade)
        }
    }, [props])


    return (
        <div>
            RESULTS
        </div>
    )
}

export default Results;