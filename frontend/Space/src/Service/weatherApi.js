import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/weather",
});

export const getLatestWeather = async () => {
  const response = await API.get("/latest");
  return response.data;
};

export const getSevereAlerts = async () => {
  const response = await API.get("/alerts/severe");
  return response.data;
};
