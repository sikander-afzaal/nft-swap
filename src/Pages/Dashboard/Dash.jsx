import { Link, NavLink, Outlet } from "react-router-dom";
import "./styles/Dash.css";

const Dash = () => {
  return (
    <div className="dash">
      <div className="top-bar">
        <div className="left-top">
          <NavLink
            end
            to={"/dash"}
            className={({ isActive }) =>
              isActive ? "active-tab head-tab" : "head-tab"
            }
          >
            <div>
              <img src="/assets/folder.svg" alt="" />
              <p>Your NFTs</p>
            </div>
            <p>1</p>
          </NavLink>
          <NavLink
            to={"/dash/open-swap"}
            className={({ isActive }) =>
              isActive ? "active-tab head-tab" : "head-tab"
            }
          >
            <div>
              <img src="/assets/folder.svg" alt="" />
              <p>Open Swaps</p>
            </div>
            <p>1</p>
          </NavLink>
          <NavLink
            to={"/dash/recent-swap"}
            className={({ isActive }) =>
              isActive ? "active-tab head-tab" : "head-tab"
            }
          >
            <div>
              <img src="/assets/folder.svg" alt="" />
              <p>Recent Swaps</p>
            </div>
            <p>1</p>
          </NavLink>
          <Link to={"/dash/create-swap"} className="create-swap">
            <p>Create A Swap</p>
            <img src="/assets/logo-inverted.png" alt="" />
          </Link>
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
