import NftBox from "../../Components/NftBox/NftBox";
import "./styles/OwnedNft.css";

const OwnedNft = () => {
  return (
    <div className="section">
      <div className="nft-row">
        <NftBox />
        <NftBox />
        <NftBox />
        <NftBox />
        <NftBox />
      </div>
    </div>
  );
};

export default OwnedNft;
