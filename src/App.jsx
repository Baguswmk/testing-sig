import urlParse from "./routes/ulr-parse";
import { getAllData } from "./global/fetch-api";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    getAllData();
  }, []);
  return urlParse();
}

export default App;
