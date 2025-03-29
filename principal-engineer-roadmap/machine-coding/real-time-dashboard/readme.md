## Create a Real-Time Data Dashboard

### Context

Your application needs a dashboard to visualize real-time data updates from a WebSocket API.

### Task

1. Develop a dashboard component that displays real-time data.
2. Implement charts or graphs to visualize the data.
3. Ensure the dashboard updates smoothly with new data.

### Expected Implementations

- Setting up a WebSocket connection to receive real-time data.
- Using a charting library (e.g., D3.js, Chart.js) for data visualization.
- Handling data updates and re-rendering charts efficiently.
- Implementing error handling and reconnection logic for WebSocket.
- Ensuring the dashboard is responsive and user-friendly.

---

## Solution

### ✅ Tech Stack and Choices

- **React with TypeScript**: for type safety and robust UI structure.
- **WebSocket**: native WebSocket API for real-time data streaming.
- **Chart.js (with React wrapper - `react-chartjs-2`)**: for clear and efficient data visualization.
- **Reconnection and Error Handling Logic**: ensures robustness in production environments.

---

### 📌 Project Structure

```
RealtimeDashboard/
│
├── components/
│   └── LineChart.tsx
│
├── hooks/
│   └── useWebSocket.ts
│
└── Dashboard.tsx
```

## 🚀 Complete Implementation

### 1. WebSocket Hook (`useWebSocket.ts`)

Reusable hook for WebSocket connection management with automatic reconnection:

```tsx
import { useEffect, useRef, useState } from "react";

interface WebSocketHook {
  data: number[];
  error: string | null;
}

export function useWebSocket(url: string): WebSocketHook {
  const [data, setData] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);
  const ws = useRef<WebSocket | null>(null);
  const reconnectTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let isUnmounted = false;

    const connect = () => {
      ws.current = new WebSocket(url);

      ws.current.onopen = () => {
        console.log("WebSocket connected");
        setError(null);
      };

      ws.current.onmessage = (event) => {
        const incomingData = JSON.parse(event.data);
        setData((prev) => [...prev.slice(-49), incomingData.value]);
      };

      ws.current.onerror = (event) => {
        console.error("WebSocket error", event);
        setError("WebSocket encountered an error");
      };

      ws.current.onclose = () => {
        if (!isUnmounted) {
          console.log("WebSocket disconnected, retrying...");
          reconnectTimeout.current = setTimeout(connect, 3000);
        }
      };
    };

    connect();

    return () => {
      isUnmounted = true;
      ws.current?.close();
      if (reconnectTimeout.current) clearTimeout(reconnectTimeout.current);
    };
  }, [url]);

  return { data, error };
}
```

### 2. Chart Component (`LineChart.tsx`)

Uses `react-chartjs-2` and Chart.js to display incoming data:

```tsx
import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

interface Props {
  data: number[];
}

const LineChart: React.FC<Props> = ({ data }) => {
  const chartData = {
    labels: data.map((_, i) => i + 1),
    datasets: [
      {
        label: "Real-time Data",
        data,
        fill: true,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    animation: {
      duration: 500,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="w-full h-64">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
```

### 3. Dashboard Component (`Dashboard.tsx`)

Main component integrating everything:

```tsx
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
```

## ⚙️ Explanation of Implementation

### ✅ WebSocket Hook (`useWebSocket`)

- **Reconnection Logic**: Automatically reconnects after a 3-second delay when the connection drops, providing resilience.
- **State Management**: Uses React state (`useState`) to handle incoming data, and clean-up (`useEffect` cleanup) ensures no memory leaks or dangling connections.
- **Error Handling**: Captures errors, providing clear feedback to the user interface.

---

### ✅ Chart Component (`LineChart`)

- **Smooth Updates**: Uses Chart.js animations for smooth, real-time updates.
- **Performance-Friendly**: Maintains a limited history of points (last 50 values) for clarity and performance.
- **Responsive Design**: Automatically adjusts to container dimensions, ensuring consistent UI across devices.

---

### ✅ Dashboard Component

- **Clear Structure**: Combines WebSocket connection and chart rendering, offering a maintainable and clear structure.
- **Error Display**: User-friendly error notifications enhance UX.

---

## 📌 Testing and Validation

- **WebSocket Reliability**: Simulate connection drops and verify automatic reconnection.
- **Real-time Data Flow**: Ensure smooth chart updates without flicker or lag.
- **Responsive Behavior**: Test across devices and screen sizes.

---

## 🎯 Why This Solution Works Well

- **Scalable**: Easy to extend by adding new chart types or additional data streams.
- **Robust Error Handling**: Reliable in production-grade applications.
- **Responsive and User-Friendly**: Intuitive real-time visualization, enhancing user experience.
