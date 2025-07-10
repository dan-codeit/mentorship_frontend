

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import LandingPage from "./pages/LandingPage";
import MenteeDashboard from "./pages/MenteeDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import LoginForm from "./pages/LoginForm";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RequestPassword from "./pages/RequestPassword";
import PasswordResetSent from "./pages/PasswordResetSent";
import AVailableMentorsLists from "./pages/AvailableMentorsList"
import ProtectedRoute from "./auth/protectedRoute";
import Unauthorized from "./pages/Unathorized";



function App() {
  return (
    <Router>
      <div className="flex flex-col bg-gray-800 min-h-screen">
        <Navbar />
        <main className="flex-grow  mt-10 min-h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/password-reset" element={<RequestPassword />} />
            <Route
              path="/password-reset-sent"
              element={<PasswordResetSent />}
            />

            {/* ///Mentor routes  */}
            <Route element={<ProtectedRoute allowedRoles={["mentor"]} />}>
              <Route path="/mentor-dashboard" element={<MentorDashboard />} />
            </Route>

            {/* ///Mentee routes */}
            <Route element={<ProtectedRoute allowedRoles={["mentee"]} />}>
              <Route path="/mentee-dashboard" element={<MenteeDashboard />} />
              <Route path="/mentor-lists" element={<AVailableMentorsLists />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
