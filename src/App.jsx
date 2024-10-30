import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import BookNow from "./Pages/Book Now/BookNow";

function App() {
  
  return (
   <>
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booknow" element={<BookNow />} />
      </Routes>
      <Footer/>
    </Router>
   </>
  )
}

export default App
