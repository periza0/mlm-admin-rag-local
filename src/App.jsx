import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import Coaching from "./pages/Coaching";
import Membership from "./pages/Membership";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Protect from "./components/protect";
import Chatbot from "./components/Chatbot";
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#94A5C8]">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/admin" element={<Protect><Admin /></Protect>}/>
 </Routes>
      <Chatbot />
      </div>
    </BrowserRouter>
  );
}
