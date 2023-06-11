import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home/home";
import Contact from "./contact/contact";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about/us" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}
