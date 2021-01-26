import { navigate } from 'hookrouter';



const Banner = (props) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand plain-text">{props.year || null}</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className='nav-item'>
                            <div className="nav-link" onClick={props.resetPicks} >Choose Season</div>
                        </li>
                        <li className='nav-item'>
                            <div className="nav-link" onClick={() => navigate('/record')} data-toggle="collapse" data-target=".navbar-collapse.show" >Record</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Banner