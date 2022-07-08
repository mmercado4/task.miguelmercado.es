const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3001"
    : "https://api.miguelmercado.es";

module.exports = {
  API_URL: API_URL,
};
