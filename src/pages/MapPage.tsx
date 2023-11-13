import React, { useState } from "react";
import "./index.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapPage: React.FC = () => {
  const [lat, setLat] = useState<number>(0);
  const [long, setLong] = useState<number>(0);

  return (
    <>
      <div className="container mt-5">
        <div className="card mb-5">
            <h2 className="text-center">Latitude & Longitude</h2>
          <div className="card-body">
            <input type="number" className="form-control" onChange={(e) => setLat(Number(e.target.value))} />
          </div>
        </div>
        {lat && long !== 0 ? <MapRender lat={lat} long={long} /> : null}
      </div>
    </>
  );
};

const MapRender: React.FC<{ lat: number; long: number }> = ({ lat, long }) => {
  return (
    <>
      <MapContainer center={[lat, long]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, long]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapPage;
