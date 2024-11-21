import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../App.css";

const SwiperComponent = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--swiper-progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="relative w-full h-[75vh] sm:h-[80vh] flex items-center justify-center">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full custom-swiper"
      >
        <SwiperSlide
          className="custom-swiper-slide"
          style={{ backgroundImage: `url('/images/bg-1.jpg')` }}
        >
          <div className="custom-slide-content">
            <h2 className="custom-slide-title">Exclusive Subscription Plans</h2>
            <p className="custom-slide-description">
              Unlock all the latest movies and shows with Cinema GPT's premium
              subscription plans. Start your free trial today!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="custom-swiper-slide"
          style={{ backgroundImage: `url('/images/bg-2.jpg')` }}
        >
          <div className="custom-slide-content">
            <h2 className="custom-slide-title">Latest Movie Releases</h2>
            <p className="custom-slide-description">
              From thrilling action to heartwarming dramas, explore the latest
              releases on Cinema GPT. Watch anytime, anywhere!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="custom-swiper-slide"
          style={{ backgroundImage: `url('/images/bg-3.jpg')` }}
        >
          <div className="custom-slide-content">
            <h2 className="custom-slide-title">Action-Packed Adventures</h2>
            <p className="custom-slide-description">
              Immerse yourself in action-packed adventures with Cinema GPT's
              curated selection of blockbuster movies and hidden gems.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="custom-swiper-slide"
          style={{ backgroundImage: `url('/images/bg-4.jpg')` }}
        >
          <div className="custom-slide-content">
            <h2 className="custom-slide-title">Cinematic Classics</h2>
            <p className="custom-slide-description">
              Relive the golden era of cinema with timeless classics available for
              streaming on Cinema GPT. A must-see collection.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="custom-swiper-slide"
          style={{ backgroundImage: `url('/images/bg-5.jpg')` }}
        >
          <div className="custom-slide-content">
            <h2 className="custom-slide-title">Watch Anytime, Anywhere</h2>
            <p className="custom-slide-description">
              With Cinema GPT, enjoy your favorite movies on any device, whenever
              you want. Cinema at your fingertips.
            </p>
          </div>
        </SwiperSlide>

        <div className="absolute bottom-4 right-4 custom-autoplay-progress">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}>3s</span>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
