import "./NotConnected.css";

const NotConnected = () => {
  return (
    <div className="not-connected">
      <div className="connect-box">
        <img src="/assets/logo-inverted.png" alt="" />
        <div>
          <h2>Secure And Efficient P2P Swaps</h2>
          <p>Decentralized NFT Trading with zero fees</p>
        </div>
        <button className="connect-btn">Connect Wallet</button>
      </div>
    </div>
  );
};

export default NotConnected;
