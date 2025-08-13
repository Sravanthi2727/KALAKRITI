import React, { useState, useEffect, useContext } from "react";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import "./TraditionalPaintings.css";
import { AppContent } from "../context/AppContext";

const paintings = [
  {
    id: 1,
    name: "Madhubani Painting",
    description:
      "A traditional art form from Bihar, known for its intricate patterns and vibrant colors.",
    image: "/images/madhubani.jpg",
    price: 1200,
  },
  {
    id: 2,
    name: "Warli Art",
    description:
      "Tribal art from Maharashtra using simple geometric shapes to depict daily life.",
    image: "/images/warli.jpeg",
    price: 1200,
  },
  {
    id: 3,
    name: "Pattachitra",
    description:
      "A classical painting style from Odisha, known for intricate details and mythological themes.",
    image: "/images/pattachitra.jpg",
    price: 1200,
  },
  {
    id: 4,
    name: "Miniature Painting",
    description:
      "Delicate and colorful paintings from Rajasthan and Mughal traditions.",
    image: "/images/miniature.jpeg",
    price: 1200,
  },
  {
    id: 5,
    name: "Kalamkari Painting",
    image: "/images/kalamkari.jpeg",
    description:
      "A hand-painted or block-printed style from Andhra Pradesh known for mythological narratives.",
    price: 1100,
  },
  {
    id: 6,
    name: "Phad Painting",
    image: "/images/phad.jpeg",
    description:
      "A religious scroll painting from Rajasthan portraying folk deities like Pabuji and Devnarayan.",
    price: 1300,
  },
  {
    id: 7,
    name: "Tanjore Painting",
    image: "/images/tanjore.jpeg",
    description:
      "A classical South Indian art form using gold foil and stones to depict Hindu gods in rich detail.",
    price: 2200,
  },
  {
    id: 8,
    name: "Cheriyal Scroll Painting",
    image: "/images/cheriyal.jpeg",
    description:
      "A storytelling scroll painting tradition from Telangana with vivid colors and local tales.",
    price: 1000,
  },
  {
    id: 9,
    name: "Bhil Art",
    image: "/images/bhil.jpeg",
    description:
      "Created by the Bhil tribe using dots and symbols to represent nature, animals, and tribal life.",
    price: 950,
  },
  {
    id: 10,
    name: "Gond Art",
    image: "/images/gond.jpeg",
    description:
      "A vibrant tribal art from Madhya Pradesh illustrating flora, fauna, and folktales with fine lines.",
    price: 1150,
  },
];

export default function TraditionalPaintings() {
  const { addToCart, cartItems } = useCart();
  const { addToWishlist, removeFromWishlist, wishlistItems } = useWishlist();
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [clickedId, setClickedId] = useState(null);
  const [sortOption, setSortOption] = useState("");

  const { userData, backendUrl } = useContext(AppContent);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 2000);
  };

  const handleAddToCart = (art) => {
    const alreadyInCart = cartItems.some((item) => item.id === art.id);
    if (alreadyInCart) {
      handleToast("⚠ Already in cart!", "warning");
    } else {
      addToCart(art);
      handleToast("✅ Added to cart!", "success");
    }
  };

  const toggleWishlist = (art) => {
    setClickedId(art.id);
    setTimeout(() => setClickedId(null), 400);
    const alreadyInWishlist = wishlistItems.some((item) => item.id === art.id);
    if (alreadyInWishlist) {
      removeFromWishlist(art.id);
      handleToast("❌ Removed from wishlist", "warning");
    } else {
      addToWishlist(art);
      handleToast("✅ Added to wishlist!", "success");
    }
  };

  const handleWishlistClick = (art) => {
    if (userData.isAccountVerified) {
      toggleWishlist(art);
    } else {
      alert("Please verify your Email to add items to wishlist.");
    }
  };

  const sortedPaintings = [...paintings];
  if (sortOption === "price-asc")
    sortedPaintings.sort((a, b) => a.price - b.price);
  if (sortOption === "price-desc")
    sortedPaintings.sort((a, b) => b.price - a.price);

  const handleCartClick = (art) => {
    if (userData.isAccountVerified) {
      console.log(userData._id);
      handleAddToCart(art);
    } else {
      alert("Please verify your Email to add items in cart.");
    }
  };

  return (
    <motion.div
      className="paintings-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {toast.show && (
        <div className={`global-toast ${toast.type}`}>{toast.message}</div>
      )}

      <div className="header-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Traditional Indian Paintings
        </motion.h2>
        <select
          className="sort-dropdown"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div className="paintings-grid">
        {sortedPaintings.map((art) => {
          const isWishlisted = wishlistItems.some((item) => item.id === art.id);
          return (
            <div key={art.id} className="painting-card" data-aos="fade-up">
              <LazyLoadImage
                src={art.image}
                alt={art.name}
                className="painting-image"
                effect="blur"
              />
              <h4>{art.name}</h4>
              <p>{art.description}</p>
              <p>
                <strong>₹{art.price}</strong>
              </p>
              <p className="tags">
                <span className="tag tribal">Tribal</span>
              </p>
              <div className="actions">
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleCartClick(art)}
                >
                  Add to Cart
                </button>

                <FontAwesomeIcon
                  icon={isWishlisted ? solidHeart : regularHeart}
                  onClick={() => handleWishlistClick(art)}
                  className={`wishlist-icon ${
                    clickedId === art.id ? "clicked" : ""
                  }`}
                  style={{ color: isWishlisted ? "red" : "#555" }}
                  title={
                    isWishlisted ? "Remove from wishlist" : "Add to wishlist"
                  }
                  aria-label={
                    isWishlisted ? "Remove from wishlist" : "Add to wishlist"
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
