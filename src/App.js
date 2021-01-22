import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import PickCard from "./components/PickCard/PickCard";
import { getTwoDiff } from "./components/services";
import VersusJumbo from "./components/VersusJumbo/VersusJumbo";


function App() {

  const [teams, setTeams] = useState();
  const [opponents, setOpponents] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/league/index')
      .then(resp => resp.json())
      .then(json => {
        setTeams(json);
      })
  }, [])

  useEffect(() => {
    if(teams) {
      let matchup = getTwoDiff(teams);
      setOpponents(matchup);
    }
  }, [teams])


  return (
    <div className="App">
      <Banner />
      {opponents && <><VersusJumbo homeTeam={opponents[0]} awayTeam={opponents[1]} />
      <PickCard pickQuestion='Who will win?' choiceA={opponents[0]} choiceB={opponents[1]}/></>}
      
    </div>
  );
}

export default App;
