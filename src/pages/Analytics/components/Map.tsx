import GoogleMapReact from "google-map-react";
import { UserData } from "../../../types";
import LocationPin from "./LocationPin";

const Map = ({
  location,
  userLocations,
  zoomLevel,
}: {
  location: { address: string; lat: number; lng: number };
  userLocations: UserData[];
  zoomLevel: number;
}) => (
  <div className="h-96 w-full">
    <GoogleMapReact
      //TODO: Keep API Key Secret
      bootstrapURLKeys={{ key: "AIzaSyAAKRoc5D0hZv0BmpDuOLHL3n98Zm5CA0E" }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
    >
      {...userLocations.map((user: UserData) => {
        return (
          <LocationPin
            gender={user.gender}
            lng={user.location.geoPoint.lon}
            lat={user.location.geoPoint.lat}
          />
        );
      })}
    </GoogleMapReact>
  </div>
);

export default Map;
