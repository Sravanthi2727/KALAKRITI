
// FolkDances.jsx
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TypeAnimation } from 'react-type-animation';
import "./FolkDances.css";

const getEmbedUrl = (url) => {
  const youtubeRegex = /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(youtubeRegex);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  return url; // fallback if not matched
};

const folkDances = [
  {
    id: 1,
    title: "Bharatanatyam",
    description: "Classical dance from Tamil Nadu with precise footwork and expressions.",
    video: "/Dance_videos/bhartanatyam.mp4"
  },
  {
    id: 2,
    title: "Garba",
    description: "Energetic circular dance from Gujarat, traditionally performed during Navratri.",
    video: "/Dance_videos/garba.mp4"
  },
  {
    id: 3,
    title: "Kathak",
    description: "North Indian classical dance known for its storytelling and rhythmic spins.",
    video: "/Dance_videos/kathak.mp4"
  },
  {
    id: 4,
    title: "Bhangra",
    description: "Lively Punjabi folk dance with powerful movements and joyful beats.",
    video: "/Dance_videos/bhangra.mp4"
  },
  {
    id: 5,
    title: "Ghoomar",
    description: "Graceful Rajasthani dance performed by women in traditional attire.",
    video: "/Dance_videos/ghoomar.mp4"
  },
  {
    id: 6,
    title: "Odissi",
    description: "An elegant dance from Odisha marked by sculptural poses, lyrical movements, and spiritual themes rooted in temple rituals.",
    video: "/Dance_videos/odissi.mp4"
  },
  {
    id: 7,
    title: "Kuchipudi",
    description: "A dynamic classical dance from Andhra Pradesh blending rhythmic footwork, expressive storytelling, and dramatic character portrayal.",
    video: "/Dance_videos/kuchipudi.mp4"
  },
  {
    id: 8,
    title: "Kathakali",
    description: "A vibrant dance-theatre from Kerala, known for its elaborate makeup, dramatic facial expressions, and stylized hand gestures depicting epic tales.",
    video: "/Dance_videos/kathakali.mp4"
  },
  {
    id: 9,
    title: "Sattriya",
    description: "A graceful Assamese dance-drama tradition rooted in Vaishnavite monasteries, combining storytelling, devotion, and intricate footwork.",
    video: "/Dance_videos/sattriya.mp4"
  }
];

const danceTutorials = [
 {
    id: 1,
    title: "Kathak Steps by Anuradha - Drishti Dance",
    description: "Beginner Dance Workshop in Kathak Footwork",
    video: "https://youtu.be/I59Zr1z3FBA?si=G5T-BVHAU5lmbd4T"
  },
  {
    id: 2,
    title: "Easy Ghoomar steps by Devesh Mirchandani",
    description: "Basic steps of Ghoomar covered beautifully.",
    video: "https://youtube.com/shorts/zmnHq14VyXg?si=juk7wmCy1GLVyldq"
  },
  {
    id: 3,
    title: "Bharatnatyam Tutorial for beginners",
    description: "Basic postures for Bharatanatyam.",
    video: "https://youtube.com/shorts/TLNN8z68Zb4?si=XY3O13vwf3IrpIY9"
  },
  {
    id: 4,
    title: "Easy Ghoomar steps by Devesh Mirchandani",
    description: "Basic steps of Ghoomar covered beautifully.",
    video: "https://youtube.com/shorts/zmnHq14VyXg?si=9qdr70eT0Vtlf17m"
  },
  {
    id: 5,
    title: "Bhangra steps by Bedi Dhamaal",
    description: "Lear easy and energetic Bhangra steps.",
    video: "https://youtube.com/shorts/Z82ZRSaIi8k?si=qUI53HiJw_yF7xGC"
  },
  {
    id: 6,
    title: "Kathak steps by Guru Pali Chandra",
    description: "Movement and body postures in amad.",
    video: "https://youtu.be/YV_oS1uJz-s?si=5k-QvCpv_Om0D424"
  }
];

const glimpseImages = [
  "/Dance_images/ghoomar1.jpeg",
  "/Dance_images/bharatanatyam1.jpeg",
  "/Dance_images/kathak1.jpeg",
  "/Dance_images/bhangra1.jpeg",
  "https://indianetzone.wordpress.com/wp-content/uploads/2023/05/kathakali-dance-classical-dance-heritage-of-india.jpg",
  "https://www.india-a2z.com/images/dance1.jpg",
  "https://www.psyfans.net/wp-content/uploads/2021/05/bharatanatyam.jpg",
  "https://kohinoor-joy.com/wp-content/uploads/2017/09/Indian-Dance.jpg",
  "https://www.goldentriangletour.com/indiaAttraction/bardo-chham-arunachal-pradesh.jpg",
  "https://www.goldentriangletour.com/indiaAttraction/garba-in-gujarat.jpg",
  "https://www.culturalindia.net/iliimages/Folk-Dances-Of-North-India-ili-472-img-1.jpg"
];

const HoverVideo = ({ src, onClick }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
  };


  return (
    <video
      ref={videoRef}
      src={src}
      loop
      playsInline
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="folk-video"
    />
  );
};

export default function FolkDances() {
  const [modalVideo, setModalVideo] = useState(null);
  const [isYouTube, setIsYouTube] = useState(false);

  const handleVideoClick = (src) => {
    const isYT = src.includes("youtube.com") || src.includes("youtu.be");
    setIsYouTube(isYT);
    setModalVideo(src);
  };

  const closeModal = () => {
    setModalVideo(null);
    setIsYouTube(false);
  };

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);
        const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500, // change this to control delay (ms)
        pauseOnHover: true,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              centerMode: false
            }
          }
        ]
      };


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="folk-container">
        <div className="intro-text">
          <TypeAnimation
            sequence={[
              "Explore India's vibrant folk dances...",
              1500,
              "Join the cultural journey!",
              1500
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </div>

        <section className="folk-section">
          <h2 className="section-title">Folk Dances of India</h2>
          <div className="slider-box">
            <Slider {...sliderSettings}>
              {folkDances.map((dance) => (
                <div key={dance.id} className="folk-card">
                  <HoverVideo src={dance.video} onClick={() => handleVideoClick(dance.video)} />
                  <div className="folk-info">
                    <h4>{dance.title}</h4>
                    <p>{dance.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section className="tutorial-section">
          <h3 className="section-title">Dance Tutorials by Artists</h3>
          <div className="slider-box">
            <Slider {...sliderSettings}>
              {danceTutorials.map((tutorial) => (
                <div key={tutorial.id} className="tutorial-card">
                  <iframe
                    // src={tutorial.video.replace("watch?v=", "embed/")}
                    src={getEmbedUrl(tutorial.video)}
                    title={tutorial.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="tutorial-video"
                  />
                  <div className="tutorial-info">
                    <h5>{tutorial.title}</h5>
                    <p>{tutorial.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section className="glimpses-section">
          <h3 className="section-title">Glimpses of Indian Folk Dances</h3>
          <div className="slider-box">
            <Slider {...sliderSettings}>
              {glimpseImages.map((img, i) => (
                <div key={i} className="glimpse-card">
                  <img src={img} alt={`Glimpse ${i + 1}`} className="glimpse-img" />
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {modalVideo && (
          <div className="video-modal" onClick={closeModal}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
              {isYouTube ? (
                <iframe
                  src={modalVideo.replace("watch?v=", "embed/")}
                  title="YouTube video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="modal-video-element"
                />
              ) : (
                <video src={modalVideo} controls autoPlay className="modal-video-element" />
              )}
              <button className="close-modal" onClick={closeModal}>✖</button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}





