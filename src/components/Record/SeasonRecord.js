import { getPercent } from "./RecordLogic";
import './Record.css';

const SeasonRecord = ({ year, record }) => {


    return (
        <div className='row justify-content-center align-items-center p-3 mb-2 season-record-row'>
            <div className='col-6'>
                <span>{year}</span>
            </div>
            <div className='col-3'>
                <span>{record.correct}/{record.total}</span>
            </div>
            <div className='col-3'>
                <span>{getPercent(record.correct, record.total)}%</span>
            </div>
        </div>
    )
}

export default SeasonRecord;