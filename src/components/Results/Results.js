import { navigate } from "hookrouter";
import { useEffect, useState } from "react";
import LoadScreen from "../LoadScreen/LoadScreen";
import { getPercent } from "../Record/RecordLogic";
import { gradePicks, updateRecord } from './ResultsLogic';


const Results = (props) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(props.randomEvents.length) {
            let grade = gradePicks(props.picks, props.randomEvents);
            updateRecord(grade, props.record, props.setRecord, props.chosenSeason);
            setLoading(!loading);
        }
    }, [props.randomEvents]);

    if(loading) {
        return <LoadScreen />
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 plain-text text-light'>
                    {`Your Overall Record:`}
                </div>
                <div className='col-10 plain-text text-light'>
                    {`${props.record.overall.correct}/${props.record.overall.total}`}
                </div>
                
                <div className='col-10 plain-text mb-4 text-light'>
                    {`${getPercent(props.record.overall.correct, props.record.overall.total)}%`}
                </div>

                <div className='col-10 plain-text text-light'>
                    {`${props.chosenSeason} season: `}
                </div>
                <div className='col-10 plain-text text-light'>
                    {`${props.record.years[props.chosenSeason].correct}/${props.record.years[props.chosenSeason].total}`}
                </div>
                <div className='col-10 plain-text text-light'>
                    {`${getPercent(props.record.years[props.chosenSeason].correct, props.record.years[props.chosenSeason].total)}%`}
                </div>
            </div>

            <div className='row fixed-bottom'>
                <div className='btn btn-success' onClick={props.playAgain}>Keep Season and Play Again?</div>
                <div className='btn btn-warning' onClick={props.resetSeason}>Change Season and Play Again?</div>
                <div className='btn btn-primary' onClick={() => navigate('/record')}>View Record</div>
                <div className='btn btn-danger' onClick={props.resetGame}>Quit? (reset progress)</div>
            </div>
        </div>
    )
}

export default Results