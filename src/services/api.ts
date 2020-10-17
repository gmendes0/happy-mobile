import axios from "axios";

const api = axios.create({ baseURL: "http://192.168.42.219:3333" });

export { api };
