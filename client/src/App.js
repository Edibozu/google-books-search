import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    console.log("Make an API call");
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
