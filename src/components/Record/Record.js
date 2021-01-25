import { getPercent } from "./RecordLogic"
import SeasonRecord from "./SeasonRecord"


const Record = (props) => {




    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <p>Your Overall Record:</p>
                    <p>Correct Picks: {props.record.overall.correct}</p>
                    <p>Total Picks: {props.record.overall.total}</p>
                    <p>{`${getPercent(props.record.overall.correct, props.record.overall.total)}`}%</p>
                </div>
            </div>
            <div className='row'>
                {
                    Object.keys(props.record.years).map((val) => {
                        return <SeasonRecord season={val} />
                    })
                }
            </div>
        </div>
    )
}

export default Record