import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Blogs from './Views/Information/Page1';
import './App.css';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
   <div className='background'>
    <Navbar/>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/about" element={< About />} />
      <Route path="/blogs" element={< Blogs />} />
      </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
