import { useQuery } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';
import SeasonTab from './SeasonTab';

import './ChooseSeason.css';


const ChooseSeason = (props) => {

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center align-items-center p-3 imp-text imp-big-resp text-light header-col'>
                    Choose Historic NFL Season
                </div>
                <div className='col-12 season-col'>
                    <div className='list-group w-100 season-list border border-dark rounded'>
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