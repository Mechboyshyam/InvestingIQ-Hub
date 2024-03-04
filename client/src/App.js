import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="background">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
