import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Home from "./Home";
import Tourist01 from "./Tourist_01";
import Tourist02 from "./Tourist02";
import Tourist03 from "./assets/Tourist03";
import Carousel from "./assets/Carousel";
import About from "./About";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Header from "./Header";

import ChatBot from "./components/ChatBot";

import TourismGrowthPage from "./components/TourismGrowthPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

     
        <Route path="/" element={<Home />} />

       
        <Route path="/About" element={<About />} />


        <Route path="/Contacts" element={<Contacts />} />

      
        <Route
          path="/tourism-growth"
          element={<TourismGrowthPage />}
        />

       
        <Route
          path="/tourist"
          element={
            <>
              <Header />

              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop={true}
                speed={1200}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className="min-h-screen"
              >
                <SwiperSlide>
                  <Tourist01 />
                </SwiperSlide>

                <SwiperSlide>
                  <Tourist02 />
                </SwiperSlide>

                <SwiperSlide>
                  <Tourist03 />
                </SwiperSlide>
              </Swiper>

              <Carousel />

              <Footer />

              <ChatBot />

             
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;