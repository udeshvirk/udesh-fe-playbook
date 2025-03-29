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
