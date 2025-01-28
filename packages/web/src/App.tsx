import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SingUp from "./pages/SingUp/SingUp";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import "./App.css";

const routes = (
  <Router>
    <Layout>
      <Routes>
        <Route path="/sing-up" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  </Router>
);

function App() {
  return <div>{routes}</div>;
}

export default App;
