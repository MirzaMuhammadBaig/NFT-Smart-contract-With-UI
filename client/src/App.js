import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./layout";
import { PrivacyPage, TermsServices, RefundPolicy } from "./modules";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms-service" element={<TermsServices />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
