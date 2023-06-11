import axios from "axios";
import config from "./config";

const baseUrl = config.baseUrl;

const getAllData = async () => {
  try {
    const response = await axios.get(baseUrl);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getDataById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getAllData, getDataById };
