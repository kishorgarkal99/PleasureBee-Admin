import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Auth from "./pages/Auth";

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
      </Routes>
    </Router>
  )
}

export default App
