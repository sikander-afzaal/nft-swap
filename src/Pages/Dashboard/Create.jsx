import "./styles/Create.css";

import NftBox from "../../Components/NftBox/NftBox";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div className="section">
      <h1 className="title">Create The Swap</h1>
      <p className="desc">
        Approve your NFTs. This is an escrow contract. In order to transfer
        tokens on your behalf, we need your approval to do so. Wait for the
        approval transaction do be confirmed before continuing. Enter the wallet
        you wish to trade with and create the swap.
      </p>
      <div className="steps-div">
        <div className="left-step">
          <h2>2</h2>
          <div className="desc-step">
            <h4>Step 2 of 2</h4>
            <h3>Creating Swap</h3>
            <p>
              Grant approval for your NFTs and add the counterpart's wallet
              address
            </p>
          </div>
        </div>
        <div className="btn-div">
          <button className="back">
            <img src="/assets/arrow-left.png" alt="" />
            Back
          </button>
          <button className="next">
            Next
            <img src="/assets/arrow-right.png" alt="" />
          </button>
        </div>
      </div>
      <div className="note">
        We need to be able to transfer tokens on your behalf. You can always
        revoke approvals. Please click the 'Approve' button on the NFT
      </div>
      <div className="flex gap">
        <div className="flex-col">
          <div className="head-offer">
            <h1>Your Offer</h1>
            <h2>0 BNB</h2>
            <h2>1 NFTs</h2>
          </div>
          <div className="offered-nft">
            <NftBox approve />
          </div>
          <Link to={"/dash/select-nft"} className="add-more">
            Add More NFTs
          </Link>
        </div>
        <img src="/assets/logo-inverted.png" alt="" className="swap-img" />
        <div className="flex-col">
          <div className="head-offer">
            <h1>Recipient</h1>
          </div>
          <div className="input-div">
            <img src="/assets/wallet.svg" alt="" />
            <input type="text" placeholder="Enter Recipient’s Wallet Address" />
          </div>
          <p>
            Make sure you entered the correct address. Once you’ve created the
            swap and confirmed the transaction with your wallet, your assets
            will move into the escrow contract until the swap is executed. Your
            counterpart needs to first add their NFTs. Then it is up to you to
            do the final confirmation of the swap. You can always cancel and get
            them back as long as they are in the escrow, you just need to pay
            the gas fees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Create;
