// src/Components/Handicrafts.jsx
import React, { useState, useContext } from "react";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import "./Handicrafts.css"; // Optional: for custom styles
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import NewArrivals from "./NewArrivals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"; // filled heart
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"; // empty heart
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TypeAnimation } from "react-type-animation";
import { AppContent } from "../context/AppContext";

const handicrafts = [
  {
    id: 1,
    name: "Kashmiri Shawls",
    image:
      "https://kashmkari.com/cdn/shop/collections/1_80227bb3-636c-40a1-92a0-f109cca701b6_2400x.jpg?v=1707903345",
    price: 3000,
    region: "Kashmir",
    description:
      "Known for their fine embroidery and luxurious fabrics, Kashmiri shawls are highly prized.",
  },
  {
    id: 2,
    name: "Madhubani Paintings",
    image: "https://www.madhubani-art.in/wp-content/uploads/2025/05/1.png",
    price: 1500,
    region: "Bihar",
    description:
      "A traditional art form that originated in the Mithila region of Bihar.",
  },
  {
    id: 3,
    name: "Banarasi Silk Sarees",
    image:
      "https://lajreedesigner.com/cdn/shop/products/Policona-Mandakinisilk-DarkPink_2_900x1350_crop_center@2x.jpg?v=1745498281",
    price: 3550,
    region: "Banaras",
    description:
      "Banarasi silk sarees are highly regarded for their intricate designs, luxurious silk fabric, and traditional weaving techniques.",
  },
  {
    id: 4,
    name: "Jaipur Blue Pottery",
    image:
      "https://media.assettype.com/knocksense%2Fimport%2F22616227%2Forigin.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
    price: 4000,
    region: "Jaipur",
    description:
      "Blue and White Pottery is highly valued for its beauty, craftsmanship, and uniqueness.",
  },
  {
    id: 5,
    name: "Chikankari Embroidery",
    image:
      "https://designmango.in/upload/blog_images/History-Of-Chikankari-designmango-1686993414_History%20of%20Chikhan-designamngo.in.png",
    price: 2000,
    region: "Lucknow",
    description:
      "Is a delicate and intricate form of white thread work that originated in Lucknow.",
  },
  {
    id: 6,
    name: "Pattachitra Paintings",
    image:
      "https://www.craftsodisha.com/wp-content/uploads/2020/01/p00838-105852Ap00838-105810-yagya-narayan-pattachitra-tasar-painting.jpg",
    price: 5500,
    region: "Odisha",
    description:
      "Pattachitra paintings are intricate and vibrant artworks created on cloth or palm leaves",
  },
  {
    id: 7,
    name: "Wood Carvings",
    image: "https://www.rudhigat.com/pub/media/wysiwyg/3.jpg",
    price: 4000,
    region: "Saharanpur",
    description: "Intricately carved wood art perfect for home decor.",
  },
  {
    id: 8,
    name: "Dhokra Metal Craft",
    image:
      "https://www.caratlane.com/blog/wp-content/uploads/2022/08/dhokra-craft-GB10_l.jpg",
    price: 4500,
    region: "Central and Eastern India",
    description:
      "It is known for its unique and rustic appearance, characterized by its intricate patterns and primitive charm.",
  },
  {
    id: 9,
    name: "Kutch Embroidery",
    image:
      "https://www.kutchculture.com/media/catalog/product/cache/03f2feb9ac7754399838b26d1ce57ace/8/1/8135emcs1004012_2_.jpg",
    price: 3000,
    region: "Kutch, Gujarat",
    description: "A beautiful art perfect for your home decor.",
  },
  {
    id: 10,
    name: "Terracotta Pottery",
    image:
      "https://www.terracottabysachii.com/cdn/shop/files/Sustainable_Kolkata_Terracotta_Pottery_Teaset_for_4_1.jpg?v=1723954984",
    price: 1000,
    region: "West Bengal",
    description:
      "It has a long history and is found in cultures around the world.",
  },
  {
    id: 11,
    name: "Bidriware",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu07QXoxXPWAb0HMNLBBriqsk2IsJDm-niHw&s",
    price: 2000,
    region: "Karnataka",
    description: "Perfect showpiece for your home",
  },
  {
    id: 12,
    name: "Marble Handicrafts",
    image:
      "https://images.woodenstreet.de/image/cache/data/Rudhigat/marble-handcrafted-box/2-810x702.jpg",
    price: 2000,
    region: "Rajasthan",
    description: "Handcrafted marble box.",
  },
  {
    id: 13,
    name: "Carpet Weaving",
    image: "https://tajresh.com/wp-content/uploads/2023/06/2150359.jpg",
    price: 2999,
    region: "Sikkim",
    description: "Handwoven Carpets for your home.",
  },
  {
    id: 14,
    name: "Bamboo and Cane Handicrafts",
    image:
      "https://cultureandheritage.org/wp-content/uploads/2021/05/image.jpeg",
    price: 1550,
    region: "Mizoraml",
    description: "A perfect handwoven basket for anything you want to store.",
  },
  {
    id: 15,
    name: "Bandhani Sarees",
    image:
      "https://cdn.shopify.com/s/files/1/1950/2653/files/kutch-bandhani-dress-materialbandhej-dress-810x456_large.jpg?v=1530343238",
    price: 2000,
    region: "Gujarat",
    description: "Beautiful sarees available in all colours.",
  },
];

