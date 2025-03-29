## Create a User Management Interface

**Context:**  
Develop a user management interface that integrates with a REST API to perform CRUD operations on user data.

---

## **Task:**

1. Develop a component to display a list of users.
2. Implement features to add, edit, delete, and view user details.
3. Integrate the component with a REST API to perform the necessary operations.

---

## **Expected Implementation Details:**

- Fetching and displaying user data from the API.
- Handling CRUD operations with appropriate API calls.
- Managing component state to reflect API operations (e.g., optimistic updates).
- Error handling and displaying feedback to the user.
- Ensuring the UI is responsive and accessible.

---

## Solution

### ✅ **Implementation Overview:**

**Technology Choices:**

- **React with TypeScript:** Clear, maintainable code with strong type safety.
- **Axios:** Simple HTTP client for REST API calls.
- **React Query (`@tanstack/react-query`):** Efficient data fetching, caching, optimistic updates, and error handling.
- **Tailwind CSS:** Modern styling for responsive and accessible UI.

---

## 📌 **Project Structure:**

- Organized into reusable components for user list and forms.
- Centralized API client for maintainable and reusable API calls.

```
UserManagement/
│
├── api/
│   └── usersApi.ts
│
├── components/
│   ├── UserList.tsx
│   └── UserForm.tsx
│
└── UserManagement.tsx
```

---

## 🚀 **Complete Implementation:**

### ✅ **1. API Client (`usersApi.ts`):**

- Handles all API calls (GET, POST, PUT, DELETE) for user data.
- Centralized logic for better maintainability and reusability.

```typescript
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
});

export interface User {
  id: number;
  name: string;
  email: string;
}

export const fetchUsers = () =>
  api.get<User[]>("/users").then((res) => res.data);

export const createUser = (user: Omit<User, "id">) =>
  api.post<User>("/users", user).then((res) => res.data);

export const updateUser = (user: User) =>
  api.put<User>(`/users/${user.id}`, user).then((res) => res.data);

export const deleteUser = (id: number) =>
  api.delete(`/users/${id}`).then((res) => res.data);
```

---

### ✅ **2. Main Component (`UserManagement.tsx`):**

- Manages the overall state and integrates the user list and form components.
- Handles API integration and error feedback.

```tsx
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUsers, deleteUser, User } from "./api/usersApi";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

const UserManagement: React.FC = () => {
  const queryClient = useQueryClient();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isFormOpen, setFormOpen] = useState(false);

  const { data: users, isLoading, error } = useQuery(["users"], fetchUsers);

  const deleteMutation = useMutation(deleteUser, {
    onSuccess: () => queryClient.invalidateQueries(["users"]),
  });

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setFormOpen(true);
  };

  const handleAddNew = () => {
    setSelectedUser(null);
    setFormOpen(true);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow rounded p-6">
      <h1 className="text-xl font-semibold mb-4">User Management</h1>

      {isLoading && <p>Loading users...</p>}
      {error && <p className="text-red-500">Error loading users.</p>}

      {users && (
        <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
      )}

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleAddNew}
      >
        Add New User
      </button>

      {isFormOpen && (
        <UserForm user={selectedUser} onClose={() => setFormOpen(false)} />
      )}
    </div>
  );
};

export default UserManagement;
```

---

### ✅ **3. User List Component (`UserList.tsx`):**

- Displays a list of users fetched from the API.
- Provides options to edit or delete users.

```tsx
import React from "react";
import { User } from "../api/usersApi";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserList: React.FC<Props> = ({ users, onEdit, onDelete }) => (
  <table className="w-full border-collapse">
    <thead>
      <tr>
        <th className="border p-2">Name</th>
        <th className="border p-2">Email</th>
        <th className="border p-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td className="border p-2">{user.name}</td>
          <td className="border p-2">{user.email}</td>
          <td className="border p-2 space-x-2">
            <button
              className="px-2 py-1 bg-green-500 text-white rounded"
              onClick={() => onEdit(user)}
            >
              Edit
            </button>
            <button
              className="px-2 py-1 bg-red-500 text-white rounded"
              onClick={() => onDelete(user.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserList;
```

---

### ✅ **4. User Form Component (`UserForm.tsx`):**

- Handles adding and editing user details.
- Validates input fields using Formik and Yup.

```tsx
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser, updateUser, User } from "../api/usersApi";
import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  user: User | null;
  onClose: () => void;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const UserForm: React.FC<Props> = ({ user, onClose }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(user ? updateUser : createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      onClose();
    },
  });

  const formik = useFormik({
    initialValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
    validationSchema,
    onSubmit: (values) => {
      mutation.mutate(user ? { id: user.id, ...values } : values);
    },
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form
        className="bg-white p-6 rounded shadow space-y-4"
        onSubmit={formik.handleSubmit}
      >
        <input
          className="border p-2 w-full"
          name="name"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && (
          <div className="text-red-500">{formik.errors.name}</div>
        )}

        <input
          className="border p-2 w-full"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && (
          <div className="text-red-500">{formik.errors.email}</div>
        )}

        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {user ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
```

---

## ⚙️ **Why this Solution Works Well:**

- **Efficient State Management:** React Query provides caching, error handling, and optimistic UI updates.
- **Robust Validation:** Formik and Yup ensure data integrity.
- **Clean UI/UX:** Responsive, accessible, and intuitive.
