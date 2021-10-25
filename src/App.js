import { AppBar, Toolbar } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/score-board/Dashboard";
import Home from "./components/score-board/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar className="header-wrap">
          <Toolbar>
            <span
              style={{ fontFamily: "cursive" }}
              variant="h5"
              component="div"
            >
              Covid Tracker
            </span>
            <i class="fas fa-people-arrows"></i>
            <img
              width="50px" height="50px"
              style={{ padding: "7px" }}
              src="https://cdn-icons-png.flaticon.com/512/3165/3165328.png"
              alt="handball hd photo @transparentpng.com" />
          </Toolbar>
        </AppBar>

        <Router>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
