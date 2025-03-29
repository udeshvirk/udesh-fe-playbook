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
