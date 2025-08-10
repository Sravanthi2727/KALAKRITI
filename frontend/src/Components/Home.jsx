

/*----------------------------------------******************/
import React, { useEffect, useState } from 'react';
import './Home.css'; // We'll need to create this CSS file

// Features Slideshow Component
const FeaturesSlideshow = () => {
  const [currentFeatureSlide, setCurrentFeatureSlide] = useState(0);

  const featureImages = [
    {
      url: "https://shop.gaatha.com/image/catalog/1-Category%20images/blog/madhubani-painting.jpg",
      title: "Traditional Paintings",
      subtitle: "Madhubani & Folk Art"
    },
    {
      url: "https://live.staticflickr.com/692/23646454362_25aafccd56_b.jpg",
      title: "Artist Community",
      subtitle: "Connect with Artists"
    },
    {
      url: "https://rollthedice.in/cdn/shop/articles/DALL_E_2024-07-19_21.43.35_-_A_vibrant_cartoon_illustration_of_children_playing_traditional_Indian_board_games_such_as_Chowka_Bara_Navakankari_Aadu_Huli_and_Pagade_in_a_village.webp?v=1721405648",
      title: "Cultural Games",
      subtitle: "Interactive Learning"
    },
    {
      url: "https://images.jdmagicbox.com/quickquotes/listicle/listicle_1686140315148_74ycs_1040x500.jpg",
      title: "Art Events",
      subtitle: "Workshops & Exhibitions"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureSlide((prev) => (prev + 1) % featureImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const nextFeatureSlide = () => {
    setCurrentFeatureSlide((prev) => (prev + 1) % featureImages.length);
  };

  const prevFeatureSlide = () => {
    setCurrentFeatureSlide((prev) => (prev - 1 + featureImages.length) % featureImages.length);
  };

  return (
    <div className="features-slideshow">
      {featureImages.map((image, index) => (
        <div
          key={index}
          className={`feature-slide ${index === currentFeatureSlide ? 'active' : ''}`}
        >
          <img 
            src={image.url} 
            alt={image.title}
            className="feature-slide-image"
          />
          <div className="feature-slide-overlay"></div>
          <div className="feature-slide-content">
            <h3>{image.title}</h3>
            <p>{image.subtitle}</p>
          </div>
        </div>
      ))}
      
      <button onClick={prevFeatureSlide} className="slideshow-btn slideshow-btn-prev">
        &#8249;
      </button>
      <button onClick={nextFeatureSlide} className="slideshow-btn slideshow-btn-next">
        &#8250;
      </button>

      <div className="slideshow-indicators">
        {featureImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentFeatureSlide(index)}
            className={`indicator ${index === currentFeatureSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};


const NewArrivals = () => {
  const newArrivalItems = [
    { id: 1, title: "Kalamkari Painting", image: "https://www.singhanias.in/cdn/shop/articles/b84f85940548d5e2e91afed747321022.jpg?v=1692365051" },
    { id: 2, title: "Warli Art", image: "https://merideewar.com/cdn/shop/articles/cd13e1a8c071a11a7cc844f1b6df2cb1xl.jpg?v=1639113433" },
    { id: 3, title: "Tanjore Krishna", image: "https://greenhouseblr.com/cdn/shop/products/IMG_9735_1445x.jpg?v=1649871681" },
    { id: 4, title: "Kalamkari Tree of Life", image: "https://www.memeraki.com/cdn/shop/files/Tree-of-Life-Kalamkari-painting-by-Harinath841_800x.jpg?v=1725000790" },
    { id: 5, title: "Pattachitra Ganesha", image: "https://img.artpal.com/41476/125-20-7-15-1-19-29m.jpg" },
    { id: 6, title: "Pichwai Cow Painting", image: "https://www.shutterstock.com/image-illustration/pichwai-wallpaper-lobby-temple-walls-600nw-2579244709.jpg" },
    { id: 7, title: "Gond Art Peacock", image: "https://images.bestofbharat.com/2022/08/A-49-48.jpg" },
    { id: 8, title: "Miniature Portrait", image: "https://artnindia.com/cdn/shop/products/img070_957b6eba-f1c0-4a21-8da0-28955a2cec31_1200x1200.jpg?v=1577932322" }
  ];


  return (
    <div className="new-arrivals">
      <div className="new-arrivals-header">
        <h2>New Arrivals</h2>
        <button className="view-all-btn">
          View All <span className="arrow">→</span>
        </button>
      </div>
      
    
      <div className="new-arrivals-container">
        <div className="new-arrivals-scroll">
          {newArrivalItems.map((item) => (
            <div key={item.id} className="arrival-card">
              <div className="arrival-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="arrival-content">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="scroll-fade scroll-fade-left"></div>
        <div className="scroll-fade scroll-fade-right"></div>
      </div>

    </div>
  );
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: "/Nagesh_Goud.webp",
      title: "Madhubani Art",
      description: "Intricate patterns from Bihar",
    },
    {
      url: "/JAGANNATH_PAUL.webp",
      title: "Warli Paintings",
      description: "Ancient tribal expressions",
    },
    {
      url: "/vivek_kumavat.webp",
      title: "Kalamkari Textiles",
      description: "Hand-painted cotton masterpieces",
    },
  ];

  const features = [
    {
      icon: "",
      title: "Traditional Paintings",
      description: "Explore our vast collection of authentic Indian paintings including Madhubani, Warli, Tanjore, and Pichwai art forms.",
      color: "orange-red"
    },
    {
      icon: "",
      title: "Artists Page",
      description: "Meet talented artists from across India. Discover their stories, techniques, and browse their exclusive collections.",
      color: "orange-red"
    },
    {
      icon: "",
      title: "Cultural Games",
      description: "Engage with Indian culture through interactive games and puzzles based on traditional art forms and mythology.",
      color: "orange-red"
    },
    {
      icon: "",
      title: "Upload Your Art",
      description: "Share your own traditional artwork with our community. Get feedback and connect with fellow art enthusiasts.",
      color: "orange-red"
    },
    {
      icon: "",
      title: "Cultural Events",
      description: "Stay updated with art exhibitions, workshops, festivals, and cultural events happening across the country.",
      color: "orange-red"
    },
    {
      icon: "",
      title: "Wishlist & Cart",
      description: "Save your favorite artworks and make secure purchases. Build your personal collection of traditional art pieces.",
      color: "orange-red"
    }
  ];

  // Auto carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="home-container">
      <div className="container1">
        {/* Background Carousel Section */}
        <div className="hero-carousel-section">
          {carouselImages.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.url})` }}
            />
          ))}

          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Welcome Section */}
        <div className="content">
          <p>
            "Art speaks where words are unable to explain." <br />
            Discover timeless traditional arts — where every stroke tells a story.
            Step into a world where stories are painted by hand, and culture lives through every brushstroke, thread, and chisel.<br/> Traditional arts are more than just decoration—they're a living heritage passed down through generations,<br/> reflecting the soul of a community and its values.<br/><br/>

            From intricate textile weaving and pottery to vibrant folk paintings and wood carvings, each piece is a unique<br/> expression of identity, history, and craftsmanship. Whether inspired by tribal motifs or classical elegance,<br/> traditional arts bring authenticity, warmth, and timeless beauty into modern spaces.
          </p>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <div className="features-container">
            <div className="features-header">
              <h2>Explore Kalakriti</h2>
              <p>Discover the rich world of Indian traditional arts through our comprehensive platform</p>
              <div className="header-divider"></div>
            </div>

            <div className="features-grid">
              {/* Slideshow Column */}
              <div className="features-slideshow-container">
                <FeaturesSlideshow />
              </div>

              {/* Information Column */}
              <div className="features-info">
                {features.map((feature, index) => (
                  <div key={index} className={`feature-card ${feature.color}`}>
                    <div className="feature-card-content">
                      <div className="feature-icon">
                        {feature.icon}
                      </div>
                      <div className="feature-text">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <NewArrivals />
      </div>
    </div>
  );
}