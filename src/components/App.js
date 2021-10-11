import "../styles/App.css";
import Layout from "./Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <Layout>
      {/* <Home></Home>
      <Signup />
      <Login /> */}
      <Quiz />

    </Layout>
  );
}

export default App;
