import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, LatLng } from "leaflet";
import { useQuery } from "react-query";
import { fetchCountryData } from "../../utils/api";

export default function CasesMap() {
  // Fetch data using React Query

  const countriesDataQuery = useQuery("countriesData", fetchCountryData);

  // Check if data is loading or an error occurred
  if (countriesDataQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (countriesDataQuery.isError) {
    return <div>Error occurred while fetching data</div>;
  }

  // Access the data from the queries

  const countriesData = countriesDataQuery.data;

  const position = new LatLng(10.505, -0.09);

  const redIcon = new Icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });
  return (
    <div className="h-[40rem] rounded mb-8">
      <h2 className="text-xl font-bold mb-4">COVID-19 Data by Country</h2>
      <MapContainer
        center={position}
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: "35rem", minHeight: "35rem" }}
      >
        <TileLayer url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`} />
        {countriesData.map((country: any) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={redIcon}
          >
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Active Cases: {country.active}</p>
                <p>Recovered Cases: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
