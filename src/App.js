import "./App.css";
import { Register, Login, Todos } from "./components/pages";

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
          <Todos />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
