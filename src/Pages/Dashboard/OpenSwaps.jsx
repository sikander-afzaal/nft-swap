import "./styles/OpenSwaps.css";

const OpenSwaps = () => {
  return (
    <div className="section">
      <h1 className="title">Open Swaps</h1>
      <p className="desc">
        Here are the swaps you proposed to someone or which were proposed to
        you. The swaps have not been executed yet. You can cancel them at any
        time.
      </p>
      <div className="flex">
        <div className="first-col">
          <div className="open-swap-row">
            <div className="open-col">
              <h3>BNB Added</h3>
              <div className="input-div">
                <input type="number" placeholder="0.00" />
                <img src="/assets/bnb.svg" alt="" />
              </div>
            </div>
            <div className="open-col">
              <h3>Total NFTs</h3>
              <div className="input-div center">
                <input type="number" placeholder="1" />
              </div>
            </div>
          </div>
          <h4>
            <img src="/assets/wallet.svg" alt="" /> 0x50001
          </h4>
        </div>
        <img src="/assets/logo-inverted.png" alt="" className="swap-img" />
        <div className="first-col">
          <div className="open-swap-row">
            <div className="open-col">
              <h3>BNB Added</h3>
              <div className="input-div">
                <input type="number" placeholder="0.00" />
                <img src="/assets/bnb.svg" alt="" />
              </div>
            </div>
            <div className="open-col">
              <h3>Total NFTs</h3>
              <div className="input-div center">
                <input type="number" placeholder="1" />
              </div>
            </div>
          </div>
          <h4>
            <img src="/assets/wallet.svg" alt="" /> 0x50001
          </h4>
        </div>
      </div>
      <div className="space-between">
        <div className="swap-details">
          <h4>Swap Proposed by you</h4>
          <p>Awaiting response from 0xc50002</p>
        </div>
        <button>View Swap</button>
      </div>
    </div>
  );
};

export default OpenSwaps;
