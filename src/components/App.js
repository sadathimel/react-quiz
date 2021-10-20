import "../styles/App.css";
import Layout from "./Layout";
import Login from "./page/Login";
import Quiz from "./page/Quiz";
import Result from "./page/Result";
import Home from "./page/Home";
import Signup from "./page/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/quiz" component={Quiz} />
            <Route exact path="/result" component={Result} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
