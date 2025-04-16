import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import HumanHealth from './Pages/HumanHealth/HumanHealth';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import SplashScreen from './Components/SplashScreen/SplashScreen';
import ProductCategories from './Components/ProductCategories/ProductCategories';
import Faq from './Components/FAQ/Faq';
import AboutGengross from './Components/About-Gengross/AboutGengross';
import ProductGallery from './Components/ProductGallery/ProductGallery';

function App() {
  const [active, setActive] = useState('home');
  const [showContact, setShowContact] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSplashFinish = () => {
    setLoading(false);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <BrowserRouter>
      {loading ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <>
          <Navigation active={active} setActive={setActive} />
          <Routes>
            <Route
              path="/"
              element={<Home setShowContact={setShowContact} showContact={showContact} />}
            />
            <Route path="/Human" element={<HumanHealth />} />
            <Route path="/About" element={<About active={active} setActive={setActive} />} />
            <Route path="/Product" element={<><ProductCategories  onCategoryChange={handleCategoryChange} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} /><ProductGallery setShowContact={setShowContact} showContact={showContact} selectedCategory={selectedCategory} /></>} />
            <Route path='/FAQ' element={<Faq/>}/>
            <Route path='/AboutGengross' element={<AboutGengross/>} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
