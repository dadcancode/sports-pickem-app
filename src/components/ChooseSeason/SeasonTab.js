import { navigate } from 'hookrouter';

const SeasonTab = (props) => {

    const setSeason = (year) => {
        props.setChosenSeason(year);
        navigate('/playGame');
    }
    
    return (
        <button onClick={() => setSeason(props.seasonYear)} type='button' className='list-group-item list-group-item-action bg-light text-center plain-text'>
            {props.seasonYear}
        </button>
    )
}

export default SeasonTab;