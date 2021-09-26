import "./App.css";
import { Register, Login, Todos } from "./components/pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/" component={Todos} />
      </Switch>
    </Router>
  );
}

export default App;
