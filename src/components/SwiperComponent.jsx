import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperComponent = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--swiper-progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const movieSlides = [
  {
    bg: '/images/bg-1.jpg',
    title: 'AI-Powered Movie Discovery',
    desc: 'Our smart recommendation engine analyzes your preferences to suggest films you\'ll love. Rate movies to refine suggestions and uncover hidden gems.'
  },
  {
    bg: '/images/bg-2.jpg',
    title: 'Comprehensive Movie Database',
    desc: 'Access detailed information about every film - cast, crew, trivia, and behind-the-scenes facts. Perfect for movie enthusiasts and trivia buffs.'
  },
  {
    bg: '/images/bg-3.jpg',
    title: 'Personal Watchlist',
    desc: 'Save movies to watch later and receive notifications when they become available. Organize by genre, mood, or your custom categories.'
  },
  {
    bg: '/images/bg-4.jpg',
    title: 'Social Features',
    desc: 'Share reviews, create movie clubs, and see what friends are watching. Our spoiler-free discussion system keeps conversations fresh.'
  },
  {
    bg: '/images/bg-5.jpg',
    title: 'Cross-Platform Sync',
    desc: 'Pick up where you left off on any device. Your watch history, preferences, and lists stay in sync across all platforms.'
  }
];

  return (
    <div className="relative w-full h-[60vh] xs:h-[65vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] rounded-lg">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full rounded-lg border-y-4 border-gray-700"
      >
        {movieSlides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative"
            style={{ backgroundImage: `url('${slide.bg}')` }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center p-6 py-14 bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-7xl font-bold mb-2 text-white">
                {slide.title}
              </h2>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl max-w-3xl text-white/90">
                {slide.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute bottom-4 right-4 z-10 flex items-center justify-center w-10 h-10">
          <svg viewBox="0 0 48 48" ref={progressCircle} className="absolute">
            <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeWidth="3" 
                    strokeDasharray="125.6" strokeDashoffset="calc(125.6 * (1 - var(--swiper-progress)))"
                    transform="rotate(-90 24 24)"/>
          </svg>
          <span ref={progressContent} className="text-xs text-white"></span>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;