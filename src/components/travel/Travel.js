import Map from "./Map";
import "./Travel.css";

const Travel = () => {
  return (
    <div className="Travel">
      <h1 className="Travel-title">Important Locations</h1>
      <div className="Travel-body">
        <div className="Travel-info">
          <h5 className="Travel-subtitle">Ceremony location</h5>
          St James Orthodox Christian Church
          <br />
          826 S Hall St
          <br />
          Stillwater, OK 74074
        </div>
        <Map location="church" />
        <div className="Travel-info">
          <h5 className="Travel-subtitle">Reception location</h5>
          Oklahoma State University Student Union
          <br />
          100 S Hester St
          <br />
          Stillwater, OK 74078
        </div>
        <Map location="reception" />
        <div className="Travel-info">
          <h5 className="Travel-subtitle">Reserved hotel</h5>
          The Atherton Hotel at Oklahoma State University
          <br />
          H103 Student Union Blvd
          <br />
          Stillwater, OK 74078
          <br />
          <br />
          Call (405) 372-2445 by January 4 to reserve your room at the hotel.
        </div>
        <Map location="hotel" />
        <div className="Travel-info">
          <h5 className="Travel-subtitle">Nearest airport</h5>
          Will Rogers World Airport
          <br />
          7100 Terminal Dr
          <br />
          Oklahoma City, OK 73159
        </div>
        <Map location="airport" />
      </div>
    </div>
  );
};

export default Travel;
