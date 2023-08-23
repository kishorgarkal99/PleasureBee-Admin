import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Auth from "./pages/Auth";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          <Layout>
            <Auth />
          </Layout>
        } />
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  )
}

export default App
