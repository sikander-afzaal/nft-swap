import "./NftBox.css";

const NftBox = ({ approve }) => {
  return (
    <div className="nft-box">
      {approve && <button className="approve">Approve</button>}
      <img src="/assets/bull.png" alt="" />
      <h2>Lil Bull #1</h2>
      <p>Lil Bulls</p>
    </div>
  );
};

export default NftBox;
