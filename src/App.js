import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import LoadScreen from "./components/LoadScreen/LoadScreen";
import ChooseSeason from "./components/ChooseSeason/ChooseSeason";
import { useRoutes } from 'hookrouter';
import { GET_SEASONS } from './graphql';
import { useQuery } from '@apollo/react-hooks'
import Game from './components/Game/Game';
import './App.css';

function App() {

  const { loading, error, data } = useQuery(GET_SEASONS);
  const [seasons, setSeasons] = useState();
  const [chosenSeason, setChosenSeason] = useState();
  const [events, setEvents] = useState();
  const [randomPicks, setRandomPicks] = useState();
  
  const routes = {
    '/': () => <ChooseSeason seasons={seasons} setChosenSeason={setChosenSeason}/>,
    '/playGame' : () => <Game chosenSeason={chosenSeason} setEvents={setEvents} events={events} setRandomPicks={setRandomPicks} randomPicks={randomPicks}/>
  }
  
  const routeResult = useRoutes(routes);

  

  useEffect(() => {
      if(data) {
          setSeasons(data.baseseasons);
      }
  }, [data]);

  return (
    <div className="App">
      <Banner />
      {
        loading ? 
          <LoadScreen /> : routeResult
      }
      
    </div>
  );
}

export default App;
