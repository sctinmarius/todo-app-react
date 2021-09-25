import "./App.css";
import { Register, Login } from "./components/pages";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/signIn">
          <Login />
        </Route>
        <Route path="/">
          <div>homeee</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
