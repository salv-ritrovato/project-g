import axios from "axios";

const rawgClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWGAPI
  }
});

export default rawgClient;