// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Views/Home/Home";
// import About from "./Views/About/About";
// import Blogs from "./Views/Information/Introduction.js";
import Navbar from "./Component/Navbar/Navbar";
// import Contact from "./Views/Contact/Contact.js";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="background">
      <Navbar />
      <Outlet />
      {/* <Home/> */}
      {/* <BrowserRouter> */}
        {/* <Routes> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/blogs" element={<Blogs />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
