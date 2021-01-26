import { useState } from 'react';
import PickButton from './PickButton';
import './PickCard.css';

const PickCard = (props) => {

    const [selected, setSelected] = useState();

    const makeActive = (answer, ind) => {
        setSelected(answer);
        let clone = props.picks;
        clone[ind] = answer;
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
        <div className = 'card pick-card pt-1 col-md-5 mb-2 m-md-2 h-100 bg-light'>
            <div className='card-title container-fluid'>
                <div className='row pick-header-row'>
                    <p className='col-3 pick-card-date bg-dark text-light d-flex justify-content-center align-items-center plain-text-resp'>{convertDate(props.date)}</p>
                    <p className='col-9 plain-text-resp'>{props.pickQuestion}</p>
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