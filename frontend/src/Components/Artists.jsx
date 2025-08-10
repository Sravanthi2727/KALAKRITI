import React, { useEffect, useState, useContext } from "react";
import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext";
import { motion } from "framer-motion";
import "./TraditionalPaintings.css";
import "./Artists.css";
import { AppContent } from "../context/AppContext";

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const { addToCart, cartItems } = useCart();
  const { addToWishlist, wishlistItems } = useWishlist();

  useEffect(() => {
    fetch("https://kalakriti-6ov2.onrender.com/api/artist")
      .then((res) => res.json())
      .then((data) => setArtists(data))
      .catch((err) => console.error("❌ Fetch error:", err));
  }, []);

  const handleToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 2000);
  };

  const handleAddToCart = (art) => {
    const alreadyInCart = cartItems.some((item) => item.id === art.id);
    if (alreadyInCart) {
      handleToast("⚠️ Already in cart!", "warning");
    } else {
      addToCart(art);
      handleToast("✅ Added to cart!", "success");
    }
  };

  const handleAddToWishlist = (art) => {
    const alreadyInWishlist = wishlistItems.some((item) => item.id === art.id);
    if (!userData) alert("Please login to add your items in wishlist");
    if (alreadyInWishlist) {
      handleToast("⚠️ Already in wishlist!", "warning");
    } else {
      addToWishlist(art);
      handleToast("✅ Added to wishlist!", "success");
    }
  };

  const handleArtistClick = (artist) => {
    setSelectedArtist(artist);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { userData, backendUrl } = useContext(AppContent);

  const handleCartClick = (art) => {
    if (userData) {
      console.log(userData._id);
      handleAddToCart(art);
    } else {
      alert("Please login to add items to your cart.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="artists-container">
        {toast.show && (
          <div className={`global-toast ${toast.type}`}>{toast.message}</div>
        )}

        <h2 className="text-center mt-4 section-heading">Featured Artists</h2>

        {!selectedArtist ? (
          <div className="featured-artists-masonry">
            {artists.map((artist, idx) => (
              <div
                key={idx}
                className="featured-artist-card"
                onClick={() => handleArtistClick(artist)}
                title="Click to know more"
              >
                <img
                  src={artist.image?.url}
                  alt={artist.title}
                  className="featured-artist-img bordered hover-zoom"
                />
                <h4 className="artist-name">{artist.title}</h4>
              </div>
            ))}
          </div>
        ) : (
          <>
            {selectedArtist && (
              <button
                className="back-button sticky-back"
                onClick={() => setSelectedArtist(null)}
              >
                ⬅️ Back to Artists
              </button>
            )}

            <div className="artist-section">
              <div className="main-artist-card centered-artist">
                <img
                  src={selectedArtist.image?.url}
                  alt={selectedArtist.title}
                  className="main-artist-img bordered"
                />
                <div className="main-artist-info">
                  <h3>{selectedArtist.title}</h3>
                  <p>{selectedArtist.description}</p>
                </div>
              </div>

              <div className="artworks-section-header">
                Some Arts by {selectedArtist.title}
              </div>

              <div className="artworks-grid">
                {selectedArtist.images?.map((img, i) => {
                  const art = {
                    id: `${selectedArtist.title}-${i}`,
                    image: img,
                    name: selectedArtist.images_description[i],
                    price: selectedArtist.price[i],
                  };

                  return (
                    <div className="artwork-card" key={i}>
                      <img
                        src={img}
                        alt={art.name}
                        className="hover-zoom bordered"
                      />
                      <div className="artwork-info">
                        <h6>{art.name}</h6>
                        <p>₹{Number(art.price).toLocaleString("en-IN")}</p>
                        <div className="artwork-actions">
                          <button
                            className="add-to-cart-btn"
                            onClick={() => handleCartClick(art)}
                          >
                            🛒 Add to Cart
                          </button>
                          <button
                            className="wishlist-btn"
                            onClick={() => handleAddToWishlist(art)}
                          >
                            ❤️ Wishlist
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Artists;
