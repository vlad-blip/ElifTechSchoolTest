import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { memo } from "react";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 49.5874086,
  lng: 34.5538147,
};

export default memo(function Map() {
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_API}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker label={"KFC"} position={{ lat: 49.5874086, lng: 34.5538147 }} />
        <Marker
          label={"McDonald's"}
          position={{ lat: 49.6001143, lng: 34.2028822 }}
        />
      </GoogleMap>
    </LoadScript>
  );
});
