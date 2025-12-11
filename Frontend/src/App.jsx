import React from 'react'
import './App.css'
import Konyvek from './Konyvek.jsx'
import Navbar from './Navbar.jsx'
import UjKonyv from './UjKonyv.jsx'
import KonyvTorles from './KonyvTorles.jsx'
import Home from './Home.jsx'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import './index.css'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/konyvek" element={<Konyvek />} />
        <Route path="/ujkonyv" element={<UjKonyv />} />
        <Route path="/konyvtorles/:id" element={<KonyvTorles />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
