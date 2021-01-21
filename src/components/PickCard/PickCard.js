

const PickCard = (props) => {
    return (
        <div className = 'card'>
            <h5 className='card-title'>
                {props.pickQuestion}
            </h5>
            <div className = 'card-body'>
                <div className='btn btn-outline-info'>{props.choiceA}</div>
                <div className='btn btn-outline-info'>{props.choiceB}</div>
            </div>
        </div>
    )
}

export default PickCard;