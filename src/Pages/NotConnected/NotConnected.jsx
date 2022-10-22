import { Link } from "react-router-dom";
import "./NotConnected.css";

const NotConnected = () => {
  return (
    <div className="not-connected">
      <div className="connected-address">
        <div className="dot"></div>
        <h2>Not Connected</h2>
      </div>
      <div className="connect-box">
        <img src="/assets/logo-inverted.png" alt="" />
        <div>
          <h2>Secure And Efficient P2P Swaps</h2>
          <p>Decentralized NFT Trading with zero fees</p>
        </div>
        <Link to={"/dash"} className="connect-btn">
          Connect Wallet
        </Link>
      </div>
    </div>
  );
};

export default NotConnected;
