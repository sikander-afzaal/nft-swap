import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [openSide, setOpenSide] = useState(false);
  useEffect(() => {
    if (openSide) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }
  }, [openSide]);

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
            <p>Swap</p>
          </a>
          <a onClick={() => setOpenSide(false)} href="#">
            <img src="/assets/raffles.png" alt="" />
            <p>Raffles</p>
          </a>
          <a onClick={() => setOpenSide(false)} href="#">
            <img src="/assets/telegram.png" alt="" />
            <p>Telegram</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
