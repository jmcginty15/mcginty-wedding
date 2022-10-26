import photo from "../home/st-james-exterior.jpg";
import "./Photos.css";

const Photos = () => {
  return (
    <div className="Photos" style={{ backgroundImage: `url(${photo})` }}>
      <div className="Photos-overlay">
        <div className="Photos-text">
          <h1 className="Photos-title">Coming Soon!</h1>
          <h3 className="Photos-tagline">
            Check back here for engagement and wedding photos!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Photos;
