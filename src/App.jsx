import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CTASection from "./components/CTASection/CTASection";

import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
<main className="rv3Main">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Keep your existing routes here */}
        </Routes>
      </main>

      <Footer/>
      
    </>
  );
}

export default App;