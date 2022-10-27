import { GoogleMap, Marker } from "@react-google-maps/api";
import "./Map.css";

const containerStyle = {
  width: "90%",
  maxWidth: "400px",
  height: "300px",
  margin: "auto",
};
const coordinates = {
  church: { lat: 36.11298, lng: -97.04665 },
  reception: { lat: 36.121429, lng: -97.067307 },
  hotel: { lat: 36.120438, lng: -97.068813 },
  airport: { lat: 35.395142, lng: -97.596077 },
};

const Map = ({ location }) => {
  const mapCoordinates = coordinates[location];
  const zoomLevel = location === "airport" ? 12 : 15;

  return (
    <div className="Map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCoordinates}
        zoom={zoomLevel}
      >
        <Marker position={mapCoordinates} />
      </GoogleMap>
    </div>
  );
};

export default Map;
