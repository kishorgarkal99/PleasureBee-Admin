import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth";
import Users from "./pages/Users";
import UserRegFlow from "./pages/UserRegFlow/RegFlow";
import SubscriptionPlans from "./pages/Sub plans/SubscriptionPlans";
import CustomPlan from "./pages/Sub plans/CustomPlan";
import Analytics from "./pages/Analytics";
import CreateScreen from "./pages/UserRegFlow/CreateScreen";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import SubUsers from "./pages/Sub plans/SubUsers";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/auth" element={<Auth />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/ui" element={<UserRegFlow />} />
          <Route path="/ui/create" element={<CreateScreen />} />
          <Route path="/plans" element={<SubscriptionPlans />} />
          <Route path="/plans/custom" element={<CustomPlan />} />
          <Route path="/plans/:id/users" element={<SubUsers />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App
