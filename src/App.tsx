import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Auth from "./pages/Auth";
import Users from "./pages/Users";
import UserRegFlow from "./pages/UserRegFlow";
import SubscriptionPlans from "./pages/SubscriptionPlans";

function App() {

  const plans = [
    {
      name: 'Freemium',
      features: ['Free Unlimited swipe', '1 super like per day', '2 minute audio/video call'],
    },
    {
      name: 'Pro',
      features: ['Swipe unlimited time on international profiles', 'Daily SuperLike', 'Audio/video call for 15 min per day'],
    },
    {
      name: 'Premium',
      features: ['Multi Language support in conversation', 'Unlimited Audio/video call', 'Send NFT as gift'],
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={
          <Layout>
            <Auth />
          </Layout>
        } />
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reg_flow" element={<UserRegFlow />} />
        <Route path="/plans" element={<SubscriptionPlans plans={plans} />} />
      </Routes>
    </Router>
  )
}

export default App
