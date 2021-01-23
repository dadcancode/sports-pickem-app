import { useQuery } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';
import { GET_SEASONS } from '../../graphql';

const ChooseSeason = () => {

    const { loading, error, data } = useQuery(GET_SEASONS);
    const [seasons, setSeasons] = useState();

    useEffect(() => {
        if(data) {
            setSeasons(data.baseseasons)
        }
    }, [data])

    return (
        <div>
            {console.log(data)}
        </div>
    )
}

export default ChooseSeason