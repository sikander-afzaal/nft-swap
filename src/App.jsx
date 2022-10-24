import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Create from "./Pages/Dashboard/Create";
import Dash from "./Pages/Dashboard/Dash";
import OpenSwaps from "./Pages/Dashboard/OpenSwaps";
import OwnedNft from "./Pages/Dashboard/OwnedNft";
import Review from "./Pages/Dashboard/Review";
import YourNft from "./Pages/Dashboard/YourNft";
import NotConnected from "./Pages/NotConnected/NotConnected";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route element={<NotConnected />} path="/" />
        <Route element={<Dash />} path="/dash">
          <Route element={<OwnedNft />} path="" index />
          <Route element={<YourNft />} path="select-nft" />
          <Route element={<OpenSwaps />} path="open-swap" />
          <Route element={<Review />} path="review-swap" />
          <Route element={<Create />} path="create-swap" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
