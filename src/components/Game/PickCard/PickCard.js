

const PickCard = (props) => {
    return (
        <div className = 'card'>
            <h5 className='card-title'>
                {props.pickQuestion}
            </h5>
            <div className = 'card-body'>
                <div className='d-flex justify-content-around'>
                    <div className='btn btn-outline-info w-50'>{props.choiceA}</div>
                    <div className='btn btn-outline-info w-50'>{props.choiceB}</div>
                </div>
            </div>
        </div>
    )
}

export default PickCard;