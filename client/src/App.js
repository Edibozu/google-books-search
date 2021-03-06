import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar"
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

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
          <Route path="/search" component={Search}/>
          <Route path="/" component={Saved}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
