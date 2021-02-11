import React from 'react';
import './CameraMap.scss';
import { Camera } from '../api/cameras';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export interface Props {
  cameras: Camera[];
}

export const CameraMap: React.FC<Props> = ({ cameras }) => {
  return (
    <MapContainer className="camera-map" center={[52.0914, 5.1115]} zoom={13}>
      <TileLayer
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
        accessToken="pk.eyJ1IjoibHVjYS1zY2Fsem90dG8iLCJhIjoiY2tsMTNrN3poMGN2eDJ5bzR0MHp4dDV1OSJ9.-3K2bNTC5WZQ2nHfi43H_w"
        id="mapbox/streets-v11"
        tileSize={512}
        zoomOffset={-1}
      />
      {cameras.map((c) => (
        <Marker key={`${c.latitude};${c.longitude}`} position={[c.latitude, c.longitude]}>
          <Popup>
            {c.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
