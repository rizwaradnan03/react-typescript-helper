import React, { useEffect, useState } from "react";
import "./index.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapPage: React.FC = () => {
  const [lat, setLat] = useState<number>(0);
  const [long, setLong] = useState<number>(0);

  const handleChangeLatOrLong = () => {
    return(
      <>
        {lat && long !== 0 ? <MapRender lat={lat} long={long} /> : null}
      </>
    )
  }

  useEffect(() => {
    handleChangeLatOrLong()
  }, [lat, long])

  return (
    <>
      <div className="container mt-5">
        <div className="card mb-5">
          <h2 className="text-center">Latitude & Longitude</h2>
          <div className="card-body">
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                onChange={(e) => setLat(Number(e.target.value))}
                placeholder="Masukkan Latitude"
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                onChange={(e) => setLong(Number(e.target.value))}
                placeholder="Masukkan Longitude"
              />
            </div>
          </div>
        </div>
        {handleChangeLatOrLong()}
      </div>
    </>
  );
};

const MapRender: React.FC<{ lat: number; long: number }> = ({ lat, long }) => {
  console.log('lattt', lat)
  return (
    <>
      <div className="card">
        <div className="card-body">
          <MapContainer center={[lat, long]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, long]}>
              {/* <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup> */}
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default MapPage;
