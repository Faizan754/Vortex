import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "de7be1e3ec0743e183118fe5945d1d6a",
  },
});
