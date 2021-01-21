import Banner from "./components/Banner/Banner";
import PickCard from "./components/PickCard/PickCard";
import VersusJumbo from "./components/VersusJumbo/VersusJumbo";


function App() {
  return (
    <div className="App">
      <Banner />
      <VersusJumbo homeTeam='Green Bay Packers' awayTeam='Tampa Bay Buccaneers' />
      <PickCard pickQuestion='Test test test?' choiceA='Choice A' choiceB='Choice B'/>
    </div>
  );
}

export default App;
