import "./App.css";
import Sidebar from "./Layout/Sidebar/Sidebar";
import NotConnected from "./Pages/NotConnected/NotConnected";

function App() {
  return (
    <div className="App">
      <div className="connected-address">
        <div className="dot"></div>
        <h2>Not Connected</h2>
      </div>
      <Sidebar />
      <NotConnected />
    </div>
  );
}

export default App;
