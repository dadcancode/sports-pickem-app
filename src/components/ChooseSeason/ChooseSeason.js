import { useQuery } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';
import SeasonTab from './SeasonTab';

import './ChooseSeason.css';


const ChooseSeason = (props) => {

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 p-3 text-center'>
                    <h3>Choose Historic NFL Season</h3>
                </div>
                <div className='col-12 season-col'>
                    <div className='list-group season-list border border-dark'>
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