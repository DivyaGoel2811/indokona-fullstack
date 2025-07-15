import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🌐 Landing Page Components
import Hero from "./components/Hero";
import Services from "./components/Services";
import EducationReferral from "./components/EducationReferral";
import BrandingKit from "./components/BrandingKit";
import MasterDistributorCTA from "./components/MasterDistributorCTA";
import Contact from "./components/Contact";

// 🔐 Pages
import Login from "./pages/Login";
import DistributorDashboard from "./pages/DistributorDashboard";
import RetailerDashboard from "./pages/RetailerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

// 📚 CRM + Services
import EducationCRM from "./pages/EducationCRM";
import AdmissionForm from "./components/AdmissionForm";
import RetailerReport from "./pages/RetailerReport";
import Receipt from "./components/Receipt";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <EducationReferral />
              <BrandingKit />
              <MasterDistributorCTA />
              <Contact />
            </>
          }
        />

        {/* 🔐 Login */}
        <Route path="/login" element={<Login />} />

        {/* 👑 Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <>
              <AdminDashboard />
              <Services />
            </>
          }
        />

        {/* 📦 Distributor Dashboard */}
        <Route
          path="/distributor"
          element={
            <>
              <DistributorDashboard />
              <Services />
            </>
          }
        />

        {/* 🧑‍💼 Retailer Dashboard with Services */}
        <Route
          path="/retailer"
          element={
            <>
              <RetailerDashboard />
              <Services />
            </>
          }
        />

        {/* 🎓 Education Referral System */}
        <Route path="/retailer/education" element={<EducationCRM />} />
        <Route path="/retailer/admission" element={<AdmissionForm />} />
        <Route path="/retailer/report" element={<RetailerReport />} />
        <Route path="/retailer/receipt/:id" element={<Receipt />} />
      </Routes>
    </Router>
  );
}

export default App;
