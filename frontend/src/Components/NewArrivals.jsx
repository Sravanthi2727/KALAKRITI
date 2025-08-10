import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './NewArrivals.css';

const images = [
  '/Nagesh_Goud.webp',
  '/vivek_kumavat.webp',
  '/JAGANNATH_PAUL.webp',
  '/Nagesh_Goud.webp',
  '/vivek_kumavat.webp',
  '/JAGANNATH_PAUL.webp'
];

const NewArrivals = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
      <div className="video-wrapper">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/Dance_videos/handicrafts.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    <div className="new-arrivals-section">
      <h2 className="new-arrivals-heading">New Arrivals</h2>
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className="new-arrivals-card">
            <img src={img} alt={`New Arrival ${i}`} />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default NewArrivals;
