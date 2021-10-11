import "../styles/App.css";
import Layout from "./Layout";
import Login from "./Login";
import Home from "./pages/Home";
import Signup from "./Signup";

function App() {
  return (
    <Layout>
      {/* <Home></Home>
      <Signup /> */}
      <Login />

    </Layout>
  );
}

export default App;
