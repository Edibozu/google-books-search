import { useEffect } from "react";
import Navbar from "./components/Navbar"
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      <Router>
        <Navbar />
        
        <Switch>
          <Route/>
          <Route/>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
