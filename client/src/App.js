import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Blogs from './Views/Information/Introduction.js';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Wish from './Component/wish/Wish.js';

function App() {
  const text = "Welcome to our learning platform...😍";
  return (
   <div className='background'>
    <Navbar/>
    <Wish text={text} />
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
