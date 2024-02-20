import axios from "axios";

const BASE_URL = "https://randomuser.me/api/?results=15";

const api = axios.create({
  baseURL: "https://randomuser.me/api",
});

export const getRandomUsers = async () => {
  const { data } = await api.get("/?results=15");
  return data;
};

export const getUsersByGender = async (gender) => {
  const { data } = await api.get(`/?gender=${gender}&results=15`);
  return data;
};
