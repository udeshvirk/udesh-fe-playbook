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
