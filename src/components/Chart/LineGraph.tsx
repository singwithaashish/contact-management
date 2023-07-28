import { enUS } from "date-fns/locale";
import React from "react";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import { fetchGraphData } from "../../utils/api";

export default function LineGraph() {
  const graphDataQuery = useQuery("graphData", fetchGraphData);

  if (graphDataQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (graphDataQuery.isError) {
    return <div>Error occurred while fetching data</div>;
  }

  const graphData = graphDataQuery.data;
  // Process the graph data to convert it into the required format for the Line chart
  const processedGraphData = Object.keys(graphData.cases).map((date) => {
    return {
      x: new Date(date),
      y: graphData.cases[date],
    };
  });
  const deathsData = Object.entries(graphData.deaths).map(([date, value]) => ({
    x: new Date(date),
    y: value,
  }));

  const recoveredData = Object.entries(graphData.recovered).map(
    ([date, value]) => ({
      x: new Date(date),
      y: value,
    })
  );

  const chartData = {
    datasets: [
      {
        label: "Cases",
        data: processedGraphData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Deaths",
        data: deathsData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
      {
        label: "Recovered",
        data: recoveredData,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: true,
    scales: {
      x: {
        type: "time" as const,
        time: {
          parser: "MM/DD/YY",
          tooltipFormat: "mmm dd, yyyy",
        },
        adapters: {
          date: {
            locale: enUS,
          },
        },
      },
      y: {
        beginAtZero: true,
        // height: 30,
      },
    },
  };
  return (
    <div className="mb-8 bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-4">Cases Fluctuation</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}
