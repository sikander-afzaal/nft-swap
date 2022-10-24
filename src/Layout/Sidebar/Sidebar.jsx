import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <Link end to="/dash">
          <img src="/assets/logo.png" alt="" />
        </Link>
      </div>
      <div className={`sidebar ${openSide ? "open-side" : ""}`}>
        <Link end to="/dash">
          <img src="/assets/logo.png" alt="" />
        </Link>
        <div className="main-links">
          <a onClick={() => setOpenSide(false)} href="#">
            <img
              style={{ transform: "rotate(-90deg)" }}
              src="/assets/swap.svg"
              alt=""
            />
            <p>Swap</p>
          </a>
          <a onClick={() => setOpenSide(false)} href="#">
            <img src="/assets/raffle.svg" alt="" />
            <p>Raffles</p>
          </a>
          <a onClick={() => setOpenSide(false)} href="#">
            <img src="/assets/telegram.svg" alt="" />
            <p>Telegram</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
