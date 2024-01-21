import { BrowserRouter } from "react-router-dom";

import { About, Working, Benifits, Hero, Navbar, Cards, StarsCanvas } from "./components";
import Android from "./components/Android";
import Footer from "./components/Footer";
import VideoCarousel from "./components/VideoCarousel";
import Contact from "./components/Contact";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='relative z-0 bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <div>
        
        <VideoCarousel/>
        </div>
       
       
        <Cards />
        <Working />
        <Benifits />
        <div className='relative z-0'>
         
          <StarsCanvas />
        </div>
        <Android/>
        <Contact/>
        <Footer/>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
