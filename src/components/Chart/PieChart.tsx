import React from "react";
import { Pie } from "react-chartjs-2";
import { useQuery } from "react-query";
import { fetchWorldWideData } from "../../utils/api";

export default function PieChart() {
  const worldWideDataQuery = useQuery("worldWideData", fetchWorldWideData);

  if (worldWideDataQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (worldWideDataQuery.isError) {
    return <div>Error occurred while fetching data</div>;
  }

  const worldWideData = worldWideDataQuery.data;
  const totalActive = worldWideData.cases - worldWideData.recovered;
  const totalRecovered = worldWideData.recovered;
  const totalDeaths = worldWideData.deaths;

  const pieData = {
    labels: ["Active Cases", "Recovered Cases", "Deaths"],
    datasets: [
      {
        data: [totalActive, totalRecovered, totalDeaths],
        backgroundColor: [
          "rgba(125, 192, 192, 0.6)",
          "rgba(4, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
      },
    ],
  };

  const pieOptions = {
    maintainAspectRatio: true,
    responsive: true,
  };
  return (
    <div className="flex w-full justify-evenly">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Global COVID-19 Data</h2>
        <p>Cases per million: {worldWideData.casesPerOneMillion}</p>
        <p>Deaths per million: {worldWideData.deathsPerOneMillion}</p>
        <p>Recovered per million: {worldWideData.deathsPerOneMillion}</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Cases Breakdown</h2>
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
}
