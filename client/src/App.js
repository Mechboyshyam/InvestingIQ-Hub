import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Blogs from "./Views/Information/Introduction.js";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Contact from "./Views/Contact/Contact.js";

function App() {
  return (
    <div className="background">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
