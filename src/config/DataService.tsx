import axios from "axios";
// const API_ENDPOINT = "";

export const VITE_BASE_URL = "http://192.168.29.119:3059/api";

const DataService = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // baseURL: VITE_BASE_URL,
});

export { DataService };
