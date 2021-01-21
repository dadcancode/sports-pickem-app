import Banner from "./components/Banner/Banner";
import VersusJumbo from "./components/VersusJumbo/VersusJumbo";


function App() {
  return (
    <div className="App">
      <Banner />
      <VersusJumbo homeTeam='Green Bay Packers' awayTeam='Tampa Bay Buccaneers' />
    </div>
  );
}

export default App;
