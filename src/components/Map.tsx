import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Es necesario agregar esta configuración para evitar problemas con los iconos en Leaflet
L.Icon.Default.prototype.options.iconRetinaUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png";
L.Icon.Default.prototype.options.iconUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png";
L.Icon.Default.prototype.options.shadowUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png";

const Map = () => {
  // Coordenadas de la ubicación
  const position: [number, number] = [19.4326, -99.1332]; // Ciudad de México

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      {/* Tile layer para usar OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marcador de la ubicación */}
      <Marker position={position}>
        <Popup>
          Ubicación Ejemplo: Ciudad de México.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
