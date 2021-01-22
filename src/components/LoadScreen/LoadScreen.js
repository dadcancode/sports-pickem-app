import ReactLoading from 'react-loading';

const LoadScreen = () => {
    return (
        <div className='container-fluid h-100'>
            <div className='row h-100'>
                <div className='col-12 h-100 d-flex justify-content-center align-items-center'>
                    <ReactLoading type='spinningBubbles' color='blue' height={'30%'} width={'30%'} />
                </div>
            </div>
        </div>
    )
}

export default LoadScreen;