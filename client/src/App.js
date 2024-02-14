import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Views/Home/Home';
import About from './Views/About/About';

function App() {
  return (
   <BrowserRouter>
      <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/about" element={< About />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
