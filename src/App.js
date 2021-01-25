import { useEffect, useState } from "react";
import { useRoutes } from 'hookrouter';
import { GET_SEASONS } from './graphql';
import { useQuery } from '@apollo/react-hooks'
import LoadScreen from "./components/LoadScreen/LoadScreen";
import ChooseSeason from "./components/ChooseSeason/ChooseSeason";
import Game from './components/Game/Game';
import Results from './components/Results/Results';
import Banner from './components/Banner/Banner';
import './App.css';

function App() {

  const { loading, error, data } = useQuery(GET_SEASONS);
  const [seasons, setSeasons] = useState();
  const [chosenSeason, setChosenSeason] = useState();
  const [events, setEvents] = useState();
  const [randomPicks, setRandomPicks] = useState();

  const [picks, setPicks] = useState({
    0: null,
    1: null,
    2: null,
    3: null
  });

  const [record, setRecord] = useState({
    overall: {
      correct: 0,
      total: 0,
    },
    years: {}
  })
  
  const routes = {
    '/': () => <ChooseSeason seasons={seasons} setChosenSeason={setChosenSeason}/>,

    '/playGame' : () => <Game chosenSeason={chosenSeason} setEvents={setEvents} events={events} setRandomPicks={setRandomPicks} randomPicks={randomPicks} picks={picks} setPicks={setPicks}/>,

    '/results' : () => <Results picks={picks} randomEvents={randomPicks} record={record} setRecord={setRecord} chosenSeason={chosenSeason}/>
  }
  
  const routeResult = useRoutes(routes);

  

  useEffect(() => {
      if(data) {
          setSeasons(data.baseseasons);
      }
  }, [data]);

  return (
    <div className="App bg-light">
      <Banner year={chosenSeason} />
      {
        loading ? 
          <LoadScreen /> : routeResult
      }

      
    </div>
  );
}

export default App;
