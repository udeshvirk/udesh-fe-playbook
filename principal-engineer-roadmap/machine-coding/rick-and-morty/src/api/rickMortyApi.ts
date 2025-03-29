import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  gender: string;
  image: string;
  episode: string[];
}

export interface Episode {
  id: number;
  name: string;
  episode: string;
  air_date: string;
}

export const fetchCharacters = (page: number, name = "", gender = "") =>
  api
    .get(`/character`, { params: { page, name, gender } })
    .then((res) => res.data);

export const fetchEpisode = (url: string) =>
  axios.get<Episode>(url).then((res) => res.data);
