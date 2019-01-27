import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 85dbae96f150507f11cd1c1a86d7d5d4086d0bedfcc45578ab01af48c70e87ff"
  }
});
