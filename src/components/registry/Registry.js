import photo from "./ss-theodora-christopher.jpg";
import "./Registry.css";

const Registry = () => {
  return (
    <div className="Registry" style={{ backgroundImage: `url(${photo})` }}>
      <div className="Registry-overlay">
        <div className="Registry-text">
          <h1 className="Registry-title">Coming Soon!</h1>
          <h3 className="Registry-tagline">
            Check back here for our registry!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Registry;
