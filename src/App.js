import { useEffect, useState } from "react";
import axios from 'axios'
import Banner from "./components/Banner/Banner";
import PickCard from "./components/PickCard/PickCard";
import VersusJumbo from "./components/VersusJumbo/VersusJumbo";


function App() {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/teams/index')
      .then(resp => resp.json())
      .then(json => {
        console.log(json)
      })
  })


  return (
    <div className="App">
      <Banner />
      <VersusJumbo homeTeam='Green Bay Packers' awayTeam='Tampa Bay Buccaneers' />
      <PickCard pickQuestion='Test test test?' choiceA='Choice A' choiceB='Choice B'/>
    </div>
  );
}

export default App;
