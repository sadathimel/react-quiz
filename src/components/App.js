import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./Signup";

function App() {
  return (
    <Layout>
      <Home></Home>
      <Signup />
    </Layout>
  );
}

export default App;
