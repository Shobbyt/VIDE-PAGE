import { Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";

import Signin from "../Pages/auth/Signin";
import Signup from "../Pages/auth/Signup";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsAndConditions from "../Pages/TermsAndConditions";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/signin" element={<Signin />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/privacy" element={<PrivacyPolicy />} />

      <Route path="/terms" element={<TermsAndConditions />} />


      

    </Routes>
  );
};