const images = [
  "https://indianfolkart.org/wp-content/uploads/2022/04/02-yehaindia-aff88775fd3f.jpg",
  "https://www.indiabusinesstrade.in/wp-content/uploads/2023/04/Untitled-design-29.jpg",
  "https://cdn.cdnparenting.com/articles/2019/05/18105348/394081159-H.jpg",
  "https://indianfolkart.org/wp-content/uploads/2022/04/02-yehaindia-aff88775fd3f.jpg",
  "https://www.indiabusinesstrade.in/wp-content/uploads/2023/04/Untitled-design-29.jpg",
  "https://cdn.cdnparenting.com/articles/2019/05/18105348/394081159-H.jpg",
];

export default function Handicrafts() {
  const { addToCart, cartItems } = useCart();
  const { addToWishlist, removeFromWishlist, wishlistItems } = useWishlist();

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const { userData, backendUrl } = useContext(AppContent);

  const handleToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 2000);
  };

  const handleAddToCart = (item) => {
    const alreadyInCart = cartItems.some((cartItem) => cartItem.id === item.id);
    if (alreadyInCart) {
      handleToast("⚠️ Already in cart!", "warning");
    } else {
      addToCart(item);
      handleToast("✅ Added to cart!", "success");
    }
  };

  const handleCartClick = (art) => {
    if (userData) {
      handleAddToCart(art);
    } else {
      alert("Please login to add items to your cart.");
    }
  };

  const toggleWishlist = (art) => {
    const alreadyInWishlist = wishlistItems.some((item) => item.id === art.id);
    if (alreadyInWishlist) {
      removeFromWishlist(art.id);
      handleToast("❌ Removed from wishlist", "warning");
    } else {
      addToWishlist(art);
      handleToast("✅ Added to wishlist!", "success");
    }
  };

  const handleWishClick = (art) => {
    if (userData) {
      console.log(userData._id);
      toggleWishlist(art);
    } else {
      alert("Please login to add items to your Wishlist.");
    }
  };

  // const NewArrivals = () => {
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
        },
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="handicrafts-page">
        {toast.show && (
          <div className={`global-toast ${toast.type}`}>{toast.message}</div>
        )}

        <div className="video-wrapper1">
          <div className="new-arrivals-section1">
            <div className="intro-text">
              <TypeAnimation
                sequence={[
                  "Celebrate heritage,celebrate Handmade...",
                  1500,
                  "Explore India's rich legacy!",
                  1500,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </div>
            {/* <h2 className="new-arrivals-heading1">New Arrivals</h2> */}
            <Slider {...settings}>
              {images.map((img, i) => (
                <div key={i} className="new-arrivals-card1">
                  <img src={img} alt={`New Arrival ${i}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* </div> */}
        <h2 className="section-title">Indian Handicrafts</h2>
        <div className="handicrafts-grid">
          {handicrafts.map((item) => {
            const isWishlisted = wishlistItems.some((a) => a.id === item.id);
            return (
              <div key={item.id} className="handicraft-card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="handicraft-image"
                />
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>
                  <strong>₹{item.price}</strong>
                </p>

                <div className="actions">
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleCartClick(item)}
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>

                  <FontAwesomeIcon
                    icon={isWishlisted ? solidHeart : regularHeart}
                    onClick={() => handleWishClick(item)}
                    className="wishlist-icon"
                    style={{
                      cursor: "pointer",
                      fontSize: "1.5rem",
                      color: isWishlisted ? "red" : "#555",
                    }}
                    title={
                      isWishlisted ? "Remove from wishlist" : "Add to wishlist"
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
