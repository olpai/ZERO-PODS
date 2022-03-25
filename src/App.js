import { getLastRaceResults } from "./api";

function App() {
  return (
    <div className="App">
      <button onClick={getLastRaceResults}>Get last race results</button>
    </div>
  );
}

export default App;
