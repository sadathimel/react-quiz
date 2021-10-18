import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Layout>
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route exact path = "/signup" component={Signup} />
          <Route exact path = "/login" component={Login} />
          <PrivateRoute exact path = "/quiz" component={Quiz} />
          <PrivateRoute exact path = "/result" component={Result} />
        </Switch>
      </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
