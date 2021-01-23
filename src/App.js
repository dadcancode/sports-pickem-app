import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import LoadScreen from "./components/LoadScreen/LoadScreen";
import PickCard from "./components/PickCard/PickCard";
import { getTwoDiff } from "./components/services";
import VersusJumbo from "./components/VersusJumbo/VersusJumbo";
import './App.css';
import SubmitPicks from "./components/SubmitPicks/SubmitPicks";
import ChooseSeason from "./components/ChooseSeason/ChooseSeason";


function App() {

  const [teams, setTeams] = useState();
  const [opponents, setOpponents] = useState();
  const [loading, setLoading] = useState(true)

  


  return (
    <div className="App">
      <Banner />
      <ChooseSeason />
      {/* {
        loading ? 
          <LoadScreen /> : 
          <>
            <VersusJumbo homeTeam={opponents[0]} awayTeam={opponents[1]} />
            <PickCard pickQuestion='Who will win?' choiceA={opponents[0]} choiceB={opponents[1]}/>
            <PickCard pickQuestion='Most Passing Yards?' choiceA={opponents[0]} choiceB={opponents[1]}/>
            <PickCard pickQuestion='Most Rushing Yards?' choiceA={opponents[0]} choiceB={opponents[1]}/>
            <PickCard pickQuestion='Most Sacks?' choiceA={opponents[0]} choiceB={opponents[1]}/>
            <SubmitPicks />
          </>
      } */}
      
    </div>
  );
}

export default App;
