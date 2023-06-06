import axios from "axios";

async function fetchData() {
  try {
    const response = await axios.get("https://api.example.com/data");
    const data = response.data;
    // Lakukan sesuatu dengan data yang diambil
  } catch (error) {
    console.error(error);
  }
}

export default fetchData;
