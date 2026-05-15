import axios from "axios";

const API = axios.create({
  baseURL: "https://space-weather-monitoring-system-2.onrender.com/api/weather",
});

export const getLatestWeather = async () => {
  const response = await API.get("/latest");
  return response.data;
};

export const getSevereAlerts = async () => {
  const response = await API.get("/alerts/severe");
  return response.data;
};
