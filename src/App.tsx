import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Auth from "./pages/Auth/Auth";
import Users from "./pages/Users";
import UserRegFlow from "./pages/UserRegFlow/RegFlow";
import SubscriptionPlans from "./pages/Sub plans/SubscriptionPlans";
import CustomPlan from "./pages/Sub plans/CustomPlan";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/auth"
          element={
            <Layout>
              <Auth />
            </Layout>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reg_flow" element={<UserRegFlow />} />
        <Route path="/plans" element={<SubscriptionPlans />} />
        <Route path="/plans_custom" element={<CustomPlan />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App
