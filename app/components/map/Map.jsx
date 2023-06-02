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
    <LoadScript googleMapsApiKey="AIzaSyA6DvWb23jFsik-SMp5-JQpPzi5Afca5TM">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker label={"KFC"} position={{ lat: 49.5874086, lng: 34.5538147 }} />
        <Marker
          label={"McDonald's"}
          position={{ lat: 49.6001143, lng: 34.2028822 }}
        />
      </GoogleMap>
    </LoadScript>
  );
});
