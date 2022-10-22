import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Dash from "./Pages/Dashboard/Dash";
import YourNft from "./Pages/Dashboard/YourNft";
import NotConnected from "./Pages/NotConnected/NotConnected";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route element={<NotConnected />} path="/" />
        <Route element={<Dash />} path="/dash">
          <Route element={<YourNft />} path="" index />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
