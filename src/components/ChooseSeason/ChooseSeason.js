import { useQuery } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';
import SeasonTab from './SeasonTab';


const ChooseSeason = (props) => {

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <h3>Choose Historic NFL Season</h3>
                </div>
                <div className='col-12'>
                    <div className='list-group'>
                        {
                            props.seasons ?
                                props.seasons.map((val) => {
                                    return (
                                        <SeasonTab seasonYear={val.strSeason} setChosenSeason={props.setChosenSeason}/>
                                    )
                                }) :
                                null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseSeason