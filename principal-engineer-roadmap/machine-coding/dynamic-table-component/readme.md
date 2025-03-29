### Develop a Dynamic Table Component

#### Context: Your web application requires a dynamic table component that can display data, sort columns, and handle pagination.

Here's a structured, detailed approach to develop a robust and reusable **Dynamic Table Component**. I'll walk you through the solution clearly, and then provide a well-documented React + TypeScript implementation:

---

## ✅ **Component Requirements**

Your dynamic table component should have the following capabilities:

1.  **Data Rendering**: Display tabular data dynamically from provided datasets.
2.  **Sortable Columns**: Allow users to sort data by columns (ascending & descending).
3.  **Pagination**: Manage pagination effectively (page number, page size).

---

## 📌 **Implementation Approach**

To ensure maintainability, scalability, and clarity, the component should follow these principles:

- **Reusable & Generic**: Accept data and column configuration through props.
- **Type-safe**: Leverage TypeScript for type safety and better development experience.
- **Composability**: Easily extensible (for future features like filtering, actions, etc.).

---

## 🛠 **Detailed Technical Approach**

### 1. Define Props clearly:

- **`columns`**: Array of column definitions with labels, keys, and sortable flag.
- **`data`**: Array of generic type records to be displayed.
- **`pagination`**: Page number and page size options.

### 2. Sorting Mechanism:

- Manage sorting state (`columnKey` and sort `direction`) internally.
- Sort data using JavaScript's built-in sort function or external libraries if needed.

### 3. Pagination Logic:

- Calculate visible data subset based on page and pageSize.
- Include controls to navigate pages and adjust pageSize dynamically.

---

## 🚀 **Complete Implementation (React + TypeScript)**

Here's a concise, fully-working Dynamic Table component:

```tsx
import React, { useState, useMemo } from "react";

interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  initialPageSize?: number;
}

function DynamicTable<T extends Record<string, any>>({
  data,
  columns,
  initialPageSize = 10,
}: TableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: "ascending" | "descending";
  } | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const sortedData = useMemo(() => {
    if (!sortConfig) return data;

    const sorted = [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === "ascending" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === "ascending" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [data, sortConfig]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const handleSort = (column: Column<T>) => {
    if (!column.sortable) return;

    setSortConfig((prev) => {
      if (prev?.key === column.key) {
        return {
          key: column.key,
          direction:
            prev.direction === "ascending" ? "descending" : "ascending",
        };
      }
      return { key: column.key, direction: "ascending" };
    });
  };

  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <div className="overflow-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="px-4 py-2 cursor-pointer text-left text-xs font-semibold uppercase tracking-wider"
                onClick={() => handleSort(column)}
              >
                {column.label}
                {sortConfig?.key === column.key
                  ? sortConfig.direction === "ascending"
                    ? " ▲"
                    : " ▼"
                  : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {paginatedData.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={String(column.key)} className="px-4 py-2 text-sm">
                  {String(item[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>
          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
          <select
            className="border rounded px-2"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            {[5, 10, 20, 50].map((size) => (
              <option key={size} value={size}>
                {size} per page
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
export default DynamicTable;
```

⚙️ **Example Usage:**

```tsx
interface Employee {
  id: number;
  name: string;
  role: string;
}

const employeeData: Employee[] = [
  { id: 1, name: "Alice", role: "Developer" },
  { id: 2, name: "Bob", role: "Designer" },
  { id: 3, name: "Charlie", role: "Product Manager" },
  // ... more data
];

const columns: Column<Employee>[] = [
  { key: "id", label: "ID", sortable: true },
  { key: "name", label: "Name", sortable: true },
  { key: "role", label: "Role", sortable: false },
];

<DynamicTable data={employeeData} columns={columns} initialPageSize={10} />;
```

## ✅ **Why This Solution Works:**

- **Reusable & Extensible**: Easily adaptable to various data types and use cases.
- **Clear Separation of Concerns**: Logic for sorting and pagination neatly encapsulated.
- **Performance Friendly**: Memoized sorting and pagination calculations enhance performance.
- **Developer-Friendly**: Type-safe, intuitive API promotes quick development and maintenance.

---

This implementation clearly demonstrates your ability to design scalable, maintainable, and robust frontend components suitable for a Principal Engineer role.
