import "./styles/Resolve.css";

import NftBox from "../../Components/NftBox/NftBox";

const Resolve = () => {
  return (
    <div className="section">
      <h1 className="title">Resolve Swap</h1>
      <p className="desc">
        You created a swap offer for 0xc55…000. Now it's their turn. They have
        to respond to your offer now to make it work.
      </p>
      <div className="border steps-div">
        <div className="left-step">
          <h2>1</h2>
          <div className="desc-step">
            <h4>Step 1 of 2</h4>
            <h3>Resolve Swap</h3>
            <p>Select the NFTs you want to swap.</p>
          </div>
        </div>
        <div className="btn-div">
          <button className="back">Back</button>
          <button className="cancel">Cancel Swap</button>
        </div>
      </div>
      <div className="flex gap">
        <div className="flex-col">
          <div className="head-offer">
            <h1>Your Offer</h1>
            <h2>1 BNB</h2>
            <h2>1 NFTs</h2>
          </div>
          <div className="offered-nft">
            <div className="add-bnb">
              <div className="input-div">
                <input type="number" readOnly placeholder="1 BNB" />
                <img src="/assets/bnb.svg" alt="" />
              </div>
            </div>
            <NftBox />
          </div>
        </div>
        <img src="/assets/logo-inverted.png" alt="" className="swap-img" />
        <div className="flex-col">
          <div className="head-offer">
            <h1>Offered NFTs</h1>
            <h2>0 BNB</h2>
            <h2>0 NFTs</h2>
          </div>
          <div className="offered-nft">
            <div className="add-bnb">
              <h1>No NFTs Selected</h1>
              <p>Waiting for 0xc55…4c1 to select the NFTs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resolve;
