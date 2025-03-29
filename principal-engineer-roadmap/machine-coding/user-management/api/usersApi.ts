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
