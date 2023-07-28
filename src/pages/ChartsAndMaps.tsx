import "chartjs-adapter-date-fns";
import { enUS } from "date-fns/locale";
import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js/auto";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useQuery } from "react-query";
import {
  fetchCountryData,
  fetchGraphData,
  fetchWorldWideData,
} from "../utils/api";
import { Icon, LatLng } from "leaflet";
import PieChart from "../components/Chart/PieChart";
import LineGraph from "../components/Chart/LineGraph";
import CasesMap from "../components/Chart/CasesMap";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, TimeScale);

export default function ChartsAndMaps() {
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

  const position = new LatLng(51.505, -0.09);

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

  // pie chart

  console.log(countriesData);
  return (
    <div className=" mx-auto p-4 overflow-y-scroll h-[90vh]">
      {/* Map */}
      <CasesMap />
      <PieChart />
      {/* Line graph */}
      <LineGraph />

    </div>
  );
}
