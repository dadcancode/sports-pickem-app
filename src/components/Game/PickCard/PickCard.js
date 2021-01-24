import { useState } from 'react';
import PickButton from './PickButton';
import './PickCard.css';

const PickCard = (props) => {

    const [selected, setSelected] = useState();

    const makeActive = (answer, ind) => {
        setSelected(answer);
        let clone = props.picks;
        clone[`pick${ind}`] = answer;
        props.setPicks({...props.picks, ...clone});
    }

    const convertDate = (date) => {
        let dateObj = new Date(date);
        let month = dateObj.getMonth() + 1;
        let day = dateObj.getDate();
        let dateString = `${month}/${day}`       
        return dateString
    }

    return (
        <div className = 'card pick-card pt-1 col-12 mb-2'>
            <div className='card-title container-fluid'>
                <div className='row'>
                    <p className='col-10'>{props.pickQuestion}</p>
                    <p className='col-2 pick-card-date bg-dark text-light d-flex justify-content-center align-items-center'>{convertDate(props.date)}</p>
                </div>
            </div>
            <div className = 'card-body container-fluid'>
                <div className='row justify-content-around'>
                    <PickButton makeActive={makeActive} selected={selected} choice={props.choiceA} ind={props.ind} />
                    <PickButton makeActive={makeActive} selected={selected} choice={props.choiceB} ind={props.ind}/>
                </div>
            </div>
        </div>
    )
}

export default PickCard;