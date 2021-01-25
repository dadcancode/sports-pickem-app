import { A } from 'hookrouter';


const Banner = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <A className="navbar-brand plain-text" href="/">{props.year || null}</A>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className='nav-item'>
                            <A className="nav-link" href="/" data-toggle="collapse" data-target=".navbar-collapse.show" >Choose Season</A>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Banner