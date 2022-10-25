import { Link } from "react-router-dom";

const NotConnected = () => {
  return (
    <div className="not-connected">
      <div className="connected-address connected">
        <div className="dot"></div>
        <h2>0x7247...99e4</h2>
      </div>
      <div className="connect-box">
        <img src="/assets/logo-inverted.png" alt="" />
        <div>
          <h2>Swap Created!</h2>
          <p>
            Your swap has been created. Now your counterparty needs to add their
            NFTs to your swap proposal.{" "}
          </p>
        </div>
        <Link to={"/dash/open-swap"} className="connect-btn">
          Check Open Swaps
        </Link>
      </div>
    </div>
  );
};

export default NotConnected;
