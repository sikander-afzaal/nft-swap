import { Outlet } from "react-router-dom";
import "./styles/Dash.css";

const Dash = () => {
  return (
    <div className="dash">
      <div className="top-bar">
        <div className="left-top">
          <div className="head-tab active-tab">
            <div>
              <img src="/assets/folder.png" alt="" />
              <p>Your NFTs</p>
            </div>
            <p>1</p>
          </div>
          <div className="head-tab">
            <div>
              <img src="/assets/folder.png" alt="" />
              <p>Open Swaps</p>
            </div>
            <p>1</p>
          </div>
          <div className="head-tab">
            <div>
              <img src="/assets/folder.png" alt="" />
              <p>Recent Swaps</p>
            </div>
            <p>1</p>
          </div>
          <button className="create-swap">
            <p>Create A Swap</p>
            <img src="/assets/logo-inverted.png" alt="" />
          </button>
        </div>
        <div className="connected-address connected">
          <div className="dot"></div>
          <h2>7cb83cc...222cf</h2>
        </div>
      </div>
      <div className="bottom-dash">
        <Outlet />
      </div>
    </div>
  );
};

export default Dash;
