import './PickCard.css';


const PickButton = (props) => {


    return (
        <div onClick={() => props.makeActive(props.choice, props.ind)} className={`btn btn-outline-success col-5 d-flex justify-content-center align-items-center ${props.selected === props.choice ? 'active' : null} pick-btn`}>
            {props.choice}
        </div>
    )
}

export default PickButton;