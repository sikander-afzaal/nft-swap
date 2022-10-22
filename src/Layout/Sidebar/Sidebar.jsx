import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [openSide, setOpenSide] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenSide(false)}
        className={`overlay ${openSide ? "open-overlay" : ""}`}
      ></div>
      <div className="mobile-menu">
        <FontAwesomeIcon
          onClick={() => {
            setOpenSide((prev) => !prev);
          }}
          icon={openSide ? faXmark : faBars}
          className="menu-toggle"
        />
        <img src="/assets/logo.png" alt="" />
      </div>
      <div className={`sidebar ${openSide ? "open-side" : ""}`}>
        <img src="/assets/logo.png" alt="" />
        <div className="main-links">
          <a onClick={() => setOpenSide(false)} href="#">
            <img src="/assets/swap.png" alt="" />
            Swap
          </a>
          <a onClick={() => setOpenSide(false)} href="#">
            <img src="/assets/raffles.png" alt="" />
            Raffles
          </a>
          <a onClick={() => setOpenSide(false)} href="#">
            <img src="/assets/telegram.png" alt="" />
            Telegram
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
