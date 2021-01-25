import { navigate } from "hookrouter";
import { useEffect, useState } from "react";
import LoadScreen from "../LoadScreen/LoadScreen";
import { gradePicks, updateRecord } from './ResultsLogic';


const Results = (props) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(props)
        if(props.randomEvents.length) {
            let grade = gradePicks(props.picks, props.randomEvents);
            console.log(grade);
            updateRecord(grade, props.record, props.setRecord, props.chosenSeason);
            setLoading(!loading);
        }
    }, [props.randomEvents]);

    if(loading) {
        return <LoadScreen />
    }
    return (
        <div className='container-fluid'>
            <p>{`Your Overall Record: ${props.record.overall.correct}/${props.record.overall.total}`}</p>
            <p>{`Your record for the ${props.chosenSeason} season: ${props.record.years[props.chosenSeason].correct}/${props.record.years[props.chosenSeason].total}`}</p>

            <div className='row'>
                <div className='btn btn-success' onClick={props.playAgain}>Keep Season and Play Again?</div>
                <div className='btn btn-warning' onClick={props.resetSeason}>Change Season and Play Again?</div>
                <div className='btn btn-info'>View Record</div>
                <div className='btn btn-danger'>Quit? (reset progress)</div>
            </div>
        </div>
    )
}

export default Results