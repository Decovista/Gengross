import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import HumanHealth from './Pages/HumanHealth/HumanHealth';
import About from './Components/About/About';
import Products from './Components/Products/Products';

function App() {
  const [active, setActive] = useState('home');
  const [showContact, setShowContact] = useState(false);

  return (
    <BrowserRouter>
      <Navigation active={active} setActive={setActive} />
      <Routes>
        <Route
          path="*"
          element={<Home setShowContact={setShowContact} showContact={showContact} />}
        />
        <Route path="/Human" element={<HumanHealth />} />
        <Route path="/About" element={<About active={active} setActive={setActive} />} />
        <Route
          path="/Product"
          element={<Products setShowContact={setShowContact} showContact={showContact} />}
          />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
