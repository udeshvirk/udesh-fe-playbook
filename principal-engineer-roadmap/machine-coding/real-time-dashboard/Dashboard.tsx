import React from "react";
import { useWebSocket } from "./hooks/useWebSocket";
import LineChart from "./components/LineChart";

const Dashboard: React.FC = () => {
  const { data, error } = useWebSocket("wss://example.com/data");

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-xl font-semibold mb-4">Real-Time Dashboard</h1>

      {error && <div className="mb-2 text-red-500">Error: {error}</div>}

      <LineChart data={data} />
    </div>
  );
};

export default Dashboard;
