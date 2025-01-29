import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import "./App.css";

const routes = (
  <Router>
    <Layout>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
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
