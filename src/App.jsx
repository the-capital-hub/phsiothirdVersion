
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Team from "./pages/Team/Team";

import Resources from "./pages/Resources/Resources";
import ResourceDetails from "./pages/Resources/ResourceDetails";
import Contact from "./pages/Contact/Contact";
import Appointment from "./pages/Appointment/Appointment";
import Blog from "./pages/Blog/Blog";
import Auth from "./pages/Auth/Auth";
import AIFloatingButton from "./components/AIFloatingButton/AIFloatingButton";
import WhatsAppFloatingButton from "./components/WhatsAppButton/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Navbar />

      <main className="rv3Main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />

          <Route path="/resources" element={<Resources />} />
          <Route
            path="/resources/:slug"
            element={<ResourceDetails />}
            
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route
  path="/appointment"
  element={<Appointment />}
/>
<Route path="/login" element={<Auth />} />
<Route path="/register" element={<Auth />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTop/>
      <AIFloatingButton/>
      <WhatsAppFloatingButton/>
    </>
  );
}

export default App;
