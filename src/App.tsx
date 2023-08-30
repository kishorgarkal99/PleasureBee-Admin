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
      features: [
        'Free Unlimited swipe',
        '1 new nearby talk is initiated everyday',
        '1 super like per day',
        'Daily one boost for 15 min',
        'Buy and sel NFT',
        'Send NFT as gift',
        '2 minute audio/video call with any one user every day',
        'One AI match in a week'
      ],
    },
    {
      name: 'Pro',
      features: [
        'Swipe unlimited time on international profiles',
        'Unlimited chat initiallisation',
        'Daily SuperLike',
        'Daily 3 boost with 15 min',
        'Change location',
        'Profile custom privacy',
        'Audio/video call for 15 min per day',
        'Buy and sell NFT',
        'Send NFT as gift',
        '5 AI match in a week'
      ],
    },
    {
      name: 'Premium',
      features: [
        'Multi Language support in conversation', 
        'Unlimited Audio/video call', 
        'Unlimited AI match'],
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
