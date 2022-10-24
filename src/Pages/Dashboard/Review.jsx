import NftBox from "../../Components/NftBox/NftBox";
import "./styles/Review.css";

const Review = () => {
  return (
    <div className="section">
      <h1 className="title">Review Swap</h1>
      <p className="desc">
        Double check the swap details! If you press Accept, After this point the
        escrow contract will execute the trade.
      </p>
      <div className="steps-div">
        <div className="left-step">
          <h2>2</h2>
          <div className="desc-step">
            <h4>Step 2 of 2</h4>
            <h3>Answering Swap</h3>
          </div>
        </div>
        <div className="btn-div">
          <button className="cancel">Cancel</button>
          <button className="accept">Accept Swap</button>
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
                <img src="/assets/dabba.png" alt="" />
              </div>
            </div>
            <NftBox approve />
          </div>
          <button className="add-more">Add More NFTs</button>
        </div>
        <img src="/assets/logo-inverted.png" alt="" className="swap-img" />
        <div className="flex-col">
          <div className="head-offer">
            <h1>Offered NFTs</h1>
            <h2>1 NFTs</h2>
          </div>
          <div className="offered-nft">
            <NftBox />
          </div>
        </div>
      </div>
      <div className="note">
        We need to be able to transfer tokens on your behalf. You can always
        revoke approvals. Please click the 'Approve' button on the NFT
      </div>
    </div>
  );
};

export default Review;
