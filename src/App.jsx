import Header from "./Components/Header/Header"
import Navbar from "./Components/Navbar/Navbar"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Banner from "./Components/Banner/Banner"
import Carousel from "./Components/Carousel/Carousel";
import Tours from "./Components/Tours/Tours";
import Footer from "./Components/Footer/Footer";
import PopularTour from "./Components/PopularTour/PopularTour";
function App() {
  
  return (
   <>
    <Header/>
    <Navbar/>
    <Banner/>
    <Carousel/>
    <PopularTour/>
    <Tours/>
    <Footer/>
   </>
  )
}

export default App
