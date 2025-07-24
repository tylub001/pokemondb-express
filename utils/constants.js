const BACKEND_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.pokefinal.jumpingcrab.com"
    : "http://localhost:3002";

export default BACKEND_BASE_URL;
