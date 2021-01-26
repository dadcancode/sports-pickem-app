import { useEffect, useState } from "react";
import { useRoutes, navigate } from 'hookrouter';
import { GET_SEASONS } from './graphql';
import { useQuery } from '@apollo/react-hooks'
import { playAgain, resetGame, resetPicks, resetSeason } from './components/Game/GameLogic'
import LoadScreen from "./components/LoadScreen/LoadScreen";
import ChooseSeason from "./components/ChooseSeason/ChooseSeason";
import Game from './components/Game/Game';
import Results from './components/Results/Results';
import Banner from './components/Banner/Banner';
import './App.css';
import Record from "./components/Record/Record";

function App() {

  const { loading, error, data } = useQuery(GET_SEASONS);
  const [seasons, setSeasons] = useState();
  const [chosenSeason, setChosenSeason] = useState();
  const [events, setEvents] = useState();
  const [randomPicks, setRandomPicks] = useState();
  const [newGame, setNewGame] = useState(true);

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
  });
  
  const routes = {
    '/': () => <ChooseSeason seasons={seasons} setChosenSeason={setChosenSeason}/>,

    '/playGame' : () => <Game chosenSeason={chosenSeason} setEvents={setEvents} events={events} setRandomPicks={setRandomPicks} randomPicks={randomPicks} picks={picks} setPicks={setPicks} newGame={newGame} setNewGame={setNewGame}/>,

    '/results' : () => <Results picks={picks} randomEvents={randomPicks} record={record} setRecord={setRecord} chosenSeason={chosenSeason} 
      resetSeason={() => {
        resetSeason(picks, setPicks, setRandomPicks);
      }}
      playAgain={() => {
        playAgain(picks, setPicks);
      }}
      resetGame={() => {
        resetGame(picks, setPicks, record, setRecord, setChosenSeason);
      }}
    />,
    '/record' : () => <Record record={record}/>
  }
  
  const routeResult = useRoutes(routes);

  

  useEffect(() => {
      if(data) {
          setSeasons(data.baseseasons);
      }
  }, [data]);

  

  

  

  return (
    <div className="App">
      <Banner year={chosenSeason} resetPicks={() => {
          resetPicks(picks, setPicks);
          navigate('/');
        }} />
      {
        loading ? 
          <LoadScreen /> : routeResult
      }

      
    </div>
  );
}

export default App;
