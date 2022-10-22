import "./styles/YourNft.css";

const YourNft = () => {
  return (
    <div className="your-nft">
      <h1>Select Your NFTs</h1>
      <p>
        Select the NFTs you want to swap. You can also add BNB to the swap. Use
        the search bar to find certain NFTs. Once ready, hit “Next”.
      </p>
      <div className="steps-div">
        <div className="left-step">
          <h2>1</h2>
          <div className="desc-step">
            <h4>Step 1 of 2</h4>
            <h3>Creating Swap</h3>
            <p>Select the NFTs you want to swap.</p>
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
      <div className="between-row">
        <div className="filters">
          <h2 className="filter">0 BNB</h2>
          <h2 className="filter">1 NFT</h2>
          <h2 className="filter">
            Clear all <img src="/assets/cross.png" alt="" />
          </h2>
        </div>
        <div className="input-div">
          <input type="text" placeholder="Search Your NFTs" />
          <img src="/assets/search.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default YourNft;
