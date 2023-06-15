import urlParse from "./routes/url-parse";
import { getAllData } from "./global/fetch-api";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    getAllData();
  }, []);
  return urlParse();
}

export default App;
