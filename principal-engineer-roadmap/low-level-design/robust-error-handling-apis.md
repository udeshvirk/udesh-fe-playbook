## Implement Robust Error Handling for API Requests

### **Context:**

Your application relies heavily on API requests, and it's crucial to handle errors gracefully to ensure a good user experience.

---

### **Task:**

1. Design a strategy for handling errors from API requests.
2. Implement error handling logic in a service or utility function.
3. Ensure that the user is informed about errors in a user-friendly manner.

---

### **Expected Discussion Points:**

- Handling different types of errors (network errors, server errors, client errors).
- Retrying failed requests with exponential backoff.
- Centralized error handling (e.g., using an error boundary in React).
- Displaying user-friendly error messages and providing recovery options.
- Logging errors for monitoring and debugging.

---

## **1. Design Strategy**

### **Error Types and Handling Approaches**

- **Network Errors:**

  - No connection, DNS issues, or timeouts.
  - **Handling:** Retry with exponential backoff, inform the user of connectivity issues.

- **Server Errors (5xx):**

  - Issues on the server-side.
  - **Handling:** Optionally retry, display a friendly “service unavailable” message.

- **Client Errors (4xx):**
  - Invalid requests or unauthorized access.
  - **Handling:** Inform the user with clear, actionable error messages.

---

### **Key Components of the Strategy**

1. **Centralized Error Handling:**

   - Use a dedicated service or utility function that wraps API requests.
   - Optionally integrate an error boundary (in React) to catch unhandled errors.

2. **Exponential Backoff:**

   - Retry transient errors (network or 5xx) using increasing delay intervals.

3. **User-Friendly Messaging:**

   - Map error codes to user-friendly messages and recovery options (e.g., “Please check your internet connection”).

4. **Logging and Monitoring:**
   - Log errors to a remote monitoring service (e.g., Sentry, LogRocket) for debugging and alerting.

---

## **2. Implementation Example**

### **A. API Utility with Error Handling and Retry**

- Centralizes error handling logic.
- Implements retry logic with exponential backoff for transient errors.
- Maps error codes to user-friendly messages.

```tsx
// apiService.ts
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Helper: Sleep for a given number of milliseconds
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface ApiError extends Error {
  status?: number;
  response?: any;
}

const MAX_RETRIES = 3;
const INITIAL_BACKOFF = 500; // in ms

export async function apiRequest<T = any>(
  config: AxiosRequestConfig,
  retryCount = 0
): Promise<AxiosResponse<T>> {
  try {
    const response = await axios(config);
    return response;
  } catch (error: any) {
    const err: ApiError = new Error(error.message);
    err.status = error.response ? error.response.status : undefined;
    err.response = error.response;

    // Check if error is retryable (network error or server error)
    const isRetryable =
      !error.response ||
      (error.response.status >= 500 && error.response.status < 600);

    if (isRetryable && retryCount < MAX_RETRIES) {
      const backoff = INITIAL_BACKOFF * 2 ** retryCount;
      console.warn(
        `Request failed, retrying in ${backoff}ms... (${
          retryCount + 1
        }/${MAX_RETRIES})`
      );
      await sleep(backoff);
      return apiRequest(config, retryCount + 1);
    }

    // Log error for monitoring
    console.error("API request failed:", err);

    // Rethrow error to be handled by caller
    throw err;
  }
}
```

---

### **B. Using the API Utility in a Component**

- Demonstrates how to call the API utility.
- Displays user-friendly error messages in the UI.
- Provides actionable feedback to the user.

```tsx
// ExampleComponent.tsx
import React, { useState, useEffect } from "react";
import { apiRequest } from "./apiService";

const ExampleComponent: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiRequest({ url: "/api/data", method: "GET" });
        setData(response.data);
      } catch (err: any) {
        // Map error to a user-friendly message
        if (!err.status) {
          setError("Network error: Please check your internet connection.");
        } else if (err.status >= 500) {
          setError("Server error: Please try again later.");
        } else if (err.status === 401) {
          setError("Unauthorized: Please login to continue.");
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      }
    }
    fetchData();
  }, []);

  if (error) {
    return (
      <div role="alert" style={{ color: "red", padding: "1rem" }}>
        {error}
      </div>
    );
  }

  return (
    <div>
      <h1>Data Loaded Successfully</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ExampleComponent;
```

---

## **3. Discussion of Key Points**

### **Centralized Error Handling**

- **Utility Function:**  
  The `apiRequest` function centralizes error handling and retry logic.
- **Error Mapping:**  
  Errors are translated into user-friendly messages in the component, ensuring a consistent user experience.

---

### **Exponential Backoff and Retry**

- **Retry Mechanism:**  
  Retries transient errors (network issues or 5xx errors) up to a maximum number of attempts.
- **Exponential Backoff:**  
  Each retry waits longer than the previous one to reduce load and give the server time to recover.

---

### **User-Friendly Error Messaging**

- **Visual Feedback:**  
  Errors are displayed in a dedicated `<div>` with `role="alert"`, ensuring screen readers announce the error.
- **Actionable Feedback:**  
  Messages advise the user on what to do (e.g., check internet connection, try again later).

---

### **Logging and Monitoring**

- **Console Logging:**  
  The API utility logs errors to the console. In production, integrate with a monitoring service (e.g., Sentry).
- **Error Boundary (Optional):**  
  For React apps, consider wrapping parts of your UI in an Error Boundary to catch render errors and display fallback UI.

---

## **4. Testing and Performance Measurement**

### **Automated Testing:**

Write unit tests for the `apiRequest` function to simulate various error scenarios.

### **Manual Testing:**

Use tools like Postman to simulate network errors, 5xx, and 4xx responses.

### **Performance Monitoring:**

Monitor retry behavior and response times using browser dev tools or a logging service.

---

## **Summary**

This approach to robust error handling:

- **Centralizes API request logic** in a reusable utility.
- **Handles different error types** with retry logic (exponential backoff) and user-friendly messaging.
- **Provides a clear path for logging and monitoring errors,** which is critical for troubleshooting in production.
- **Ensures a good user experience** by displaying actionable and accessible error messages.
