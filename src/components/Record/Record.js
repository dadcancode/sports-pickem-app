import { getPercent } from "./RecordLogic"
import SeasonRecord from "./SeasonRecord"


const Record = ({ record: {overall, years} }) => {

    console.log(overall)


    return (
        <div className='container-fluid'>
            <div className='row pt-4'>
                <div className='col-12'>
                    <p className='plain-text text-light'>Your Overall Record:</p>
                    <p className='plain-text text-light'>Correct Picks: {overall.correct}</p>
                    <p className='plain-text text-light'>Total Picks: {overall.total}</p>
                    <p className='plain-text text-light'>{`${getPercent(overall.correct, overall.total)}`}%</p>
                </div>
                <div className='col-12'>
                    {
                        Object.keys(years).map((val) => {
                            return <SeasonRecord year={val} record={years[val]} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Record